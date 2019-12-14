<template>
  <div class="result">
    <router-link :to="result.webUrl" class="row interactive">
      <img :src="result.imgUrl" class="result-img-blur">
      <div class="result-title col-b">
        <div class="result-img">
          <img :src="result.imgUrl" :class="{ mod: result.imgUrl.includes('jpeg') }" :alt="result.name">
        </div>
        <span>{{ result.name }}</span>
      </div>
      <div class="result-data row">
        <div v-for="filter in correctFilters" :key="filter.name" :class="{ hidden: filter.hidden }" class="result-data-value">
          <div v-if="resolve(filter)">
            <img v-if="filter.icon" :src="filter.icon" :alt="filter.alt" class="ico-12">
            <span>{{ resolve(filter) }}{{ filter.unit }}</span>
          </div>
        </div>
      </div>
    </router-link>
  </div>
</template>



<script>
export default {
  props: ['result', 'filters'],

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
@import '~src/styles/partials/wow-classic/importer';

a {
  position: relative;
  overflow: hidden;
  width: 100%;
  @include field;
  align-items: center;
  border-radius: 2px;
  padding: 10px 20px;
  margin-bottom: 8px;
  @include ease(0.05s);

  &:hover {
    opacity: 1 !important;
    transform: scale(0.995);
  }
  &:active {
    transform: scale(0.995);
  }
  &:before {
    border-radius: 0px;
  }
}

.result {
  @include ease(0.5s);

  .row {
    justify-content: space-between;
  }
  .result-title {
    position: relative;
    display: flex;
    align-items: center;
  }
  .result-img-blur {
    position: absolute;
    left:0;
    height: 400%;
    opacity: 0.4;
    z-index: 0;
    filter: blur(80px);
  }
  .result-img {
    position: relative;
    display: flex;
    align-items: center;
    position: relative;
    overflow: hidden;
    height: 38px;
    width: 38px;
    border-radius: 2px;
    margin-right: 20px;

    img {
      width: 100%;
    }
    img.mod {
      border-radius: 4px;
    }
  }
  .result-data {
    position: relative;
    flex-wrap: wrap;
    align-items: center;
    width: 75%;
  }
  .result-data-value {
    font-size: 0.9em;
    white-space: nowrap;

    &:last-of-type {
      flex-grow: 0;
      text-align: right;
      margin-right: 0;
    }
  }
  @media (max-width: $breakpoint-s) {
    .result-title {
      span {
        position: relative;
        top: -10px;
      }
    }
    .result-img {
      margin-right: 10px;
      height: 50px;
      width: 50px;
    }
    .result-img-blur {
      left: -50%;
    }
    .result-data {
      justify-content: flex-start;
      top: -23px;
      margin-bottom: -20px;
      margin-left: 60px;
    }
    .result-data-value {
      font-size: 0.85em;
      margin-right: 10px;

      img {
        height: 10px;
      }
      &.hidden {
        display: none;
      }
    }
  }
}
</style>
