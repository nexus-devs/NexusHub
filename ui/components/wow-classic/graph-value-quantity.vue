<template>
  <module ref="graphValueQuantity">
    <template slot="header">
      <h3>Market Value / Quantity</h3>
    </template>
    <template slot="body">
      <doubleline :data="data"/>
    </template>
    <template slot="footer">
      <module-time :days="timerange" :fn="setTimerange"/>
    </template>
  </module>
</template>


<script>
import doubleline from 'src/components/charts/doubleline.vue'
import indicator from 'src/components/charts/indicator.vue'
import module from 'src/components/ui/module.vue'
import moduleTime from 'src/components/ui/module-time.vue'
import progressbar from 'src/components/progress.vue'

export default {
  components: {
    indicator,
    doubleline,
    module,
    moduleTime,
    progressbar
  },

  computed: {
    timerange () {
      return this.$store.state.items.item.current.intervals.length
    },

    data () {
      const item = this.$store.state.items.item.current
      const data = []

      let i = 0
      for (const day of item.intervals) {
        for (const hour of day.intervals) {
          data.push({ x: i, marketValue: hour.marketValue, qty: hour.qty })
          i++
        }
      }

      return data
    }
  },

  methods: {
    async setTimerange (timerange) {
      this.$refs.graphValueQuantity.$refs.progress.start()
      await this.$store.dispatch('refetchItem', timerange)
      this.$refs.graphValueQuantity.$refs.progress.finish()
    }
  }
}
</script>


<style lang="scss" scoped>
@import '~src/styles/partials/importer';

</style>
