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
          <span>({{ results.length }} matches)</span>

          <!-- Filters -->
          <div class="filter">
            <h3>Sort By</h3>
            <div class="filter-tags">
              <div class="tag" v-for="filter in filters">
                <img :src="filter.icon" class="ico-12" :alt="filter.alt" v-if="filter.icon">
                <span>{{ filter.name }}</span>
                <img src="/img/ui/dropdown.svg" class="ico-16 asc-desc" alt="Ascending/Descending">
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
            <!-- <item-snippet v-for="result in results" key="name" :result="result"></item-snippet> -->
          </div>
          <div class="result-list">
            <router-link :to="result.webUrl" class="result row" v-for="result in results" key="name">
              <div class="result-title col-b">
                <div class="result-img">
                  <img :src="result.imgUrl" :alt="result.name">
                </div>
                <span>{{ result.name }}</span>
              </div>
              <div class="result-data-value col" v-for="filter in filters" v-if="filter.category === result.category">
                <div v-if="result[filter.name]">
                  <img src="/img/warframe/items/platinum.svg" alt="Platinum" class="ico-12">
                  <span>300p</span>
                </div>
              </div>
            </router-link>
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
import itemSnippet from 'src/components/snippets/item-result.vue'

/**
 * Store module for search results
 */
const store = {
  state: {
    results: []
  },
  mutations: {
    setSerpResults(state, results) {
      state.results = results
    }
  },
  actions: {
    async fetchSerpResults({ commit, rootState }, input) {
      const items = await this.$blitz.get(`/warframe/v1/search?query=${input}&fuzzy=true&category=items&threshold=0.6`)
      const players = [] // await this.$blitz.get(`/warframe/v1/search?query=${input}&fuzzy=true&category=players`)
      const results = []

      // Add each component to results
      if (items.statusCode !== 400) {
        items.forEach(item => {
          item.components.forEach(component => {
            results.push(Object.assign(component, {
              name: item.name + (item.components.length > 1 ? ' ' + component.name : ''),
              category: 'items',
              webUrl: item.webUrl,
              set: component.name === 'Set' || item.components.length < 2
            }))
          })
        })
      }

      commit('setSerpResults', results)
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
    'item-snippet': itemSnippet
  },

  data() {
    return {
      filters: [{
        name: 'price',
        category: 'items',
        icon: '/img/warframe/items/platinum.svg',
        alt: 'Platinum',
        unit: 'p',
      }, {
        name: 'ducats',
        category: 'items',
        icon: '/img/warframe/items/ducats.svg',
        alt: 'Ducats',
        unit: ' Ducats'
      }, {
        name: 'supply',
        category: 'items',
        unit: ''
      }, {
        name: 'demand',
        category: 'items',
        unit: ''
      }]
    }
  },

  computed: {
    results() {
      return this.$store.state.serp.results
    }
  },

  // Ensure store modules for time and rank are present
  beforeCreate() {
    // Ensure that the time module is loaded
    if (!this.$store._actions.applyTimeQuery) {
      time.beforeCreate[0].bind(this)()
    }

    // Register item store module if not already there
    if (!this.$store._actions.fetchSerpResults) {
      this.$store.registerModule('serp', store, { preserveState: this.$store.state.serp ? true : false })
    }

    // Apply URL query to vuex state
    this.$store.dispatch('applyTimeQuery', this.$store.state.route)
  },

  // Fetch data for search results
  asyncData({ store, route: { query: { query } } }) {
    return store.dispatch('fetchSerpResults', query)
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
  margin-top: 10px;

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
        .asc-desc {
          opacity: 0;
          margin-right: -5px;
          @include ease(0.25s);
        }
        &.active {
          border: 1px solid transparent;
          background: $color-bg-light;

          .asc-desc {
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
  }
  .result-list {
    .result {
      @include ie;
      align-items: center;
      border-radius: 0px;
      padding: 10px 20px;
      margin-bottom: 3px;
      background: $color-bg-darker;

      &:before {
        border-radius: 0px;
      }
      .result-title {
        display: flex;
        align-items: center;
      }
      .result-img {
        display: flex;
        align-items: center;
        position: relative;
        overflow: hidden;
        height: 40px;
        width: 40px;
        background: $color-bg-darkest;
        border-radius: 2px;
        margin-right: 20px;

        img {
          width: 100%;
        }
      }
      .result-data-value {
        min-width: 100px;
        margin: 0 40px;
        font-size: 0.9em;

        &:last-of-type {
          flex-grow: 0;
          text-align: right;
          margin-right: 0;
        }
      }
      @media (max-width: $breakpoint-s) {
        & {
          justify-content: flex-start;
          margin-bottom: 5px;
        }
        .result-title {
          span {
            position: relative;
            top: -10px;
          }
        }
        .result-img {
          margin-right: 10px;
          height: 50px;
          width: 50px;
        }
        .result-data-value {
          position: relative;
          font-size: 0.85em;
          top: -23px;
          flex-grow: 0;
          flex-basis: auto;
          margin: 0 10px -20px 0;
          text-align: left;
          min-width: auto;
        }
        div:nth-of-type(2) {
          margin-left: 60px;
        }
      }
    }
  }
}
</style>
