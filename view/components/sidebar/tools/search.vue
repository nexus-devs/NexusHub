<template>
  <wrapper>
    <div class="ico-a-ie">
      <img src="/img/sidebar/search.svg" alt="" class='ico-20'>
    </div>
    <tooltip>Search</tooltip>
    <panel>
      <div class="panel-head">
        <h3>Search</h3>
        <span>CTRL + F</span>
      </div>
      <div class="panel-body">
        <div class="row">
          <div class="col">
            kek
          </div>
          <div class="col">
            kek
          </div>
          <div class="col">
            kek
          </div>
        </div>
      </div>
    </panel>
  </wrapper>
</template>



<script>
import wrapper from '../modules/wrapper.vue'
import tooltip from '../modules/tooltip.vue'
import panel from '../modules/panel.vue'

export default {
  components: {
    wrapper,
    tooltip,
    panel
  }
}
</script>
