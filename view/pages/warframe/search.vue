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
              <a>Prime</a>
              <a>Archwing</a>
          </div>
        </div>
      </div>
      <section class="results">
        <div class="g-ct">
          <h2>Search Results</h2>
          <span>(334 matches)</span>

          <!-- Filters -->
          <div class="filter">
            <h3>Sort By</h3>
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
              <div class="a-ie active">
                <img src="/img/ui/card-view.svg" class="ico-20" alt="cards">
              </div>
            </div>
          </div>

          <!-- Content -->
          <div class="result-cards">
            <router-link to="/warframe/items/valkyr-prime" v-for="i in new Array(20)" key="what" class="result col">
              <img class="result-bg-img" src="/img/warframe/items/valkyr-prime.png" alt="">
              <img class="result-bg-img blur" src="/img/warframe/items/valkyr-prime.png" alt="">
              <div class="result-bg-shade"></div>
              <div class="result-info">
                <span class="result-title">Some item</span>
                <div class="result-tags">
                  <span>Prime</span>
                  <span>Blade</span>
                  <span>Kek</span>
                </div>
              </div>
              <div class="result-data">
                <div class="result-data-value">
                  <img src="/img/warframe/items/platinum.svg" alt="Platinum" class="ico-16">
                  <span>320p</span>
                </div>
                <div class="result-data-value">
                  <img src="/img/warframe/items/ducats.svg" alt="Ducats" class="ico-16">
                  <span>135 Ducats</span>
                </div>
              </div>
            </router-link>
          </div>
          <div class="result-list">

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
import time from 'src/components/search/time.vue'
import navigation from 'src/components/ui/nav.vue'
import priceSnippet from 'src/components/snippets/item-price.vue'

/**
 * Store module for search results
 */
const store = {
  state: {
    snippets: []
  },
  mutations: {
    setSerpSnippets(state, snippets) {
      state.snippets = snippets
    }
  },
  actions: {
    async fetchSerpSnippets({ commit, rootState }) {

    }
  }
}

export default {
  components: {
    'app-content': appContent,
    sidebar,
    'sidebar-search': sidebarSearch,
    search,
    navigation,
    'price-snippet': priceSnippet
  },
  computed: {
    snippets() {
      return this.$store.state.serp.snippets
    }
  },

  // Ensure store modules for time and rank are present
  beforeCreate() {
    // Ensure that the time module is loaded
    if (!this.$store._actions.applyTimeQuery) {
      time.beforeCreate[0].bind(this)()
    }

    // Register item store module if not already there
    if (!this.$store._actions.fetchSerpSnippets) {
      this.$store.registerModule('serp', store, { preserveState: this.$store.state.serp ? true : false })
    }

    // Apply URL query to vuex state
    this.$store.dispatch('applyTimeQuery', this.$store.state.route)
  },

  // Fetch data for search results
  asyncData({ store }) {

  },

  // Apply search input state to actual input
  created() {
    if (this.$store.state.search && this.$store.state.search.input.name) {
      this.$store.commit('setSearchInput', this.$store.state.search.input.name)
    }
  }
}
</script>



<style lang="scss" scoped>
@import '~src/styles/partials/importer';

.search-input {
  position: relative;
  z-index: 1;
  border-top: 1px solid $color-subtle-dark;
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
      background: $color-bg-darker;
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
        left: 18px;
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
  position: relative;
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
    color: $color-font-body !important;
    border-radius: 0;
    font-size: 0.9em;
    text-transform: uppercase;

    &:before {
      border-radius: 0;
    }
    &:hover {
      opacity: 1 !important;
    }
    &.active {
      color: white !important;
      @include gradient-background-dg($color-primary, $color-accent);
      background-position: left bottom;
      background-repeat: no-repeat;
      background-size: 100% 2px;
    }
    @media (max-width: $breakpoint-m) {
      padding: 22px;
    }
    @media (max-width: $breakpoint-s) {
      padding: 12px 25px;
    }
  }
}

.results {
  padding-top: 20px;

  h2 {
    display: inline-block;
    margin: 20px 10px 20px 0;
    font-size: 1em;

    & + span {
      color: $color-font-subtle;
      font-size: 0.9em;
    }
  }
  .filter {
    position: relative;
    display: flex;
    align-content: center;
    flex-wrap: wrap;
    border-top: 1px solid $color-subtle-dark;
    padding-top: 15px;

    h3 {
      font-size: 0.9em;
      font-weight: 400;
      display: inline-block;
      padding: 4px 20px 6px 0;
      margin-bottom: 10px; // for filter tag break
      text-transform: uppercase;
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
        padding: 5px 0 3px 15px;
        margin-right: 10px;
        margin-bottom: 5px;
        border-radius: 2px;
        border: 1px solid $color-subtle-dark;
        text-transform: uppercase;
        font-size: 0.9em;

        &:before {
          border-radius: 2px;
        }
        &:hover {
          background: $color-bg-light;
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
          background: $color-bg-light;

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
        opacity: 0.4;

        &:hover {
          opacity: 0.8;
        }
      }
      .active {
        opacity: 1;

        &:hover {
          opacity: 1;
        }
      }
    }
  }
  .result-cards {
    display: flex;
    flex-wrap: wrap;
    margin-top: 40px;
    margin-right: -15px; // compensate for card right-margin

    .result {
      @include ie;
      border-radius: 2px;
      background: #292e38;
      @include field;
      position: relative;
      overflow: hidden;
      height: 140px;
      width: 140px;
      max-width: 180px;
      margin-right: 15px;
      margin-bottom: 15px;
      flex-basis: auto;

      @media (max-width: $breakpoint-s) {
        max-width: none;
      }
      &:hover {
        opacity: 1 !important; // <a> override
        @include gradient-background-dg($color-bg-light, $color-bg);

        .result-info, .result-bg-img {
          filter: blur(4px);
        }
        .result-data {
          opacity: 1;

          .result-data-value {
            transform: translateY(0);
          }
        }
      }
      &:before {
        border-radius: 2px;
      }
      .result-bg-img {
        position: absolute;
        max-width: 100%;
        opacity: 0.7;
        left: 0;
        top: 0;
        @include ease(0.25s);
      }
      .blur {
        filter: blur(60px);
        z-index: -1;
      }
      .result-bg-shade {
        position: absolute;
        height: 80%;
        width: 100%;
        bottom: 0;
        left: 0;
        @include gradient-background(transparent, $color-bg);
      }
      .result-info {
        position: absolute;
        width: 100%;
        bottom: 20px;
        left: 20px;
        @include ease(0.35s);

        .result-title {
          text-transform: uppercase;
          font-weight: 600;
          font-size: 0.9em;
        }
        .result-tags {
          font-size: 0.8em;

          span {
            margin-right: 5px;
          }
        }
      }
      .result-data {
        display: flex;
        justify-content: center;
        align-content: center;
        flex-direction: column;
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        opacity: 0;
        @include ease(0.35s);
        @include gradient-background-dg(rgba(106, 233, 116, 0.5), rgba(51, 215, 221, 0.5));

        .result-data-value {
          width: 75%;
          margin: 0 auto;
          transform: translateY(30px);
          @include ease(0.2s);

          span {
            margin-left: 5px;
          }
        }
      }
    }
  }
}
</style>
