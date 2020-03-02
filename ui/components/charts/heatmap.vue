<template>
  <div class="row">
    <div v-for="(day, i) in data" :key="axisDays[i]" class="day">
      <div v-for="(hour, j) in day" :key="hour + '' + j" class="hour-wrapper">
        <div :style="{ opacity: scale(hour), transform: `scale(${scale(hour)})` }" :class="[theme.hour, { inactive: !hour }]" class="hour" />
        <div :class="[theme.tooltip, { inactive: !hour }]" class="tooltip">
          <time :datetime="`${j * 2 + 1}:00`">
            {{ axisDays[i] }},
            {{ j % 12 + 1 }}{{ j > 11 ? 'pm' : 'am' }}
          </time>
          <br>
          <span class="num">{{ parseNum ? parsePrice(hour) : hour }}</span>
          <br>
          <span>{{ tooltipLabel ? tooltipLabel : '' }}</span>
        </div>
      </div>
      <span :class="theme.label" class="label">{{ axisDays[i] }}</span>
    </div>
    <div class="axis-hours">
      <div v-for="(hour, i) in 24" :key="hour + '' + i" class="time">
        <span v-if="i % 3 === 1" :class="theme.label" class="label">
          {{ i % 12 + 1 }}{{ i + 1 > 11 ? 'pm' : 'am' }}
        </span>
        <span v-else />
      </div>
    </div>
  </div>
</template>



<script>
import getTheme from 'src/components/_theme.js'
import utility from 'src/components/wow-classic/utility.js'

export default {
  props: ['data', 'parseNum', 'tooltipLabel'],

  computed: {
    theme () {
      return getTheme(this)
    },
    // computed because this logic may change
    axisDays () {
      return ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      // return ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    },

    min () {
      const minRow = this.data.map((row) => Math.min(...row.filter((v) => v)))
      return Math.min(...minRow)
    },
    max () {
      const maxRow = this.data.map((row) => Math.max(...row.filter((v) => v)))
      return Math.max(...maxRow)
    }
  },

  created () {
    this.parsePrice = utility.parsePrice
  },

  methods: {
    // Normalize number to [0.45, 1]
    scale (num) {
      const scale = (num - this.min) / (this.max - this.min)
      return (scale * (1 - 0.45)) + 0.45
    }
  }
}
</script>


<style lang="scss" module="warframe">
@import '~src/styles/partials/importer';

.hour {
  background: $color-primary-subtle;
}
.tooltip {
  background: $color-bg-dark;
}
.label {
  color: $color-font-body !important;
}
</style>

<style lang="scss" module="wow-classic">
@import '~src/styles/partials/wow-classic/importer';

.hour {
  background: $color-primary-subtle;
}
.tooltip {
  background: $color-bg;
}
.label {
  color: $color-font-body !important;
}
</style>

<style lang="scss" scoped>
@import '~src/styles/partials/importer';

.row {
  flex-wrap: nowrap;
  flex-direction: column;
  width: 100%;
}

.day {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 28px;

  span {
    text-align: right;
    font-size: 0.8em;
  }
  .label {
    width: 5%;
    margin-left: 10px;
  }
}

// Wrapper to make it easier to hover over data
.hour-wrapper {
  padding: 3px;
  width: 9px;
  @media (max-width: $breakpoint-m) {
    padding: 0 !important;
  }

  &:hover {
    .hour {
      position: relative;
      opacity: 1 !important;
    }
    .tooltip:not(.inactive) {
      z-index: 5;
      opacity: 1;
    }
  }
}
.hour {
  height: 10px;
  width: 10px;
  border-radius: 5px;

  &.inactive {
    background: transparent;
  }
}
.tooltip {
  position: absolute;
  white-space: nowrap;
  margin-left: 28px;
  opacity: 0;
  border-radius: 2px;
  padding: 10px 12px;
  pointer-events: none;
  @include shadow-1;

  .num {
    display: inline-block;
    font-size: 1.2em;
    margin: 3px 0;
  }
}

.axis-hours {
  text-align: right;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: calc(100% - 5% - 10px); // Heatmap width without day labels

  span {
    display: inline-block;
    font-size: 0.8em;
    margin-top: 2.5px;
  }
}
</style>
