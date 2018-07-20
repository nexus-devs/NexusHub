<template>
  <div :class="{ active: active ? true : false }" class="component" @click="toggle">
    <div class="image-wrapper">
      <img :src="component.imgUrl" alt="component.name">
    </div>
    <div class="data">
      <h4>{{ component.name }}</h4>
      <span>{{ orders.length }} Orders</span>
    </div>
  </div>
</template>




<script>
export default {
  props: ['component'],

  computed: {
    orders () {
      return this.$store.state.orders.all.filter(o => o.component === this.component.name)
    },
    active () {
      return this.$store.state.orders.components.includes(this.component.name)
    }
  },

  methods: {
    toggle () {
      const components = this.$store.state.orders.components
      let override = []
      const included = components.includes(this.component.name)

      if (included) {
        for (const component of components) {
          if (component !== this.component.name) {
            override.push(component)
          }
        }
      } else {
        override = override.concat(components).concat([this.component.name])
      }
      this.$store.commit('setOrderComponents', override)
    }
  }
}
</script>




<style lang="scss" scoped>
@import '~src/styles/partials/importer';

.component {
  @include ie;
  @include field;
  margin-right: 10px;
  padding: 8px 20px;
  border-left: 2px solid transparent;
  max-width: 400px;

  &:last-of-type {
    margin-right: 0;
  }
  &:before {
    border-radius: 2px;
  }
  &.active {
    border-left: 2px solid #39E591;
  }
  @media (max-width: $breakpoint-m) {
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    margin-bottom: 10px;

    .image-wrapper {
      margin-bottom: 10px;
    }
  }
}
.image-wrapper {
  display: inline-flex;
  vertical-align: middle;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  height: 50px;
  width: 50px;
  margin-right: 5px;

  img {
    max-height: 70%;
  }
}
.data {
  display: inline-block;
  vertical-align: middle;
}
span {
  display: inline-block;
  margin-top: -2px;
  font-size: 0.9em;
  color: $color-font-body;
}
</style>
