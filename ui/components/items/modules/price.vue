<template>
  <div>
    <!-- Dummy for flexbox. We might add ads here -->
    <div v-if="component.isDummy" class="dummy"/>

    <!-- Actual price field -->
    <div v-else class="row item-price-snippet">

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
              {{ component[offerType].median ? component[offerType].median + 'p' : 'No Data' }}
            </span>
            <span class="content-data-main-diff">
              {{ comparison[offerType].median ? comparison[offerType].median + 'p' : 'No Data' }}
              <span>{{ comparison[offerType].median ? `(${diff.percentage})` : '' }}</span>
            </span>
          </div>
        </div>
      </div>

      <!-- right panel -->
      <div class="col">
        <sparkline :data="chartData(component)" :ceil="chartCeil(component)"/>
        <sparkline :data="chartData(comparison)" :ceil="chartCeil(component)" class="sparkline-comparison"/>
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
  props: ['component', 'comparison', 'item'],
  computed: {
    diff () {
      const comparison = this.comparison
      const component = this.component
      const offerType = this.offerType
      const percentage = ((component[offerType].median - comparison[offerType].median) / comparison[offerType].median * 100).toFixed(2)
      return { percentage: percentage > 0 ? `+${percentage}%` : `${percentage}%` }
    },
    increase () {
      const comparison = this.comparison
      const component = this.component
      const offerType = this.offerType
      return component[offerType].median > comparison[offerType].median
    },
    decrease () {
      const comparison = this.comparison
      const component = this.component
      const offerType = this.offerType
      return component[offerType].median < comparison[offerType].median
    },
    offerType () {
      return this.$store.state.items ? this.$store.state.items.selected.offerType : 'combined'
    }
  },
  methods: {
    chartData (component) {
      const offerType = this.offerType
      const data = []

      component[offerType].intervals.forEach(interval => {
        data.push(interval.median)
      })
      return data
    },
    chartCeil (component) {
      const offerType = this.offerType
      let max = Number.NEGATIVE_INFINITY
      let min = Number.POSITIVE_INFINITY

      component[offerType].intervals.forEach(interval => {
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
  @include ie;
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
