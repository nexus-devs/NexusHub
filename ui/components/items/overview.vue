<template>
  <div class="overview">
    <section>
      <div class="container">
        <h2>Economy</h2>
      </div>
    </section>
    <section v-if="patchlogs">
      <div class="container">
        <h2>Recent Changes</h2>
        <div class="row-pad patchlogs">
          <patchlog v-for="patchlog in patchlogs" :key="patchlog.date" :patchlog="patchlog" class="col-b"/>
        </div>
      </div>
    </section>
  </div>
</template>



<script>
import Vue from 'vue'
import patchlog from 'src/components/items/modules/patchlog.vue'
import VueObserveVisibility from 'vue-observe-visibility'

export default {
  components: {
    patchlog
  },

  computed: {
    patchlogs () {
      const item = this.$store.state.items.item

      if (item.patchlogs) {
        return item.patchlogs.slice(0, 3)
      } else {
        return null
      }
    }
  },

  beforeMount () {
    Vue.use(VueObserveVisibility)
  }
}
</script>



<style lang="scss" scoped>
@import '~src/styles/partials/importer';

.patchlogs {
  justify-content: flex-start;

  /deep/ .patchlog {
    margin: 20px;
    padding: 0;
    max-width: 33%;

    img {
      max-height: 250px;
    }
    @media (max-width: $breakpoint-m) {
      max-width: calc(50% - 40px);
    }
    @media (max-width: $breakpoint-s) {
      max-width: none;
    }
    .body {
      text-overflow: ellipsis;
      overflow: hidden;
    }
  }
}
</style>
