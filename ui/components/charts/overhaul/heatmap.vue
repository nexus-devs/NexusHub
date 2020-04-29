<template>
  <div class="heatmap">
    <svg />
  </div>
</template>

<script>
import * as d3 from 'd3'
import utility from 'src/components/wow-classic/utility.js'

export default {
  props: ['data', 'medium'],
  data () {
    return {
      svg: '',
      tooltip: '',
      chart: '',
      padding: {
        top: 20,
        bottom: 20 + 16,
        left: 25 + 20,
        right: 25
      },
      breakpointSmall: 640
    }
  },

  watch: {
    data (newData, oldData) {
      this.onResize(false)
    }
  },

  mounted () {
    this.svg = d3.select(this.$el).select('svg')
    this.tooltip = d3.select(this.$el).append('div')
      .attr('class', 'tooltip')
      .style('display', 'none')
    this.tooltip.append('div').attr('class', 'tooltip-date')
    this.tooltip.append('div').attr('class', 'tooltip-value')

    window.addEventListener('resize', this.onResize)
    this.createChart()
  },

  beforeDestroy () {
    window.removeEventListener('resize', this.onResize)
  },

  methods: {
    onResize (delay = true) {
      // Timeout because certain actions like maximize trigger the resize event before actually maximizing
      setTimeout(() => {
        this.svg.selectAll('*').remove()
        this.createChart()
      }, delay ? 100 : 0)
    },
    createChart () {
      const tooltip = this.tooltip
      const padding = { ...this.padding }
      const smallDevice = window.innerWidth <= this.breakpointSmall

      // Adjust padding if small device
      if (smallDevice) {
        padding.left = 10 + 20
        padding.right = 10
      }

      // Get dimensions
      const boundingBox = this.svg.node().getBoundingClientRect()
      const height = boundingBox.height - padding.top - padding.bottom
      const width = boundingBox.width - padding.left - padding.right

      // Create chart (needed for custom padding)
      this.chart = this.svg.append('g').attr('transform', `translate(${padding.left}, ${padding.top})`)
      const xTicks = ['12am', '2am', '4am', '6am', '8am', '10am', '12pm', '2pm', '4pm', '6pm', '8pm', '10pm', '12pm']
      const yTicks = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

      // Create scales
      const xScale = d3.scaleBand()
        .range([0, width])
        .padding(0.15)
        .domain([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11])
      const yScale = d3.scaleBand()
        .range([0, height])
        .padding(0.25)
        .domain([0, 1, 2, 3, 4, 5, 6])
      const colorScale = d3.scaleLinear()
        .range(['#00c0ff', 'transparent', '#e6ad02'])
        .domain([d3.min(this.data, d => d.value), this.medium, d3.max(this.data, d => d.value)])

      // Create axes
      this.chart.append('g')
        .attr('transform', `translate(0, ${height})`)
        .attr('class', 'axis')
        .call(d3.axisBottom(xScale).tickSize(0).tickFormat(d => xTicks[d]))
      this.chart.append('g')
        .attr('class', 'axis')
        .call(d3.axisLeft(yScale).tickSize(0).tickFormat(d => yTicks[d].slice(0, 3)))

      // Select tooltip content
      const tooltipDate = this.tooltip.select('.tooltip-date')
      const tooltipValue = this.tooltip.select('.tooltip-value')

      // Create rectangles
      this.chart.selectAll()
        .data(this.data, d => d.hour + ':' + d.day)
        .enter()
        .append('rect')
        .attr('x', d => xScale(d.hour))
        .attr('y', d => yScale(d.day))
        .attr('rx', 0)
        .attr('width', xScale.bandwidth())
        .attr('height', yScale.bandwidth())
        .style('fill', d => colorScale(d.value))
        .on('mouseover', function () {
          d3.select(this).attr('class', 'rect-hover')
          tooltip.style('display', null)
        })
        .on('mouseout', function () {
          d3.select(this).attr('class', null)
          tooltip.style('display', 'none')
        })
        .on('mousemove', function (d) {
          if (!smallDevice) tooltip.attr('style', `left: ${xScale(d.hour) + 96}px; top: ${yScale(d.day)}px;`)
          else tooltip.attr('style', `left: ${width / 3}px; top: -48px;`)
          tooltipDate.text(`${yTicks[d.day]}, ${xTicks[d.hour]} - ${xTicks[(d.hour + 1) % 12]}`)
          tooltipValue.text(utility.parsePrice(d.value))
        })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~src/styles/partials/wow-classic/importer';

.heatmap {
  position: relative;
}
svg {
  width: 100%;
  height: 100%;
}
/deep/ .axis {
  color: $color-font-body;
  font-size: 0.7em;

  path {
    stroke: none;
  }
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
  font-size: 0.9em;

  .tooltip-date {
    color: $color-font-paragraph;
  }
  .tooltip-value {
    margin-top: 5px;

    span {
      vertical-align: initial;
    }
  }
}
/deep/ .rect-hover {
  outline: thin solid $color-font-body;
}
</style>
