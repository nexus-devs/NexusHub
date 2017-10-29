<template>
  <div class="search">
    <navigation></navigation>
    <sidebar>
      <sidebar-search></sidebar-search>
    </sidebar>
    <app-content>
      <div class="search-input">
        <div class="g-ct">
          <search></search>
          <div class="search-types">
            <a class="active">All</a>
            <a>Items</a>
            <a>Players</a>
          </div>
        </div>
      </div>
      <section class="relevant">
        <div class="g-ct">
          <div class="suggestion" v-for="i in [1, 2]">
            <div class="suggestion-image">
              <img src="/img/warframe/items/valkyr-prime.png" alt="">
              <img src="/img/warframe/items/valkyr-prime.png" class="blur" alt="">
            </div>
            <div class="suggestion-data">
              <span>Some Item Name</span><br>
              <span>50p</span>
            </div>
          </div>
        </div>
      </section>
      <section class="results">
        <div class="g-ct">
          <div class="filter">
            <h2>Sort By</h2>
            <div class="filter-tags">
              <div class="tag" v-for="i in [1, 2, 3, 4, 5, 6, 7, 8, 9]">
                <span>Price</span>
                <img src="/img/ui/dropdown.svg" class="ico-16" alt="Ascending/Descending">
              </div>
            </div>
            <div class="filter-view">
              <div class="a-ie">
                <img src="/img/ui/list-view.svg" class="ico-20" alt="list">
              </div>
              <div class="a-ie">
                <img src="/img/ui/card-view.svg" class="ico-20" alt="cards">
              </div>
            </div>
          </div>
        </div>
      </section>
    </app-content>
  </div>
</template>



<script>
import appContent from 'src/app-content.vue'
import sidebar from 'src/components/ui/sidebar.vue'
import sidebarSearch from 'src/components/ui/sidebar/search.vue'
import search from 'src/components/search/input.vue'
import navigation from 'src/components/ui/nav.vue'
import uiheader from 'src/components/ui/header.vue'

export default {
  components: {
    'app-content': appContent,
    sidebar,
    'sidebar-search': sidebarSearch,
    search,
    navigation,
    'ui-header': uiheader
  },
  mounted() {
    console.log(this.$route.query)
  }
}
</script>



<style lang="scss" scoped>
@import '~src/styles/partials/importer';

.search-input {
  position: relative;
  z-index: 1;
  border-top: 1px solid $colorSubtleDark;
  @include shadow-1;

  @media (max-width: $breakpoint-m) {
    margin-top: 56px;
    border-top: none;
  }

  .g-ct {
    display: flex;

    @media (max-width: $breakpoint-s) {
      // wrap category
      display: block;
      margin-top: 90px;
    }
  }

  /deep/ {
    .field {
      position: relative;
      margin: 8px 0;
      padding: 8px;
      max-width: 250px;
      border-radius: 2px;
      background: $colorBackgroundDarker;
      @include ease(0.35s);

      @media (max-width: $breakpoint-m) {
        margin: 16px 0;
      }
      @media (max-width: $breakpoint-s) {
        margin: 10px 0;
        max-width: 100%;
      }
      label, br {
        display: none;
      }
      input {
        position: relative;
        z-index: 1;
        width: 100%;
        color: white;
        margin-left: 10px;
      }
      .autocomplete {
        position: absolute;
        left: 13px;
        top: 8px;
      }
      .autocomplete-type {
        display: none;
      }
    }

    // Disable suggestions here (we'll have them below)
    .tools {
      display: none;
    }
  }
}

.search-types {
  display: flex;
  align-items: flex-end;
  align-content: flex-start;

  .g-ct {
    display: flex;
    padding-top: 0;
    padding-bottom: 0;
  }
  a {
    @include ie;
    padding: 15px 25px;
    color: $colorFontBody !important;
    border-radius: 0;

    &:before {
      border-radius: 0;
    }
    &:hover {
      opacity: 1 !important;
    }
    &.active {
      color: white !important;
      @include gradient-background-dg($colorPrimary, $colorAccent);
      background-position: left bottom;
      background-repeat: no-repeat;
      background-size: 100% 2px;
    }
    @media (max-width: $breakpoint-m) {
      padding: 22px;
    }
    @media (max-width: $breakpoint-m) {
      padding: 12px 25px;
    }
  }
}

.relevant {
  padding: 0 0 50px 0;
  position: relative;
  overflow-y: hidden;
  background: $colorBackgroundDarker;

  .g-ct {
    position: relative;
    top: 62px; // hide scrollbar
    padding-bottom: 62px; // hide scrollbar
    overflow-x: scroll;
    white-space: nowrap;
  }
  .suggestion {
    @include ie;
    @include field;
    display: inline-block;
    padding: 10px 20px;
    margin-right: 15px;
    border-radius: 2px;

    &:hover {
      @include gradient-background-dg($colorBackgroundLight, $colorBackground);
    }
    &:before {
      border-radius: 2px;
    }
    .suggestion-image {
      position: relative;
      overflow: hidden;
      display: inline-block;
      vertical-align: middle;
      background: $colorBackgroundDark;
      width: 40px;
      height: 40px;
      margin-right: 20px;

      img {
        position: absolute;
        top: 0;
        max-width: 200%;
        transform: translate(-25%, -10%);
        z-index: 1;
      }
      .blur {
        filter: blur(30px);
        z-index: 0;
      }
    }
    .suggestion-data {
      display: inline-block;
      vertical-align: middle;

      span:first-of-type {
        display: inline-block;
        color: white;
        margin-bottom: -3px;
      }
    }
  }
}

.results {
  padding-top: 20px;

  .filter {
    position: relative;
    display: flex;
    align-content: center;
    flex-wrap: wrap;

    h2 {
      font-size: 1em;
      font-weight: 400;
      display: inline-block;
      padding: 4px 20px 6px 0;
      margin-bottom: 10px; // for filter tag break
    }
    .filter-tags {
      margin-right: 100px; // break when view type is supposed to cause break

      @media (max-width: $breakpoint-s) {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        width: 100%;
        margin-right: 0;
      }
      .tag {
        @include ie;
        display: inline-block;
        padding: 5px 0 5px 15px;
        margin-right: 10px;
        margin-bottom: 5px;
        border-radius: 2px;
        border: 1px solid $colorSubtleDark;

        &:before {
          border-radius: 2px;
        }
        &:hover {
          background: $colorBackgroundLight;
          border: 1px solid transparent;
        }
        span {
          font-size: 0.9em;
          color: white;
        }
        // Hide ascending/descending by default and adjust tag box size
        img {
          opacity: 0;
          margin-right: -5px;
          @include ease(0.25s);
        }
        &.active {
          border: 1px solid transparent;
          background: $colorBackgroundLight;

          img {
            opacity: 1;
            margin-right: 0;
          }
        }
      }
    }
    .filter-view {
      position: absolute;
      right: 0;
      margin-top: -5px; // compensate for icon padding
      padding-left: 20px;

      .a-ie {
        display: inline-block;
      }
    }
  }
}
</style>
