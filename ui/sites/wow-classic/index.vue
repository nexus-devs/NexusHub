<template>
  <div>
    <navigation />
    <app-content>
      <header>
        <div class="background-container">
          <div class="background" />
        </div>
        <div class="container search-container">
          <div class="logo-container">
            <div class="search-logo">
              <img src="/img/brand/nexushub-logo-typeface-wow-classic.svg" alt="Nexushub Logo" class="logo">
              <span>.co</span>
            </div>
            <div class="tsm-logo">
              <span>Powered by</span>
              <img src="/img/wow-classic/tsm-logo.svg" alt="TradeSkillMaster Logo" class="logo">
            </div>
          </div>

          <div class="search-bar">
            <search :focus="true" />
            <search-button :path="'/wow-classic/search'" />
          </div>

          <h2>All WoW Classic Auction House data in one place!</h2>
        </div>
      </header>

      <!-- Market Overview -->
      <section>
        <div class="container">
          <div class="row overview">
            <div class="col-b">
              <h2 class="sub">
                Most Profitable Deals
              </h2>
              <div class="row-margin deals">
                <router-link v-for="deal in deals" :key="deal.itemId" :to="`/wow-classic/items/${server}/${deal.itemId}`" class="col-b item">
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
              <div class="expand-deals">
                <router-link :to="`/wow-classic/deals/${server}`">
                  More Deals
                  <img src="/img/ui/arrow-right.svg" alt="Powered by TSM" class="ico-20">
                </router-link>
              </div>
            </div>
            <div class="col-b">
              <h2 class="sub">
                Most Profitable Recipes
              </h2>
              <div class="row-margin deals">
                <router-link v-for="deal in craftingDeals" :key="deal.itemId" :to="`/wow-classic/items/${server}/${deal.itemId}/crafting`" class="col-b item">
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
                      <span class="highlight">{{ parsePrice(deal.profit) }}</span>
                      <br>
                      <span class="sub">Crafting Profit</span>
                    </template>
                  </module>
                </router-link>
              </div>
              <div class="expand-deals">
                <router-link :to="`/wow-classic/recipes/${server}`">
                  More Recipes
                  <img src="/img/ui/arrow-right.svg" alt="Powered by TSM" class="ico-20">
                </router-link>
              </div>
            </div>
          </div>
          <ad name="wow-classic-index-overview" />
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
          <ad name="wow-classic-index-news" />
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
    parallel.push(this.$cubic.get(`/wow-classic/v1/crafting/${slug}/deals`))
    parallel.push(this.$cubic.get(`/wow-classic/v1/items/${slug}/deals`))
    parallel.push(this.$cubic.get('/wow-classic/v1/news'))
    const [crafting, deals, news] = await Promise.all(parallel)

    parallel = []
    for (const deal of deals) parallel.push(this.$cubic.get(`/wow-classic/v1/items/${slug}/${deal.itemId}`))
    const itemData = await Promise.all(parallel)

    for (const deal of deals) {
      const item = itemData.shift()
      deal.icon = item.icon
      deal.name = item.name
      deal.percentage = ((deal.marketValue - deal.minBuyout) / deal.minBuyout * 100).toFixed(2)
    }
    for (const deal of crafting) deal.icon = `https://render-classic-us.worldofwarcraft.com/icons/56/${deal.icon}.jpg`

    store.commit('setCraftingDeals', crafting)
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
    craftingDeals () {
      return this.$store.state.wowclassic.craftingDeals
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
    title: 'NexusHub · All WoW Classic Auction House data in one place!',
    meta: meta({
      title: 'NexusHub · All WoW Classic Auction House data in one place!',
      description: 'Get up-to-date data and prices from all World of Warcraft: Classic servers and auction houses!',
      image: 'https://nexushub.co/img/brand/og-banner-wow-classic.jpg'
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
@keyframes fadeinUpSearch {
  from {
    opacity: 0;
    transform: translateY(15px);
  }
  to {
    opacity: 0.95;
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
    transform: scale3d(1.05, 1.05, 1.05);
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
  @include gradient-background-dg($color-bg-lighter, $color-bg);

  .background-container {
    position: absolute;
    overflow: hidden;
    width: 100%;
    height: 100%;
  }
  .background {
    background: url('/img/ui/thumbnail-wow-classic.jpg') -80px -120px;
    opacity: 0.58;
    background-size: calc(100% + 80px);
    width: 100%;
    height: 100%;
    animation-name: pulse;
    animation-timing-function: ease-in-out;
    animation-duration: 35s;
    animation-iteration-count: infinite;

    @media (max-width: $breakpoint-s) {
      background-size: cover;
      background-position-y: 0;
    }
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
      filter: drop-shadow(0px 0px 20px rgba(0,0,0,0.35));
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
    animation: fadeinUpSearch 0.6s forwards;
    animation-delay: 0.2s;
    width: 55%;
  }

  .logo-container {
    opacity: 0;
    animation: fadeinUp 0.6s forwards;
    animation-delay: 0.1s;

    .search-logo {
      display: flex;
      align-items: center;

      .logo {
        height: 50px;
        filter: drop-shadow(0px 0px 20px rgba(0,0,0,0.35));
      }
      span {
        font-size: 2.2em;
        color: white;
        font-family: 'Circular';
        filter: drop-shadow(0px 0px 20px rgba(0,0,0,0.35));
      }
    }

    .tsm-logo {
      position: relative;
      top: -4px;
      display: flex;
      align-items: center;
      justify-content: flex-end;

      .logo {
        position: relative;
        top: -0.85px;
        height: 10px;
        margin-left: 3px;
        filter: drop-shadow(0px 0px 20px rgba(0,0,0,0.35));
      }
      span {
        @include uppercase();
        font-size: 14px;
        line-height: 12px;
        color: white;
        font-family: 'Circular';
        filter: drop-shadow(0px 0px 20px rgba(0,0,0,0.35));
      }
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

    .search-logo {
      .logo {
        height: 40px !important;
      }
      span {
        font-size: 1.8em !important;
      }
    }
    .tsm-logo {
      top: -2px !important;
      .logo {
        height: 8px !important;
      }
      span {
        font-size: 10px !important;
        line-height: 9px !important;
      }
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
  .deals {
    @media (max-width: $breakpoint-s) {
      flex-direction: column;
    }

    .item {
      min-width: 0;
      flex-basis: 40%;
      border-radius: 2px;
      transition-duration: 0.5s !important;
      max-width: 100%;
      height: auto; // Safari fix

      @media (max-width: $breakpoint-s) {
        flex-basis: 0; // Safari fix
      }

      /deep/ .header {
        padding: 20px 20px 0;
        overflow: hidden;
        white-space: nowrap;
        h3 {
          max-width: calc(100% - 42px);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
      /deep/ .body {
        height: auto; // Needed for Safari and Samsung Browser
        padding: 0 25px 5px;

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
  }

  .overview {
    margin: -20px;

    & > *[class*="col-b"] {
      margin: 20px;
      @media (max-width: $breakpoint-s) {
        max-width: 100%;
        margin: 0 0 20px;
      }
    }

    @media (max-width: $breakpoint-s) {
      margin: 0;
    }

    .expand-deals {
      display: flex;
      margin-top: 20px;

      a {
        font-size: 0.75em;
        @include uppercase;
        @include ie;
        letter-spacing: 0.5;
        padding: 5px 10px;
        margin-left: auto;
        left: 10px;
        align-items: center;
        position: relative;

        &:hover {
          color: white !important;
        }

        img {
          height: 20px;
          margin-top: -3px;
          margin-left: -2px;
        }
      }
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
