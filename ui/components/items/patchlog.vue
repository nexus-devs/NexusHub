<template>
  <div v-observe-visibility="{
    callback: setVisibility,
    intersection: {
      rootMargin: '0px 0px 20% 0px'
    }
  }" :class="{ visible }" class="patchlog">
    <div class="patchlogs-title">
      <h3>{{ patchlog.name }}</h3>
      <time :datetime="patchlog.date">{{ moment(new Date(patchlog.date)).format('MMMM Do YYYY, h:mma') }}</time>
      <img v-if="(visible || seen) && patchlog.imgUrl" :src="patchlog.imgUrl" :alt="patchlog.name">
    </div>
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
    <a :href="patchlog.url" target="_blank">Full Patch Notes</a>
  </div>
</template>



<script>
import moment from 'moment'

export default {
  props: ['patchlog'],

  data () {
    return {
      visible: false,
      seen: false
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



<style lang="scss">
@import '~src/styles/partials/importer';

.patchlog {
  @include field;
  padding: 35px;
  margin: 30px 0;
  max-width: 800px;

  .patchlogs-title {
    border-bottom: 1px solid $color-subtle-dark;
    padding-bottom: 20px;

    img {
      margin-top: 20px;
      width: 100%;
      max-height: 50vh;
      border-radius: 2px;
    }
  }
  h4 {
    margin-top: 30px;
  }
  time {
    display: inline-block;
    font-size: 0.9em;
    margin-top: 2px;
  }
  a {
    @include ie;
    display: inline-block;
    margin-top: 30px;
    padding: 8px 10px;
    border: 1px solid $color-subtle;
    border-radius: 2px;
    font-size: 0.9em;

    &:before {
      border-radius: 2px;
    }
  }
  li {
    margin-top: 8px;
    margin-left: 15px;
    color: white;
  }
}
</style>
