<template>
  <div class="deal-group">
    <div class="filter">
      <div class="filter-tags">
        <div class="filter-tag-row">
          <div v-for="filter in filters" :key="filter.name" :class="{ active: filter.active }" class="btn-tag">
            <img v-if="filter.icon" :src="filter.icon" :alt="filter.name" class="ico-12">
            <span>{{ filter.name }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="deal-container">
      <transition-group ref="deals" class="deal-list">
        <div v-for="deal in deals" :key="deal.itemId" class="deal">
          <router-link :to="`/wow-classic/items/${server}/${deal.itemId}`" class="row interactive">
            <img :src="deal.icon" class="deal-img-blur" :alt="deal.name">
            <div class="deal-title col-b">
              <div class="deal-img">
                <img :src="deal.icon" :class="{ mod: deal.icon.includes('jpeg') }" :alt="deal.name">
              </div>
              <span>{{ deal.name }}</span>
            </div>
            <div class="deal-data row">
              <div class="deal-data-value">
                <img src="/img/warframe/ui/platinum.svg" alt="Gold" class="ico-12">
                <span>{{ parsePrice(deal.dealDiff) }}</span>
              </div>
              <div class="deal-data-value">
                <span :class="{ negative: deal.dealPercentage < 0 }" class="price-diff">
                  <indicator :diff="deal.dealPercentage" /> {{ +Math.abs(deal.dealPercentage * 100).toFixed(2) }}%
                </span>
              </div>
              <div class="deal-data-value whitespace" />
            </div>
          </router-link>
        </div>
      </transition-group>
    </div>
    <div class="deal-status">
      <img src="/img/ui/status-loading-wow-classic.svg" class="ico-h-24" alt="loading">
      <p>Loading deals...</p>
    </div>
  </div>
</template>

<script>
import indicator from 'src/components/charts/indicator.vue'
import utility from 'src/components/wow-classic/utility.js'

export default {
  components: {
    indicator
  },

  data () {
    return {
      fetchingDeals: false
    }
  },

  computed: {
    deals () {
      return this.$store.state.wowclassic.deals
    },
    filters () {
      return this.$store.state.wowclassic.filters
    },
    server () {
      return this.$store.state.servers.server
    },
    serverPretty () {
      const serverlist = this.$store.state.servers.EU.concat(this.$store.state.servers.US)
      const serverSplit = this.server.split('-')
      const faction = serverSplit.pop()
      const serverIndex = serverlist.map((x) => utility.serverSlug(x)).indexOf(serverSplit.join('-'))
      return `${serverlist[serverIndex]} (${faction.charAt(0).toUpperCase() + faction.slice(1)})`
    }
  },

  created () {
    this.parsePrice = utility.parsePrice
  },

  mounted () {
    window.addEventListener('scroll', this.updateOnScroll)
  },

  beforeDestroy () {
    window.removeEventListener('scroll', this.updateOnScroll)
  },

  methods: {
    async updateOnScroll () {
      const lastDeal = this.$refs.deals.$children[this.$refs.deals.$children.length - 1].$el
      const lastDealPosition = lastDeal.getBoundingClientRect().top + window.pageYOffset // Absolute position
      const viewportHeight = window.innerHeight

      // Scrolled to last element
      if (window.scrollY >= lastDealPosition - viewportHeight && !this.fetchingDeals) {
        this.fetchingDeals = true
        await this.$store.dispatch('addDeals', this.server)
        this.fetchingDeals = false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~src/styles/partials/wow-classic/importer';

.deal-container {
  margin-top: 30px;
  position: relative; // for position: absolute item list views
  overflow: hidden;
  @include ease-out(0.35s); // When results block gets resized
}
.deal {
  @include ease(0.5s);

  .row {
    justify-content: space-between;
  }
  .deal-title {
    position: relative;
    display: flex;
    align-items: center;
  }
  .deal-img-blur {
    position: absolute;
    left:0;
    height: 400%;
    opacity: 0.4;
    z-index: 0;
    filter: blur(80px);
  }
  .deal-img {
    position: relative;
    display: flex;
    align-items: center;
    overflow: hidden;
    height: 38px;
    width: 38px;
    border-radius: 2px;
    margin-right: 20px;

    img {
      width: 100%;
    }
    img.mod {
      border-radius: 4px;
    }
  }
  .deal-data {
    position: relative;
    flex-wrap: wrap;
    align-items: center;
    width: 70%;
  }
  .deal-data-value {
    flex: 1;
    font-size: 0.9em;
    white-space: nowrap;

    span.negative {
      color: $color-error;
    }
    .price-diff {
      color: $color-positive;
    }
  }
  .whitespace {
    flex-grow: 3;
  }
  @media (max-width: $breakpoint-s) {
    .deal-title {
      span {
        position: relative;
        top: -10px;
      }
    }
    .deal-img {
      margin-right: 10px;
      height: 50px;
      width: 50px;
    }
    .deal-img-blur {
      left: -50%;
    }
    .deal-data {
      justify-content: flex-start;
      top: -23px;
      margin-bottom: -20px;
      margin-left: 60px;
    }
    .deal-data-value {
      font-size: 0.85em;
      margin-right: 10px;

      img {
        height: 10px;
      }
      &.hidden {
        display: none;
      }
    }
    .whitespace {
      display: none;
    }
  }
}
.deal-status {
  color: $color-font-body;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 0;
  width: 100%;
  @include uppercase;
  font-size: 0.9em;
  @include ease(0.35s);
  margin-top: 15px;

  img {
    margin-right: 3px;
  }

  @media (max-width: $breakpoint-s) {
    font-size: 0.8em;
  }
}

.filter {
  position: relative;
  display: flex;
  align-content: center;
  flex-wrap: wrap;
  border-top: 1px solid $color-subtle-dark;
  padding-top: 15px;

  .filter-tags {
    display: flex;
    align-items: center;
    margin-right: 150px; // break when view type is supposed to cause break

    @media (max-width: $breakpoint-s) {
      width: 100%;
    }
    .filter-tags-row {
      display: inline-block;
      margin-right: 20px;
      padding-right: 20px;
    }
  }
}

// Fix for btn-tags having no ascending tag
.btn-tag {
  img {
    margin-right: 2px !important;
  }
}

a {
  position: relative;
  overflow: hidden;
  width: 100%;
  @include field;
  align-items: center;
  border-radius: 2px;
  padding: 10px 20px;
  margin-bottom: 8px;
  @include ease(0.05s);

  &:hover {
    opacity: 1 !important;
    transform: scale(0.995);
  }
  &:active {
    transform: scale(0.995);
  }
  &:before {
    border-radius: 0;
  }
}
</style>
