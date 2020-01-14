<template>
  <module>
    <template slot="header">
      <img src="/img/wow-classic/ui/stats.svg" alt="Statistics" class="ico-h-20">
      <h3>Item Stats</h3>
    </template>
    <template slot="body">
      <div class="item-data row">
        <div class="col">
          <span>Market Value</span>
        </div>
        <div class="col-2">
          <span class="data-price">
            {{ parsePrice(stats.current.marketValue) }}
          </span>
          <span :class="{ negative: diff.marketValue < 0, neutral: diff.marketValue === 0 }" class="data-price-diff">
            <indicator :diff="diff.marketValue" /> {{ Math.abs(diff.marketValue) }}%
          </span>
        </div>
      </div>
      <div class="item-data row">
        <div class="col">
          <span>Historical Value</span>
        </div>
        <div class="col-2">
          <span class="data-price">
            {{ parsePrice(stats.current.historicalValue) }}
          </span>
          <span :class="{ negative: diff.historicalValue < 0, neutral: diff.historicalValue === 0 }" class="data-price-diff">
            <indicator :diff="diff.historicalValue" /> {{ Math.abs(diff.historicalValue) }}%
          </span>
        </div>
      </div>
      <div class="item-data row">
        <div class="col">
          <span>Minimum Buyout</span>
        </div>
        <div class="col-2">
          <span class="data-price">
            {{ parsePrice(stats.current.minBuyout) }}
          </span>
          <span :class="{ negative: diff.minBuyout < 0, neutral: diff.minBuyout === 0 }" class="data-price-diff">
            <indicator :diff="diff.minBuyout" /> {{ Math.abs(diff.minBuyout) }}%
          </span>
        </div>
      </div>
      <div class="item-data row">
        <div class="col">
          <span>Quantity</span>
        </div>
        <div class="col-2">
          <span class="data-price">
            {{ stats.current.quantity }}
          </span>
          <span :class="{ negative: diff.quantity < 0, neutral: diff.quantity === 0 }" class="data-price-diff">
            <indicator :diff="diff.quantity" /> {{ Math.abs(diff.quantity) }}%
          </span>
        </div>
      </div>
    </template>
  </module>
</template>



<script>
import indicator from 'src/components/charts/indicator.vue'
import module from 'src/components/ui/module.vue'
import utility from './utility'

export default {
  components: {
    module,
    indicator
  },

  computed: {
    item () {
      return this.$store.state.items.item
    },
    stats () {
      return this.item.stats
    },
    diff () {
      const percentage = (property) => {
        if (!this.stats.previous || !this.stats.previous[property]) return 0
        const value = this.stats.current[property] - this.stats.previous[property]
        return (value / this.stats.previous[property] * 100).toFixed(2)
      }
      return {
        marketValue: percentage('marketValue'),
        minBuyout: percentage('minBuyout'),
        quantity: percentage('quantity'),
        historicalValue: percentage('historicalValue')
      }
    }
  },

  created () {
    this.parsePrice = utility.parsePrice
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
</style>
