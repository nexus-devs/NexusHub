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
      <section class="snippets">
        <div class="g-ct">
          <router-link v-for="snippet in snippets" :key="snippet.focus.name" :to="snippet.base.webUrl">
            <price-snippet :component="snippet.focus.components.find(c => c.name === 'Set')"
                           :comparison="snippet.compare.components.find(c => c.name === 'Set')"
                           :item="snippet.base">
            </price-snippet>
          </router-link>
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
      const items = ['Valkyr Prime', 'Nova Prime']
      const snippets = []

      for (let i = 0; i < items.length; i++) {
        const name = items[i]
        const time = rootState.time
        const compareStart = time.compare.start.time.valueOf()
        const compareEnd = time.compare.end.time.valueOf()

        // Specify Target URLs
        let focusUrl = `/warframe/v1/items/${name}/statistics`
        let compareUrl = `/warframe/v1/items/${name}/statistics?timestart=${compareStart}&timeend=${compareEnd}`

        // Get custom query which probably isn't cached
        if (time.modified) {
          const focusStart = time.focus.start.time.valueOf()
          const focusEnd = time.focus.end.time.valueOf()
          const intervals = time.focus.start.time.diff(time.focus.end.time, 'days')

          focusUrl += `?timestart=${focusStart}&timeend=${focusEnd}&intervals=${intervals}`
          compareUrl += `&intervals=${intervals}`
        }

        // Perform API query for base data, focus range and comparison range
        const data = await Promise.all([
          this.$blitz.get(focusUrl),
          this.$blitz.get(compareUrl),
          this.$blitz.get(`/warframe/v1/items/${name}`)
        ])

        snippets.push({
          focus: data[0],
          compare: data[1],
          base: data[2]
        })
      }

      commit('setSerpSnippets', snippets)
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
    return store.dispatch('fetchSerpSnippets')
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

.snippets {
  padding: 0 0 60px 0;
  position: relative;
  overflow-y: hidden;
  background: $color-bg-darker;

  .g-ct {
    display: flex;
    position: relative;
    top: 72px; // hide scrollbar
    padding-bottom: 72px; // hide scrollbar
    overflow-x: scroll;
    white-space: nowrap;

    a:hover {
      opacity: 1 !important;
    }

    /deep/ {
      .item-price-snippet {
        margin-right: 40px;
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
        border: 1px solid $color-subtle-dark;

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
      }
    }
  }
}
</style>
