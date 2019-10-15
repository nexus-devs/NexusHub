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
            {{ item.marketValue }}
          </span>
          <!--<parsedPrice :price="parsePrice(item.marketValue)" />-->
        </div>
      </div>
      <div v-if="item.minBuyout" class="item-data row">
        <div class="col">
          <span>Minimum Buyout</span>
        </div>
        <div class="col-2">
          <span class="data-price">
            {{ item.minBuyout }}
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
    </template>
  </module>
</template>



<script>
import indicator from 'src/components/charts/indicator.vue'
import module from 'src/components/ui/module.vue'
import parsedPrice from 'src/components/wow-classic/parsed-price.vue'

export default {
  components: {
    module,
    indicator,
    parsedPrice
  },

  computed: {
    item () {
      return this.$store.state.items.item
    }
  },

  methods: {
    parsePrice (price) {
      const gold = Math.floor(price / 10000)
      const silver = Math.floor(price / 100 - gold * 100)
      const copper = price - gold * 10000 - silver * 100
      return { gold, silver, copper }
    }
  }
}
</script>



<style lang="scss" scoped>
@import '~src/styles/partials/importer';

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
    color: $color-primary-subtle;
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
