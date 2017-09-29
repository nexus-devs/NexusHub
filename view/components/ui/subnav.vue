<template>
  <nav>
    <div class="item">
      <div class="item-img">
        <img :src="item.imgUrl" alt="">
      </div>
      <div class="item-info">
        <h1>{{ item.name }}</h1>
        <span v-for="component in item.components"
              :class="{ selected: components.find(c => c.name === component.name) }"
              v-on:click="">
          {{ component.name }}
        </span>
      </div>
    </div>
    <div class="item-links">
      <!-- pseudo sub page links go here -->
    </div>
    <div class="time-container">
      <span>Comparing </span>
      <timefield></timefield>
      <span>to <span>previous period</span></span>
    </div>
  </nav>
</template>



<script>
import timefield from 'src/components/search/fields/time.vue'

export default {
  components: {
    timefield
  },

  computed: {
    item() {
      return this.$store.state.items.item
    },
    components() {
      const selected = this.$store.state.items.item.selected
      if (selected.length) {
        return selected
      } else {
        return this.$store.state.items.item.components
      }
    }
  },

  methods: {
    selectTag(e) {
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
  position: fixed;
  width: calc(100vw - 133px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 40px 10px 85px;
  @include gradient-background-dg(rgba(15, 20, 25, 0.3), rgba(15, 20, 25, 0.4));

  @media (max-width: $breakpoint-m) {
    width: calc(100vw - 65px);
    margin-top: 56px;
    padding: 15px 40px 15px 25px;
  }

  .item {
    display: flex;
    align-items: center;

    .item-img {
      position: relative;
      overflow: hidden;
      border-radius: 50%;
      border: 1px solid $colorSubtle;
      height: 30px;
      width: 30px;
      flex-grow: 1;
      margin-right: 10px;
      background: $colorBackground;

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
        color: $colorFontSubtle;
        cursor: pointer;
        @include ease(0.3s);

        &.selected {
          color: $colorFontBody;
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
    display: flex;
    align-items: center;

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
    font-size: 0.9em;
    flex-grow: 0;
    flex-basis: auto;

    label, br {
      display: none;
    }
    .input {
      padding: 4px 8px;
      margin: 0 5px;
    }
    .active {
      span:not(.selected) {
        color: $colorFontBody;
      }
    }
    .timepicker {
      position: absolute;
      opacity: 0;
      pointer-events: none;
      transform: translateY(-10px);
      @include ease(0.1s);

      &.active {
        opacity: 1;
        pointer-events: all;
        transform: translateY(0);
      }
      .suggestions {
        padding: 10px 15px;
        transform: translateX(-30%);
        background: rgba(15, 20, 25, 0.35);
        border-radius: 2px;
        margin-top: 15px;

        .col {
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
          color: white;
          line-height: 1;
          border-radius: 2px;
          background: $colorBackgroundDark;
          font-size: 0.9em;
          padding: 10px;
          min-width: 90px;

          &:hover {
            background: $colorBackgroundLight;
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
