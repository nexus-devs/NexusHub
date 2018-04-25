<template>
  <div class="search">
    <sidebar>
      <sidebar-search/>
    </sidebar>
    <app-content>
      <div>
        <div class="search-input">
          <div class="container">
            <search/>
            <div class="search-types">
              <a class="active">All</a>
              <a>Prime</a>
              <a>Archwing</a>
            </div>
          </div>
        </div>
        <section class="results container">
          <h2>Search Results</h2>
          <span>({{ results.length }} matches)</span>

          <!-- Filters -->
          <div class="filter">
            <h3>Sort By</h3>
            <div class="filter-tags">
              <div v-for="filter in filters" :key="filter" :class="{ active: filter.active, ascending: filter.ascending }" class="tag" @click="selectFilterTag(filter)">
                <img v-if="filter.icon" :src="filter.icon" :alt="filter.alt" class="ico-12">
                <span>{{ filter.name }}</span>
                <img :class="{ ascending: filter.ascending }" src="/img/ui/dropdown.svg" class="ico-16 asc-desc" alt="Ascending/Descending">
              </div>
            </div>
            <div class="filter-view">
              <div :class="{ active: list === 'list' }" class="a-ie" @click="selectListView('list')">
                <img src="/img/ui/list-view.svg" class="ico-20" alt="List">
                <span>List</span>
              </div>
              <div :class="{ active: list === 'grid' }" class="a-ie" @click="selectListView('grid')">
                <img src="/img/ui/card-view.svg" class="ico-20" alt="Grid">
                <span>Grid</span>
              </div>
            </div>
          </div>

          <!-- Content -->
          <div :style="{ height: `${listHeight}px` }" class="results-container">
            <div ref="grid" :class="{ active: list === 'grid' }" class="result-grid list">
              <item-snippet v-for="result in results" :key="result" :result="result"/>
            </div>
            <div ref="list" :class="{ active: list === 'list' }" class="result-list list">
              <router-link v-for="result in results" :key="result" :to="result.webUrl" class="result row">
                <div class="result-title col-b">
                  <div class="result-img">
                    <img :src="result.imgUrl" :alt="result.name">
                  </div>
                  <span>{{ result.name }}</span>
                </div>
                <div v-for="filter in filters" v-if="filter.category === result.category" :key="filter" class="result-data-value col">
                  <div v-if="result[filter.name]">
                    <img src="/img/warframe/items/platinum.svg" alt="Platinum" class="ico-12">
                    <span>300p <!-- {{ resolve(filter)}} --></span>
                  </div>
                </div>
              </router-link>
            </div>
          </div>
          <div class="add-items">
            Think we missed an item?
            <router-link to="/contact">Let us know</router-link> or
            <router-link to="/contribute">add items yourself</router-link> if you
            wanna help us support the project.
          </div>
        </section>
      </div>
    </app-content>
  </div>
</template>



<script>
import appContent from 'src/app-content.vue'
import sidebar from 'src/components/ui/sidebar.vue'
import sidebarSearch from 'src/components/ui/sidebar/search.vue'
import search from 'src/components/search/input.vue'
import itemSnippet from 'src/components/snippets/item-result.vue'


export default {
  components: {
    'app-content': appContent,
    sidebar,
    'sidebar-search': sidebarSearch,
    search,
    'item-snippet': itemSnippet
  },

  data () {
    return {
      listHeight: 0,
      filters: [{
        name: 'price',
        category: 'items',
        icon: '/img/warframe/items/platinum.svg',
        alt: 'Platinum',
        unit: 'p'
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
    list () {
      return this.$store.state.serp.list
    },
    results () {
      return this.$store.state.serp.results
    }
  },
  watch: {
    $route () {
      this.selectListView()
    }
  },
  // Set active view (required for generating parent height)
  mounted () {
    this.selectListView()
    window.addEventListener('resize', this.onResize)
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.onResize)
  },

  storeModule: {
    name: 'serp',
    state: {
      list: 'grid',
      results: []
    },
    mutations: {
      setSerpResults (state, results) {
        state.results = results
      },
      setSerpListView (state, type) {
        state.list = type
      }
    },
    actions: {
      async fetchSerpResults ({ commit, rootState }, input) {
        const items = await this.$cubic.get(`/warframe/v1/search?query=${input}&fuzzy=true&category=items&threshold=0.6`)
        // const players = [] // await this.$cubic.get(`/warframe/v1/search?query=${input}&fuzzy=true&category=players`)
        const results = []

        // Add each component to results
        if (items.statusCode !== 400) {
          items.forEach(item => {
            item.components.reverse().forEach(component => {
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
  },

  // Fetch data for search results
  asyncData ({ store, route: { query: { query }}}) {
    return store.dispatch('fetchSerpResults', query)
  },

  methods: {
    // Resize result container. We have to do this because the list/card view
    // is positioned absolutely to enable smooth transitions while staying at
    // the same place. The html tag height will be expanded without this when
    // the smaller list is selected.
    onResize () {
      if (this.list === 'grid') {
        this.listHeight = this.$refs.grid.offsetHeight
      } else {
        this.listHeight = this.$refs.list.offsetHeight
      }
      this.listHeight += 40 // padding
    },

    // Swap between list view types (grid/list)
    selectListView (type) {
      this.$store.commit('setSerpListView', type || this.list)
      this.onResize()
    },

    // Select filters and adjust sorting. First click -> activate, descending;
    // Second click -> activate, ascending; Third click -> deactivate
    selectFilterTag (filter) {
      const newFilters = [].concat(this.filters)
      const target = newFilters.find(t => t.name === filter.name)

      // Sort order selection logic
      if (target.ascending) {
        target.active = false
        target.ascending = false
      } else {
        target.ascending = !!target.active
        target.active = true
      }

      // Overwrite original to trigger DOM update
      this.filters = newFilters
    },

    // Helper function to access nested object keys
    // Required for assigning data locations for filters
    resolve (filter) {
      let result = filter
      const keys = filter.path.split('.')

      keys.forEach(key => {
        result = result[key]
      })
      return result
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

  .container {
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

  .container {
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
  margin-bottom: 0;

  .results-container {
    position: relative; // for position: absolute item list views
    overflow: hidden;
  }
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
          @include ease(0.1s);

          &.ascending {
            transform: rotate(-180deg);
          }
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
        span {
          text-transform: uppercase;
          color: white;
          font-size: 0.8em;
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

  .list {
    position: absolute;
    width: 100%;
    transform: scale(0.95);
    transform-origin: 50% 200px;
    pointer-events: none;
    opacity: 0;
    @include ease(0.3s);

    &.active {
      transform: scale(1);
      opacity: 1;
      pointer-events: all;
    }
  }

  // List view types
  .result-grid {
    display: flex;
    flex-wrap: wrap;
    margin-top: 40px;
    width: calc(100% + 15px); // compensate for card margin right
  }
  .result-list {
    margin-top: 30px;

    .result {
      @include ie;
      @include field;
      align-items: center;
      border-radius: 0px;
      padding: 10px 20px;
      margin-bottom: 8px;

      &:hover {
        @include gradient-background-dg($color-bg-light, $color-bg);
        opacity: 1 !important;
      }
      &:active {
        transform: scale(0.995);
      }
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
        height: 38px;
        width: 38px;
        border: 1px solid $color-subtle;
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
  .add-items {
    margin: 30px 0 100px;
  }
}
</style>
