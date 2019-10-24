<template>
  <div>
    <navigation/>
    <item-header/>
    <app-content>
      <section>
        <div class="container">
          <h2 class="sub">Item Overview</h2>
          <div class="row-margin main">
            <stats class="col-b"/>
          </div>
          <div class="row-margin main">
            <graphValueQuantity class="col-b"/>
            <heatmapValue class="col-b"/>
          </div>
        </div>
      </section>
    </app-content>
  </div>
</template>



<script>
import ad from 'src/components/ads/nitroAds.vue'
import appContent from 'src/app-content.vue'
import graphValueQuantity from 'src/components/wow-classic/graph-value-quantity.vue'
import heatmapValue from 'src/components/wow-classic/heatmap-value.vue'
import itemHeader from 'src/components/wow-classic/header.vue'
import meta from 'src/components/seo/meta.js'
import navigation from 'src/components/ui/nav/warframe.vue'
import stats from 'src/components/wow-classic/stats.vue'

export default {
  components: {
    ad,
    appContent,
    navigation,
    itemHeader,
    stats,
    graphValueQuantity,
    heatmapValue
  },

  computed: {
    item () {
      return this.$store.state.items.item
    }
  },

  head () {
    return {
      title: `${this.item.name} · NexusHub`
    }
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

.row-margin {
  justify-content: flex-start;
}

.column {
  position: relative;
  display: flex;
  flex-direction: column;
  flex-grow: 0;
  min-width: 400px;

  & > *:first-of-type {
    margin-bottom: 20px;
  }
  @media (max-width: $breakpoint-s) {
    min-width: 0;
  }
}

.module {
  max-width: 450px;
}

.patchlogs {
  justify-content: flex-start;

  /deep/ .patchlog {
    @media (max-width: $breakpoint-m) {
      max-width: calc(50% - 20px);
    }
    @media (max-width: $breakpoint-s) {
      max-width: none;
    }
    .header {
      img {
        display: none;
      }
    }
  }
}
.btn-subtle {
  margin-top: 20px;
}
</style>
