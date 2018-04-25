<template>
  <nav>
    <div class="item">
      <div class="item-img">
        <img :src="item.components.find(c => c.name === 'Set').imgUrl" :alt="item.name">
      </div>
      <div class="item-info">
        <h1>{{ item.name }}</h1>
        <span v-for="component in item.components" :key="component"
              :class="{ selected: components.find(c => c.name === component.name) }">
          {{ component.name }}
        </span>
      </div>
    </div>
    <div class="item-links">
      <!-- pseudo sub page links go here -->
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
    components () {
      const selected = this.$store.state.items.selected.components
      if (selected.length) {
        return selected
      } else {
        return this.$store.state.items.item.components
      }
    }
  },

  methods: {
    selectTag (e) {
      const tag = e.srcElement.outerText

      if (this.components.includes(tag)) {
        this.components.splice(this.components.indexOf(tag), 1)
      } else {
        this.components.push(tag)
      }
    }
  }
}
</script>



<style lang="scss" scoped>
@import '~src/styles/partials/importer';

nav {
  position: absolute;
  z-index: 1;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 10px 40px 10px 85px;
  @include gradient-background-dg($color-bg-transparent-1, $color-bg-transparent-2);

  @media (max-width: $breakpoint-m) {
    padding: 10px 40px 10px 25px;
  }

  .item {
    display: flex;
    align-items: center;

    .item-img {
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
        max-height: 250%;
        max-width: 250%;
        transform: translateX(-10%) translateY(-5%);
      }
    }

    .item-info {
      h1 {
        font-size: 1em;
        font-weight: 400;
      }
      span {
        display: inline-block;
        margin-top: -5px;
        margin-right: 7px;
        font-size: 0.85em;
        color: $color-font-subtle;
        cursor: pointer;
        @include ease(0.3s);

        &.selected {
          color: $color-font-body;
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

    @media (max-width: $breakpoint-s) {
      display: none;
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
        background: rgba(15, 20, 25, 0.35);
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
            background: $color-bg-light;
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
