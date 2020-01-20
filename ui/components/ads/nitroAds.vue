<template>
  <div :id="`ad-${name}`" :style="{
    display,
    'max-height': maxHeight,
    'max-width': maxWidth
  }" class="ad-unit layout-center"
  />
</template>



<script>
export default {
  props: ['name', 'maxHeight', 'maxWidth'],

  data () {
    return {
      display: 'none'
    }
  },

  mounted () {
    const nitroAds = window.nitroAds
    if (!nitroAds) return

    this.display = 'block'
    nitroAds.createAd(`ad-${this.name}`, {
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
@import '~src/styles/partials/importer';

.ad-unit {
  position: relative;
  overflow: hidden; // for border-radius
  margin: 24px 0;
  border-radius: 3px;
}
</style>
