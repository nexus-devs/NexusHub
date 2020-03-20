<template>
  <module>
    <template slot="header">
      <img src="/img/wow-classic/ui/stats.svg" alt="Statistics" class="ico-h-20">
      <h3>Item Stats</h3>
    </template>
    <template slot="body">
      <div class="item-data row">
        <div class="col">
          <span>Last Updated</span>
        </div>
        <div class="col-2">
          <span>{{ lastUpdated }}</span>
        </div>
      </div>
      <div v-if="item.stats.current" class="item-data row">
        <div class="col">
          <span>Market Value</span>
        </div>
        <div :class="comparison ? 'col' : 'col-2'">
          <span class="data-price">
            {{ parsePrice(stats.current.marketValue) }}
          </span>
          <span v-if="diff.marketValue !== 0 && !comparison" :class="{ negative: diff.marketValue < 0 }" class="data-price-diff">
            <indicator :diff="diff.marketValue" /> {{ Math.abs(diff.marketValue) }}%
          </span>
        </div>
        <div v-if="comparison" class="col comparison">
          <span class="data-price">
            {{ parsePrice(comparison.current.marketValue) }}
          </span>
          <p>{{ compareServerPretty }}</p>
        </div>
      </div>
      <div v-if="item.stats.current" class="item-data row">
        <div class="col">
          <span>Historical Value</span>
        </div>
        <div :class="comparison ? 'col' : 'col-2'">
          <span class="data-price">
            {{ parsePrice(stats.current.historicalValue) }}
          </span>
          <span v-if="diff.historicalValue !== 0 && !comparison" :class="{ negative: diff.historicalValue < 0 }" class="data-price-diff">
            <indicator :diff="diff.historicalValue" /> {{ Math.abs(diff.historicalValue) }}%
          </span>
        </div>
        <div v-if="comparison" class="col comparison">
          <span class="data-price">
            {{ parsePrice(comparison.current.historicalValue) }}
          </span>
          <p>{{ compareServerPretty }}</p>
        </div>
      </div>
      <div v-if="item.stats.current" class="item-data row">
        <div class="col">
          <span>Minimum Buyout</span>
        </div>
        <div v-if="stats.current.minBuyout > 0" :class="comparison ? 'col' : 'col-2'">
          <span class="data-price">
            {{ parsePrice(stats.current.minBuyout) }}
          </span>
          <span v-if="diff.minBuyout !== 0 && !comparison" :class="{ negative: diff.minBuyout < 0 }" class="data-price-diff">
            <indicator :diff="diff.minBuyout" /> {{ Math.abs(diff.minBuyout) }}%
          </span>
        </div>
        <div v-else class="col-2">
          <span class="data-price neutral">Unavailable</span>
        </div>
        <div v-if="comparison" class="col comparison">
          <span class="data-price">
            {{ parsePrice(comparison.current.minBuyout) }}
          </span>
          <p>{{ compareServerPretty }}</p>
        </div>
      </div>
      <div v-if="item.stats.current" class="item-data row">
        <div class="col">
          <span>Quantity</span>
        </div>
        <div :class="comparison ? 'col' : 'col-2'">
          <span class="data-price">
            {{ stats.current.quantity }}
          </span>
          <span v-if="diff.quantity !== 0 && !comparison" :class="{ negative: diff.quantity < 0 }" class="data-price-diff">
            <indicator :diff="diff.quantity" /> {{ Math.abs(diff.quantity) }}%
          </span>
        </div>
        <div v-if="comparison" class="col comparison">
          <span class="data-price">
            {{ comparison.current.quantity }}
          </span>
          <p>{{ compareServerPretty }}</p>
        </div>
      </div>
      <div v-if="item.contentPhase" class="item-data row">
        <div class="col">
          <span>Content Phase</span>
        </div>
        <div class="col-2">
          <span class="data-price">
            {{ item.contentPhase }}
          </span>
        </div>
      </div>
      <div v-if="item.vendorPrice" class="item-data row">
        <div class="col">
          <span>Vendor Price</span>
        </div>
        <div class="col-2">
          <span class="data-price">
            {{ parsePrice(item.vendorPrice) }}
          </span>
        </div>
      </div>
      <div class="item-data row">
        <div class="col-2 item-link-label">
          <span>Ingame Item Link</span>
        </div>
        <div class="col-3">
          <input ref="itemLink" type="text" class="item-link" :value="item.itemLink" readonly @click="copyToClipboard()">
        </div>
        <div class="col item-link-copied">
          <span :class="{ active: copied }" class="item-link-copy-confirmed">Copied!</span>
        </div>
      </div>
    </template>
    <template slot="footer">
      <compare-server :fn="compareServer" />
      <a href="https://www.tradeskillmaster.com/" target="_blank">
        Powered by TSM
        <img src="/img/ui/arrow-right.svg" alt="Powered by TSM" class="ico-20">
      </a>
    </template>
  </module>
</template>



<script>
import compareServer from 'src/components/wow-classic/compare-server.vue'
import indicator from 'src/components/charts/indicator.vue'
import module from 'src/components/ui/module.vue'
import moment from 'moment'
import utility from './utility'

export default {
  components: {
    module,
    indicator,
    compareServer
  },

  data () {
    return {
      copied: false
    }
  },

  computed: {
    item () {
      return this.$store.state.items.item
    },
    comparison () {
      return this.$store.state.items.itemComparison.current ? this.$store.state.items.itemComparison : null
    },
    compareServerPretty () {
      if (!this.comparison) return null
      const factionPretty = this.comparison.server.faction.charAt(0).toUpperCase() + this.comparison.server.faction.slice(1)
      return `${this.comparison.server.name} ${factionPretty}`
    },
    stats () {
      return this.item.stats
    },
    diff () {
      const percentage = (property) => {
        if (!this.stats.previous || !this.stats.previous[property]) return 0
        const value = this.stats.current[property] - this.stats.previous[property]
        return Math.round((value / this.stats.previous[property] * 100) * 1e2) / 1e2 // Round to 2 digits
      }
      return {
        marketValue: percentage('marketValue'),
        minBuyout: percentage('minBuyout'),
        quantity: percentage('quantity'),
        historicalValue: percentage('historicalValue')
      }
    },
    lastUpdated () {
      const lastUpdated = this.stats.lastUpdated
      return lastUpdated ? moment.utc(lastUpdated).fromNow() : 'Unknown'
    }
  },

  created () {
    this.parsePrice = utility.parsePrice
  },

  methods: {
    copyToClipboard () {
      const itemLink = this.$refs.itemLink
      itemLink.select()
      itemLink.setSelectionRange(0, 99999)
      document.execCommand('copy')

      this.copied = true
      setTimeout(() => {
        this.copied = false
      }, 1000)
    },
    async compareServer (server) {
      const serverSplit = server.split('-')
      const faction = serverSplit.pop()
      const serverObj = { ...this.$store.state.servers.serverlist.find(s => s.slug === serverSplit.join('-')) } // Avoid mutating
      serverObj.slug = server
      serverObj.faction = faction
      await this.$store.dispatch('fetchItemComparison', serverObj)
    }
  }
}
</script>



<style lang="scss" scoped>
@import '~src/styles/partials/wow-classic/importer';

.item-data {
  border-bottom: 1px solid $color-subtle-dark;
  padding-bottom: 7.5px;
  margin-bottom: 7.5px;

  &:last-of-type {
    border-bottom: none;
    padding-bottom: 0;
    margin-bottom: 0;
  }
  span {
    color: white;
    font-size: 0.9em !important;
    padding-right: 8px;
    border-right: 1px solid $color-subtle;
  }
  .item-link-copy-confirmed {
    color: $color-primary-subtle;
    transform: translateX(-5px);
    @include ease-wubble(0.5s);
    opacity: 0;

    @media (max-width: $breakpoint-s) {
      transform: translateX(0);
    }

    &.active {
      opacity: 1;
      transform: translateX(0);

      @media (max-width: $breakpoint-s) {
        transform: translateX(5px);
      }
    }
  }
  // Every span after first
  span:nth-of-type(1) ~ span {
    padding-left: 5px;
  }
  span:last-of-type {
    border-right: none;
  }
  img {
    padding: 3.5px;
    margin-right: 2px;
  }
  span.neutral {
    color: $color-font-body;
  }
  span.negative {
    color: $color-error;
  }
  .data-price-diff {
    color: $color-positive;
  }
}
.ducats {
  color: $color-primary-subtle !important;
  border-right: none !important;
  padding-right: 0 !important;
}
.ducats ~ span {
  padding-left: 0 !important;
  color: $color-font-body;
}
.col {
  &:first-of-type span {
    font-size: 0.9em;
  }
}
.item-link-label {
  display: flex;
  align-items: center;
}
.item-link {
  font-family: Monospace;
  font-weight: bold;
  width: 100%;
  padding: 6px 8px;
  border-radius: 2px;
  text-overflow: ellipsis;
  background-color: $color-bg;
  color: $color-font-body;

  &::selection {
    background: $color-bg-light;
  }
}
.item-link-copied {
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media (max-width: $breakpoint-s) {
    align-items: flex-start;
    padding-top: 4px;
  }
}
.col {
  display: flex;
  align-items: center;
}
.comparison {
  flex-wrap: wrap;

  p {
    font-size: 0.7em;
    color: $color-font-body;
    @include uppercase()
  }
}
</style>
