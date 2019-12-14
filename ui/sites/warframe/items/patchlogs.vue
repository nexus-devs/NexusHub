<template>
  <div>
    <navigation />
    <item-header />
    <app-content>
      <section class="patchlogs">
        <div id="patchlogs-container" class="container">
          <div v-if="item.patchlogs" id="patchlogs" class="patchlogs">
            <h2 class="sub">
              Patchlog History
            </h2>
            <div v-for="(patchlog, i) in item.patchlogs" :key=" patchlog.name + patchlog.date">
              <patchlog :patchlog="patchlog" />
              <ad v-if="i === 0 || i % 3 === 0" name="warframe-patchlogs-mid" />
            </div>
          </div>
          <div v-else class="no-data">
            No patchlogs found :(
          </div>
          <no-ssr>
            <affix v-if="item.patchlogs[patchlogs.current]" :offset="{ top: 150, bottom: 80 }" relative-element-selector="#patchlogs-container" class="timeline-wrapper">
              <span>{{ moment(new Date(item.patchlogs[patchlogs.current].date)).fromNow() }}</span>
              <div class="timeline">
                <div :style="{ transform: [progress] }" class="timeline-slider" />
                <span :style="{ transform: [progress] }">{{ patchlogs.current }} / {{ item.patchlogs.length }}</span>
              </div>
              <span>{{ moment(new Date(item.patchlogs[item.patchlogs.length - 1].date)).fromNow() }}</span>
            </affix>
          </no-ssr>
          <ad name="warframe-patchlogs-end" />
        </div>
      </section>
    </app-content>
  </div>
</template>



<script>
import Vue from 'vue'
import VueAffix from 'vue-affix'
import VueObserveVisibility from 'vue-observe-visibility'
import ad from 'src/components/ads/nitroAds.vue'
import appContent from 'src/app-content.vue'
import itemHeader from 'src/components/warframe/header.vue'
import meta from 'src/components/seo/meta.js'
import moment from 'moment'
import navigation from 'src/components/ui/nav/warframe.vue'
import noSsr from 'vue-no-ssr'
import patchlog from 'src/components/warframe/patchlog.vue'

export default {
  components: {
    ad,
    navigation,
    appContent,
    itemHeader,
    patchlog,
    noSsr
  },

  async asyncData () {
    const item = encodeURIComponent(this.$store.state.items.item.name)
    this.$store.commit('setItemPatchlogs', await this.$cubic.get(`/warframe/v1/patchlogs?item=${item}&limit=0`))
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

  // Redirect to overview if this site has no content. (May happen when
  // switching between items as they'll stay on their current sub page)
  created () {
    if (!this.item.patchlogs || (this.item.patchlogs && !this.item.patchlogs.length)) {
      this.$router.replace(this.$route.fullPath.replace('/patchlogs', '/'))
    }
  },

  beforeMount () {
    Vue.use(VueAffix)
    Vue.use(VueObserveVisibility)
  },

  methods: {
    moment
  },

  head () {
    return {
      title: `${this.item.name} Patchlogs · NexusHub`,
      meta: meta({
        title: `${this.item.name} Patchlogs on NexusHub`,
        description: `Check out all ${this.item.patchlogs ? this.item.patchlogs.length : 0} patchlogs affecting ${this.item.name} on NexusHub.`,
        image: `https://nexushub.co${this.item.imgUrl}`
      })
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
