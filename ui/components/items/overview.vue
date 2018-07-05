<template>
  <div class="overview">
    <section>
      <div class="container">
        <h2>Item Overview</h2>
        <div class="row-pad">
          <div class="column col-b">
            <description/>
            <build-requirements v-if="item.components.length > 1"/>
          </div>
          <stats class="col-b"/>
          <drops v-if="drops" class="col-b"/>
        </div>
      </div>
    </section>
    <section v-if="patchlogs">
      <div class="container">
        <h2>Recent Changes</h2>
        <div class="row-pad patchlogs">
          <patchlog v-for="patchlog in patchlogs" :key="patchlog.date" :patchlog="patchlog" :overview="true" class="col-b"/>
        </div>
      </div>
    </section>
  </div>
</template>



<script>
import Vue from 'vue'
import patchlog from 'src/components/items/modules/patchlog.vue'
import VueObserveVisibility from 'vue-observe-visibility'
import description from 'src/components/items/modules/description.vue'
import buildRequirements from 'src/components/items/modules/build-requirements.vue'
import stats from 'src/components/items/modules/stats.vue'
import drops from 'src/components/items/modules/drops.vue'

export default {
  components: {
    patchlog,
    description,
    'build-requirements': buildRequirements,
    stats,
    drops
  },

  computed: {
    item () {
      return this.$store.state.items.item
    },
    patchlogs () {
      const item = this.$store.state.items.item

      if (item.patchlogs) {
        return item.patchlogs.slice(0, 4)
      } else {
        return null
      }
    },
    drops () {
      return this.item.components[1] ? this.item.components[1].drops : this.item.components[0].drops
    }
  },

  beforeMount () {
    Vue.use(VueObserveVisibility)
  }
}
</script>



<style lang="scss" scoped>
@import '~src/styles/partials/importer';

h2 {
  margin-bottom: 20px;
}

.row-pad {
  /deep/ .module {
    margin: 0 10px 20px;
    padding: 0;
  }
}

.column {
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;

  @media (max-width: $breakpoint-s) {
    margin-right: 20px;
  }
}

.patchlogs {
  justify-content: flex-start;

  /deep/ .patchlog {
    max-width: 33%;

    img {
      max-height: 250px;
    }
    @media (max-width: $breakpoint-m) {
      max-width: calc(50% - 20px);
    }
    @media (max-width: $breakpoint-s) {
      max-width: none;
    }
    .body {
      text-overflow: ellipsis;
      overflow: hidden;
      max-height: 50px;
    }
  }
}
</style>
