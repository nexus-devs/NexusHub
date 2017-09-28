<template>
  <div>
    <subnav></subnav>
    <header>
      <div class="g-ct">
        <itemfield v-for="component in item.components" :data="component" :key="component.name">
          {{ component }}
        </itemfield>
      </div>
    </header>
  </div>
</template>



<script>
import subnav from 'src/components/ui/subnav.vue'
import itemfield from 'src/components/fields/item.vue'
import timefield from 'src/components/search/fields/time.vue'

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

      // Merge Component array of item and stats endpoint
      for (let i = 0; i < item.components.length; i++) {
        let component = item.components[i]
        component = Object.assign(component, stats.components[i])
      }
      commit('setItem', Object.assign(item, stats))
    }
  }
}

export default {
  components: {
    subnav,
    itemfield,
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
      const itemUrl = `/warframe/v1/items/${this.$route.params.item}/statistics_new`
      this.$blitz.subscribe(itemUrl)
      this.$blitz.on(itemUrl, item => {
        // Merge Component array of item and stats endpoint
        for (let i = 0; i < item.components.length; i++) {
          let component = item.components[i]
          component = Object.assign(component, this.$store.state.items.item.components[i])
        }
        this.$store.commit('setItem', Object.assign(item, this.$store.state.items.item))
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
}
</style>
