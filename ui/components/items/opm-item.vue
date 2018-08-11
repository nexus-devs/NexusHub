<template>
  <opm :opm="opm"/>
</template>



<script>
import opm from 'src/components/items/opm.vue'
let updateInterval

export default {
  components: {
    opm
  },

  computed: {
    item () {
      return this.$store.state.items.item
    },
    opm () {
      return this.$store.state.opm.item
    }
  },

  watch: {
    item (to, from) {
      this.$cubic.unsubscribe(`/warframe/v1/orders/opm?item=${from.name}`)
      clearInterval(updateInterval)
    }
  },

  beforeMount () {
    this.$cubic.subscribe(`/warframe/v1/orders/opm?item=${this.item.name}`, opm => {
      this.$store.commit('setOpmItem', opm)
    })
    updateInterval = setInterval(async () => {
      const opm = await this.$cubic.get(`/warframe/v1/orders/opm?item=${this.item.name}`)
      this.$store.commit('setOpmItem', opm)
    }, 1000 * 60)
  },

  beforeDestroy () {
    this.$cubic.unsubscribe(`/warframe/v1/orders/opm?item=${this.item.name}`)
    clearInterval(updateInterval)
  },

  async asyncData ({ route }) {
    const item = route.params.item.split('-').join(' ')
    const opm = await this.$cubic.get(`/warframe/v1/orders/opm?item=${item}`)
    this.$store.commit('setOpmItem', opm)
  },

  storeModule: {
    name: 'opm',
    state: {
      all: {
        active: 0,
        intervals: [],
        sources: {
          wfm: 0.5,
          tradeChat: 0.5
        },
        mostTraded: []
      },
      item: {
        active: 0,
        intervals: [],
        sources: {
          wfm: 0.5,
          tradeChat: 0.5
        }
      }
    },
    mutations: {
      setOpmAll (state, opm) {
        state.all = opm
      },
      setOpmItem (state, opm) {
        state.item = opm
      }
    }
  }
}
</script>



<style lang="scss" scoped>
@import '~src/styles/partials/importer';

</style>
