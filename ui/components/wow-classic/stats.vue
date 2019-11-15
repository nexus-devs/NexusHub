<template>
  <module>
    <template slot="header">
      <img src="/img/warframe/ui/stats.svg" alt="Statistics" class="ico-h-20">
      <h3>Item Stats</h3>
    </template>
    <template slot="body">
      <div v-if="item.marketValue" class="item-data row">
        <div class="col">
          <span>Market Value</span>
        </div>
        <div class="col-2">
          <span class="data-price">
            {{ parsePrice(item.marketValue) }}
          </span>
          <span :class="{ negative: diff(item.marketValue, item.previous.marketValue).percentage < 0 }" class="data-price-diff">
            <indicator :diff="diff(item.marketValue, item.previous.marketValue).percentage" /> {{ Math.abs(diff(item.marketValue, item.previous.marketValue).percentage) }}%
          </span>
        </div>
      </div>
      <div v-if="item.minBuyout" class="item-data row">
        <div class="col">
          <span>Minimum Buyout</span>
        </div>
        <div class="col-2">
          <span class="data-price">
            {{ parsePrice(item.minBuyout) }}
          </span>
        </div>
      </div>
      <div v-if="item.qty" class="item-data row">
        <div class="col">
          <span>Quantity</span>
        </div>
        <div class="col-2">
          <span class="data-price">
            {{ item.qty }}
          </span>
        </div>
      </div>
      <div v-if="showEU && item.EU.marketValue" class="item-data row">
        <div class="col">
          <span>EU Market Value</span>
        </div>
        <div class="col-2">
          <span class="data-price">
            {{ parsePrice(item.EU.marketValue) }}
          </span>
          <span :class="{ negative: diff(item.EU.marketValue, item.EU.previous.marketValue).percentage < 0 }" class="data-price-diff">
            <indicator :diff="diff(item.EU.marketValue, item.EU.previous.marketValue).percentage" /> {{ Math.abs(diff(item.EU.marketValue, item.EU.previous.marketValue).percentage) }}%
          </span>
        </div>
      </div>
      <div v-if="showEU && item.EU.minBuyout" class="item-data row">
        <div class="col">
          <span>EU Min. Buyout</span>
        </div>
        <div class="col-2">
          <span class="data-price">
            {{ parsePrice(item.EU.minBuyout) }}
          </span>
        </div>
      </div>
      <div v-if="showEU && item.EU.qty" class="item-data row">
        <div class="col">
          <span>EU Quantity</span>
        </div>
        <div class="col-2">
          <span class="data-price">
            {{ item.EU.qty }}
          </span>
        </div>
      </div>
      <div v-if="showUS && item.US.marketValue" class="item-data row">
        <div class="col">
          <span>US Market Value</span>
        </div>
        <div class="col-2">
          <span class="data-price">
            {{ parsePrice(item.US.marketValue) }}
          </span>
          <span :class="{ negative: diff(item.US.marketValue, item.US.previous.marketValue).percentage < 0 }" class="data-price-diff">
            <indicator :diff="diff(item.US.marketValue, item.US.previous.marketValue).percentage" /> {{ Math.abs(diff(item.US.marketValue, item.US.previous.marketValue).percentage) }}%
          </span>
        </div>
      </div>
      <div v-if="showUS && item.US.minBuyout" class="item-data row">
        <div class="col">
          <span>US Min. Buyout</span>
        </div>
        <div class="col-2">
          <span class="data-price">
            {{ parsePrice(item.US.minBuyout) }}
          </span>
        </div>
      </div>
      <div v-if="showUS && item.US.qty" class="item-data row">
        <div class="col">
          <span>US Quantity</span>
        </div>
        <div class="col-2">
          <span class="data-price">
            {{ item.US.qty }}
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
    showEU () {
      return this.item.region === 'EU' || !this.item.region
    },
    showUS () {
      return this.item.region === 'US' || !this.item.region
    }
  },

  created () {
    this.parsePrice = utility.parsePrice
  },

  methods: {
    diff (current, prev) {
      const value = current - prev
      return {
        value,
        percentage: (value / prev * 100).toFixed(2)
      }
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
