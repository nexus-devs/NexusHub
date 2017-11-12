<template>
  <router-link :to="result.webUrl" class="result col" :class="{ set: result.set }">
    <img class="result-bg-img" :src="result.imgUrl" :alt="result.name">
    <div class="result-bg-shade"></div>
    <div class="result-info">
      <h4 class="result-title">{{ result.name }}</h4>
      <div class="result-data-value">
        <img src="/img/warframe/items/platinum.svg" alt="Platinum" class="ico-12">
        <span>320p</span>
      </div>
      <div v-if="result.ducats" class="result-data-value">
        <img src="/img/warframe/items/ducats.svg" alt="Ducats" class="ico-12">
        <span>{{ result.ducats }} Ducats</span>
      </div>
    </div>
    <div class="result-data">
      <h4 class='result-data-value'>{{ result.name }}</h4>
      <div class="result-data-value">
        <img src="/img/warframe/items/platinum.svg" alt="Platinum" class="ico-16">
        <span>320p</span>
      </div>
      <div class="result-data-value">
        <img src="/img/warframe/items/ducats.svg" alt="Ducats" class="ico-16">
        <span>{{ result.ducats }} Ducats</span>
      </div>
    </div>
  </router-link>
</template>



<script>
export default {
  props: ['result']
}
</script>



<style lang="scss" scoped>
@import '~src/styles/partials/importer';

.result.set {
  .result-bg-img {
    width: auto;
    max-width: 90%;
    max-height: 100%;
  }
}
.result {
  @include ie;
  border-radius: 2px;
  background: #292e38;
  @include field;
  position: relative;
  overflow: hidden;
  height: 140px;
  width: 200px;
  max-width: 240px;
  margin-right: 15px;
  margin-bottom: 15px;
  flex-basis: auto;

  @media (max-width: $breakpoint-s) {
    max-width: none;
  }
  &:hover {
    opacity: 1 !important; // <a> override
    @include gradient-background-dg($color-bg-light, $color-bg);

    .result-info, .result-bg-img {
      filter: blur(4px);
    }
    .blur {
      filter: blur(60px);
    }
    .result-data {
      opacity: 1;

      .result-data-value {
        transform: translateY(0);
      }
    }
  }
  &:before {
    border-radius: 2px;
  }
  .result-bg-img {
    position: absolute;
    z-index: 1;
    width: 100px;
    max-height: 100px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    @include ease(0.25s);
  }
  .result-bg-shade {
    position: absolute;
    z-index: 1;
    height: 80%;
    width: 100%;
    bottom: 0;
    left: 0;
    @include gradient-background(transparent, $color-bg);
  }
  .result-info {
    position: absolute;
    z-index: 1;
    width: 100%;
    bottom: 15px;
    left: 15px;
    @include ease(0.35s);

    .result-data-value {
      display: inline-block;
      font-size: 0.8em;
      margin-right: 6px;
      opacity: 0.8;
    }
    .result-tags {
      font-size: 0.8em;

      span {
        margin-right: 5px;
      }
    }
  }
  .result-data {
    display: flex;
    justify-content: center;
    align-content: center;
    flex-direction: column;
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    opacity: 0;
    @include ease(0.35s);
    @include gradient-background-dg(rgba(106, 233, 116, 0.7), rgba(51, 215, 221, 0.7));

    .result-data-value {
      width: 75%;
      margin: 0 auto;
      transform: translateY(30px);
      font-size: 0.9em;
      @include ease(0.2s);

      span {
        margin-left: 5px;
      }
    }
    h4 {
      padding-bottom: 5px;
      font-size: 1em !important;
    }
  }
}
</style>
