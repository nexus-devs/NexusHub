<template>
  <div>
    <sidebar>
      <sidebar-search/>
    </sidebar>
    <item-header/>
    <app-content>
      <section class="patchlogs">
        <div id="patchlogs-container" class="container">
          <div v-if="item.patchlogs" id="patchlogs" class="patchlogs">
            <h2 class="sub">Patchlog History</h2>
            <patchlog v-for="patchlog in item.patchlogs" :key="patchlog.date" :patchlog="patchlog"/>
          </div>
          <div v-else class="no-data">
            No patchlogs found :(
          </div>
          <affix v-if="item.patchlogs" :offset="{ top: 150, bottom: 80 }" relative-element-selector="#patchlogs-container" class="timeline-wrapper">
            <span>{{ moment(new Date(item.patchlogs[patchlogs.current].date)).fromNow() }}</span>
            <div class="timeline">
              <div :style="{ transform: [progress] }" class="timeline-slider"/>
              <span :style="{ transform: [progress] }">{{ patchlogs.current }} / {{ item.patchlogs.length }}</span>
            </div>
            <span>{{ moment(new Date(item.patchlogs[item.patchlogs.length - 1].date)).fromNow() }}</span>
          </affix>
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
import VueObserveVisibility from 'vue-observe-visibility'
import VueAffix from 'vue-affix'
import patchlog from 'src/components/items/patchlog.vue'
import moment from 'moment'

export default {
  components: {
    'app-content': appContent,
    sidebar,
    'sidebar-search': sidebarSearch,
    'item-header': itemheader,
    patchlog
  },

  computed: {
    item () {
      return this.$store.state.items.item
    },
    patchlogs () {
      return this.$store.state.items.patchlogs
    },
    progress () {
      return `translateY(${120 * (this.$store.state.items.patchlogs.current || 0.0001) / this.item.patchlogs.length}px)`
    }
  },

  beforeMount () {
    Vue.use(VueAffix)
    Vue.use(VueObserveVisibility)
  },

  methods: {
    moment
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

h2 + span {
  display: block;
  margin-bottom: 20px;
}
/deep/ .patchlog {
  margin-top: 20px;
  margin-bottom: 30px;
}
.no-data {
  text-align: center;
  color: white;
}
.timeline-wrapper, .patchlogs {
  display: inline-block;
  vertical-align: top;
}
.patchlogs {
  @media (max-width: $breakpoint-s) {
    display: block;
  }
}
.timeline-wrapper {
  width: 200px;
  transform: translateY(100px);
  @include ease(0.45s);

  span {
    margin-left: 80px;
    font-size: 0.9em;
  }
  @media (max-width: $breakpoint-s) {
    display: none;
  }
}
.timeline {
  position: relative;
  padding: 10px 20px;
  margin: 10px 80px;
  margin-right: 0;
  border-left: 1px solid $color-subtle;
  height: 150px;
  color: white;

  .timeline-slider {
    position: absolute;
    left: -3px;
    height: 20%;
    width: 5px;
    border-radius: 2px;
    background: $color-bg-light;
    @include ease(0.1s);
  }
  span {
    display: inline-block;
    margin-left: 0;
    margin-top: 6px;
    @include ease(0.1s);
  }
}
</style>
