<template>
  <div class="row">
    <div class="axis-days">
      <div v-for="day in days" :key="day" class="time">
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
    days () {
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
