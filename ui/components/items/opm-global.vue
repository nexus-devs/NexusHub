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
    opm () {
      return this.$store.state.opm.all
    }
  },

  beforeMount () {
    this.$cubic.subscribe(`/warframe/v1/orders/opm`, opm => {
      this.$store.commit('setOpmAll', opm)
    })
    updateInterval = setInterval(async () => {
      const opm = await this.$cubic.get(`/warframe/v1/orders/opm`)
      this.$store.commit('setOpmAll', opm)
    }, 1000 * 60)
  },

  beforeDestroy () {
    this.$cubic.unsubscribe(`/warframe/v1/orders/opm`)
    clearInterval(updateInterval)
  },

  async asyncData () {
    const opm = await this.$cubic.get('/warframe/v1/orders/opm')
    this.$store.commit('setOpmAll', opm)
  },

  storeModule: {
    name: 'opm',
    state: {
      all: {
        total: 0,
        intervals: [],
        sources: {
          wfm: 0.5,
          tradeChat: 0.5
        },
        mostTraded: []
      },
      item: {
        total: 0,
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
