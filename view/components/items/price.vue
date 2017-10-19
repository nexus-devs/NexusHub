<template>
  <div>
    <!-- Dummy for flexbox. We might add ads here -->
    <div v-if="component.isDummy" class="dummy">

    </div>

    <!-- Actual price field -->
    <div v-else class="row">

      <!-- left panel -->
      <div class="col">
        <div class="background" :class="{ set: component.name === 'Set' }">
          <div class="background-overlay"></div>
          <img :src="component.name === 'Set' ? item.imgUrl : component.imgUrl" :alt="`${item.name} ${component.name}`">
        </div>

        <!-- Content -->
        <div class="content" :class="{ increase, decrease }">
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
        <sparkline :data="chartData(component)" :ceil="chartCeil(component)"></sparkline>
        <sparkline :data="chartData(comparison)" :ceil="chartCeil(component)" class="sparkline-comparison"></sparkline>
      </div>
    </div>
  </div>
</template>



<script>
import sparkline from 'src/components/charts/sparkline.vue'

export default {
  props: ['component', 'comparison', 'item'],
  components: {
    sparkline
  },
  computed: {
    diff() {
      const comparison = this.comparison
      const component = this.component
      const offerType = this.offerType
      const percentage = ((component[offerType].median - comparison[offerType].median) / comparison[offerType].median * 100).toFixed(2)
      return { percentage: percentage > 0 ? `+${percentage}%` : `${percentage}%` }
    },
    increase() {
      const comparison = this.comparison
      const component = this.component
      const offerType = this.offerType
      return component[offerType].median > comparison[offerType].median
    },
    decrease() {
      const comparison = this.comparison
      const component = this.component
      const offerType = this.offerType
      return component[offerType].median < comparison[offerType].median
    },
    offerType() {
      return this.$store.state.items.selected.offerType
    }
  },
  methods: {
    chartData(component) {
      const offerType = this.offerType
      const data = []

      component[offerType].intervals.forEach(interval => {
        data.push(interval.median)
      })
      return data
    },
    chartCeil(component) {
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
  width: 350px;
}

.row {
  @include shadow-1;
  @include ie;
  display: flex;
  min-width: 350px; // Fix for Edge ignoring parent width
  border-radius: 0px;
  padding: 0;

  .col {
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 25px;
    height: 125px;
    width: 125px;

    &:first-of-type {
      @include gradient-background-dg($colorBackgroundLight, $colorBackground);

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
          height: 66%;
          width: 100%;
          z-index: 1;
          @include gradient-background(transparent, $colorBackgroundLight);
        }
      }
      .content {
        position: relative;
        z-index: 1;
        text-align: center;

        h3 {
          font-weight: 400;
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
            color: $colorPrimary;
          }
        }
      }
      .decrease {
        .content-data-main-diff {
          span {
            color: $colorError;
          }
        }
      }
    }
    // Right col
    &:last-of-type {
      position: relative;
      @include gradient-background-dg($colorBackgroundDark, $colorBackgroundDarker);

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
              stroke: $colorFontSubtle;
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
