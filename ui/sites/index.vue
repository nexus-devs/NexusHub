<template>
  <div>
    <navigation :page-elements="this.$refs" />
    <app-content>
      <div class="background-container">
        <div class="background" />
      </div>

      <div class="container game-container">
        <div class="container" />
        <div class="container">
          <div class="row">
            <div class="nexushub-logo">
              <img src="/img/brand/nexushub-logo-typeface.svg" alt="Nexushub Logo" class="logo">
              <span>.co</span>
            </div>
          </div>

          <div class="row">
            <h2 class="subtitle">
              Providing you with the data for your daily grind!
            </h2>
            <div class="row games">
              <router-link to="/warframe">
                <module class="game-module">
                  <template slot="body">
                    <div class="image">
                      <img src="/img/ui/thumbnail-warframe-small.png" alt="Warframe Thumbnail">
                      <div class="shade" />
                    </div>
                  </template>
                  <template slot="footer">
                    <h3>Warframe</h3>
                    <div class="footer-shade" />
                  </template>
                </module>
              </router-link>
              <router-link to="/wow-classic">
                <module class="game-module">
                  <template slot="body">
                    <div class="image">
                      <img src="/img/ui/thumbnail-wow-classic-small.png" alt="World of Warcraft: Classic Thumbnail">
                      <div class="shade" />
                    </div>
                  </template>
                  <template slot="footer">
                    <h3>World of Warcraft: Classic</h3>
                    <div class="footer-shade" />
                  </template>
                </module>
              </router-link>
            </div>
          </div>
        </div>

        <div class="row scrolldown">
          <img src="/img/ui/arrow-right.svg" class="ico-h-32 interactive" alt="Scroll down" @click="scrollDown()">
        </div>
      </div>


      <section ref="blog">
        <div class="container blog">
          <div class="row-margin">
            <div class="col-b-4">
              <h2 class="sub">
                News
              </h2>
              <blog-preview :blogpost="wowClassicAnnouncement" />
            </div>
          </div>
        </div>
      </section>
    </app-content>
  </div>
</template>


<script>
import appContent from 'src/app-content.vue'
import blogPreview from 'src/components/blog/blog-preview.vue'
import meta from 'src/components/seo/meta.js'
import module from 'src/components/ui/module.vue'
import navigation from 'src/components/ui/nav/index.vue'

export default {
  components: {
    appContent,
    blogPreview,
    module,
    navigation
  },

  data () {
    return {
      wowClassicAnnouncement: {
        title: 'World of Warcraft: Classic announced!',
        date: '2020-01-30 17:00',
        content: [
          'We\'re very happy to announce the launch of a Classic WoW Auction House database and website that we\'ve spent the last few months working on together with TradeSkillMaster!',
          'Through NexusHub, you can monitor and report on current item prices on the Classic WoW Auction House as well as dive in to pricing history for all realms and factions in both regions, completely free. With this data we\'re also able to offer estimated Crafting profits and material price information for your convenience.',
          'In addition, the entire database is available in a fully open and free <a href="https://nexushub.co/developers/api/General/foo">API</a> to integrate in your gold-making spreadsheets, apps or services.',
          'We\'re keen to continue working with TSM and integrating related or requested features on to the site (think having the website notice you when an item hits your sniper price without having to monitor the AH in-game).',
          'You can access the site on desktop and mobile via <a href="https://wow-classic.nexushub.co/">wow-classic.nexushub.co</a> or <a href="https://nexushub.co/wow-classic">nexushub.co/wow-classic</a>',
          'Please share your feedback and questions, we are very excited to hear how you make use of this new tool!'
        ]
      }
    }
  },

  mounted () {
    window.addEventListener('scroll', this.updateOnScroll)
  },

  beforeDestroy () {
    window.removeEventListener('scroll', this.updateOnScroll)
  },

  methods: {
    scrollDown () {
      const el = this.$refs.blog
      const position = el.getBoundingClientRect().top + window.pageYOffset - 56 // Absolute position + Navbar offset
      window.scrollTo({ top: position, behavior: 'smooth' })
    },
    updateOnScroll () {
      const blogEl = this.$refs.blog
      const blogPosition = blogEl.getBoundingClientRect().top + window.pageYOffset - 56 // Absolute position + Navbar offset
      const viewportHeight = window.innerHeight

      let page = 'Start'
      if (window.scrollY >= blogPosition - (viewportHeight / 2)) page = 'Blog'
      this.$store.commit('setActivePage', page)
    }
  },

  head: {
    title: 'NexusHub · Providing you with the data for your daily grind!',
    meta: meta({
      title: 'NexusHub · Providing you with the data for your daily grind!',
      description: 'Get up-to-date trading data and prices for Warframe and World of Warcraft: Classic.'
    })
  }
}
</script>


<style lang='scss' scoped>
@import '~src/styles/partials/importer';

.background-container {
  position: absolute;
  overflow: hidden;
  width: 100%;
  height: calc(100vh - 56px);
  @include gradient-background-dg($color-bg-lighter, $color-bg-light);
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

.row {
  display: flex;
  justify-content: space-around;
  flex-direction: row;
}
.games {
  padding-top: 35px;
  padding-bottom: 35px;
  justify-content: center;

  @media (max-width: $breakpoint-s) {
    padding-top: 10px;
    padding-bottom: 0;
  }
}
.blog {
  flex-direction: row;
  align-items: center;
}
.game-container {
  display: flex;
  flex-direction: column;
  position: relative;
  height: calc(100vh - 56px);
  min-height: 600px;

  .nexushub-logo {
    animation: fadeinUp 0.6s forwards;
    animation-delay: 0.1s;
    margin-bottom: 20px;
    display: flex;
    align-items: center;

    .logo {
      height: 50px;
    }
    span {
      font-size: 2.2em;
      color: white;
      font-family: 'Circular';
    }

    @media (max-width: $breakpoint-s) {
      margin-top: 35px;

      .logo {
        height: 40px !important;
      }

      span {
        font-size: 1.8em !important;
      }
    }
  }

  .subtitle {
    text-align: center;
    @media (max-width: $breakpoint-s) {
      font-size: 1.1em;
    }
  }

  .scrolldown {
    margin-top: auto;
    margin-bottom: 100px;

    @media (max-width: $breakpoint-m) {
      margin-bottom: 30px;
    }

    img {
      transform: rotate(90deg);
      background: rgba(200,225,255,0.1);
    }
  }
}

.game-module {
  margin: 15px;
  position: relative;
  overflow: hidden;
  @include ease(0.2s);
  transform: translateY(0);

  @media (max-width: $breakpoint-s) {
    margin-left: 0;
    margin-right: 0;
  }

  &:hover {
    @include shadow-3;
    transform: translateY(-3px);
  }

  /deep/ .header {
    position: relative;
    z-index: 1;
  }

  /deep/ .body {
    min-width: 320px;
    min-height: 75px;

    @media (max-width: $breakpoint-s) {
      min-width: 240px;
      min-height: 45px;
    }

    .image {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      z-index: 0;

      img {
        width: 100%;
      }

      .shade {
        position: absolute;
        top: 1px; // 1px because the bottom may not cover the image on high res screens
        height: 100%;
        width: 100%;
        @include gradient-background(transparent, rgba(59, 66, 79, 0.3));
      }
    }
  }

  /deep/ .footer {
    justify-content: space-around;
    position: relative;
    z-index: 1;
    background: transparent;

    .footer-shade {
      position: absolute;
      z-index: 0;
      height: 160px;
      width: 100%;
      bottom: 0;
      left: 0;
      @include gradient-background(transparent, $color-bg-transparent);
      @include ease(0.25s);
    }

    h3 {
      position: relative;
      z-index: 1;
      font-family: 'Circular';
      font-size: 1.4em;
      @include uppercase;
      padding: 5px 10px;

      @media (max-width: $breakpoint-s) {
        font-size: 1.2em;
      }
    }
  }
}
</style>
