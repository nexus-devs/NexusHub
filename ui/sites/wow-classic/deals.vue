<template>
  <div class="deals">
    <navigation />
    <app-content>
      <div class="results">
        <div class="container">
          <div class="deals-headline">
            <h1>Most Profitable Deals on {{ serverPretty }}</h1>
          </div>
          <ad name="wow-classic-deals" />
          <deals />
        </div>
      </div>
    </app-content>
  </div>
</template>



<script>
import ad from 'src/components/ads/nitroAds.vue'
import appContent from 'src/app-content.vue'
import deals from 'src/components/wow-classic/deals.vue'
import meta from 'src/components/seo/meta.js'
import navigation from 'src/components/ui/nav/wow-classic.vue'
import storeModule from 'src/store/wow-classic/deals.js'

export default {
  components: {
    ad,
    navigation,
    appContent,
    deals
  },

  async asyncData ({ store, route }) {
    const slug = route.params.slug
    const fetchUrl = `/wow-classic/v1/items/${slug}/deals?limit=15`

    const deals = await this.$cubic.get(fetchUrl)
    for (const deal of deals) deal.icon = `https://render-classic-us.worldofwarcraft.com/icons/56/${deal.icon}.jpg`

    store.commit('setFetchUrl', fetchUrl)
    store.commit('setDeals', deals)
    store.commit('setFilters', [
      { name: 'Absolute Profit', unique: true, active: true, icon: '/img/warframe/ui/platinum.svg', fetchUrl },
      { name: 'Relative Profit', unique: true, active: false, icon: '/img/warframe/ui/platinum.svg', fetchUrl: `${fetchUrl}&relative=true` }
    ])
  },

  computed: {
    serverPretty () {
      const server = this.$store.state.servers.activeServer
      return `${server.name} (${server.faction.charAt(0).toUpperCase() + server.faction.slice(1)})`
    }
  },

  storeModule,

  head () {
    return {
      title: `Most Profitable Deals on ${this.serverPretty} · NexusHub`,
      meta: meta({
        title: `Most Profitable Deals for ${this.serverPretty} on NexusHub`,
        description: `Get the most profitable deals on the World of Warcraft Classic Auction House for ${this.serverPretty} on NexusHub`,
        image: 'https://nexushub.co/img/brand/og-banner-wow-classic.jpg'
      })
    }
  }
}
</script>


<style lang="scss" scoped>
@import '~src/styles/partials/wow-classic/importer';

.results {
  padding: 60px 0;
}
.deals-headline {
  padding-top: 40px;
}
</style>
