<template>
  <module>
    <template slot="header">
      <span class="title">Active Traders right now</span>
      <br>
      <span class="active-number">32</span>
      <br>
      <span class="offers-per-minute">Offers per minute</span>
    </template>
    <template slot="body">
      <div class="chart">

      </div>
    </template>
    <template slot="footer">
      <router-link to="">
        Trade Overview
        <img src="/img/ui/arrow-right.svg" alt="View full patch notes" class="ico-20">
      </router-link>
    </template>
  </module>
</template>



<script>
import module from 'src/components/ui/module.vue'

export default {
  components: {
    module
  }
}
</script>



<style lang="scss" scoped>
@import '~src/styles/partials/importer';

.module {
  width: fit-content;
}
.title {
  color: white;
}
.active-number {
  display: inline-block;
  color: white;
  font-size: 2em;
  margin-top: 10px;
}
.offers-per-minute {
  display: inline-block;
  margin-top: 10px;
  margin-bottom: -15px;
  font-size: 0.8em;
}
.chart {
  width: 200px;
  height: 100px;
}
</style>
