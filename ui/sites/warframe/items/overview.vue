<template>
  <div>
    <sidebar>
      <sidebar-search/>
    </sidebar>
    <item-header/>
    <app-content>
      <section>
        <div class="container">
          <h2 class="sub">Item Overview</h2>
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
          <h2 class="sub">Recent Changes</h2>
          <div class="row-pad patchlogs">
            <patchlog v-for="patchlog in patchlogs" :key="patchlog.date" :patchlog="patchlog" :overview="true" class="col-b"/>
          </div>
        </div>
      </section>
    </app-content>
  </div>
</template>



<script>
import Vue from 'vue'
import appContent from 'src/app-content.vue'
import sidebar from 'src/components/ui/sidebar/sidebar.vue'
import sidebarSearch from 'src/components/ui/sidebar/search.vue'
import itemheader from 'src/components/items/header.vue'
import patchlog from 'src/components/items/patchlog.vue'
import VueObserveVisibility from 'vue-observe-visibility'
import description from 'src/components/items/description.vue'
import buildRequirements from 'src/components/items/build-requirements.vue'
import stats from 'src/components/items/stats.vue'
import drops from 'src/components/items/drops.vue'

export default {
  components: {
    'app-content': appContent,
    sidebar,
    'sidebar-search': sidebarSearch,
    'item-header': itemheader,
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
        return item.patchlogs.slice(0, 3)
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

/deep/ {
  .zoom-enter-active, .fade-leave-active {
    @include ease(0.4s);
  }
  .zoom-enter, .zoom-leave-to {
    transform: translateY(7px);
    transform-origin: top;
    opacity: 0.75;
  }
}

.app-content {
  background: $color-bg-darker;
}

h2 {
  margin-bottom: 20px;
}

.row-pad {
  /deep/ .module {
    margin-top: 0;
    margin-bottom: 20px;
    padding: 0;
  }
}

.column {
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 0;
  margin-top: 0;
  margin-bottom: 0;
}

.patchlogs {
  justify-content: flex-start;

  /deep/ .patchlog {
    img {
      display: none;
    }
    @media (max-width: $breakpoint-m) {
      max-width: calc(50% - 20px);
    }
    @media (max-width: $breakpoint-s) {
      max-width: none;
    }
    .header {
      padding: 0;

      h3 {
        padding: 30px 35px 0;
        color: white !important;
      }
      time {
        padding: 0 35px;
      }
    }
  }
}
</style>
