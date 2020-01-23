<template>
  <div>
    <navigation />
    <app-content>
      <div class="landing-page">
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
        </div>
      </div>
    </app-content>
  </div>
</template>


<script>
import appContent from 'src/app-content.vue'
import meta from 'src/components/seo/meta.js'
import navigation from 'src/components/ui/nav/general.vue'

export default {
  components: {
    appContent,
    navigation
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

.landing-page {
  position: relative;
  width: 100%;
  min-height: calc(100vh - 56px);
  // padding-bottom: 56px;
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
.container {
  .row {
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    flex-wrap: nowrap;

    @media (max-width: $breakpoint-s) {
      flex-wrap: wrap;
    }
  }

  .nexushub-logo {
    animation: fadeinUp 0.6s forwards;
    animation-delay: 0.1s;
    margin-top: 75px;
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
}
</style>
