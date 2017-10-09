<template>
  <div>
    <subnav></subnav>
    <header>
      <div class="g-ct">
        <div class="price-container">
          <pricefield v-for="(component, index) in components" :component="component"
          :key="component.name" :comparison="comparison[index]" :item="item"></pricefield>
        </div>
      </div>
    </header>
  </div>
</template>



<script>
import _ from 'lodash'
import subnav from 'src/components/ui/subnav.vue'
import pricefield from 'src/components/fields/items/price.vue'
import timefield from 'src/components/search/fields/time.vue'
import rankfield from 'src/components/search/fields/rank.vue'


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

const store = {
  state: {
    item: _.cloneDeep(defaultItem),
    itemComparison: _.cloneDeep(defaultItem),
    selected: {
      components: [],
      offerType: 'combined'
    }
  },
  mutations: {
    setItem(state, item) {
      state.item = Object.assign(state.item, item)
    },
    setItemComparison(state, item) {
      state.itemComparison = Object.assign(state.itemComparison, item)
    }
  },
  actions: {
    async fetchItemData({ commit, rootState }, name) {
      const time = rootState.time
      const rank = rootState.rank
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
        let query = `?timestart=${focusStart}&timeend=${focusEnd}`

        if (focusUrl.includes('?')) {
          query = query.replace('?', '&')
        }
        focusUrl += query
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


/**
 * Vue Component
 */
export default {
  components: {
    subnav,
    pricefield,
    timefield
  },
  beforeCreate() {
    // Fill store data if not already done
    if (!this.$store.state.time || !this.$store.state.rank) {
      timefield.beforeCreate[0].bind(this)()
      rankfield.beforeCreate[0].bind(this)()
    }

    // Apply URL time query to state
    this.$store.dispatch('applyTimeQuery', this.$store.state.route)

    // Merge with state from SSR. Not doing this will result in discarding
    // the prerendered data.
    if (this.$store.state.items) {
      store.state.item = _.merge(store.state.item, this.$store.state.items.item)
      store.state.itemComparison = _.merge(store.state.itemComparison, this.$store.state.items.itemComparison)
    }
    if (!this.$store._actions.fetchItemData) {
      this.$store.registerModule('items', store)
    }
  },
  created() {
    this.$store.commit('setActiveGame', 'warframe')
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
    this.listen()
  },
  asyncData({ store, route: { params: { item }}}) {
    return store.dispatch('fetchItemData', item.replace(/(?:(\-)(?!\1))+/g, ' ').replace(/- /g, '-'))
  },
  methods: {
    async listen() {
      const itemUrl = `/warframe/v1/items/${this.$route.params.item}/statistics`
      this.$blitz.subscribe(itemUrl)
      this.$blitz.on(itemUrl, data => {
        this.$store.commit('setItem', mergeItemData(this.$store.state.item.item, data))
      })
    }
  }
}
</script>



<style lang="scss" scoped>
@import '~src/styles/partials/importer';

header {
  @include gradient-background-dg(#596570, $colorBackground);
  padding: 116px 0 60px;

  @media (max-width: $breakpoint-m) {
    padding: 185px 0 50px;
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
