<template>
  <div class="row">
    <searchfield></searchfield>
    <timefield></timefield>
    <rankfield></rankfield>
  </div>
</template>


<script>
  import searchfield from 'src/vue/components/search/input.vue'
  import timefield from 'src/vue/components/search/time.vue'
  import rankfield from 'src/vue/components/search/rank.vue'

  export default {
    components: {
      searchfield,
      timefield,
      rankfield
    }
  }
</script>


<style lang="scss" scoped>
  @import '~src/styles/partials/importer';

  .row {
    margin-top:10px;
  }
  /deep/ .col-b {
    background: rgba(27, 32, 37, 0.8);
    padding: 15px;
    margin: 1px;
    margin-top: 1px !important;
    margin-bottom: 1px !important;
    width: 33%;
    @include shadow-1;

    .autocomplete {
      position: absolute;
      left: 15px;
      font-size: 1.05em;
      margin-top: 9px;
      z-index: 0;
    }

    .input-container, .button-container {
      display: inline-block;
      vertical-align: middle;
    }

    .button-container {
      margin-top: 5px;
      margin-left: 10px;
      float:right;
    }

    label {
      font-size: 0.85em;
      font-weight: 400;
      color: white;
    }

    input, .input {
      position: relative;
      z-index: 1;
      font-size: 1.05em;
      display: inline-block;
      color: white;
      margin-bottom: -10px;
    }

    input {
      margin-top: 9px;
    }

    .a-ie {
      margin-left:-10px;
    }
  }
</style>
