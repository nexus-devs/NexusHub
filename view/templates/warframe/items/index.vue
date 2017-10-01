<template>
  <div>
    <subnav></subnav>
    <header>
      <div class="g-ct">
        <div class="row row-margin">
          <pricefield v-for="component in item.components" :component="component"
          :key="component.name" :item="item"></pricefield>
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
  components: [],
  selected: []
}

const store = {
  state: {
    item: _.cloneDeep(defaultItem),
    itemComparison: _.cloneDeep(defaultItem)
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

    // Merge pre-defined store with existing state.
    // SSR will produce mismatching components otherwise.
    if (this.$store.state.items) {
      store.state.item = _.merge(store.state.item, this.$store.state.items.item)
    }
    this.$store.registerModule('items', store)
  },
  created() {
    this.$store.commit('setActiveGame', 'warframe')
  },
  computed: {
    item() {
      return this.$store.state.items.item
    },
    components() {
      return this.selected || this.$store.state.items.item.components
    }
  },
  beforeMount() {
    this.listen()
  },
  asyncData({ store, route: { params: { item }}}) {
    return store.dispatch('fetchItemData', item)
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
  background: $colorBackground;
  padding: 136px 0 80px;

  .row-margin {
    margin-left: -20px;
    margin-right: -20px;

    .col-b {
      margin: 0 20px;
    }
  }
}
</style>
