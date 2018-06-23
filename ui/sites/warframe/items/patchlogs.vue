<template>
  <div>
    <sidebar>
      <sidebar-search/>
    </sidebar>
    <app-content>
      <item-header/>
      <section>
        <div id="patchlogs-container" class="container">
          <div v-if="item.patchlogs" id="patchlogs" class="patchlogs">
            <h2>Patchlog History</h2>
            <span>All patches and hotfixes affecting {{ item.name }}.</span>
            <patchlog v-for="patchlog in item.patchlogs" :key="patchlog.name" :patchlog="patchlog"/>
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
import VueObserveVisibility from 'vue-observe-visibility'
import appContent from 'src/app-content.vue'
import sidebar from 'src/components/ui/sidebar/sidebar.vue'
import sidebarSearch from 'src/components/ui/sidebar/search.vue'
import itemHeader from 'src/components/items/header.vue'
import patchlog from 'src/components/items/patchlog.vue'
import moment from 'moment'
import VueAffix from 'vue-affix'

export default {
  components: {
    'app-content': appContent,
    sidebar,
    'sidebar-search': sidebarSearch,
    'item-header': itemHeader,
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

  beforeCreate () {
    Vue.use(VueObserveVisibility)
    Vue.use(VueAffix)
    this.$store.commit('showSidebar')
    this.$store.commit('keepSidebarVisible', true)
  },

  beforeDestroy () {
    this.$store.commit('hideSidebar')
    this.$store.commit('keepSidebarVisible', false)
  },

  beforeMount () {
    Vue.use(VueObserveVisibility)
  },

  methods: {
    moment
  },

  asyncData ({ store, route }) {
    return store.dispatch('fetchItemData', route.params.item.replace(/(?:(\-)(?!\1))+/g, ' ').replace(/- /g, '-'))
  }
}
</script>



<style lang="scss" scoped>
@import '~src/styles/partials/importer';

h2 + span {
  display: inline-block;
  margin-bottom: 20px;
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
