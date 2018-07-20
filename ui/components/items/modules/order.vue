<template>
  <div class="order row" @click="select">
    <div class="image-wrapper">
      <img :src="component.imgUrl" :alt="component.name">
    </div>
    <div class="item">
      <span class="component">{{ component.name }}</span>
      <br>
      <span>{{ item.name }}</span>
    </div>
  </div>
</template>



<script>
export default {
  props: ['order'],

  computed: {
    item () {
      return this.$store.state.items.item
    },
    component () {
      return this.item.components.find(c => c.name === this.order.component)
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

  img {
    max-height: 60%;
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
  }
}
</style>
