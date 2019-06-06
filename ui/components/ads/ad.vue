<template>
  <div :id="`ad-${name}`" :style="{ 'max-height', 'max-width' }" class="ad-unit layout-center"/>
</template>



<script>
export default {
  props: ['name', 'max-height', 'max-width'],

  mounted () {
    window['nitroAds'].createAd(`ad-${this.name}`, {
      floor: 0.05,
      refreshLimit: 10,
      refreshTime: 60,
      report: {
        enabled: true,
        wording: 'Report Abuse',
        position: 'fixed-bottom-right'
      }
    })
  }
}
</script>



<style lang="scss">
.ad-unit {
  padding: 24px;
}
</style>
