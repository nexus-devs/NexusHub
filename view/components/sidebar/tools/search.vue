<template>
  <wrapper>
    <div class="ico-a-ie">
      <img src="/img/sidebar/search.svg" alt="" class='ico-20'>
    </div>
    <tooltip>Search</tooltip>
    <panel>
      <div class="panel-head">
        <h3>Search</h3>
        <span class="shortcut">CTRL + F</span>
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

export default {
  components: {
    wrapper,
    tooltip,
    panel,
    back,
    search
  },
  mounted() {

  }
}
</script>
