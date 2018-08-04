<template>
  <module v-observe-visibility="{
    callback: setVisibility,
    intersection: {
      rootMargin: '0px 0px 20% 0px'
    }
  }" :class="{ visible }" class="patchlog">
    <template slot="header">
      <h3>{{ patchlog.name }}</h3>
      <time :datetime="patchlog.date">{{ moment(new Date(patchlog.date)).format('MMMM Do YYYY') }}</time>
      <img v-if="(visible || seen) && patchlog.imgUrl" :src="patchlog.imgUrl" :alt="patchlog.name" onerror="this.style.display='none'">
    </template>
    <template slot="body">
      <div v-if="patchlog.additions">
        <h4>Additions</h4>
        <ul>
          <li v-for="log in patchlog.additions.split('\n')" v-if="log" :key="log">
            <p>{{ log }}</p>
          </li>
        </ul>
      </div>
      <div v-if="patchlog.changes">
        <h4>Changes</h4>
        <ul>
          <li v-for="log in patchlog.changes.split('\n')" v-if="log" :key="log">
            <p>{{ log }}</p>
          </li>
        </ul>
      </div>
      <div v-if="patchlog.fixes">
        <h4>Fixes</h4>
        <ul>
          <li v-for="log in patchlog.fixes.split('\n')" v-if="log" :key="log">
            <p>{{ log }}</p>
          </li>
        </ul>
      </div>
    </template>
    <template slot="footer">
      <router-link v-if="overview" :to="`${itemName}/patchlogs`">
        Full Changes
        <img src="/img/ui/arrow-right.svg" alt="View full patch notes" class="ico-20">
      </router-link>
      <a v-else :href="patchlog.url" target="_blank">
        Full Patch Notes
        <img src="/img/ui/arrow-right.svg" alt="View full patch notes">
      </a>
    </template>
  </module>
</template>



<script>
import moment from 'moment'
import module from 'src/components/ui/module.vue'

export default {
  components: {
    module
  },

  props: ['patchlog', 'overview'],

  data () {
    return {
      visible: false,
      seen: false,
      itemName: this.$route.params.item
    }
  },

  methods: {
    moment,
    setVisibility (bool, entry) {
      const buffer = -99999

      if (bool || entry.boundingClientRect.top < entry.rootBounds.bottom + buffer || entry.boundingClientRect.bottom < entry.rootBounds.top + buffer) {
        this.visible = true
        this.seen = true
        this.$store.commit('addItemPatchlog', this.patchlog)
      } else {
        this.visible = false
        this.$store.commit('removeItemPatchlog', this.patchlog)
      }
    }
  }
}
</script>



<style lang="scss" scoped>
@import '~src/styles/partials/importer';

.module {
  max-width: 650px;

  .header {
    img {
      margin-top: 20px;
      width: 100%;
      max-height: 50vh;
      border-radius: 2px;
    }
  }
}
</style>
