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

      <!-- Realtime Orders -->
      <section>
        <div class="container">
          <div class="row-pad">
            <div class="col-b-4">
              <h2 class="sub">Market Overview</h2>
              <div class="realtime">
                <opm/>
                <transition-group class="most-traded row">
                  <router-link v-for="order in opm.mostTraded" :key="order.item" :to="`/warframe/items/${order.item.split(' ').join('-').toLowerCase()}/trading`" class="item col">
                    <module>
                      <template slot="header">
                        <div class="img-container">
                          <object :data="`/img/warframe/items/${order.item.split(' ').join('-').toLowerCase()}.png`" type="image/png">
                            <img :src="`/img/warframe/items/${order.item.split(' ').join('-').toLowerCase()}.jpeg`" :alt="order.item">
                          </object>
                        </div>
                        <h3>{{ order.item }}</h3>
                      </template>
                      <template slot="body">
                        <span>{{ order.amount }} Orders</span>
                      </template>
                      <template slot="footer">
                        <router-link :to="`/warframe/items/${order.item.split(' ').join('-').toLowerCase()}/trading`">
                          View Traders
                          <img src="/img/ui/arrow-right.svg" alt="View full patch notes" class="ico-20">
                        </router-link>
                      </template>
                    </module>
                  </router-link>
                </transition-group>
              </div>
            </div>
            <div class="col-b components-container">
              <h2 class="sub">Something else</h2>
            </div>
          </div>
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
import opm from 'src/components/items/opm-global.vue'
import module from 'src/components/ui/module.vue'

export default {
  components: {
    'app-content': appContent,
    sidebar,
    'sidebar-search': sidebarSearch,
    search,
    timerange,
    rank,
    'search-button': searchButton,
    opm,
    module
  },

  computed: {
    opm () {
      return this.$store.state.opm.all
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



/**
 * Actual site content
 */
section {
  padding: 40px 0;
}
.realtime {
  display: inline-flex;
  margin-top: 20px;

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
    @include ie();
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

      .img-container {
        position: relative;
        overflow: hidden;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        vertical-align: middle;
        margin-right: 5px;
        height: 40px;
        width: 40px;
        border-radius: 40px;
        background: $color-bg;

        img, object {
          position: relative;
          max-height: 80%;
        }
      }
    }
    /deep/ .body {
      padding: 20px 25px;
    }
    /deep/ .footer {
      padding: 6px 20px;
    }
  }
  @media (max-width: $breakpoint-s) {
    margin-left: 0;
    margin-top: 20px;
  }
}
</style>
