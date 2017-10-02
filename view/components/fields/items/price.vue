<template>
  <div class="col-b row">
    <!-- left panel -->
    <div class="col">
      <div class="background" :class="{ set: component.name === 'Set' }">
        <div class="background-overlay"></div>
        <img :src="component.name === 'Set' ? item.imgUrl : component.imgUrl" :alt="`${item.name} ${component.name}`">
      </div>
      <div class="content" :class="{ increase, decrease }">
        <h3>{{ component.name === 'Set' ? item.name : component.name }}</h3>
        <div class="content-data">
          <span class="content-data-main-value">
            {{ component[offerType].median ? component[offerType].median + 'p' : 'No Data' }}
          </span>
          <span class="content-data-main-diff">
            {{ comparison[offerType].median ? comparison[offerType].median + 'p' : 'No Data' }}
            (<span>{{ diff.percentage }}</span>)
          </span>
        </div>
      </div>
    </div>
    <!-- right panel -->
    <div class="col">

    </div>
  </div>
</template>



<script>
export default {
  props: ['component', 'comparison', 'item'],
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
  }
}
</script>



<style lang="scss" scoped>
@import '~src/styles/partials/importer';

.col-b {
  @include shadow-1;
  @include ie;
  border-radius: 2px;
  padding: 0;

  .col {
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    min-height: 125px;
    min-width: 125px;

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
          opacity: 0.3;
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

            span {
              color: white;
            }
          }
        }
      }
      .increase {
        .content-data-main-diff {
          span {
            color: $colorPrimary !important;
          }
        }
      }
      .decrease {
        .content-data-main-diff {
          span {
            color: $colorError !important;
          }
        }
      }
    }
    &:last-of-type {
      @include gradient-background-dg($colorBackgroundDark, $colorBackgroundDarker);
    }
  }
}
</style>
