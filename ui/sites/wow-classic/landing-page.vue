<template>
  <div>
    <app-content>
      <header>

      </header>
    </app-content>
  </div>
</template>


<script>
import appContent from 'src/app-content.vue'
import meta from 'src/components/seo/meta.js'

export default {
  components: {
    appContent
  },

  head: {
    title: 'NexusHub · Never miss out on a trade again!',
    meta: meta({
      title: 'NexusHub · Never miss out on a trade again!',
      description: 'Get real-time trading data and prices from more than 100,000 players in Warframe\'s Trade Chat, Warframe Market and more.'
    })
  }
}
</script>


<style lang='scss' scoped>
@import '~src/styles/partials/wow-classic/importer';
</style>
