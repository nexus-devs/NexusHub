<template>
  <div>
    <navigation></navigation>
    <sidebar>
      <sidebar-search></sidebar-search>
    </sidebar>
    <app-content>
      <subnav></subnav>
      <header>
        <div class="g-ct">
          <div class="price-container">
            <pricesnippet v-for="(component, index) in components" :component="component"
            :key="component.name" :comparison="comparison[index]" :item="item"></pricesnippet>
          </div>
        </div>
        <filters></filters>
      </header>
      <section class="g-ct">
        <!-- placeholder -->
      </section>
    </app-content>
  </div>
</template>



<script>
import _ from 'lodash'
import appContent from 'src/app-content.vue'
import sidebar from 'src/components/ui/sidebar.vue'
import sidebarSearch from 'src/components/ui/sidebar/search.vue'
import navigation from 'src/components/ui/nav.vue'
import subnav from 'src/components/items/subnav.vue'
import pricesnippet from 'src/components/snippets/item-price.vue'
import time from 'src/components/search/time.vue'
import rank from 'src/components/search/rank.vue'
import filters from 'src/components/items/filters.vue'


/**
 * Helper function to merge multiple sources of data for the item
 */
const mergeItemData = (item, data) => {
  const merged = _.merge(_.cloneDeep(item), data)

  // Item 'Set' should be first in list
  // > -1 -> set exists, > 0 -> not the first in array already
  let index = merged.components.findIndex(c => c.name === 'Set')
  if (index > 0) {
    let set = merged.components.splice(index, 1)[0]
    merged.components.unshift(set)
  }
  return merged
}


/**
 * Initial Store state for item
 */
const defaultItem = {
  name: '',
  type: '',
  description: '',
  supply: {
    count: 0,
    percentage: 0,
    hasValue: 0
  },
  demand: {
    count: 0,
    percentage: 0,
    hasValue: 0
  },
  components: []
}


export default {
  components: {
    'app-content': appContent,
    sidebar,
    'sidebar-search': sidebarSearch,
    navigation,
    subnav,
    pricesnippet,
    filters
  },

  computed: {
    item() {
      return this.$store.state.items.item
    },
    components() {
      const components = this.$store.state.items.item.components
      const modded = [].concat(components)
      const offset = components.length % 3

      // Fill empty spaces with pseudo elements for flex
      if (offset) {
        for (let i = 0; i < 3 - offset; i++) {
          modded.push({ isDummy: true })
        }
      }
      return modded
    },
    comparison() {
      return this.$store.state.items.itemComparison.components
    }
  },

  beforeMount() {
    // this.listen() // requires on-route change destructor
  },

  asyncData({ store, route }) {
    store.dispatch('applyTimeQuery', route)
    store.commit('setItemRegions', route.query.region || [])
    return store.dispatch('fetchItemData', route.params.item.replace(/(?:(\-)(?!\1))+/g, ' ').replace(/- /g, '-'))
  },

  methods: {
    async listen() {
      const itemUrl = `/warframe/v1/items/${this.$store.state.items.item.name}/statistics`
      this.$blitz.subscribe(itemUrl)
      this.$blitz.on(itemUrl, data => {
        this.$store.commit('setItem', mergeItemData(this.$store.state.items.item, data))
      })
    }
  },

  storeModule: {
    name: 'items',
    state: {
      item: _.cloneDeep(defaultItem),
      itemComparison: _.cloneDeep(defaultItem),
      selected: {
        components: [],
        offerType: 'combined',
        regions: []
      }
    },
    mutations: {
      setItem(state, item) {
        state.item = Object.assign(state.item, item)
      },
      setItemComparison(state, item) {
        state.itemComparison = Object.assign(state.itemComparison, item)
      },
      setItemOfferType(state, type) {
        state.selected.offerType = type.toLowerCase()
      },
      setItemRegions(state, regions) {
        state.selected.regions = regions
      }
    },
    actions: {
      async fetchItemData({ commit, rootState }, name) {
        const time = rootState.time
        const rank = rootState.rank
        const regions = rootState.items.selected.regions
        const compareStart = time.compare.start.time.valueOf()
        const compareEnd = time.compare.end.time.valueOf()

        // Specify Target URLs
        let focusUrl = `/warframe/v1/items/${name}/statistics`
        let compareUrl = `/warframe/v1/items/${name}/statistics?timestart=${compareStart}&timeend=${compareEnd}`

        // Attach rank if specified
        if (rank.selected !== 'Any Rank') {
          focusUrl += `?rank=${rank.selected}`
          compareUrl += `&rank=${rank.selected}`
        }

        // Get custom query which probably isn't cached
        if (time.modified) {
          const focusStart = time.focus.start.time.valueOf()
          const focusEnd = time.focus.end.time.valueOf()
          const intervals = time.focus.start.time.diff(time.focus.end.time, 'days')
          let query = `?timestart=${focusStart}&timeend=${focusEnd}&intervals=${intervals}`

          if (focusUrl.includes('?')) {
            query = query.replace('?', '&')
          }
          focusUrl += query
          compareUrl += `&intervals=${intervals}`
        }

        // Add region param if present
        if (regions.length) {
          let query = `?region=${regions}`

          if (focusUrl.includes('?')) {
            query = query.replace('?', '&')
          }
          focusUrl += focusUrl.includes('?') ? `&region=${regions}` : `?region=${regions}`
          compareUrl += `&region=${regions}`
        }

        // Perform API query for base data, focus range and comparison range
        const data = await Promise.all([
          this.$blitz.get(`/warframe/v1/items/${name}`),
          this.$blitz.get(focusUrl),
          this.$blitz.get(compareUrl)
        ])

        commit('setItem', mergeItemData(data[0], data[1]))
        commit('setItemComparison', mergeItemData(data[0], data[2]))
      }
    }
  }
}
</script>



<style lang="scss" scoped>
@import '~src/styles/partials/importer';

header {
  @include gradient-background-dg-tri(#596474, #667382, #48515e);
  padding: 130px 0 0px;
  position: relative;
  overflow: hidden;

  @media (max-width: $breakpoint-m) {
    padding: 185px 0 0px;
  }
  .price-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-left: -10px;
    margin-right: -10px;

    & > * {
      margin: 10px;
    }
    @media (max-width: $breakpoint-m) {
      justify-content: center;
    }
  }
}
</style>
