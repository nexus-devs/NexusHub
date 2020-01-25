<template>
  <div>
    <navigation />
    <app-content>
      <div class="landing-page spa-section">
        <div class="background-container">
          <div class="background" />
        </div>

        <div class="container">
          <div class="row">
            <div class="nexushub-logo">
              <img src="/img/brand/nexushub-logo-typeface.svg" alt="Nexushub Logo" class="logo">
              <span>.co</span>
            </div>
          </div>

          <div class="row">
            <h2 class="subtitle">
              Making Games more transparent!
            </h2>
          </div>

          <div class="row games">
            <router-link to="/warframe">
              <module>
                <template slot="body">
                  <div class="image">
                    <img src="/img/ui/thumbnail-warframe.png" alt="Warframe Thumbnail">
                    <div class="shade" />
                  </div>
                </template>
                <template slot="footer">
                  <h3>Warframe</h3>
                </template>
              </module>
            </router-link>
            <router-link to="/wow-classic">
              <module>
                <template slot="body">
                  <div class="image">
                    <img src="/img/ui/thumbnail-wow-classic.jpg" alt="World of Warcraft: Classic Thumbnail">
                    <div class="shade" />
                  </div>
                </template>
                <template slot="footer">
                  <h3>World of Warcraft: Classic</h3>
                </template>
              </module>
            </router-link>
          </div>

          <div class="row scrolldown">
            <img src="/img/ui/arrow-right.svg" class="ico-h-32 interactive" alt="Scroll down" @click="scrollDown()">
          </div>
        </div>
      </div>

      <section ref="blog" class="spa-section">
        <div class="container blog">
          Test
        </div>
      </section>
    </app-content>
  </div>
</template>


<script>
import appContent from 'src/app-content.vue'
import meta from 'src/components/seo/meta.js'
import module from 'src/components/ui/module.vue'
import navigation from 'src/components/ui/nav/general.vue'

export default {
  components: {
    appContent,
    module,
    navigation
  },

  methods: {
    scrollDown () {
      const el = this.$refs.blog
      const position = el.getBoundingClientRect().top - 56 // Navbar offset
      window.scrollTo({ top: position, behavior: 'smooth' })
    }
  },

  head: {
    title: 'NexusHub · Making Games more transparent!',
    meta: meta({
      title: 'NexusHub · Making Games more transparent!',
      description: 'Get up-to-date trading data and prices for Warframe and World of Warcraft: Classic.'
    })
  }
}
</script>


<style lang='scss' scoped>
@import '~src/styles/partials/importer';

.spa-section {
  position: relative;
  width: 100%;
  height: calc(100vh - 56px);
  min-height: 600px;
}

.landing-page {
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
}
.row {
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  flex-wrap: nowrap;

  @media (max-width: $breakpoint-s) {
    flex-wrap: wrap;
  }
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
.container {
  display: flex;
  flex-direction: column;
  height: 100%;

  .nexushub-logo {
    animation: fadeinUp 0.6s forwards;
    animation-delay: 0.1s;
    margin-top: 150px;
    margin-bottom: 25px;
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
    @media (max-width: $breakpoint-s) {
      font-size: 1.2em;
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

.module {
  margin: 15px;
  position: relative;
  overflow: hidden;

  @media (max-width: $breakpoint-s) {
    margin-left: 0;
    margin-right: 0;
  }

  &:hover {
    @include shadow-3;

    /deep/ .footer {
      background: rgba($color-bg-transparent, 0.8)
    }
  }

  /deep/ .header {
    position: relative;
    z-index: 1;
  }

  /deep/ .body {
    min-width: 320px;
    min-height: 80px;

    @media (max-width: $breakpoint-s) {
      min-width: 240px;
      min-height: 70px;
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
    background: $color-bg-transparent;

    h3 {
      color: $color-primary;
      @include uppercase;
      padding: 5px 10px;
      letter-spacing: 0.5;
      position: relative;
    }
  }
}
</style>
