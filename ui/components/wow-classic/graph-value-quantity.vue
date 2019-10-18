<template>
  <div class="price-detailed active">
    <div class="users">
      <doubleline :data="data" />
    </div>
  </div>
</template>


<script>
import doubleline from 'src/components/charts/doubleline.vue'
import indicator from 'src/components/charts/indicator.vue'

export default {
  components: {
    indicator,
    doubleline
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
  }
}
</script>

<style lang="scss" scoped>
@import '~src/styles/partials/importer';

.price-detailed {
  z-index: 1;
  display: flex;
  justify-content: space-between;
  width: 100%;
  min-height: 400px;
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
.item {
  @include field;
  box-shadow: none;
  padding: 25px 40px;
  min-width: 15%;

  .overview {
    text-align: center;
    padding: 60px 0;
  }
  h3 {
    margin-top: 10px;
  }
  .price {
    margin-top: 20px;
  }
  .num {
    font-size: 1.3em;
    color: white;
  }
  .diff {
    font-size: 0.9em;
  }
}

.back {
  display: inline-block;
  color: white;
  font-size: 0.85em;
  margin-left: -10px;
  margin-top: -8px;
  @include uppercase;
}

.img-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  margin: auto;
  height: 80px;
  width: 80px;
  border-radius: 100px;
  background: $color-bg;

  img {
    max-height: 100%;
  }
}

.users {
  display: flex;
  padding: 25px 40px;
  flex: 1;
  min-height: 300px;
}

.selection {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 25px 40px;
  min-width: 15%;
  border-left: 1px solid $color-subtle-dark;

  .inactive {
    display: flex;
    flex-direction: column;
    align-items: center;

    .circle {
      position: relative;
      height: 20px;
      width: 20px;
      border-radius: 20px;
      border: 3px solid $color-subtle;

      .inner {
        height: calc(100% - 4px);
        width: calc(100% - 4px);
        border-radius: 100%;
        border: 2px solid $color-font-body;
      }
    }
    .info {
      max-width: 200px;
      margin-top: 10px;
      text-align: center;
      color: $color-font-subtle;
    }
  }

  .active {
    text-align: center;

    time {
      position: absolute;
      top: 25px;
      right: 40px;
      font-size: 0.9em;
      color: $color-font-subtle;
    }
    h3 {
      margin-top: 20px;
    }
    p {
      margin-top: -15px;
      max-width: 200px;
    }
    .num {
      display: inline-block;
      font-size: 1.3em;
      color: white;
      margin-top: 15px;
    }
    .price-diff {
      margin-top: 15px;
    }
  }
}
</style>
