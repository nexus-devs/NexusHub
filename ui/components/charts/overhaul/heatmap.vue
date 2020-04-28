<template>
  <div class="heatmap">
    <svg />
  </div>
</template>

<script>
import * as d3 from 'd3'

export default {
  props: ['data'],
  data () {
    return {
      svg: '',
      tooltip: '',
      chart: '',
      padding: {
        top: 20,
        bottom: 20 + 16,
        left: 25,
        right: 25
      },
      breakpointSmall: 640
    }
  },

  mounted () {
    this.svg = d3.select(this.$el).select('svg')

    this.createChart()
  },

  methods: {
    createChart () {
      const padding = { ...this.padding }

      // Get dimensions
      const boundingBox = this.svg.node().getBoundingClientRect()
      const height = boundingBox.height - padding.top - padding.bottom
      const width = boundingBox.width - padding.left - padding.right

      // Create chart (needed for custom padding)
      this.chart = this.svg.append('g').attr('transform', `translate(${padding.left}, ${padding.top})`)

      // Create scales
      const xScale = d3.scaleBand()
        .range([0, width])
        .padding(0.25)
        .domain(['12am', '2am', '4am', '6am', '8am', '10am', '12pm', '2pm', '4pm', '6pm', '8pm', '10pm', '12pm'])
      const yScale = d3.scaleBand()
        .range([height, 0])
        .padding(0.25)
        .domain(['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'])
      /* const colorScale = d3.scaleLinear()
        .range(['#e0b534', 'transparent', '#23acd9']) */

      this.chart.append('g')
        .attr('transform', `translate(0, ${height})`)
        .attr('class', 'axis')
        .call(d3.axisBottom(xScale))
      this.chart.append('g')
        .attr('class', 'axis')
        .call(d3.axisLeft(yScale))
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~src/styles/partials/wow-classic/importer';
</style>
