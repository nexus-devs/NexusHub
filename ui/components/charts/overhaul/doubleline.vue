<template>
  <div class="doubleline">
    <svg />
  </div>
</template>

<script>
import * as d3 from 'd3'
import utility from 'src/components/wow-classic/utility.js'

export default {
  props: ['data', 'opts'],
  data () {
    return {
      svg: '',
      tooltip: '',
      chart: '',
      bisect: null,
      padding: {
        top: 20,
        bottom: 20 + 10,
        left: 25 + 50,
        right: 25 + 35
      }
    }
  },

  computed: {
    options () {
      const defaultOptions = {
        secondaryLabel: 'Quantity: ',
        secondaryScale: true,
        parsePrice: { primary: true, secondary: false },
        areaChart: { primary: false, secondary: true }
      }
      return { ...defaultOptions, ...this.opts }
    }
  },

  watch: {
    data (newData, oldData) {
      if (newData.length !== oldData.length) {
        this.onResize()
      }
    }
  },

  mounted () {
    this.svg = d3.select(this.$el).select('svg')
    this.tooltip = d3.select(this.$el).append('div')
      .attr('class', 'tooltip')
      .style('display', 'none')
    this.tooltip.append('div').attr('class', 'tooltip-date')
    this.tooltip.append('div').attr('class', 'tooltip-value')
    this.tooltip.append('div').attr('class', 'tooltip-value')
      .append('span').text('Quantity: ')
      .append('span').attr('class', 'tooltip-value-2')
    this.bisect = d3.bisector(d => d.x.getTime()).left

    window.addEventListener('resize', this.onResize)
    this.createChart()
  },

  beforeDestroy () {
    window.removeEventListener('resize', this.onResize)
  },

  methods: {
    onResize () {
      // Timeout because certain actions like maximize trigger the resize event before actually maximizing
      setTimeout(() => {
        this.svg.selectAll('*').remove()
        this.createChart()
      }, 100)
    },
    createChart () {
      const data = this.data
      const tooltip = this.tooltip
      const bisect = this.bisect

      const boundingBox = this.svg.node().getBoundingClientRect()
      const height = boundingBox.height - this.padding.top - this.padding.bottom
      const width = boundingBox.width - this.padding.left - this.padding.right

      // Create chart (needed for custom padding)
      this.chart = this.svg.append('g').attr('transform', `translate(${this.padding.left}, ${this.padding.top})`)

      // Create scales
      const yExtents1 = d3.extent(data, d => d.y1)
      const yPadding1 = Math.round((yExtents1[1] - yExtents1[0]) / 6)
      const yScale1 = d3.scaleLinear()
        .range([height, 0])
        .domain([yExtents1[0] - yPadding1 < 0 ? 0 : yExtents1[0] - yPadding1, yExtents1[1] + yPadding1])
      const yScale2 = d3.scaleLinear()
        .range([height, 0])
        .domain([0, d3.max(data, d => d.y2) + Math.round(d3.max(data, d => d.y2) / 6)])
      const xScale = d3.scaleTime()
        .range([0, width])
        .domain(d3.extent(data, d => d.x))

      // Create lines
      this.chart.append('path')
        .datum(data)
        .attr('class', 'line-2')
        .attr('stroke-width', 1.5)
        .attr('d', d3.area().x(d => xScale(d.x)).y0(yScale2(0)).y1(d => yScale2(d.y2)))
      this.chart.append('path')
        .datum(data)
        .attr('class', 'line-1')
        .attr('fill', 'none')
        .attr('stroke-width', 1.5)
        .attr('d', d3.line().x(d => xScale(d.x)).y(d => yScale1(d.y1)))

      // Create axes
      this.chart.append('g') // Y1 left axis
        .attr('class', 'axis')
        .call(d3.axisLeft(yScale1).tickFormat(d => (d / 10000).toFixed(2) + 'g').tickSize(3).ticks(5).tickSizeOuter(0))
      this.chart.append('g') // Y2 left axis
        .attr('transform', `translate(${width}, 0)`)
        .attr('class', 'axis')
        .call(d3.axisRight(yScale2).tickSize(3).ticks(5).tickSizeOuter(0))
      this.chart.append('g') // X axis
        .attr('transform', `translate(0, ${height})`)
        .attr('class', 'axis')
        .call(d3.axisBottom(xScale).ticks(7).tickFormat(d3.timeFormat('%d. %b')).tickSize(4).tickSizeOuter(0))

      // Create tooltip focus point
      const focusBar = this.chart.append('g').style('display', 'none')
      focusBar.append('line')
        .attr('class', 'focus-bar')
        .attr('x1', 0)
        .attr('y1', 0)
        .attr('x2', 0)
        .attr('y2', height)
        .attr('fill', 'none')
        .attr('stroke-width', 1)
      const focusValue1 = this.chart.append('g').style('display', 'none')
      focusValue1.append('circle')
        .attr('r', 3)
        .attr('class', 'focus-value-1')
      const focusValue2 = this.chart.append('g').style('display', 'none')
      focusValue2.append('circle')
        .attr('r', 3)
        .attr('class', 'focus-value-2')

      // Create tooltip content
      const tooltipDate = this.tooltip.select('.tooltip-date')
      const tooltipValue1 = this.tooltip.select('.tooltip-value')
      const tooltipValue2 = this.tooltip.select('.tooltip-value-2')

      // Create overlay for tooltip
      this.chart.append('rect')
        .attr('class', 'overlay')
        .attr('width', width)
        .attr('height', height)
        .on('mouseover', () => {
          focusBar.style('display', null)
          focusValue1.style('display', null)
          focusValue2.style('display', null)
          tooltip.style('display', null)
        })
        .on('mouseout', () => {
          focusBar.style('display', 'none')
          focusValue1.style('display', 'none')
          focusValue2.style('display', 'none')
          tooltip.style('display', 'none')
        })
        .on('mousemove', function () {
          const x0 = xScale.invert(d3.mouse(this)[0])
          const i = bisect(data, x0, 1)
          const d0 = data[i - 1]
          const d1 = i > data.length - 1 ? data[i - 1] : data[i]
          const d = x0 - d0.x > d1.x - x0 ? d1 : d0

          focusBar.attr('transform', `translate(${xScale(d.x)}, 0)`)
          focusValue1.attr('transform', `translate(${xScale(d.x)}, ${yScale1(d.y1)})`)
          focusValue2.attr('transform', `translate(${xScale(d.x)}, ${yScale2(d.y2)})`)
          tooltip.attr('style', `left: ${xScale(d.x) + 64}px; top: ${yScale1(d.y1) - 32}px;`)
          tooltipDate.text(d3.timeFormat('%a %d. %B, %H:%M UTC')(d.x))
          tooltipValue1.text(utility.parsePrice(d.y1))
          tooltipValue2.text(d.y2)
        })
    }
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
/deep/ .line-1 {
  stroke: $color-primary-subtle;
}
/deep/ .line-2 {
  fill: $color-accent-subtle;
  fill-opacity: 0.45;
  stroke: $color-accent-subtle;
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
/deep/ .focus-bar {
  stroke: $color-font-body;
}
/deep/ .focus-value-1 {
  fill: $color-primary-subtle;
}
/deep/ .focus-value-2 {
  fill: $color-accent-subtle;
}
</style>
