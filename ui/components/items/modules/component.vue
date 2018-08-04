<template>
  <div :class="{ active: active ? true : false }" class="component col" @click="select">
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
      return this.$store.state.items.selected.component === this.component.name
    }
  },

  methods: {
    select () {
      this.$store.commit('setItemComponent', this.component.name)
    }
  }
}
</script>




<style lang="scss" scoped>
@import '~src/styles/partials/importer';

.component {
  @include ie;
  border-left: 2px solid transparent;
  border-radius: 2px;
  background: $color-bg;
  padding: 8px;

  &:last-of-type {
    border-bottom: none;
  }
  &:before, &:hover {
    border-radius: 2px;
  }
  &.active {
    border-left: 2px solid #39E591;
    background: #3c4451;
  }
  @media (max-width: $breakpoint-m) {
    @include field;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    border-bottom: none;
    margin-right: 10px;
    max-height: none;

    &:last-of-type {
      margin-right: 0;
    }
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
    border-radius: 60px;
  }
}
.data {
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  width: calc(100% - 65px);
  vertical-align: middle;

  @media (max-width: $breakpoint-m) {
    flex-direction: column;
    margin-top: -15px;
  }
}
span {
  margin-top: -2px;
  font-size: 0.9em;
  color: $color-font-body;
}
</style>
