<template>
  <module class="graph">
    <template slot="header">
      <div class="title">
        <img src="/img/wow-classic/ui/trade.svg" alt="Trade" class="ico-h-20">
        <h3>Market Value / Quantity</h3>
      </div>
      <div class="legend-container">
        <div class="legend">
          <div class="primary">
            <span class="dot" /> Market Value
          </div>
          <div class="secondary">
            <span class="dot" /> Quantity
          </div>
        </div>
      </div>
    </template>
    <template slot="body">
      <doubleline :data="data" />
    </template>
  </module>
</template>

<script>
import doubleline from 'src/components/charts/overhaul/doubleline.vue'
import module from 'src/components/ui/module.vue'

export default {
  components: {
    module,
    doubleline
  },
  computed: {
    data () {
      return this.$store.state.items.graphs['marketValue-quantity'].data.map(d => {
        return { ...d, x: new Date(d.x) }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~src/styles/partials/wow-classic/importer';

.graph {
  max-width: none !important;
}
/deep/ .header {
  display: flex;
  justify-content: space-between;
}
.title {
  display: inline-block;
}
.legend-container {
  display: flex;
  justify-content: right;
  flex: 1;
  padding-right: 35px;

  @media (max-width: $breakpoint-s) {
    padding-right: 0;
  }
}
.legend {
  white-space: nowrap;
  font-size: 0.7em;
  color: $color-font-body;
  pointer-events: all;

  .dot {
    margin-top: -1px;
    height: 7px;
    width: 7px;
    border-radius: 50%;
    display: inline-block;
  }
  .primary .dot {
    background-color: $color-primary-subtle;
  }
  .secondary .dot {
    background-color: $color-accent-subtle;
  }
}
</style>
