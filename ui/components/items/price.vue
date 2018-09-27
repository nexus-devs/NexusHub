<template>
  <div>
    <!-- Dummy for flexbox. We might add ads here -->
    <div v-if="component.isDummy" class="dummy"/>

    <!-- Actual price field -->
    <div v-else class="row item-price-snippet interactive">

      <!-- left panel -->
      <div class="col">
        <div :class="{ set: component.name === 'Set' }" class="background">
          <div class="background-overlay"/>
          <img :src="component.imgUrl" :alt="`${item.name} ${component.name}`">
        </div>

        <!-- Content -->
        <div :class="{ increase, decrease }" class="content">
          <h3>{{ component.name === 'Set' ? item.name : component.name }}</h3>

          <!-- Actual data -->
          <div class="content-data">
            <span class="content-data-main-value">
              {{ current.median ? current.median + 'p' : 'No Data' }}
            </span>
            <span class="content-data-main-diff">
              {{ previous.median ? previous.median + 'p' : 'No Data' }}
              <span>{{ previous.median ? `(${diff})` : '' }}</span>
            </span>
          </div>
        </div>
      </div>

      <!-- right panel -->
      <div class="col">
        <sparkline :data="chartData(current)" :ceil="chartCeil(current)"/>
        <sparkline :data="chartData(previous)" :ceil="chartCeil(current)" class="sparkline-previous"/>
      </div>
    </div>
  </div>
</template>



<script>
import sparkline from 'src/components/charts/sparkline.vue'

export default {
  components: {
    sparkline
  },

  props: ['component'],

  computed: {
    item () {
      return this.$store.state.items.item
    },
    current () {
      return this.component[this.offerType].current
    },
    previous () {
      return this.component[this.offerType].previous
    },
    diff () {
      const previous = this.previous
      const current = this.current
      const percentage = ((current.median - previous.median) / previous.median * 100).toFixed(2)
      return percentage > 0 ? `+${percentage}%` : `${percentage}%`
    },
    increase () {
      const previous = this.previous
      const current = this.current
      return current.median > previous.median
    },
    decrease () {
      const previous = this.component.previous
      const current = this.current
      return current.median < previous.median
    },
    offerType () {
      return this.$store.state.items.selected.offerType
    }
  },

  methods: {
    chartData (data) {
      const result = []

      data.intervals.forEach(interval => {
        data.push(interval.median)
      })
      return result
    },
    chartCeil (data) {
      let max = Number.NEGATIVE_INFINITY
      let min = Number.POSITIVE_INFINITY

      data.intervals.forEach(interval => {
        max = interval.median > max ? interval.median : max
        min = interval.median && interval.median < min ? interval.median : min
      })
      max = max === Number.NEGATIVE_INFINITY ? 0 : max
      min = min === Number.POSITIVE_INFINITY ? 0 : min

      return max + min
    }
  }
}
</script>



<style lang="scss" scoped>
@import '~src/styles/partials/importer';

.dummy {
  width: 320px;
}

.row {
  @include shadow-1;
  display: flex;
  min-width: 320px; // Fix for Edge ignoring parent width
  max-width: 320px;
  border-radius: 0px;
  padding: 0;

  .col {
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 22.5px;
    height: 115px;
    width: 115px;

    &:first-of-type {
      @include gradient-background-dg($color-bg-lighter, $color-bg-light);

      .background {
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        width: 100%;

        &.set {
          align-items: flex-start;

          img {
            height: auto;
            max-height: 300%;
          }
        }
        img {
          opacity: 0.5;
          height: 50%;
          max-width: 100%;
        }
        .background-overlay {
          position: absolute;
          bottom: 0;
          background: red;
          height: 100%;
          width: 100%;
          z-index: 1;
          @include gradient-background(rgba(15, 20, 25, 0.1), $color-bg-lighter);
        }
      }
      .content {
        position: relative;
        z-index: 1;
        text-align: center;

        h3 {
          font-weight: 400;
          font-family: 'Roboto', sans-serif;
          font-size: 0.95em;
          letter-spacing: 0;
          text-transform: uppercase;
        }
        .content-data {
          margin-top: 40px;

          .content-data-main-value {
            color: white;
            font-size: 1.2em;
          }
          .content-data-main-diff {
            display: block;
            font-size: 0.9em;
          }
        }
      }
      .increase {
        .content-data-main-diff {
          span {
            color: $color-primary;
          }
        }
      }
      .decrease {
        .content-data-main-diff {
          span {
            color: $color-error;
          }
        }
      }
    }
    // Right col
    &:last-of-type {
      position: relative;
      @include gradient-background-dg($color-bg-dark, $color-bg-darker);

      .sparkline {
        position: absolute;
        left: auto;
        right: auto;
        top: auto;
        bottom: auto;
        z-index: 1;

        // 2 * 20px for padding
        width: calc(100% - 2 * 20px);
        height: calc(100% - 2 * 20px);
      }
      .sparkline-comparison {
        z-index: 0;

        /deep/ {
          .blur {
            display: none;
          }
          svg {
            .line {
              stroke: $color-font-subtle;
              stroke-width: 1px;
              stroke-dasharray: 2;
            }
            text {
              display: none;
            }
            .pointer {
              display: none;
            }
          }
        }
      }
    }
  }
}
</style>
