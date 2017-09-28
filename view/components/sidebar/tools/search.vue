<template>
  <wrapper>
    <div class="ico-a-ie">
      <img src="/img/sidebar/search.svg" alt="" class='ico-20'>
    </div>
    <tooltip>Search</tooltip>
    <panel>
      <div class="panel-head">
        <h3>Search</h3>
        <span class="shortcut">SHIFT + F</span>
        <back></back>
      </div>
      <div class="panel-body">
        <search></search>
      </div>
    </panel>
  </wrapper>
</template>



<script>
import wrapper from '../modules/wrapper.vue'
import tooltip from '../modules/tooltip.vue'
import panel from '../modules/panel.vue'
import back from '../modules/back.vue'
import search from '../../search/sidebar.vue'

// Client-side-only requirements
let shortcut
try {
  shortcut = require('keyboardjs')
} catch(err) {}


export default {
  components: {
    wrapper,
    tooltip,
    panel,
    back,
    search
  },
  data() {
    return {
      id: this.$store.state.sidebar.id + 1 // required before wrapper which increments id
    }
  },
  mounted() {
    shortcut.bind('shift + f', () => {
      if (!this.$store.state.sidebar.active) {
        this.$store.commit('toggleSidebar')
      }
      if (this.id === this.$store.state.sidebar.activeId) {
        this.$store.commit('toggleSidebar')
      }
      this.$store.commit('setActivePanel', this.id)
      this.$children[0].$children[1].$children[1].$children[0].$refs.input.focus()
    })
  }
}
</script>
