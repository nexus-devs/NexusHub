<template>
  <div>
    <sidebar>
      <sidebar-search/>
    </sidebar>
    <app-content>
      <header>
        <div class="background-container">
          <div class="background"/>
        </div>
        <div class="search-components container">
          <h1>Unifying Warframe's Marketplace.</h1>
          <div class="row">
            <search/>
            <timerange/>
            <rank>
              <search-button/>
            </rank>
          </div>
        </div>
      </header>
      <section>
        <div class="container">
          Realtime traders right now (placeholder)<br>
          <tween-num :value="opm.active" :duration="1000" easing="easeInOutQuad" class="active-number"/>
          <br>
          <br>
          Trade Chat - {{ opm.sources.tradeChat }}% <br>
          Warframe.market - {{ opm.sources.wfm }}%
          <br>
          <br>
          TODO: Add most traded items to the right of this box - link to item page.
        </div>
      </section>
    </app-content>
  </div>
</template>



<script>
import appContent from 'src/app-content.vue'
import sidebar from 'src/components/ui/sidebar/sidebar.vue'
import search from 'src/components/search/input.vue'
import timerange from 'src/components/search/time.vue'
import rank from 'src/components/search/rank.vue'
import searchButton from 'src/components/search/modules/button.vue'
import sidebarSearch from 'src/components/ui/sidebar/search.vue'
import tweenNum from 'vue-tween-number'
let updateInterval

export default {
  components: {
    'app-content': appContent,
    sidebar,
    'sidebar-search': sidebarSearch,
    search,
    timerange,
    rank,
    'search-button': searchButton,
    tweenNum
  },

  // DEBUG: Everything below will be put into its own component eventually.

  computed: {
    opm () {
      return this.$store.state.opm.all
    }
  },

  beforeMount () {
    this.$cubic.subscribe(`/warframe/v1/orders/opm`, opm => {
      this.$store.commit('setOpmAll', opm)
    })
    updateInterval = setInterval(async () => {
      const opm = await this.$cubic.get(`/warframe/v1/orders/opm`)
      this.$store.commit('setOpmAll', opm)
    }, 1000 * 60)
  },

  beforeDestroy () {
    this.$cubic.unsubscribe(`/warframe/v1/orders/opm`)
    clearInterval(updateInterval)
  },

  async asyncData () {
    const opm = await this.$cubic.get('/warframe/v1/orders/opm')
    this.$store.commit('setOpmAll', opm)
  },

  storeModule: {
    name: 'opm',
    state: {
      all: {
        total: 0,
        intervals: [],
        sources: {
          wfm: 0.5,
          tradeChat: 0.5
        }
      },
      item: {
        total: 0,
        intervals: [],
        sources: {
          wfm: 0.5,
          tradeChat: 0.5
        }
      }
    },
    mutations: {
      setOpmAll (state, opm) {
        state.all = opm
      },
      setOpmItem (state, opm) {
        state.item = opm
      }
    }
  }
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
  video {
    position:absolute;
    top: 25%;
    left: 50%;
    min-width: 100%;
    min-height: 100%;
    width: auto;
    height: auto;
    opacity: 0.45;
    filter: blur(5px);
    background: $color-bg;
    transform: translateX(-50%) translateY(-25%);
  }

  /**
   * Search bar
   */
 .search-components {
   width: 100%;

   h1 {
     display: inline-block;
     vertical-align: middle;
     font-size: 1.8em;
     animation: moveUp 0.7s forwards;
     animation-delay: 0.15s;
     transform: translateY(50px);
   }
   .row {
     margin-top:10px;
     opacity: 0;
     animation: fadeinUp 0.7s forwards;
     animation-delay: 0.3s;
   }
   @media (max-width: $breakpoint-s) {
     .search-component {
       width: 100%;
     }
   }
 }

 // Search fields
 /deep/ .col-b .field {
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
     padding-top: 10px;
     padding-bottom: 9px;
     width: 80%;
   }
   .a-ie {
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

   // Time picker
   &.timepicker {
     opacity: 0;
     pointer-events: none;
     transform: translateY(-10px);
     @include ease(0.1s);

     &.active {
       opacity: 1;
       pointer-events: all;
       transform: translateY(0);
     }
     .suggestions {
       padding: 10px 15px;

       .col {
         display: flex;
         justify-content: center;
         align-items: center;
         text-align: center;
         color: white;
         line-height: 1;
         border-radius: 2px;
         background: $color-bg-dark;
         font-size: 0.9em;
         padding: 10px;

         &:hover {
           background: $color-bg-lighter;
         }
         &:not(:last-of-type) {
           margin-right: 5px;
         }
         &::before {
           border-radius: 2px;
         }
       }
     }
   }

   // Rank selection
   &.ranks {
     top: 50%;
     transform: scale(0.9) translateY(-50%);
     transform-origin: 50% 20%;
     max-width: 150px;
     color: white;
     text-align: center;
     opacity: 0;
     pointer-events: none;
     background: $color-bg-dark;
     @include ease(0.15s);
     @include shadow-1;

     &.active {
       opacity: 1;
       pointer-events: all;
       transform: scale(1) translateY(-50%);
     }
     .ranks-head, .ranks-input {
       border-radius: 2px;
       padding: 10px 20px;
       background: $color-bg-dark;
       width: calc(100% - 40px);

       h3 {
         display: inline-block;
         vertical-align: middle;
         font-weight: 400;
         font-size: 0.9em;

         & + span {
           display: inline-block;
           vertical-align: middle;
           font-size: 0.9em;
           color: $color-font-body;
         }
       }
       input {
         max-width: calc(100% - 20px);
         text-align: center;
         font-size: 0.9em;
         border-bottom: 1px solid $color-subtle;
       }
     }
     .suggestions {
       max-height: 300px;
       overflow-y: scroll;
     }
   }
 }

 // Timepicker workaround to highlight active selection
 /deep/ .col-b .field.active {
   .input {
     span:not(.selected) {
       color: $color-font-body;
     }
     .selected {
       color: $color-primary;
     }
     img {
       transform: rotate(-180deg);
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
