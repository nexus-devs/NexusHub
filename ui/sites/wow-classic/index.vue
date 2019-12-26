<template>
  <div>
    <navigation />
    <app-content>
      <header>
        <div class="background-container">
          <div class="background" />
        </div>
        <div class="container search-container">
          <div class="search-logo">
            <img src="/img/brand/nexushub-logo-typeface-wow-classic.svg" alt="Nexushub Logo" class="logo">
            <span>.co</span>
          </div>

          <div class="search-bar">
            <search :focus="true" />
            <search-button />
          </div>

          <h2>Never miss out on a trade again!</h2>
        </div>
      </header>

      <!-- Market Overview -->
      <section>
        <div class="container">
          <div class="row-margin overview">
            <div class="col-b-4">
              <h2 class="sub">
                Possible Deals
              </h2>
              <div class="realtime">
                <div class="most-traded row">
                  <router-link v-for="deal in deals" :key="deal.itemId" :to="`/wow-classic/items/${server}/${deal.itemId}`" class="item col interactive">
                    <module>
                      <template slot="header">
                        <div class="img">
                          <object :data="deal.icon" type="image/png">
                            <img :src="deal.icon" :alt="deal.name">
                          </object>
                        </div>
                        <h3>{{ deal.name }}</h3>
                      </template>
                      <template slot="body">
                        <span class="highlight">{{ parsePrice(deal.dealDiff) }}</span>
                        <span :class="{ negative: deal.percentage < 0 }" class="price-diff">
                          <indicator :diff="deal.percentage" /> {{ Math.abs(deal.percentage) }}%
                        </span>
                        <br>
                        <span class="sub">cheaper than Market Value</span>
                      </template>
                    </module>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
          <ad name="warframe-index-market-overview" />
        </div>
      </section>

      <!-- News -->
      <section>
        <div class="container">
          <h2 class="sub">
            Latest News
          </h2>
          <div class="row-margin patchlogs">
            <news-article v-for="article in news" :key="article.date" :patchlog="article" :overview="true" class="col-b" />
          </div>
          <ad name="warframe-index-patchlogs" />
        </div>
      </section>
    </app-content>
  </div>
</template>



<script>
import ad from 'src/components/ads/nitroAds.vue'
import appContent from 'src/app-content.vue'
import indicator from 'src/components/charts/indicator.vue'
import meta from 'src/components/seo/meta.js'
import module from 'src/components/ui/module.vue'
import navigation from 'src/components/ui/nav/wow-classic.vue'
import newsArticle from 'src/components/wow-classic/news-article.vue'
import search from 'src/components/search/wow-classic.vue'
import searchButton from 'src/components/search/modules/button.vue'
import storeModule from 'src/store/wow-classic/wowclassic.js'
import utility from 'src/components/wow-classic/utility.js'

export default {
  components: {
    ad,
    navigation,
    appContent,
    newsArticle,
    search,
    searchButton,
    module,
    indicator
  },

  async asyncData ({ store, route }) {
    const slug = route.params.slug

    let parallel = []
    parallel.push(this.$cubic.get(`/wow-classic/v1/items/${slug}/deals?limit=6`))
    parallel.push(this.$cubic.get('/wow-classic/v1/news'))
    const [deals, news] = await Promise.all(parallel)

    parallel = []
    for (const deal of deals) parallel.push(this.$cubic.get(`/wow-classic/v1/items/${slug}/${deal.itemId}`))
    const itemData = await Promise.all(parallel)

    for (const deal of deals) {
      const item = itemData.shift()
      deal.icon = item.icon
      deal.name = item.name
      deal.percentage = ((deal.marketValue - deal.minBuyout) / deal.minBuyout * 100).toFixed(2)
    }

    store.commit('setDeals', deals)
    store.commit('setNews', news)
  },

  computed: {
    news () {
      return this.$store.state.wowclassic.news
    },
    deals () {
      return this.$store.state.wowclassic.deals
    },
    server () {
      return this.$store.state.servers.server
    }
  },

  created () {
    this.parsePrice = utility.parsePrice
  },

  storeModule,

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

/**
 * Keyframes for search bar
 */
@keyframes fadeinUp {
  from {
    opacity: 0;
    transform: translateY(15px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes moveUp {
  from {
    transform: translateY(30px);
  }
  to {
    transform: translateY(0);
  }
}
@keyframes pulse {
  0% {
    transform: scaleX(1);
  }
  50% {
    transform: scale3d(1.15,1.15,1.15);
  }
  100% {
    transform: scaleX(1);
  }
}

header {
  position: relative;
  display: flex;
  height: 45vh;
  min-height: 400px;
  width: 100%;
  align-items: center;
  @include gradient-background-dg($color-bg-lighter, $color-bg-light);

  .background-container {
    position: absolute;
    overflow: hidden;
    width: 100%;
    height: 100%;
  }
  .background {
    background: url('/img/warframe/index-blob.svg');
    background-size: cover;
    width: 100%;
    height: 100%;
    animation-name: pulse;
    animation-timing-function: ease-in-out;
    animation-duration: 35s;
    animation-iteration-count: infinite;
  }

  /**
  * Search bar
  */
  .search-container {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;

    h2 {
      margin-top: 30px;
      text-align: center;
      opacity: 0;
      animation: fadeinUp 0.6s forwards;
      animation-delay: 0.3s;
    }
  }

  /deep/ .search-button {
    position: absolute;
    top: 9px;
    right: 10px;
    z-index: 2;

    .text {
      display: none;
    }
  }

  .search-bar {
    position: relative;
    z-index: 1; // Overlay slogan beneath search bar with suggestions
    margin-top: 20px;
    opacity: 0;
    animation: fadeinUp 0.6s forwards;
    animation-delay: 0.2s;
    width: 55%;
  }

  .search-logo {
    display: flex;
    align-items: center;
    opacity: 0;
    animation: fadeinUp 0.6s forwards;
    animation-delay: 0.1s;

    .logo {
      height: 50px;
    }
    span {
      font-size: 2.2em;
      color: white;
      font-family: 'Circular';
    }
  }

  @media (max-width: $breakpoint-m) {
    .search-bar {
      width: 100% !important;
    }
  }
  @media (max-width: $breakpoint-s) {
    min-height: 320px;
    height: 35vh;

    .logo {
      height: 40px !important;
    }
    .search-logo span {
      font-size: 1.8em !important;
    }
    .search-bar {
      margin-top: 15px !important;
      width: 100% !important;
    }
  }

  // Search fields
  /deep/ .search .field {
    position: relative;
    margin: auto;
    border-radius: 999px;
    background: $color-bg-dark;
    z-index: 2;
    width: 100%;

    label {
      display: none;
    }
    input, .input {
      position: relative;
      z-index: 2;
      display: inline-block;
      color: white;
      width: 100%;
      padding: 14px 18px;
      @include ease(0.15s);

      &::placeholder {
        color: $color-font-subtle !important;
      }
      span {
        @include ease(0.15s);
      }
    }
    .autocomplete {
      position: absolute;
      left: 18px;
      top: 14px;
      z-index: 1;
    }
    .autocomplete-type {
      position: absolute;
      z-index: 1;
      right: 70px; // beyond search button
      top: 14px;

      @media (max-width: $breakpoint-s) {
        display: none; // Would clip with input
      }
    }
  }

  /deep/ .tools {
    position: absolute;
    border-radius: 2px;
    background: $color-bg-dark;
    width: 100%;
    margin-top: -25px; // Reach center of input radius
    z-index: 0;
    @include shade-0;

    // Input Suggestions
    .suggestion {
      padding: 15px;
      cursor: pointer;

      &:hover {
        background: $color-bg-darker;
      }
      &:first-of-type {
        padding-top: 40px;
      }
      .ico-36 {
        position: relative;
        overflow: hidden;
        text-align: center;
        border-radius: 2px;
        margin-right: 10px;

        img {
          position: relative;
          max-width: 200%;
          z-index: 1;
          border: 1px solid $color-bg-darker;
          // Accomodate for border
          left: -1px;
          top: -1px;
        }
      }
      .suggestion-main {
        display: inline-block;
        vertical-align: middle;

        .suggestion-name, .suggestion-type {
          display: block;
        }
        .suggestion-name {
          color: white;
        }
        .suggestion-type {
          margin-top: -3px;
          font-size: 0.9em;
        }
      }
      .suggestion-data {
        display: inline-block;
        vertical-align: middle;
        float: right;
        font-family: 'Circular';
        font-size: 0.9em;
        color: white;
        margin: 7px 0;
        padding: 3px 10px;
      }
    }
  }
}

#app {
  .realtime {
    display: inline-flex;

    @media (max-width: $breakpoint-s) {
      flex-direction: column;
    }
  }
  .most-traded {
    position: relative;
    overflow: hidden;
    display: inline-flex;
    flex-wrap: wrap;
    // margin-left: 20px;
    margin-right: -15px;
    margin-bottom: -15px;

    .item {
      padding: 0;
      border-radius: 2px;
      flex-basis: 25%;
      margin-right: 15px;
      margin-bottom: 15px;
      transition-duration: 0.5s !important;

      &:hover {
        @include gradient-background-dg(#3c4451, #353d49);
      }
      &:before {
        border-radius: 2px;
      }
      /* &:nth-of-type(n + 5) {
        display: none;
      } */
      /deep/ .header {
        padding: 20px 20px 0;
      }
      /deep/ .body {
        padding: 0 25px 5px;
        margin-top: 20px;

        .highlight {
          font-size: 1.3em;
        }
        .sub {
          display: inline-block;
          margin-top: 2px;
          font-size: 0.85em;
          color: $color-font-body;
        }
      }
      span.negative {
        color: $color-error;
      }
      .price-diff {
        color: $color-positive;
      }
    }
    @media (max-width: $breakpoint-s) {
      margin-left: 0;
      margin-top: 20px;
    }
  }

  .overview {
    margin: -20px;

    & > *[class*="col-b"] {
      margin: 20px;
    }
  }

  .activity-data {
    @media (max-width: $breakpoint-m) {
      flex-basis: 100%;
    }
  }

  .patchlogs {
    justify-content: flex-start;

    /deep/ .patchlog {
      width: 33%;

      @media (max-width: $breakpoint-m) {
        max-width: calc(50% - 20px);
      }
      @media (max-width: $breakpoint-s) {
        max-width: none;
      }
    }
  }
}
</style>