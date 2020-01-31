<template>
  <opm :opm="opm" />
</template>



<script>
import opm from 'src/components/warframe/opm.vue'
import storeModule from 'src/store/warframe/opm.js'
let updateInterval

export default {
  components: {
    opm
  },

  async asyncData () {
    const opm = await this.$cubic.get('/warframe/v1/orders/opm')
    this.$store.commit('setOpmAll', opm)
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

  storeModule
}
</script>



<style lang="scss" scoped>
@import '~src/styles/partials/importer';

</style>
