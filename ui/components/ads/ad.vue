<template>
  <div :id="name"/>
</template>



<script>
export default {
  props: ['name'],

  beforeMount () {
    window["nitroAds"].createAd(name, {
      floor: 0.05,
      refreshLimit: 10,
      refreshTime: 60,
      report: {
        enabled: true,
        wording: "Report Abuse",
        position: "fixed-bottom-right"
      }
    })
  }
}
</script>



<style lang="scss" scoped>

</style>