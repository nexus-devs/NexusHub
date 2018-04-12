<template>
  <div>
    <sidebar>
      <sidebar-search></sidebar-search>
    </sidebar>
      <app-content>
        <header>
          <div class="background">
            <video playsinline autoplay muted loop>
              <source src="https://giant.gfycat.com/IckyEssentialHamadryad.webm" type="video/webm">
            </video>
          </div>
          <div class="search-components container">
            <h1>
              <img src="/img/brand/nexus-stats-logo-bw.svg" alt="nexus-stats" class="ico-32">
              <span>Item Prices from the Trade Chat.</span>
            </h1>
            <div class="row">
              <search></search>
              <timerange></timerange>
              <rank>
                <search-button></search-button>
              </rank>
            </div>
          </div>
        </header>
      </app-content>
  </div>
</template>



<script>
import appContent from 'src/app-content.vue'
import sidebar from 'src/components/ui/sidebar.vue'
import search from 'src/components/search/input.vue'
import timerange from 'src/components/search/time.vue'
import rank from 'src/components/search/rank.vue'
import searchButton from 'src/components/search/modules/button.vue'
import sidebarSearch from 'src/components/ui/sidebar/search.vue'


export default {
  components: {
    'app-content': appContent,
    sidebar,
    'sidebar-search': sidebarSearch,
    search,
    timerange,
    rank,
    'search-button': searchButton
  }
}
</script>



<style lang='scss' scoped>
@import '~src/styles/partials/importer';

header {
  position: relative;
  display: flex;
  height: 45vh;
  min-height: 500px;
  width: 100%;
  align-items: center;
  @include gradient-background-dg(#596570, $color-bg-light);

  .background {
    position: absolute;
    overflow: hidden;
    top: 25%;
    left: 50%;
    min-width: 100%;
    min-height: 100%;
    width: auto;
    height: auto;
    transform: translateX(-50%) translateY(-25%);
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

  .search-components {
    width: 100%;
  }
  @media (max-width: $breakpoint-m) {
    padding-top: 40px;
  }

  /**
   * Search bar
   */
 .search-components {
   h1 {
     font-size: 1.4em;
     transform: translateY(50px);
     animation: moveUp 0.7s forwards;
     animation-delay: 0.15s;

     img {
       margin-right: 5px;

       @media (max-width: $breakpoint-s) {
         display: none;
       }
     }
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
   background: rgba(27, 32, 37, 0.7);
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
     @include ease-out(0.25s);

     &:hover {
       background: $color-bg-dark;
     }
     .ico-36 {
       position: relative;
       overflow: hidden;
       text-align: center;
       background: $color-bg-light;
       border-radius: 2px;
       margin-right: 10px;

       img {
         position: relative;
         left: -50%;
         max-width: 200%;
         z-index: 1;
       }

       .backdrop {
         position: relative;
         top: -50px;
         z-index: 0;
         filter: blur(15px);
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
       border-left: 1px solid $color-subtle;
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
           background: $color-bg-light;
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
     transform: scale(0.8) translateY(-50%);
     transform-origin: 50% 20%;
     max-width: 150px;
     color: white;
     text-align: center;
     opacity: 0;
     pointer-events: none;
     @include ease(0.15s);

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
</style>
