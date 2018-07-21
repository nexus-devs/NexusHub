<template>
  <div class="order row" @click="select">
    <div class="image-wrapper">
      <img :src="component.imgUrl" :alt="component.name">
    </div>
    <div class="item col">
      <span class="component">{{ component.name }}</span>
      <br>
      <span>{{ item.name }}</span>
    </div>
    <div class="user col">
      <div class="user-image">
        <img :alt="order.user" src="/img/ui/placeholder.png">
      </div>
      <tooltip>{{ order.user }}</tooltip>
    </div>
    <div v-if="item.fusionLimit" class="col">
      {{ order.rank }} / {{ item.fusionLimit }}
    </div>
    <div class="col">
      {{ order.quantity }}x
    </div>
    <div class="col price">
      <img v-if="order.price" src="/img/warframe/ui/platinum.svg" alt="Platinum" class="ico-h-12">
      {{ order.price ? `${order.price}p` : 'any offer' }}
      <button>{{ order.offer === 'Selling' ? 'Buy' : 'Sell' }}</button>
    </div>
  </div>
</template>



<script>
import tooltip from 'src/components/ui/sidebar/modules/tooltip.vue'

export default {
  components: {
    tooltip
  },

  props: ['order'],

  computed: {
    item () {
      return this.$store.state.items.item
    },
    component () {
      return this.item.components.find(c => c.name === this.order.component) || {}
    }
  },

  methods: {
    select () {
      this.$store.commit('selectOrder', this.order)
    }
  }
}
</script>



<style lang="scss" scoped>
@import '~src/styles/partials/importer';

.order {
  @include field;
  align-items: center;
  width: 100%;
  margin-bottom: 10px;

  div {
    color: white;
    margin: 0 10px;

    &:first-of-type {
      margin-left: 0;
    }
  }
}

.image-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  height: 60px;
  width: 80px;
  background: rgba(225,240,255, 0.05);
  border-right: 1px solid $color-subtle;

  img {
    max-height: 60%;
    border-radius: 60px;
  }
}

.item {
  margin-left: 20px;
  color: $color-font-body;

  .component {
    color: white;
    font-family: 'Circular'
  }
  span:nth-of-type(2) {
    display: inline-block;
    margin-top: -2px;
    font-size: 0.9em;
    color: $color-font-body;
  }
  @media (max-width: $breakpoint-s) {
    margin-left: 5px !important;

    span:nth-of-type(2) {
      display: none;
    }
  }
}

.user {
  position: relative;

  .tooltip {
    display: inline-block;
    position: absolute;
    left: 30px;
    top: 5px;
    width: fit-content;

    @media (min-width: $breakpoint-s) {
      opacity: 1;
      background: transparent;
      box-shadow: none;
      font-size: 0.9em;
      left: 17px;

      /deep/ .tooltip-pointer {
        display: none;
      }
    }
  }
  .user-image {
    height: 35px;
    width: 35px;
    position: relative;
    overflow: hidden;
    border-radius: 40px;

    img {
      height: 100%;
    }
  }
  @media (max-width: $breakpoint-s) {
    display: none;
  }
}

.price {
  display: flex;
  justify-content: flex-end;
  align-items: center;

  img {
    margin-right: 4px;
  }
  button {
    margin-left: 40px;
    margin-right: 10px;
    background: transparent;
    border: 1px solid $color-subtle;
    box-shadow: none;
    font-size: 0.9em;

    &:active {
      background: rgba(200,225,255,0.1)
    }
  }
}
</style>
