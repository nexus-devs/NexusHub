<template>
  <module ref="graphHeatmap" class="graph">
    <template slot="header">
      <div class="title">
        <img src="/img/wow-classic/ui/trade.svg" alt="Trade" class="ico-h-20">
        <h3>Heatmap</h3>
      </div>
    </template>
    <template slot="body">
      <heatmap />
    </template>
  </module>
</template>

<script>
import heatmap from 'src/components/charts/overhaul/heatmap.vue'
import module from 'src/components/ui/module.vue'

export default {
  components: {
    module,
    heatmap
  }
}
</script>

<style lang="scss" scoped>
@import '~src/styles/partials/wow-classic/importer';

.graph {
  max-width: none !important;
  // max-height: 306px;

  > /deep/ .body {
    padding: 0;
    margin: 0;
    min-height: 210px;
  }

  > /deep/ .header {
    display: flex;
    justify-content: space-between;
  }

  > /deep/ .footer {
    flex-wrap: wrap;
    justify-content: space-between;
  }
}
</style>
