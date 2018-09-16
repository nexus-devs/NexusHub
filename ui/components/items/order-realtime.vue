<template>
  <module @click.native="select">
    {{ order }}
    <template slot="header">
      <div>
        <div class="img-container">
          <img :src="component.imgUrl" :alt="order.item">
        </div>
        <h3>{{ component.name }}</h3>
      </div>
      <h3 class="user">{{ order.user }}</h3>
    </template>
    <template slot="body">
      <span>{{ order.offer }} for</span>
      <span class="main-value">
        {{ order.price ? `${order.price}p` : 'any offer' }}
      </span>
    </template>
  </module>
</template>



<script>
import module from 'src/components/ui/module.vue'

export default {
  components: {
    module
  },

  props: ['order'],

  computed: {
    item () {
      return this.$store.state.items.item
    },
    component () {
      if (this.order) {
        return this.item.components.find(c => c.name === this.order.component) || {
          selling: { current: {}},
          buying: { current: {}}
        }
      } else {
        return {}
      }
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

.module {
  @include ie;
  border-radius: 2px;
  padding: 0;
  flex-basis: 25%;
  margin-right: 15px;
  margin-bottom: 15px;
  @include ease(0.5s);

  &:hover {
    @include gradient-background-dg(#3c4451, #353d49);
  }
  &:before {
    border-radius: 2px;
  }
  &:nth-of-type(n + 7) {
    display: none;
  }
  /deep/ .header {
    padding: 20px 20px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .user {
      font-size: 0.9em !important;
      color: white !important;
      text-transform: none;
      @media (max-width: $breakpoint-m) {
        display: none;
      }
    }
  }
  /deep/ .body {
    padding: 30px 25px;
  }
  @media (max-width: $breakpoint-m) {
    margin-right: 10px;
  }
  @media (max-width: $breakpoint-s) {
    &:nth-of-type(3n) {
      margin-right: 0;
    }
  }
}

.img-container {
  position: relative;
  overflow: hidden;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  margin-right: 5px;
  height: 40px;
  width: 40px;
  border-radius: 40px;
  background: $color-bg;

  img {
    position: relative;
    max-height: 80%;
  }
}
</style>
