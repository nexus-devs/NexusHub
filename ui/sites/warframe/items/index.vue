<template>
  <div>
    <sidebar>
      <sidebar-search/>
    </sidebar>
    <app-content>
      <subnav/>
      <ui-header/>
      <header>
        <div class="container">
          <div class="item-profile">
            <div class="item-profile-img">
              <img :src="item.imgUrl" :alt="item.name" draggable="false">
              <img :src="item.imgUrl" :alt="item.name" draggable="false" class="item-profile-img-blur">
              <div class="item-profile-img-shade"/>
            </div>
            <div class="item-profile-data">
              <div class="item-profile-data-info">
                <h1>{{ item.name }}</h1>
                <span v-for="tag in item.tags" :key="tag">{{ tag }}</span>
              </div>
              <div class="item-profile-data-lower">
                <div v-if="item.abilities" class="item-profile-data-abilities item-data-wrapper">
                  <div v-for="ability in item.abilities" :key="ability.name" class="item-data">
                    <img :src="ability.imgUrl" :alt="ability.name" class="ico-h-20">
                  </div>
                </div>
                <div class="item-profile-data-price item-data-wrapper">
                  <div class="item-data">
                    <img src="/img/warframe/ui/platinum.svg" alt="Platinum" class="ico-h-16">
                    <span class="item-data-price">{{ price }}p</span>
                  </div>
                </div>
                <div v-if="component.ducats" class="item-profile-data-ducats item-data-wrapper">
                  <div class="item-data">
                    <img src="/img/warframe/ui/ducats.svg" alt="Ducats per Platinum" class="ico-h-16">
                    <span>{{ component.ducats }} Ducats</span>
                    <span class="ducats">{{ (component.ducats / price).toFixed(2) }}</span>
                    <span>Ducats/Plat</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section class="container">
        <!-- placeholder -->
      </section>
    </app-content>
  </div>
</template>



<script>
import appContent from 'src/app-content.vue'
import sidebar from 'src/components/ui/sidebar/sidebar.vue'
import sidebarSearch from 'src/components/ui/sidebar/search.vue'
import subnav from 'src/components/items/subnav.vue'
import pricesnippet from 'src/components/snippets/item-price.vue'
import header from 'src/components/ui/header.vue'

export default {
  components: {
    'app-content': appContent,
    sidebar,
    'sidebar-search': sidebarSearch,
    subnav,
    pricesnippet,
    'ui-header': header
  },

  computed: {
    item () {
      return this.$store.state.items.item
    },
    component () {
      const item = this.$store.state.items.item
      const selected = this.$store.state.items.selected.component
      const component = item.components.find(c => c.name === selected)
      return component
    },
    price () {
      return (this.component.selling.median + this.component.buying.median) / 2
    }
  },

  beforeCreate () {
    this.$store.commit('showSidebar')
    this.$store.commit('keepSidebarVisible', true)
  },

  beforeMount () {
    // this.subscribe() // requires on-route change destructor
  },

  beforeDestroy () {
    this.$store.commit('hideSidebar')
    this.$store.commit('keepSidebarVisible', false)
    this.unsubscribe()
  },

  asyncData ({ store, route }) {
    store.dispatch('applyTimeQuery', route)
    store.commit('setItemRegions', route.query.region || [])
    return store.dispatch('fetchItemData', route.params.item.replace(/(?:(\-)(?!\1))+/g, ' ').replace(/- /g, '-'))
  },

  methods: {
    async subscribe () {
      const itemUrl = `/warframe/v1/items/${this.$store.state.items.item.name}/statistics`
      this.$cubic.subscribe(itemUrl, data => {
        this.$store.commit('setItem', data)
      })
    },
    async unsubscribe () {
      const itemUrl = `/warframe/v1/items/${this.$store.state.items.item.name}/statistics`
      this.$cubic.unsubscribe(itemUrl)
    }
  },

  storeModule: {
    name: 'items',
    state: {
      item: { name: '' },
      selected: {
        component: 'Set',
        offerType: 'combined',
        regions: []
      }
    },
    mutations: {
      setItem (state, item) {
        item.tags = []
        item.tags.push(item.category)
        item.tags.push(item.name.includes(' Prime') ? 'Prime' : item.type)
        state.item = item
      },
      setItemComponent (state, component) {
        state.selected.component = component
      },
      setItemOfferType (state, type) {
        state.selected.offerType = type.toLowerCase()
      },
      setItemRegions (state, regions) {
        state.selected.regions = regions
      }
    },
    actions: {
      async fetchItemData ({ commit, rootState }, name) {
        commit('setItem', await this.$cubic.get(`/warframe/v1/items/${name}`))
        commit('setItemComponent', 'Set')
      }
    }
  }
}
</script>



<style lang="scss" scoped>
@import '~src/styles/partials/importer';

header {
  padding: 0;
  box-shadow: none;
}
.item-profile {
  position: relative;
  top: -80px;
  display: flex;
}
.item-profile-img {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  height: 140px;
  width: 140px;
  background: $color-bg;
  margin-right: 25px;
  @include shadow-1;

  img {
    position: relative;
    z-index: 1;
    max-height: 70%;
    border-radius: 128px;
  }
  .item-profile-img-blur {
    position: absolute;
    z-index: 0;
    top: 0;
    left: 0;
    max-height: 80%;
    filter: blur(60px);
  }
  .item-profile-img-shade {
    position: absolute;
    z-index: 2;
    height: 70%;
    width: 100%;
    bottom: 0;
    left: 0;
    @include gradient-background(transparent, $color-bg);
  }
}
.item-profile-data {
  .item-profile-data-info {
    h1 {
      margin-top: 5px;
    }
    span {
      display: inline-block;
      margin-top: -5px;
      color: white;
    }
    span:after {
      content: ' /\00a0'
    }
    span:last-of-type:after {
      content: ''
    }
  }
  .item-profile-data-lower {
    display: flex;
    margin-top: 22px;
  }
  .item-data {
    display: inline-block;
    padding: 8px;
    background: $color-bg;
    margin-right: 6px;

    span {
      color: white;
      font-size: 0.85em;
      padding-right: 8px;
      border-right: 1px solid $color-subtle;
    }
    // Every span after first
    span:nth-of-type(1) ~ span {
      padding-left: 5px;
    }
    span:last-of-type {
      border-right: none;
    }
  }
  .item-data-wrapper {
    margin-right: 15px;
  }
  .item-profile-data-price, .item-profile-data-ducats {
    img {
      padding: 3.5px;
    }
  }
  .ducats {
    color: #EEBE62 !important;
    border-right: none !important;
    padding-right: 0 !important;
  }
  .ducats ~ span {
    padding-left: 0 !important;
    color: $color-font-body;
  }
}
</style>
