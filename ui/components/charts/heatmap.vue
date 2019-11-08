<template>
  <div class="row">
    <div v-for="(day, i) in data" :key="axisDays[i]" class="day">
      <div v-for="(hour, j) in day" :key="hour + '' + j" class="hour-wrapper">
        <div :style="{ opacity: scale(hour), transform: `scale(${scale(hour)})` }" :class="{ inactive: !hour }" class="hour"/>
        <div class="tooltip">
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
      <span class="label">{{ axisDays[i] }}</span>
    </div>
    <div class="axis-hours">
      <div v-for="(hour, i) in 24" :key="hour + '' + i" class="time">
        <span v-if="i % 3 === 1" class="label">
          {{ i % 12 + 1 }}{{ i + 1 > 11 ? 'pm' : 'am' }}
        </span>
        <span v-else/>
      </div>
    </div>
  </div>
</template>



<script>
import utility from 'src/components/wow-classic/utility.js'

export default {
  props: ['data', 'parseNum', 'tooltipLabel'],

  computed: {
    // computed because this logic may change
    axisDays () {
      return ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      // return ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    },

    max () {
      const maxRow = this.data.map((row) => Math.max.apply(Math, row))
      return Math.max.apply(null, maxRow)
    }
  },

  created () {
    this.parsePrice = utility.parsePrice
  },

  methods: {
    scale (num) {
      const scale = num / this.max
      return scale < 0.3 ? 0.3 : scale // TODO: Adjust this to real data
    }
  }
}
</script>


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

  &:hover {
    .hour {
      position: relative;
      opacity: 1 !important;
    }
    .tooltip {
      z-index: 5;
      opacity: 1;
    }
  }
}
.hour {
  height: 10px;
  width: 10px;
  border-radius: 5px;
  background: $color-primary-subtle;

  &.inactive {
    background: transparent;
  }
}
.tooltip {
  position: absolute;
  white-space: nowrap;
  margin-left: 28px;
  opacity: 0;
  background: $color-bg-dark;
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

.label {
  color: $color-font-body !important;
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
