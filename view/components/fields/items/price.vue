<template>
  <div class="col-b row">
    <div class="col">
      <div class="background" :class="{ set: component.name === 'Set' }">
        <div class="background-overlay"></div>
        <img :src="component.name === 'Set' ? item.imgUrl : component.imgUrl" :alt="`${item.name} ${component.name}`">
      </div>
      <div class="content">
        <h3>{{ component.name === 'Set' ? item.name : component.name }}</h3>
        <div class="content-data">
          <span class="content-data-main-value">{{ component.combined.median }}p</span>
        </div>
      </div>
    </div>
    <div class="col">

    </div>
  </div>
</template>



<script>
export default {
  props: ['component', 'item']
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
          font-weight: 300;
          text-transform: uppercase;
        }
        .content-data {
          margin-top: 40px;

          .content-data-main-value {
            color: white;
            font-size: 1.1em;
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
