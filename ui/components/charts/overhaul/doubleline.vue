<template>
  <div class="doubleline">
    <svg />
  </div>
</template>

<script>
import * as d3 from 'd3'

export default {
  props: ['data'],
  mounted () {
    const svg = d3.select(this.$el).select('svg')

    // Get dimensions
    const padding = {
      top: 1, // Stroke width compensator
      bottom: 20,
      left: 40,
      right: 10
    }
    const boundingBox = svg.node().getBoundingClientRect()
    const height = boundingBox.height - padding.top - padding.bottom
    const width = boundingBox.width - padding.left - padding.right

    // Create chart (needed for custom padding)
    const chart = svg.append('g').attr('transform', `translate(${padding.left}, ${padding.top})`)

    // Create scales
    const yScale = d3.scaleLinear()
      .range([height, 0])
      .domain(d3.extent(this.data, d => d.y1))
    const xScale = d3.scaleTime()
      .range([0, width])
      .domain(d3.extent(this.data, d => d.x))

    // Create axes
    chart.append('g') // Y1 left axis
      .attr('class', 'axis')
      .call(d3.axisLeft(yScale).tickFormat(d => (d / 10000).toFixed(2) + 'g').tickSize(3).ticks(5))
    chart.append('g') // X axis
      .attr('transform', `translate(0, ${height})`)
      .attr('class', 'axis')
      .call(d3.axisBottom(xScale).ticks(7).tickFormat(d3.timeFormat('%d. %b')))

    // Create lines
    chart.append('path')
      .datum(this.data)
      .attr('class', 'line')
      .attr('fill', 'none')
      .attr('stroke-width', 1.5)
      .attr('d', d3.line().x(d => xScale(d.x)).y(d => yScale(d.y1)))
  }
}
</script>

<style lang="scss" scoped>
@import '~src/styles/partials/wow-classic/importer';

svg {
  width: 100%;
  height: 100%;
}
/deep/ .axis {
  color: $color-font-body;
  font-size: 0.7em;
}
/deep/ .line {
  stroke: $color-primary-subtle;
}
</style>
