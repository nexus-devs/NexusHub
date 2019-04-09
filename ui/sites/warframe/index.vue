<template>
  <div>
    <navigation/>
    <sidebar>
      <sidebar-search/>
    </sidebar>
    <app-content>
      <header>
        <div class="background-container">
          <div class="background"/>
        </div>
        <div class="container search-container">
          <div class="row">
            <search/>
            <search-button/>
          </div>
          <span>Unifying Warframe's Marketplace.</span>
        </div>
      </header>

      <!-- Realtime Orders -->
      <section>
        <div class="container">
          <div class="row-margin overview">
            <div class="col-b-4">
              <h2 class="sub">Market Overview</h2>
              <div class="realtime">
                <opm/>
                <div class="most-traded row">
                  <router-link v-for="order in opm.mostTraded" :key="order.item" :to="`/warframe/items/${order.item.split(' ').join('-').toLowerCase()}/trading`" class="item col interactive">
                    <module>
                      <template slot="header">
                        <div class="img">
                          <object :data="`/img/warframe/items/${order.item.split(' ').join('-').toLowerCase()}.png`" type="image/png">
                            <img :src="`/img/warframe/items/${order.item.split(' ').join('-').toLowerCase()}.jpeg`" :alt="order.item">
                          </object>
                        </div>
                        <h3>{{ order.item }}</h3>
                      </template>
                      <template slot="body">
                        <span class="highlight">{{ order.amount }}</span>
                        <br>
                        <span class="sub"> Orders for {{ order.item }}</span>
                      </template>
                    </module>
                  </router-link>
                </div>
              </div>
            </div>
            <div class="col-b activity-data">
              <h2 class="sub">Busy Hours</h2>
              <activity/>
            </div>
          </div>
        </div>
      </section>

      <!-- Patch logs -->
      <section>
        <div class="container">
          <h2 class="sub">Latest Patchlogs</h2>
          <div class="row-margin patchlogs">
            <patchlog v-for="patchlog in patchlogs" :key="patchlog.date" :patchlog="patchlog" :overview="true" class="col-b"/>
          </div>
        </div>
      </section>
    </app-content>
  </div>
</template>



<script>
import activity from 'src/components/warframe/activity.vue'
import appContent from 'src/app-content.vue'
import module from 'src/components/ui/module.vue'
import navigation from 'src/components/ui/nav/warframe.vue'
import opm from 'src/components/warframe/opm-global.vue'
import patchlog from 'src/components/warframe/patchlog.vue'
import search from 'src/components/search/input.vue'
import searchButton from 'src/components/search/modules/button.vue'
import storeModule from 'src/store/warframe/warframe.js'

export default {
  components: {
    navigation,
    appContent,
    opm,
    activity,
    module,
    patchlog
  },

  computed: {
    opm () {
      return this.$store.state.opm.all
    },
    activity () {
      return this.$store.state.busyhours.data
    },
    patchlogs () {
      return this.$store.state.warframe.patchlogs
    }
  },

  mounted () {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)

    if (!isMobile) {
      this.$refs.input.focus()
    }
  },

  async asyncData () {
    this.$store.commit('setWarframePatchlogs', await this.$cubic.get('/warframe/v1/patchlogs'))
  },

  storeModule
}
</script>



<style lang='scss' scoped>
@import '~src/styles/partials/importer';

header {
  position: relative;
  display: flex;
  height: 50vh;
  min-height: 500px;
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
    width: 100%;

    .row {
      margin-top:10px;
      opacity: 0;
      animation: fadeinUp 0.7s forwards;
      animation-delay: 0.3s;
    }
  }

  // Search fields
  /deep/ .field {
    position: relative;
    background: $color-bg-dark;
    border-radius: 2px;
    padding: 15px;
    margin: 1px;
    @include shadow-1;

    .input-container, .button-container {
      display: inline-block;
      vertical-align: middle;
    }
    .button-container {
      margin-top: 5px;
      margin-left: 10px;
      float:right;
    }
    label {
      font-size: 0.85em;
      font-weight: 400;
      color: white;
    }
    input, .input {
      position: relative;
      z-index: 1;
      display: inline-block;
      color: white;
      margin-bottom: -10px;
      margin-top: -3px;

      span {
        @include ease(0.15s);
      }
    }
    input {
      padding: 10px 0;
      width: 80%;
    }
    .interactive {
      margin-left:-10px;
    }
    .autocomplete {
      position: absolute;
      left: 15px;
      margin-top: 7px;
      z-index: 0;
    }
    .autocomplete-type {
      position: absolute;
      right: 10px;
      padding: 7px 10px;
    }
  }

  /deep/ .col-b .tools {
    position: absolute;
    border-radius: 2px;
    background: rgba(27, 32, 37, 0.75);
    width: calc(33.33% - 2px);
    margin-top: -1px;
    margin-left: 1px;
    z-index: 2;

    @media (max-width: $breakpoint-s) {
      width: calc(100% - 2px);
      background: $color-bg-darker;
    }

    // Input Suggestions
    .suggestion {
      padding: 15px;
      cursor: pointer;
      @include ease(0.1s);

      &:hover {
        background: $color-bg-darker;
      }
      .ico-36 {
        position: relative;
        overflow: hidden;
        text-align: center;
        border-radius: 2px;
        margin-right: 10px;

        img {
          position: relative;
          left: -50%;
          max-width: 200%;
          z-index: 1;
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
        font-size: 0.9em;
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
    margin-left: 20px;
    margin-right: -15px;
    margin-bottom: -15px;

    .item {
      padding: 0;
      border-radius: 2px;
      flex-basis: 33%;
      margin-right: 15px;
      margin-bottom: 15px;
      transition-duration: 0.5s !important;

      &:hover {
        @include gradient-background-dg(#3c4451, #353d49);
      }
      &:before {
        border-radius: 2px;
      }
      &:nth-of-type(n + 5) {
        display: none;
      }
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

/**
 * Keyframes for search bar
 */
@keyframes fadeinUp {
  from {
    opacity: 0;
    transform: translateY(25px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes moveUp {
  from {
    transform: translateY(50px);
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
</style>
