<template>
  <div :class="{ active: active ? true : false }" class="btn-tag component col interactive" @click="select">
    <div class="image-wrapper">
      <img :src="component.imgUrl" alt="component.name">
    </div>

    <div class="data">
      <span>{{ component.name }}</span>
      <span class="btn-counter">{{ orders.length }}</span>
    </div>
  </div>
</template>




<script>
export default {
  props: ['component'],

  computed: {
    orders () {
      return this.$store.state.orders.all.filter(o => {
        return o.offer === this.type && o.component === this.component.name
      })
    },
    active () {
      return this.$store.state.items.selected.component === this.component.name
    },
    type () {
      return this.$store.state.orders.type
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
  padding: 0 16px 0 8px;
}

.image-wrapper {
  display: inline-flex;
  vertical-align: middle;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  height: 29px;
  margin-right: 5px;

  img {
    max-height: 70%;
    border-radius: 60px;
    margin-right: 0 !important; // Reset .active from .btn-tag
  }
}
.data {
  display: inline-block;
}
</style>
