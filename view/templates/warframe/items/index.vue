<template>
  <div>
    <subnav></subnav>
    <header>
      <div class="g-ct">
        <div class="row row-margin">
          <pricefield v-for="component in item.components" :component="component"
          :key="component.name" :item="item">

          </pricefield>
        </div>
      </div>
    </header>
  </div>
</template>



<script>
import subnav from 'src/components/ui/subnav.vue'
import pricefield from 'src/components/fields/items/price.vue'
import timefield from 'src/components/search/fields/time.vue'

/**
 * Helper function to merge multiple sources of data for the item
 */
const mergeItemData = (item, data) => {
  for (let i = 0; i < item.components.length; i++) {
    let component = item.components[i]
    component = Object.assign(component, data.components[i])
  }

  // Set should be first item
  let merged = Object.assign(data, item)
  let index = merged.components.findIndex(c => c.name === 'Set')

  if (index > -1) {
    let set = merged.components.splice(index, 1)[0]
    merged.components.unshift(set)
  }

  return merged
}

/**
 * Initial Store state for item
 */
const store = {
  state: {
    item: {
      name: '',
      type: '',
      description: '',
      supply: {
        count: 0,
        percentage: 0
      },
      demand: {
        count: 0,
        percentage: 0
      },
      components: [],
      selected: []
    }
  },
  mutations: {
    setItem(state, item) {
      state.item = Object.assign(state.item, item)
    }
  },
  actions: {
    async fetchItemData({ commit }, name) {
      const item = await this.$blitz.get(`/warframe/v1/items/${name}`)
      const stats = await this.$blitz.get(`/warframe/v1/items/${name}/statistics`)
      commit('setItem', mergeItemData(item, stats))
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
    if (this.$store.state.items) {
      store.state.item = Object.assign(store.state.item, this.$store.state.items.item)
    }
    this.$store.registerModule('items', store)
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
    this.$store.commit('setActiveGame', 'warframe')
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

  .row {
    /deep/ {
      .col-b {}
    }
  }
}
</style>
