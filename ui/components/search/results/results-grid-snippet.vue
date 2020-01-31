<template>
  <div class="result col">
    <router-link :to="result.webUrl" :class="{ set: result.set }" class="interactive">
      <div class="result-img">
        <div class="result-img-shade" />
        <img :src="result.imgUrl" :class="{ mod: result.imgUrl.includes('jpeg') }" :alt="result.name">
        <img :src="result.imgUrl" class="result-img-blur">
        <p>{{ result.description }}</p>
      </div>
      <div class="result-info">
        <span>{{ result.name }}</span>
      </div>
      <div class="result-data">
        <div v-if="selection" class="result-data-value col">
          <span>{{ result._score ? result._score + ' ' + selection : 'No data' }} </span>
        </div>
        <div v-else>
          <div v-for="filter in correctFilters" :key="filter.name" class="result-data-value col">
            <div v-if="!filter.hidden && resolve(filter)">
              <img :src="filter.icon" :alt="filter.alt" class="ico-12">
              <span>{{ resolve(filter) }}{{ filter.unit }}</span>
            </div>
          </div>
        </div>
      </div>
    </router-link>
  </div>
</template>



<script>
export default {
  props: ['result', 'filters', 'selection'],

  computed: {
    correctFilters () {
      return this.filters.filter(f => f.category === this.result.results)
    }
  },

  methods: {
    // Helper function to access nested object keys
    // Required for getting values from filters
    resolve (filter) {
      let result = this.result
      const keys = filter.path.split('.')

      try {
        keys.forEach(key => {
          result = result[key]
        })
        return result
      } catch (err) {

      }
    }
  }
}
</script>



<style lang="scss" scoped>
@import '~src/styles/partials/importer';

a {
  display: block;
  @include field;
  padding: 0;
  box-sizing: border-box;
  background: $color-bg;
  @include ease-wubble(0.75s);

  &:hover {
     opacity: 1 !important; // <a> override
     background: $color-bg;
     transform: translateY(-6px);
     @include shadow-3;

     p {
       opacity: 1 !important;
       transform: translateY(0) !important;
     }
     .result-img-shade {
       height: 125%;
     }
  }
  &:before {
    background: none;
    border-radius: 2px;
  }
  &:active {
    transform: scale(0.98) translateY(-5px);
    @include shadow-2;
  }
}

.result {
  width: calc(16.66% - 15px);
  max-width: calc(16.66% - 15px);
  margin-right: 15px;
  margin-bottom: 15px;
  flex-basis: auto;
  transition-duration: 0.5s;
  transition-timing-function: ease;

  @media (max-width: $breakpoint-m) {
    width: calc(25% - 15px);
    max-width: calc(25% - 15px);
  }
  @media (max-width: $breakpoint-s) {
    max-width: none;
    width: calc(50% - 15px);
    max-width: calc(50% - 15px);
  }
  @media (max-width: $breakpoint-xs) {
    width: 100%;
    max-width: 100%;
  }

  .result-info {
    padding: 20px 20px 0;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .result-img {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
    height: 150px;

    img {
      position: relative;
      z-index: 1;
      max-width: 80%;
      max-height: 90%;
      border-radius: 999px;
      @include ease(0.3s);
    }
    img.mod {
      max-width: 50%;
    }
    .result-img-blur {
      position: absolute;
      filter: blur(60px);
      opacity: 0.8;
      z-index: 0;
      max-width: 150%;
      width: 150%;
    }
    img.mod + .result-img-blur {
      width: 60%;
    }
    .result-img-shade {
      position: absolute;
      z-index: 2;
      height: 80%;
      width: 100%;
      bottom: 0;
      left: 0;
      @include gradient-background(transparent, $color-bg);
      @include ease(0.25s);
    }
    p {
      position: absolute;
      margin: 10px 15px;
      left: 0;
      font-size: 0.9em;
      text-align: center;
      z-index: 2;
      width: calc(100% - 30px);
      opacity: 0;
      transform: translateY(5px);
      text-shadow: 0px 6px 20px rgba(0, 0, 0, 0.9),0.53px 1.848px 5px rgba(0, 0, 0, 0.79);
      @include ease(0.35s);
    }
  }
  .result-data {
    padding: 0px 20px 18px;
    margin-top: 5px;
  }
  .result-data-value {
    display: inline-block;
    font-size: 0.85em;
    margin-right: 6px;
  }
}
</style>
