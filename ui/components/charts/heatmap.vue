<template>
  <div class="row">
    <div v-for="(day, i) in data" :key="day" class="day">
      <div v-for="hour in day" :key="hour" class="hour-wrapper">
        <div :style="{ opacity: scale(hour), transform: `scale(${scale(hour)})` }" :class="{ inactive: !hour }" class="hour"/>
      </div>
      <span class="label">{{ axisDays[i] }}</span>
    </div>
    <div class="axis-days">
      <div v-for="day in axisDays" :key="day" class="time">
        <span class="label">
          {{ day }}
        </span>
      </div>
    </div>
  </div>
</template>



<script>
export default {
  props: ['data'],

  computed: {
    // computed because this logic may change
    axisDays () {
      return ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },

    max () {
      const maxRow = this.data.map((row) => Math.max.apply(Math, row))
      return Math.max.apply(null, maxRow)
    }
  },

  methods: {
    scale (num) {
      const scale = num / this.max
      return scale < 0.45 ? 0.45 : scale
    }
  }
}
</script>


<style lang="scss" scoped>
@import '~src/styles/partials/importer';

.row {
  flex-wrap: nowrap;
  flex-direction: column;
}

.day {
  display: flex;
  flex-direction: row;
  height: 28px;

  span {
    width: 100%;
    margin-left: 10px;
    text-align: right;
    font-size: 0.8em;
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

.label {
  color: $color-font-body !important;
}

.axis-days {
  text-align: right;
  display: flex;
  flex-direction: row;

  span {
    display: inline-block;
    font-size: 0.8em;
    margin-left: 7px;
    margin-top: 2.5px;
  }
}
</style>
