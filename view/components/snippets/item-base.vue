<template>
  <div class="item-base-snippet row">

    <!-- left panel -->
    <div class="col">
      <div class="background set">
        <div class="background-overlay"></div>
        <img src="" alt="">
      </div>

      <!-- Content -->
      <div class="content">
        <h3>Item Name</h3>

        <!-- Actual data -->
        <div class="content-data">
          <span class="content-data-main-value">

          </span>
          <span class="content-data-main-diff">
            50p
            <span>kek</span>
          </span>
        </div>
      </div>
    </div>

    <!-- right panel -->
    <div class="col">
      kek
    </div>
  </div>
</template>



<script>
export default {
}
</script>



<style lang="scss" scoped>
@import '~src/styles/partials/importer';

.row {
  @include shadow-1;
  @include ie;
  display: flex;
  min-width: 300px; // Fix for Edge ignoring parent width
  border-radius: 0px;
  padding: 0;

  .col {
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
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
          height: 100%;
          width: 100%;
          z-index: 1;
          @include gradient-background(rgba(15, 20, 25, 0.1), $colorBackgroundLight);
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
