<template>
  <module>
    <template slot="header">
      <img src="/img/warframe/ui/stats.svg" alt="Statistics" class="ico-h-20">
      <h3>Item Stats</h3>
    </template>
    <template slot="body">
      <div v-if="priceDiff && component.tradable" class="item-data row">
        <div class="col">
          <span>Price</span>
        </div>
        <div class="col-2">
          <img src="/img/warframe/ui/platinum.svg" alt="Platinum" class="ico-h-16">
          <span class="data-price">
            {{ priceCurrent }}p
          </span>
          <span :class="{ negative: priceDiff.percentage < 0 }" class="data-price-diff">
            {{ priceDiff.percentage > 0 ? '+' : '' }}{{ priceDiff.percentage }}%
          </span>
        </div>
      </div>
      <div v-if="component.ducats" class="item-data row">
        <div class="col">
          <span>Ducats</span>
        </div>
        <div class="col-2">
          <img src="/img/warframe/ui/ducats.svg" alt="Ducats per Platinum" class="ico-h-16">
          <span>{{ component.ducats }}</span>
          <span class="ducats">{{ (component.ducats / priceCurrent).toFixed(2) }}</span>
          <span>Ducats/Plat</span>
        </div>
      </div>
      <div v-if="item.masteryReq !== undefined" class="item-data row">
        <div class="col">
          <span>Mastery</span>
        </div>
        <div class="col-2">
          <span>MR {{ item.masteryReq }}</span>
        </div>
      </div>
      <div v-if="item.health" class="item-data row">
        <div class="col">
          <span>Health</span>
        </div>
        <div class="col-2">
          <span>{{ item.health }}</span>
        </div>
      </div>
      <div v-if="item.shield" class="item-data row">
        <div class="col">
          <span>Shields</span>
        </div>
        <div class="col-2">
          <span>{{ item.shield }}</span>
        </div>
      </div>
      <div v-if="item.armor" class="item-data row">
        <div class="col">
          <span>Armor</span>
        </div>
        <div class="col-2">
          <span>{{ item.armor }}</span>
        </div>
      </div>
      <div v-if="item.power" class="item-data row">
        <div class="col">
          <span>Energy</span>
        </div>
        <div class="col-2">
          <span>{{ item.power }}</span>
        </div>
      </div>
      <div v-if="item.criticalChance" class="item-data row">
        <div class="col">
          <span>Crit Chance</span>
        </div>
        <div class="col-2">
          <span>{{ Math.round(item.criticalChance * 100) }}%</span>
        </div>
      </div>
      <div v-if="item.procChance" class="item-data row">
        <div class="col">
          <span>Status Chance</span>
        </div>
        <div class="col-2">
          <span>{{ Math.round(item.procChance * 100) }}%</span>
        </div>
      </div>
      <div v-for="(damage, type) in item.damageTypes" v-if="item.damageTypes" :key="type" class="item-data row">
        <div class="col">
          <span>{{ type.replace(/\b\w/g, l => l.toUpperCase()) }}</span>
        </div>
        <div class="col-2">
          <span>
            <img :src="`/img/warframe/ui/${type}.png`" :alt="type" class="ico-h-12">
            {{ damage }}
          </span>
        </div>
      </div>
      <div v-if="item.vaulted" class="item-data row">
        <div class="col">
          <span>Vaulted</span>
        </div>
        <div class="col-2">
          <span>✔</span>
        </div>
      </div>
    </template>
  </module>
</template>



<script>
import module from 'src/components/ui/module.vue'

export default {
  components: {
    module
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
    priceCurrent () {
      if (this.component) {
        return Math.round((this.component.selling.current.median + this.component.buying.current.median) / 2)
      }
    },
    pricePrevious () {
      if (this.component) {
        return Math.round((this.component.selling.previous.median + this.component.buying.previous.median) / 2)
      }
    },
    priceDiff () {
      if (this.component) {
        const value = this.priceCurrent - this.pricePrevious
        return {
          value,
          percentage: (value / this.pricePrevious * 100).toFixed(2)
        }
      }
    }
  }
}
</script>



<style lang="scss" scoped>
@import '~src/styles/partials/importer';

.item-data {
  border-bottom: 1px solid $color-subtle-dark;
  padding-bottom: 10px;
  margin-bottom: 10px;

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
  color: $color-primary !important;
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
