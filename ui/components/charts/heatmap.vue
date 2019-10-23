<template>
  <div class="row">
    <div v-for="hour in hours" :key="hour" class="day">
      <div v-for="(day, i) in hour" :key="day" class="hour-wrapper">

      </div>
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
    // transpose [days][hours] array
    hours () {
      return this.data[0].map((col, i) => this.data.map(row => row[i]))
    },

    // computed because this logic may change
    axisDays () {
      return ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    }
  }
}
</script>


<style lang="scss" scoped>
@import '~src/styles/partials/importer';

.row {
  flex-wrap: nowrap;
}

.day {
  display: flex;
  flex-direction: column;
  width: 28px;

  span {
    font-size: 0.8em;
    margin-top: 8px;
  }
}

// Wrapper to make it easier to hover over data
.hour-wrapper {
  padding: 3px;
  height: 9px;

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

.label {
  color: $color-font-body !important;
}

.axis-days {
  text-align: right;

  span {
    display: inline-block;
    font-size: 0.8em;
    margin-left: 7px;
    margin-top: 2.5px;
  }
}
</style>
