<template>
  <div class="price-detailed active">
    <div class="header">
      <h3>Market Value / Quantity</h3>
    </div>
    <div class="users">
      <doubleline :data="data" />
    </div>
    <div class="footer">
      <module-time :days="7" :fn="setTimerange"/>
    </div>
  </div>
</template>


<script>
import doubleline from 'src/components/charts/doubleline.vue'
import indicator from 'src/components/charts/indicator.vue'
import moduleTime from 'src/components/ui/module-time.vue'

export default {
  components: {
    indicator,
    doubleline,
    moduleTime
  },

  computed: {
    data () {
      const item = this.$store.state.items.item.current
      const data = []

      let i = 0
      for (const week of item.intervals) {
        for (const day of week.intervals) {
          data.push({ x: i, marketValue: day.marketValue, qty: day.qty })
          i++
        }
      }

      return data
    }
  },

  methods: {
    setTimerange (timerange) {
      return false
    },
  }
}
</script>

<style lang="scss" scoped>
@import '~src/styles/partials/importer';

.price-detailed {
  z-index: 1;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 50%;
  min-height: 300px;
  @include field;
  background: $color-bg;
  opacity: 0;
  transform: scale(0.95);
  pointer-events: none;
  @include ease(0.3s);

  &:hover {
    background: $color-bg;
  }
  &.active {
    opacity: 1;
    transform: scale(1);
    pointer-events: all;
  }
  @media (max-width: $breakpoint-m) {
    flex-wrap: wrap;
    box-shadow: none;

    .selection {
      border-left: 0;
      border-top: 10px solid $color-bg-dark;
      width: 100%;
    }
  }

  @media (max-width: $breakpoint-s) {
    .item {
      width: 100%;
      border-bottom: 10px solid $color-bg-dark;

      .overview {
        padding: 20px 0;
      }
    }
  }
}

.footer {
  display: flex;
  padding: 2px 25px;
  margin-top: auto;
  background: $color-bg-dark;
  font-size: 0.75em !important;
  border-radius: 2px;

  a {
    display: flex;
    margin-left: auto;
    align-items: center;
    @include uppercase;
    @include ie;
    padding: 5px 10px;
    letter-spacing: 0.5;
    position: relative;
    left: 10px;

    &:hover {
      color: white !important;
    }
    img {
      height: 20px;
      margin-top: -3px;
      margin-left: -2px;
    }
  }
}

.header {
  padding: 25px 25px 0;

  h2, h3 {
    display: inline-block;
    vertical-align: middle;
    font-size: 0.8em !important;
    letter-spacing: 0.5;
    color: $color-primary-subtle !important;
    @include uppercase;
  }
  time {
    display: block;
    font-size: 0.85em;
    margin-top: 2px;
  }
  img {
    display: inline-block;
    vertical-align: middle;
  }
  .img {
    position: relative;
    overflow: hidden;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    vertical-align: middle;
    margin-right: 5px;
    height: 40px;
    width: 40px;
    border-radius: 40px;
    background: $color-bg;

    img, object {
      position: relative;
      max-height: 80%;
    }
  }
  span {
    display: block;
  }
  @media (max-width: $breakpoint-s) {
    padding: 25px 25px 0;
  }
}

.users {
  display: flex;
  padding: 25px 25px;
  flex: 1;
  min-height: 300px;
}
</style>
