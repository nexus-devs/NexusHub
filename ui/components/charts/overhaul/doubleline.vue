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
    const data = this.data
    const svg = d3.select(this.$el).select('svg')
    const tooltip = d3.select(this.$el).append('div')
      .attr('class', 'tooltip')
      .style('display', 'none')
    const bisect = d3.bisector(d => d.x.getTime()).left

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
      .domain(d3.extent(data, d => d.y1))
    const xScale = d3.scaleTime()
      .range([0, width])
      .domain(d3.extent(data, d => d.x))

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
      .datum(data)
      .attr('class', 'line')
      .attr('fill', 'none')
      .attr('stroke-width', 1.5)
      .attr('d', d3.line().x(d => xScale(d.x)).y(d => yScale(d.y1)))

    // Create tooltip focus point
    const focus = chart.append('g')
      .attr('class', 'focus')
      .style('display', 'none')
    focus.append('circle').attr('r', 3)

    // Create tooltip content
    const tooltipDate = tooltip.append('div').attr('class', 'tooltip-date')
    const tooltipValue1 = tooltip.append('div').attr('class', 'tooltip-value')

    // Create overlay for tooltip
    chart.append('rect')
      .attr('class', 'overlay')
      .attr('width', width)
      .attr('height', height)
      .on('mouseover', () => {
        focus.style('display', null)
        tooltip.style('display', null)
      })
      .on('mouseout', () => {
        focus.style('display', 'none')
        tooltip.style('display', 'none')
      })
      .on('mousemove', function () {
        const x0 = xScale.invert(d3.mouse(this)[0])
        const i = bisect(data, x0, 1)
        const d0 = data[i - 1]
        const d1 = data[i]
        const d = x0 - d0.x > d1.x - x0 ? d1 : d0

        focus.attr('transform', `translate(${xScale(d.x)}, ${yScale(d.y1)})`)
        tooltip.attr('style', `left: ${xScale(d.x) + 64}px; top: ${yScale(d.y1)}px;`)
        tooltipDate.text(d3.timeFormat('%a %d. %B, %H:%M UTC')(d.x))
        tooltipValue1.text(d.y1)
      })
  }
}
</script>

<style lang="scss" scoped>
@import '~src/styles/partials/wow-classic/importer';

.doubleline {
  position: relative;
}
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
/deep/ .overlay {
  fill: none;
  pointer-events: all;
}
/deep/ .tooltip {
  white-space: nowrap;
  z-index: 1;
  padding: 10px 12px;
  position: absolute;
  background-color: $color-bg;
  pointer-events: none;
  transition: all 0.05s;
  @include shadow-1;
  border-radius: 2px;
  font-size: 1em;

  .tooltip-date {
    color: $color-font-paragraph;
    font-size: 0.9em;
    margin-bottom: 5px;
  }
}
/deep/ .focus circle {
  fill: #e0b534;
}
</style>
