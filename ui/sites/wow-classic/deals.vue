<template>
  <div class="deals">
    <navigation />
    <app-content>
      <section class="results">
        <div class="container">
          <div class="deals-headline">
            <h2 class="sub">
              Profitable Deals on {{ serverPretty }}
            </h2>
          </div>
          <div class="deal-group">
            <!-- <div class="filter">

            </div> -->
            <div class="deal-container">
              <transition-group class="deal-list">
                <div v-for="deal in deals" :key="deal.itemId" class="deal">
                  <router-link :to="`/wow-classic/items/${server}/${deal.itemId}`" class="row interactive">
                    <img :src="deal.icon" class="deal-img-blur" :alt="deal.name">
                    <div class="deal-title col-b">
                      <div class="deal-img">
                        <img :src="deal.icon" :class="{ mod: deal.icon.includes('jpeg') }" :alt="deal.name">
                      </div>
                      <span>{{ deal.name }}</span>
                    </div>
                    <div class="deal-data row">
                      <div class="deal-data-value">
                        <img src="/img/warframe/ui/platinum.svg" alt="Gold" class="ico-12">
                        <span>{{ parsePrice(deal.dealDiff) }}</span>
                      </div>
                      <div class="deal-data-value">
                        <span :class="{ negative: deal.percentage < 0 }" class="price-diff">
                          <indicator :diff="deal.percentage" /> {{ Math.abs(deal.percentage) }}%
                        </span>
                      </div>
                      <div class="deal-data-value whitespace" />
                    </div>
                  </router-link>
                </div>
              </transition-group>
            </div>
          </div>
        </div>
        <ad name="wow-classic-profitable-deals" />
      </section>
    </app-content>
  </div>
</template>



<script>
import ad from 'src/components/ads/nitroAds.vue'
import appContent from 'src/app-content.vue'
import indicator from 'src/components/charts/indicator.vue'
import meta from 'src/components/seo/meta.js'
import navigation from 'src/components/ui/nav/wow-classic.vue'
import storeModule from 'src/store/wow-classic/wowclassic.js'
import utility from 'src/components/wow-classic/utility.js'

export default {
  components: {
    ad,
    navigation,
    appContent,
    indicator
  },

  async asyncData ({ store, route }) {
    const slug = route.params.slug
    const deals = await this.$cubic.get(`/wow-classic/v1/items/${slug}/deals?limit=10`)

    const parallel = []
    for (const deal of deals) parallel.push(this.$cubic.get(`/wow-classic/v1/items/${slug}/${deal.itemId}`))
    const itemData = await Promise.all(parallel)

    for (const deal of deals) {
      const item = itemData.shift()
      deal.icon = item.icon
      deal.name = item.name
      deal.percentage = ((deal.marketValue - deal.minBuyout) / deal.minBuyout * 100).toFixed(2)
    }

    store.commit('setDeals', deals)
  },

  computed: {
    deals () {
      return this.$store.state.wowclassic.deals
    },
    server () {
      return this.$store.state.servers.server
    },
    serverPretty () {
      const serverlist = this.$store.state.servers.EU.concat(this.$store.state.servers.US)
      const serverSplit = this.server.split('-')
      const faction = serverSplit.pop()
      const serverIndex = serverlist.map((x) => utility.serverSlug(x)).indexOf(serverSplit.join('-'))
      return `${serverlist[serverIndex]} (${faction.charAt(0).toUpperCase() + faction.slice(1)})`
    }
  },

  created () {
    this.parsePrice = utility.parsePrice
  },

  storeModule,

  head () {
    return {
      title: `Profitable Deals on ${this.serverPretty} · NexusHub`,
      meta: meta({
        title: `Profitable Deals for ${this.serverPretty} on NexusHub`,
        description: `Get the most profitable deals on the World of Warcraft Classic Auction House for ${this.serverPretty} on NexusHub`,
        image: 'https://nexushub.co/img/brand/og-banner-wow-classic.jpg'
      })
    }
  }
}
</script>



<style lang="scss" scoped>
@import '~src/styles/partials/wow-classic/importer';

.deal-container {
  position: relative; // for position: absolute item list views
  overflow: hidden;
  @include ease-out(0.35s); // When results block gets resized
}
.deal {
  @include ease(0.5s);

  .row {
    justify-content: space-between;
  }
  .deal-title {
    position: relative;
    display: flex;
    align-items: center;
  }
  .deal-img-blur {
    position: absolute;
    left:0;
    height: 400%;
    opacity: 0.4;
    z-index: 0;
    filter: blur(80px);
  }
  .deal-img {
    position: relative;
    display: flex;
    align-items: center;
    overflow: hidden;
    height: 38px;
    width: 38px;
    border-radius: 2px;
    margin-right: 20px;

    img {
      width: 100%;
    }
    img.mod {
      border-radius: 4px;
    }
  }
  .deal-data {
    position: relative;
    flex-wrap: wrap;
    align-items: center;
    width: 70%;
  }
  .deal-data-value {
    flex: 1;
    font-size: 0.9em;
    white-space: nowrap;

    span.negative {
      color: $color-error;
    }
    .price-diff {
      color: $color-positive;
    }
  }
  .whitespace {
    flex-grow: 3;
  }
  @media (max-width: $breakpoint-s) {
    .deal-title {
      span {
        position: relative;
        top: -10px;
      }
    }
    .deal-img {
      margin-right: 10px;
      height: 50px;
      width: 50px;
    }
    .deal-img-blur {
      left: -50%;
    }
    .deal-data {
      justify-content: flex-start;
      top: -23px;
      margin-bottom: -20px;
      margin-left: 60px;
    }
    .deal-data-value {
      font-size: 0.85em;
      margin-right: 10px;

      img {
        height: 10px;
      }
      &.hidden {
        display: none;
      }
    }
    .whitespace {
      display: none;
    }
  }
}

a {
  position: relative;
  overflow: hidden;
  width: 100%;
  @include field;
  align-items: center;
  border-radius: 2px;
  padding: 10px 20px;
  margin-bottom: 8px;
  @include ease(0.05s);

  &:hover {
    opacity: 1 !important;
    transform: scale(0.995);
  }
  &:active {
    transform: scale(0.995);
  }
  &:before {
    border-radius: 0;
  }
}
</style>
