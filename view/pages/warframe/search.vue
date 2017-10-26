<template>
  <div class="search">
    <navigation></navigation>
    <sidebar>
      <sidebar-search></sidebar-search>
    </sidebar>
    <app-content>
      <header>
        <div class="g-ct">
          <search></search>
        </div>
        <div class="search-types">
          <div class="g-ct">
            <a class="active">All</a>
            <a>Items</a>
            <a>Players</a>
          </div>
        </div>
      </header>
      <section class="relevant">
        <div class="g-ct">
          <div class="suggestion">
            <div class="suggestion-image">
              <img src="/img/warframe/items/valkyr-prime.png" alt="">
              <img src="/img/warframe/items/valkyr-prime.png" class="blur" alt="">
            </div>
            <div class="suggestion-data">
              <span>Some Item Name</span><br>
              <span>50p</span>
            </div>
          </div>
          <div class="suggestion">
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
          <div class="filters">
            <h2>Sort By</h2>
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
  padding-top: 80px;
  @include gradient-background-dg($colorBackgroundLight, $colorBackground);

  @media (max-width: $breakpoint-m) {
    padding-top: 110px;
  }

  .search-types {
    display: flex;
    justify-content: flex-start;
    margin-top: 60px;
    width: 100%;
    @include gradient-background($color-bg-transparent-1, $color-bg-transparent-2);

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
      cursor: pointer;
      padding: 12px 25px;
      color: $colorFontBody !important;

      &.active {
        color: white !important;
        border-bottom: 2px solid $colorPrimary;
      }
    }
  }

  /deep/ {
    .g-ct {
      padding-bottom: 0 !important;
    }
    .field {
      position: relative;
      padding: 15px;
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
  padding: 0 0 20px 0;
  position: relative;
  overflow-y: hidden;

  .g-ct {
    position: relative;
    top: 32px; // hide scrollbar
    padding-bottom: 32px; // hide scrollbar
    overflow-x: scroll;
    white-space: nowrap;
  }
  .suggestion {
    @include ie;
    @include field;
    display: inline-block;
    border-radius: 2px;
    padding: 10px 20px;
    margin-right: 10px;

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
        color: white;
      }
    }
  }
}

.results {
  padding-top: 20px;

  .filters {
    h2 {
      font-size: 1em;
      font-weight: 400;
      display: inline-block;
    }
  }
}
</style>
