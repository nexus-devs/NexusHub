<template>
  <div>
    {{ item }}
  </div>
</template>



<script>
const store = {
  state: {
    item: {}
  },
  mutations: {
    setItem(state, item) {
      state.item = item
    }
  },
  actions: {
    async fetchItemData({ commit }, name) {
      const item = await this.$blitz.get(`/warframe/v1/items/${name}`)
      const stats = await this.$blitz.get(`/warframe/v1/items/${name}/statistics`)
      commit('setItem', Object.assign(item, stats))
    }
  }
}

export default {
  beforeCreate() {
    if (this.$store.state.item) {
      store.state = this.$store.state.item
    }
    this.$store.registerModule('item', store)
  },

  computed: {
    item() {
      return this.$store.state.item
    }
  },

  beforeMount() {
    this.$store.commit('setActiveGame', 'warframe')
    this.listen()
  },

  async asyncData({ store, route: { params: { item }}}) {
    await store.dispatch('fetchItemData', item)
  },

  methods: {
    async listen() {
      const itemUrl = `/warframe/v1/items/${this.$route.params.item}/statistics`
      this.$blitz.subscribe(itemUrl)
      this.$blitz.on(itemUrl, item => this.$store.commit('setItem', Object.assign(this.item, item)))
    }
  }
}
</script>



<style lang="scss" scoped>
</style>
