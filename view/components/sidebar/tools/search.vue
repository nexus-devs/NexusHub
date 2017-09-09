<template>
  <div class="ico-wrapper">
    <div class="ico-a-ie">
      <img src="/img/sidebar/search.svg" alt="" class='ico-20'>
    </div>
    <tooltip>Search</tooltip>
    <panel></panel>
  </div>
</template>



<script>
import tooltip from '../modules/tooltip.vue'
import panel from '../modules/panel.vue'

export default {
  components: {
    tooltip,
    panel
  }
}
</script>
