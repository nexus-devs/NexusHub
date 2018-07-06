<template>
  <div class="search">
    <sidebar>
      <sidebar-search/>
    </sidebar>
    <app-content>
      <div class="search-input">
        <div class="container">
          <div class="search">
            <div class="field">
              <input ref="input" type="text" placeholder="Try: Soma Prime, Maim..." @input="search">
              <img src="/img/ui/search.svg" alt="Search" class="search-ico ico-h-16">
            </div>
          </div>
          <div class="search-filters">
            <div class="search-filters-label" @click="toggleFilters">
              <img src="/img/ui/filter.svg" alt="Filter" class="ico-h-20">
              <span>Filters</span>
            </div>
          </div>
        </div>
      </div>
      <div ref="filters" :class="{ expanded: filtersExpanded }" class="search-filters-options">
        <div class="container">
          Sorry, no filters here yet. Look around again soon™!
        </div>
      </div>
      <section :class="{ expanded: filtersExpanded }" class="results">
        <div class="results-background-fix"/>
        <div class="container">
          <div class="results-headline">
            <span>Results for</span>
            <h1>{{ input }}</h1>
          </div>
          <results-group :type="'items'"/>
        </div>
      </section>
    </app-content>
  </div>
</template>



<script>
import appContent from 'src/app-content.vue'
import sidebar from 'src/components/ui/sidebar/sidebar.vue'
import sidebarSearch from 'src/components/ui/sidebar/search.vue'
import resultsGroup from 'src/components/search/results/results-group.vue'
let ongoing = setTimeout(() => {})

export default {
  components: {
    'app-content': appContent,
    sidebar,
    'sidebar-search': sidebarSearch,
    'results-group': resultsGroup
  },

  data () {
    return {
      filtersExpanded: false
    }
  },

  computed: {
    results () {
      return this.$store.state.serp.results
    },
    input () {
      return this.$store.state.search.input
    }
  },

  mounted () {
    this.filtersHeight = this.$refs.filters.offsetHeight
    this.$refs.input.focus()
    for (let i = 0; i < this.$store.state.serp.activeFilters.length; i++) {
      this.$store.commit('popSerpActiveFilter')
    }
  },

  beforeDestroy () {
    for (let i = 0; i < this.$store.state.serp.activeFilters.length; i++) {
      this.$store.commit('popSerpActiveFilter')
    }
  },

  async asyncData ({ store, route: { query: { input }}}) {
    await store.dispatch('fetchSerpResults', input)
  },

  methods: {
    async search (event) {
      this.$store.commit('setSearchInput', event.target.value)

      // Wait for 200ms before performing request. If new characters are typed
      // within those 200ms, then cancel all old requests to reduce unnecessary
      // bandwidth usage.
      clearTimeout(ongoing)
      ongoing = setTimeout(() => {
        this.$store.dispatch('fetchSerpResults', event.target.value)
        window.history.pushState({}, null, `/warframe/search?input=${event.target.value}`)
      }, 200)
    },
    toggleFilters () {
      this.filtersExpanded = !this.filtersExpanded
    }
  },

  storeModule: {
    name: 'serp',
    state: {
      results: [],

      // Keep original filter order when disabling all filters.
      originalResults: [],

      filters: [{
        name: 'Platinum',
        category: 'items',
        icon: '/img/warframe/ui/platinum.svg',
        alt: 'Platinum',
        unit: 'p',
        path: 'price'
      }, {
        name: 'Ducats',
        category: 'items',
        icon: '/img/warframe/ui/ducats.svg',
        alt: 'Ducats',
        unit: ' Ducats',
        path: 'ducats'
      }, {
        name: 'Supply',
        category: 'items',
        unit: ' Sellers',
        hidden: true,
        path: 'selling.current.offers'
      }, {
        name: 'Demand',
        category: 'items',
        unit: ' Buyers',
        hidden: true,
        path: 'buying.current.offers'
      }],

      // Keep track of activated filters separately in the order in which they
      // were added. Will be important for sorting.
      activeFilters: []
    },
    mutations: {
      setSerpResults (state, results) {
        state.results = results
      },
      setSerpFilters (state, filters) {
        state.filters = filters
      },
      addSerpActiveFilter (state, name) {
        if (!state.activeFilters.find(f => f.name === name)) {
          state.activeFilters.push(state.filters.find(f => f.name === name))
        }
      },
      removeSerpActiveFilter (state, name) {
        const i = state.activeFilters.findIndex(f => f.name === name)
        state.activeFilters.splice(i, 1)
      },
      popSerpActiveFilter (state) {
        const removed = state.activeFilters.pop()
        state.filters.find(f => f.name === removed.name).active = false
      },
      setSerpOriginalResults (state, filters) {
        state.originalResults = filters
      },
      resetSerpResults (state, filters) {
        state.results = state.originalResults
      }
    },
    actions: {
      async fetchSerpResults ({ commit, dispatch }, input) {
        if (input.length < 2) {
          return
        }

        // No new events in the meantime -> perform query
        const B = input.includes('🅱')
        const itemData = await this.$cubic.get(`/warframe/v1/search?query=${input}&fuzzy=true&category=items&threshold=0.75`)
        // const playerData = [] // await this.$cubic.get(`/warframe/v1/search?query=${input}&fuzzy=true&category=players`)
        const items = await dispatch('sanitizeSerpResults', { itemData, B })
        const players = []
        const results = items.concat(players)
        commit('setSerpResults', results)
        commit('setSerpOriginalResults', results)
        dispatch('applySerpFilters')
      },

      /**
       * Apply some adjustments for more sensible usage on the UI
       */
      sanitizeSerpResults (context, { itemData, B }) {
        const items = []

        // Add each component to results
        for (const item of itemData) {
          for (const component of item.components) {
            // Transform damage types into icons
            const description = item.description.split(' ')
            for (let i = 0; i < description.length; i++) {
              let word = description[i]

              // Convert damage type indicators to img tags
              // <DT_FREEZING> <DT_HEAT> etc
              if (word.includes('<DT_')) {
                word = word.match(/\_(.*?)\>/)[1].toLowerCase()
                if (word === 'freeze') word = 'cold'
                if (word === 'fire') word = 'heat'
                if (word === 'explosion') word = 'blast'
                word = `<img src="/img/warframe/ui/${word}.png" class="ico-h-16" style="margin-top: -3px;"/>`
              }
              description[i] = word
            }

            // Limit result to 10 elements
            if (items.length < 10 && component.name === 'Set') {
              // Prevent duplicates
              if (items.find(i => i.name === item.name)) {
                continue
              }

              // Display set data, but not as component
              let name = item.name.replace('Set', '')

              // Important stuff. Already way past the deadline, so fuck it,
              // let's add some shitty memes.
              name = B ? item.name.toLowerCase().replace(/\b\w/g, l => '🅱') : name

              // Add modified item.
              items.push(Object.assign(component, {
                name,
                webUrl: item.webUrl,
                category: item.category,
                rarity: item.rarity,
                price: Math.round((component.selling.current.median + component.buying.current.median) / 2),
                results: 'items',
                description: description.join(' ')
              }))
            }
          }
        }
        return items
      },

      /**
       * Go through filters, sort selected values
       */
      applySerpFilters ({ commit, dispatch, state }) {
        const filters = state.activeFilters
        const results = [].concat(state.results)
        const resolve = (filter, result) => {
          filter.path.split('.').forEach(key => { result = result[key] })
          return result
        }
        const getSortingValue = result => {
          let ascending, res, missing

          // If any filter is ascending, make all ascending.
          // Also make sure to put any result with missing value last.
          for (const filter of filters) {
            if (!filter.descending) ascending = true
            if (!resolve(filter, result)) missing = true
          }

          if (missing) {
            return null
          }

          if (filters.length > 1) {
            res = resolve(filters[0], result) / resolve(filters[1], result)
          } else {
            res = resolve(filters[0], result)
          }
          return ascending ? -1 * res : res
        }
        // Resulting score displayed in UI, not relevant for sorting
        const getUiScore = x => {
          if (x === null) {
            return null
          } else {
            return x % 1 === 0 ? Math.abs(x) : Math.abs(x).toFixed(2)
          }
        }

        if (!filters.length) {
          return
        }

        results.sort((a, b) => {
          const aVal = getSortingValue(a)
          const bVal = getSortingValue(b)
          a._score = getUiScore(aVal)
          b._score = getUiScore(bVal)

          if (bVal === null) {
            return -1
          }
          if (aVal > bVal) {
            return 1
          }
          if (aVal < bVal) {
            return -1
          }
          return 0
        })
        commit('setSerpResults', results)
      }
    }
  }
}
</script>



<style lang="scss" scoped>
@import '~src/styles/partials/importer';

.search-input {
  position: relative;
  z-index: 1;
  border-bottom: 1px solid $color-subtle-dark;

  @media (max-width: $breakpoint-m) {
    border-top: none;
  }

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: $breakpoint-s) {
      // wrap category
      display: block;
      margin-top: 30px;
    }
  }

  .field {
    position: relative;
    margin: 24px 0 20px;
    padding: 10px;
    max-width: 250px;
    border-radius: 2px;
    background: $color-bg-darker;
    @include ease(0.35s);

    @media (max-width: $breakpoint-m) {
      margin: 20px 0 14px;
    }
    @media (max-width: $breakpoint-s) {
      margin: 24px 0;
      max-width: 100%;
    }
    input {
      position: relative;
      z-index: 1;
      width: 100%;
      color: white;
      margin-left: 25px;
    }
  }

  .search-ico {
    position: absolute;
    top: 11px;
  }

  .search-filters {
    .search-filters-label {
      @include ie;
      display: flex;
      align-items: center;
      text-transform: uppercase;
      font-size: 0.85em;
      color: white;

      @media (max-width: $breakpoint-s) {
        position: absolute;
        right: 50px;
        top: 0;
        z-index: 1;
      }
      @media (max-width: $breakpoint-xs) {
        position: absolute;
        right: 30px;
        top: 0;
        z-index: 1;
      }
    }
  }
}

.search-filters-options {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  height: 142px;
  background: $color-bg-darker;

  .container {
    opacity: 0;
    @include ease(0.35s);
    transition-delay: 0.1s;
  }
  &.expanded {
    .container {
      opacity: 1;
    }
  }
}

.results {
  position: relative;
  padding-top: 30px;
  padding-bottom: 0;
  margin-top: 0;
  margin-bottom: 0;
  transform: translateY(-142px);
  will-change: transform margin-bottom;
  @include ease-out(0.35s);

  &.expanded {
    transform: translateY(0);
    margin-bottom: 142px;
  }
  .container {
    position: relative; // fix for results-background-fix covering contents
  }
  .results-headline {
    padding: 30px 0;
  }
  // Cover filters with just as much background as necessary. Otherwise chrome
  // has some color banding issues with its gpu acceleration due to lots of
  // transform elements above the background.
  .results-background-fix {
    position: absolute;
    top: 0;
    height: 142px;
    width: 100%;
    background: $color-bg-dark;
  }
}
</style>
