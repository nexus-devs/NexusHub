<template>
  <div>
    <navigation />
    <item-header />
    <app-content>
      <section>
        <div class="container">
          <!-- Filters -->
          <div class="filter">
            <div class="type">
              <span :class="{ active: type === 'reagentFor' }" class="btn-subtle" @click="setType('reagentFor')">
                Reagent for <span class="btn-counter">{{ crafting.reagentFor ? crafting.reagentFor.length : 0 }}</span>
              </span>
              <span :class="{ active: type === 'createdBy' }" class="btn-subtle" @click="setType('createdBy')">
                Created by <span class="btn-counter">{{ crafting.createdBy ? crafting.createdBy.length : 0 }}</span>
              </span>
            </div>
            <div class="filter-tags">
              <div class="filter-tag-row">
                <!-- Filters -->
                <div v-for="filter in filters" :key="filter.name" :class="{ active: filter.name === selectedFilter }" class="btn-tag component col interactive" @click="selectFilter(filter.name)">
                  <div class="image-wrapper">
                    <img v-if="filter.icon" :src="filter.icon" :alt="filter.name" class="ico-12">
                  </div>
                  <div class="data">
                    <span>{{ filter.name }}</span>
                    <!--<span class="btn-counter">0</span>-->
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- All Orders-->
          <div class="row labels">
            <div class="col item">
              Item
            </div>
            <div class="col amount">
              Amount
            </div>
            <div class="col quantity">
              Market Value
            </div>
            <div class="col price">
              Profit
            </div>
            <div class="col whitespace" />
          </div>
          <transition-group>
            <div v-for="(entry, i) in craftingFiltered[type]" :key="entry.itemId + '-' + i">
              <crafting-entry :crafting="entry" :cid="entry.itemId + '-' + i" />
            </div>
          </transition-group>
          <ad name="wow-classic-item-crafting-main" />
        </div>
      </section>
    </app-content>
  </div>
</template>



<script>
import ad from 'src/components/ads/nitroAds.vue'
import appContent from 'src/app-content.vue'
import craftingEntry from 'src/components/wow-classic/crafting-entry.vue'
import itemHeader from 'src/components/wow-classic/header.vue'
import meta from 'src/components/seo/meta.js'
import navigation from 'src/components/ui/nav/wow-classic.vue'
import storeModule from 'src/store/wow-classic/crafting.js'
import utility from 'src/components/wow-classic/utility.js'

export default {
  components: {
    ad,
    appContent,
    craftingEntry,
    navigation,
    itemHeader
  },

  async asyncData ({ store, route }) {
    const item = route.params.item
    const slug = route.params.slug

    // Only fetch item data if we actually have a new item or new server
    if ((store.state.crafting.itemId !== parseInt(item) && store.state.crafting.uniqueName !== item) || store.state.crafting.slug !== slug) {
      const craftingData = await this.$cubic.get(`/wow-classic/v1/crafting/${slug}/${item}`)
      store.commit('setCrafting', craftingData)
    }
    if (!store.state.crafting.professions.length) {
      const professionData = await this.$cubic.get(`/wow-classic/v1/crafting/professions`)
      store.commit('setProfessions', professionData)
    }
  },

  computed: {
    item () {
      return this.$store.state.items.item
    },
    professions () {
      return this.$store.state.crafting.professions
    },
    crafting () {
      // Populate createdBy with item details
      const createdBy = this.$store.state.crafting.createdBy
      for (const entry of createdBy) {
        entry.itemId = this.item.itemId
        entry.name = this.item.name
        entry.icon = this.item.icon
        entry.marketValue = this.item.stats.current ? this.item.stats.current.marketValue : null
      }

      return {
        createdBy,
        reagentFor: this.$store.state.crafting.reagentFor
      }
    },
    craftingFiltered () {
      let { createdBy, reagentFor } = this.crafting

      // Apply filter
      if (this.selectedFilter !== '') {
        createdBy = createdBy.filter((o) => o.category === this.selectedFilter)
        reagentFor = reagentFor.filter((o) => o.category === this.selectedFilter)
      }

      return { createdBy, reagentFor }
    },
    type () {
      return this.$store.state.crafting.type
    },
    selectedFilter () {
      return this.$store.state.crafting.filter
    },
    filters () {
      const filters = []
      const entries = this.crafting[this.type]
      for (const entry of entries) {
        if (filters.find((o) => o.name === entry.category)) continue

        const profession = this.professions.find((p) => p.name === entry.category)
        if (profession) filters.push(profession)
      }
      return filters
    }
  },

  methods: {
    setType (type) {
      if (type !== this.type) this.$store.commit('setOrderType', type)
    },
    selectFilter (filter) {
      if (filter !== this.selectedFilter) this.$store.commit('setFilter', filter)
      else this.$store.commit('setFilter', '')
    }
  },

  head () {
    const server = this.$store.state.servers.server
    const serverlist = this.$store.state.servers.EU.concat(this.$store.state.servers.US)

    const serverSplit = server.split('-')
    const faction = serverSplit.pop()
    const serverIndex = serverlist.map((x) => utility.serverSlug(x)).indexOf(serverSplit.join('-'))
    const serverPretty = `${serverlist[serverIndex]} (${faction.charAt(0).toUpperCase() + faction.slice(1)})`

    return {
      title: `${this.item.name} Crafting on ${serverPretty} · NexusHub`,
      meta: meta({
        title: `${this.item.name} Crafting on NexusHub`,
        description: `${this.item.name} Crafting reagents and recipes on the World of Warcaft Classic Auction House for ${serverPretty}`,
        image: `${this.item.imgUrl}`
      })
    }
  },

  storeModule
}
</script>



<style lang="scss" scoped>
@import '~src/styles/partials/wow-classic/importer';

/deep/ {
  .zoom-enter-active, .fade-leave-active {
    @include ease(0.4s);
  }
  .zoom-enter, .zoom-leave-to {
    transform: translateY(7px);
    transform-origin: top;
    opacity: 0.75;
  }
}

.app-content {
  background: $color-bg-darker;
}

.row-margin {
  justify-content: flex-start;
}

.column {
  position: relative;
  display: flex;
  flex-direction: column;
  flex-grow: 0;
  min-width: 400px;

  & > *:first-of-type {
    margin-bottom: 20px;
  }
  @media (max-width: $breakpoint-s) {
    min-width: 0;
  }
}

.btn-subtle {
  margin-top: 20px;
}

.labels {
  @include uppercase;
  color: $color-font-subtle;
  font-size: 0.8em;
  padding: 10px 20px;
  border-radius: 2px;
  background: $color-bg-darker;

  .interactive {
    padding: 0;
    background: transparent;

    &:before {
      background: transparent;
    }
  }
  .item {
    margin-right: 95px;
    min-width: 30%;
    @media (max-width: $breakpoint-s) {
      margin-right: 45px;
      min-width: 0;
    }
  }
  .price {
    position: relative;
    left: 10px;
  }
  .amount {
    @media (max-width: $breakpoint-s) {
      display: none;
    }
  }
  .whitespace {
    @media (max-width: $breakpoint-s) {
      display: none;
    }
  }
}

.type {
  padding-bottom: 15px;
  margin-bottom: 20px;
  width: 100%;
  border-bottom: 1px solid $color-subtle-dark;

  & > span {
    display: inline-flex;
    align-items: center;

    &:first-of-type {
      margin-right: 5px;
    }
    &:nth-of-type(2) {
      margin-right: 20px;
    }
  }
}

.filter {
  position: relative;
  display: flex;
  align-content: center;
  flex-wrap: wrap;
  padding-top: 20px;
  margin-bottom: 20px;

  .filter-tags {
    display: flex;
    align-items: center;

    .filter-tags-row {
      display: inline-block;
      margin-right: 20px;
      padding-right: 20px;
    }
  }

  .component {
    padding: 0 16px 0 8px;
  }

  .image-wrapper {
    display: inline-flex;
    vertical-align: middle;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    height: 29px;
    margin-right: 5px;

    img {
      border-radius: 10px;
      margin-right: 0 !important; // Reset .active from .btn-tag
    }
  }
  .data {
    display: inline-block;
  }
}
</style>
