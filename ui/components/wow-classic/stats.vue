<template>
  <module>
    <template slot="header">
      <img src="/img/wow-classic/ui/stats.svg" alt="Statistics" class="ico-h-20">
      <h3>Item Stats</h3>
    </template>
    <template slot="body">
      <div v-if="!global" class="item-data row">
        <div class="col">
          <span>Last Updated</span>
        </div>
        <div class="col-2">
          <span>{{ lastUpdated }}</span>
        </div>
      </div>

      <!-- EU Market Value -->
      <div v-if="global && globalStats.EU" class="item-data row">
        <div class="col">
          <span>EU Market Value</span>
        </div>
        <div class="col-2">
          <span class="data-price">
            {{ parsePrice(globalStats.EU.marketValue) }}
          </span>
          <span :class="{ negative: diff.global.EU.marketValue < 0 }" class="data-price-diff">
            <indicator :diff="diff.global.EU.marketValue" /> {{ Math.abs(diff.global.EU.marketValue) }}%
          </span>
        </div>
      </div>

      <!-- EU Quantity -->
      <div v-if="global && globalStats.EU" class="item-data row">
        <div class="col">
          <span>EU Quantity (Avg)</span>
        </div>
        <div class="col-2">
          <span class="data-price">
            {{ globalStats.EU.quantity }}
          </span>
          <span :class="{ negative: diff.global.EU.quantity < 0 }" class="data-price-diff">
            <indicator :diff="diff.global.EU.quantity" /> {{ Math.abs(diff.global.EU.quantity) }}%
          </span>
        </div>
      </div>

      <!-- US Market Value -->
      <div v-if="global && globalStats.US" class="item-data row">
        <div class="col">
          <span>US Market Value</span>
        </div>
        <div class="col-2">
          <span class="data-price">
            {{ parsePrice(globalStats.US.marketValue) }}
          </span>
          <span :class="{ negative: diff.global.US.marketValue < 0 }" class="data-price-diff">
            <indicator :diff="diff.global.US.marketValue" /> {{ Math.abs(diff.global.US.marketValue) }}%
          </span>
        </div>
      </div>

      <!-- US Quantity -->
      <div v-if="global && globalStats.US" class="item-data row">
        <div class="col">
          <span>US Quantity (Avg)</span>
        </div>
        <div class="col-2">
          <span class="data-price">
            {{ globalStats.US.quantity }}
          </span>
          <span :class="{ negative: diff.global.US.quantity < 0 }" class="data-price-diff">
            <indicator :diff="diff.global.US.quantity" /> {{ Math.abs(diff.global.US.quantity) }}%
          </span>
        </div>
      </div>

      <!-- Market Value -->
      <div v-if="!global && item.stats && item.stats.current" class="item-data row">
        <div class="col">
          <span>Market Value</span>
        </div>
        <div :class="{ comparison }" class="col-2">
          <span :class="{ col: comparison }" class="data-price">
            {{ parsePrice(stats.current.marketValue) }}
          </span>
          <span v-if="diff.marketValue !== 0 && !comparison" :class="{ negative: diff.marketValue < 0 }" class="data-price-diff">
            <indicator :diff="diff.marketValue" /> {{ Math.abs(diff.marketValue) }}%
          </span>

          <!-- Comparison -->
          <div v-if="comparison" class="compare-container col-2">
            <span v-if="comparison.current" class="data-price">
              {{ parsePrice(comparison.current.marketValue) }}
            </span>
            <span v-else class="data-price neutral">Unavailable</span>
            <span v-if="diff.comparison.marketValue !== 0" :class="{ negative: diff.comparison.marketValue < 0 }" class="data-price-diff">
              <indicator :diff="diff.comparison.marketValue" /> {{ Math.abs(diff.comparison.marketValue) }}%
            </span>
            <p>{{ compareServerPretty }}</p>
          </div>
        </div>
      </div>

      <!-- Historical Value -->
      <div v-if="!global && item.stats && item.stats.current" class="item-data row">
        <div class="col">
          <span>Historical Value</span>
        </div>
        <div :class="{ comparison }" class="col-2">
          <span :class="{ col: comparison }" class="data-price">
            {{ parsePrice(stats.current.historicalValue) }}
          </span>
          <span v-if="diff.historicalValue !== 0 && !comparison" :class="{ negative: diff.historicalValue < 0 }" class="data-price-diff">
            <indicator :diff="diff.historicalValue" /> {{ Math.abs(diff.historicalValue) }}%
          </span>

          <!-- Comparison -->
          <div v-if="comparison" class="compare-container col-2">
            <span v-if="comparison.current" class="data-price">
              {{ parsePrice(comparison.current.historicalValue) }}
            </span>
            <span v-else class="data-price neutral">Unavailable</span>
            <span v-if="diff.comparison.historicalValue !== 0" :class="{ negative: diff.comparison.historicalValue < 0 }" class="data-price-diff">
              <indicator :diff="diff.comparison.historicalValue" /> {{ Math.abs(diff.comparison.historicalValue) }}%
            </span>
            <p>{{ compareServerPretty }}</p>
          </div>
        </div>
      </div>

      <!-- Minimum Buyout -->
      <div v-if="!global && item.stats && item.stats.current" class="item-data row">
        <div class="col">
          <span>Minimum Buyout</span>
        </div>
        <div v-if="stats.current.minBuyout > 0" :class="{ comparison }" class="col-2">
          <span :class="{ col: comparison }" class="data-price">
            {{ parsePrice(stats.current.minBuyout) }}
          </span>
          <span v-if="diff.minBuyout !== 0 && !comparison" :class="{ negative: diff.minBuyout < 0 }" class="data-price-diff">
            <indicator :diff="diff.minBuyout" /> {{ Math.abs(diff.minBuyout) }}%
          </span>

          <!-- Comparison -->
          <div v-if="comparison" class="compare-container col-2">
            <span v-if="comparison.current && comparison.current.minBuyout > 0" class="data-price">
              {{ parsePrice(comparison.current.minBuyout) }}
            </span>
            <span v-else class="data-price neutral">Unavailable</span>
            <span v-if="diff.comparison.minBuyout !== 0 && comparison.current.minBuyout > 0" :class="{ negative: diff.comparison.minBuyout < 0 }" class="data-price-diff">
              <indicator :diff="diff.comparison.minBuyout" /> {{ Math.abs(diff.comparison.minBuyout) }}%
            </span>
            <p>{{ compareServerPretty }}</p>
          </div>
        </div>
        <div v-else class="col-2">
          <span class="data-price neutral">Unavailable</span>
        </div>
      </div>

      <!-- Quantity -->
      <div v-if="!global && item.stats && item.stats.current" class="item-data row">
        <div class="col">
          <span>Quantity</span>
        </div>
        <div :class="{ comparison }" class="col-2">
          <span :class="{ col: comparison }" class="data-price">
            {{ stats.current.quantity }}
          </span>
          <span v-if="diff.quantity !== 0 && !comparison" :class="{ negative: diff.quantity < 0 }" class="data-price-diff">
            <indicator :diff="diff.quantity" /> {{ Math.abs(diff.quantity) }}%
          </span>

          <!-- Comparison -->
          <div v-if="comparison" class="compare-container col-2">
            <span v-if="comparison.current" class="data-price">
              {{ comparison.current.quantity }}
            </span>
            <span v-else class="data-price neutral">Unavailable</span>
            <span v-if="diff.comparison.quantity !== 0" :class="{ negative: diff.comparison.quantity < 0 }" class="data-price-diff">
              <indicator :diff="diff.comparison.quantity" /> {{ Math.abs(diff.comparison.quantity) }}%
            </span>
            <p>{{ compareServerPretty }}</p>
          </div>
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
      <compare-server v-if="!global" :fn="compareServer" :active-server="comparisonActiveServer" />
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
    global () {
      return !this.$store.state.servers.activeServer.slug
    },
    item () {
      return this.$store.state.items.item
    },
    comparison () {
      if (!this.$store.state.items.itemComparison.server.slug) return null
      return this.$store.state.items.itemComparison
    },
    comparisonActiveServer () {
      return this.$store.state.items.itemComparison.server
    },
    compareServerPretty () {
      if (!this.comparison) return null
      const factionPretty = this.comparison.server.faction.charAt(0).toUpperCase() + this.comparison.server.faction.slice(1)
      return `${this.comparison.server.name} ${factionPretty}`
    },
    stats () {
      return this.item.stats
    },
    globalGraphData () {
      const EU = this.$store.state.items.graphs['overview-eu'].data
      const US = this.$store.state.items.graphs['overview-us'].data
      return { EU, US }
    },
    globalStatsPrevious () {
      return {
        EU: this.globalGraphData.EU ? this.globalGraphData.EU.slice(-2, -1)[0] : undefined,
        US: this.globalGraphData.US ? this.globalGraphData.US.slice(-2, -1)[0] : undefined
      }
    },
    globalStats () {
      return {
        EU: this.globalGraphData.EU ? this.globalGraphData.EU.slice(-1)[0] : undefined,
        US: this.globalGraphData.US ? this.globalGraphData.US.slice(-1)[0] : undefined
      }
    },
    diff () {
      const percentage = (property, main, secondary) => {
        if (!main) main = this.stats ? this.stats.current : null
        if (!secondary) secondary = this.stats ? this.stats.previous : null

        if (!main || !secondary || !secondary[property]) return 0
        const value = main[property] - secondary[property]
        return Math.round((value / secondary[property] * 100) * 1e2) / 1e2 // Round to 2 digits
      }
      return {
        marketValue: percentage('marketValue'),
        minBuyout: percentage('minBuyout'),
        quantity: percentage('quantity'),
        historicalValue: percentage('historicalValue'),
        comparison: this.comparison ? {
          marketValue: percentage('marketValue', this.comparison.current, this.stats.current),
          minBuyout: percentage('minBuyout', this.comparison.current, this.stats.current),
          quantity: percentage('quantity', this.comparison.current, this.stats.current),
          historicalValue: percentage('historicalValue', this.comparison.current, this.stats.current)
        } : null,
        global: this.global ? {
          EU: {
            marketValue: percentage('marketValue', this.globalStats.EU, this.globalStatsPrevious.EU),
            quantity: percentage('quantity', this.globalStats.EU, this.globalStatsPrevious.EU)
          },
          US: {
            marketValue: percentage('marketValue', this.globalStats.US, this.globalStatsPrevious.US),
            quantity: percentage('quantity', this.globalStats.US, this.globalStatsPrevious.US)
          }
        } : null
      }
    },
    lastUpdated () {
      const lastUpdated = this.stats ? this.stats.lastUpdated : null
      return lastUpdated ? moment.utc(lastUpdated).fromNow() : 'Unknown'
    }
  },

  created () {
    this.parsePrice = utility.parsePrice
  },

  methods: {
    copyToClipboard () {
      const pureItemLink = this.$refs.itemLink.replace('|', '\\124')
      const itemLink = `script DEFAULT_CHAT_FRAME:AddMessage("${pureItemLink}");`
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
  display: flex;
  // justify-content: space-between;
  align-items: center;

  p {
    font-size: 0.7em;
    color: $color-font-body;
    @include uppercase()
  }
  .compare-container {
    flex-wrap: wrap;

    @media (max-width: $breakpoint-s) {
      display: flex;
    }
  }
}
</style>
