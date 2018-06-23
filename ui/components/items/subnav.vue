<template>
  <nav>
    <div class="item">
      <div class="item-img">
        <img :src="item.components.find(c => c.name === 'Set').imgUrl" :alt="item.name">
      </div>
      <div class="item-info">
        <h1>{{ item.name }}</h1>
        <span v-for="component in item.components" v-if="item.components.length > 1" :key="component.name"
              :class="{ selected: selected === component.name }"
              @click="selectTag">
          {{ component.name }}
        </span>
      </div>
    </div>
    <div class="time-container">
      <span>Comparing </span>
      <timerange/>
      <span>to <span>previous period</span></span>
    </div>
  </nav>
</template>



<script>
import timerange from 'src/components/search/time.vue'

export default {
  components: {
    timerange
  },

  computed: {
    item () {
      return this.$store.state.items.item
    },
    selected () {
      return this.$store.state.items.selected.component
    }
  },

  methods: {
    selectTag (e) {
      const tag = e.srcElement.outerText
      this.$store.commit('setItemComponent', tag)
    }
  }
}
</script>



<style lang="scss" scoped>
@import '~src/styles/partials/importer';

nav {
  position: fixed;
  z-index: 3;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 10px 40px 10px 85px;
  min-height: 56px;
  background: $color-bg-transparent;
  backdrop-filter: blur(10px);

  @media (max-width: $breakpoint-m) {
    padding: 10px 40px 10px 25px;
  }

  /**
   * This subnav just becomes useless noise on mobile. Time ranges would have
   * to be hidden anyways and the components are too small to tap reliably.
   */
  @media (max-width: $breakpoint-s) {
    display: none;
  }

  .item {
    display: flex;
    align-items: center;

    .item-img {
      display: flex;
      position: relative;
      overflow: hidden;
      border-radius: 50%;
      border: 1px solid $color-subtle;
      height: 30px;
      width: 30px;
      flex-grow: 1;
      margin-right: 10px;
      background: $color-bg;

      img {
        max-height: 150%;
        max-width: 150%;
        margin-left: -25%;
      }
    }

    .item-info {
      h1 {
        font-size: 1em;
        font-weight: 400;
        font-family: 'Roboto', sans-serif;
      }
      span {
        display: inline-block;
        margin-top: -5px;
        margin-right: 7px;
        font-size: 0.85em;
        color: $color-font-body;
        cursor: pointer;
        @include ease(0.3s);

        &.selected {
          color: white;
        }
        &:hover {
          color: white;
        }
        &:last-of-type {
          margin-right: 0;
        }
      }
    }
  }

  .time-container {
    position: relative;
    display: flex;
    align-items: center;
    font-size: 0.9em;

    span span {
      color: white;
      margin-left: 5px;
    }
  }

  /deep/ .time {
    color: white;
    flex-grow: 0;
    flex-basis: auto;

    label, br {
      display: none;
    }
    .input {
      padding: 4px 0px 4px 8px;
      margin: 0 5px;
    }
    .active {
      span:not(.selected) {
        color: $color-font-body;
      }
    }
    .timepicker {
      position: absolute;
      opacity: 0;
      pointer-events: none;
      transform: translate(-30%, -10px);
      min-width: 400px;
      @include ease(0.1s);

      &.active {
        opacity: 1;
        pointer-events: all;
        transform: translate(-30%, 0);
      }
      .suggestions {
        padding: 10px 15px;
        background: $color-bg-transparent;
        border-radius: 2px;
        margin-top: 15px;

        @media(max-width: $breakpoint-m) {
          margin-top: 20px;
        }
        .col {
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
          color: white;
          line-height: 1;
          border-radius: 2px;
          background: $color-bg-dark;
          font-size: 0.9em;
          padding: 10px;
          min-width: 90px;

          &:hover {
            background: $color-bg-lighter;
          }
          &:not(:last-of-type) {
            margin-right: 5px;
          }
          &::before {
            border-radius: 2px;
          }
        }
      }
    }
  }
}
</style>
