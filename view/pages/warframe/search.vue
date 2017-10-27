<template>
  <div class="search">
    <navigation></navigation>
    <sidebar>
      <sidebar-search></sidebar-search>
    </sidebar>
    <app-content>
      <ui-header>
        <search></search>
        <div slot="sub" class="search-types">
          <div class="g-ct">
            <a class="active">All</a>
            <a>Items</a>
            <a>Players</a>
          </div>
        </div>
      </ui-header>
      <section class="relevant">
        <div class="g-ct">
          <h2>Most relevant</h2>
          <div class="suggestion" v-for="i in [1, 2, 3]">
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
              <div class="tag" v-for="i in [1, 2, 3, 4, 5, 6, 7]">
                <span>Price</span>
                <img src="/img/ui/dropdown.svg" class="ico-16" alt="Ascending/Descending">
              </div>
            </div>
            <div class="filter-view">
              <img src="/img/ui/list-view.svg" class="ico-20 a-ie" alt="list">
              <img src="/img/ui/card-view.svg" class="ico-20 a-ie" alt="cards">
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

header {
  padding-top: 0 !important;
  padding-bottom: 0 !important;

  @media (max-width: $breakpoint-m) {
    padding-top: 110px;
  }

  .search-types {
    display: flex;
    justify-content: flex-start;
    margin-top: 60px;
    width: 100%;
    background: $color-bg-transparent-1;

    @media (max-width: $breakpoint-m) {
      margin-top: 40px;
    }
    .g-ct {
      display: flex;
      padding-top: 0;
      padding-bottom: 0;
      width: 100%;
    }
    a {
      @include ie;
      padding: 12px 25px;
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
        padding-bottom: 2px;
        @include gradient-background-dg($colorPrimary, $colorAccent);
        background-position: left bottom;
        background-repeat: no-repeat;
        background-size: 100% 2px ;
      }
    }
  }

  /deep/ {
    .g-ct {
      padding-bottom: 0 !important;
    }
    .field {
      position: relative;
      padding: 12px;
      border-radius: 2px;
      border: 1px solid transparent;
      @include ease(0.35s);

      &:hover {
        border: 1px solid $colorSubtle;
      }

      label {
        font-size: 0.9em;
        color: white;
      }
      input {
        position: relative;
        z-index: 1;
        width: 100%;
        margin-top: 5px;
        color: white;
        font-size: 1.1em;
      }
      .autocomplete {
        position: absolute;
        left: 15px;
        margin-top: 5px;
        font-size: 1.1em;
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

.relevant {
  padding: 0 0 40px 0;
  position: relative;
  overflow-y: hidden;

  h2 {
    font-weight: 400;
    font-size: 1em;
    margin-bottom: 10px;
  }
  .g-ct {
    position: relative;
    top: 52px; // hide scrollbar
    padding-bottom: 52px; // hide scrollbar
    overflow-x: scroll;
    white-space: nowrap;
  }
  .suggestion {
    @include ie;
    @include field;
    display: inline-block;
    padding: 10px 20px;
    margin-right: 15px;

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
      padding-right: 20px;
      margin-right: 20px;
      margin-bottom: 20px; // for filter tag break
      border-right: 1px solid $colorSubtle;

      @media (max-width: $breakpoint-s) {
        border-right: none;
      }
    }
    .filter-tags {
      margin-right: 100px; // break when view type is supposed to cause break

      @media (max-width: $breakpoint-s) {
        width: 100%;
        margin-right: 0;
      }
      .tag {
        @include ie;
        display: inline-block;
        padding: 5px 0 5px 15px;
        background: $colorBackground;
        margin-right: 10px;
        margin-bottom: 5px;
        border-radius: 2px;

        &:before {
          border-radius: 2px;
        }
        &:hover {
          background: $colorBackgroundLight;
        }
        span {
          font-size: 0.9em;
          color: white;
        }
      }
    }
    .filter-view {
      position: absolute;
      right: 0;
      margin-top: -5px; // compensate for icon padding
      padding-left: 20px;
      border-left: 1px solid $colorSubtle;

      @media (max-width: $breakpoint-s) {
        border-left: none;
      }
    }
  }
}
</style>
