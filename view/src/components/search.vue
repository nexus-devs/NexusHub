<template>
  <div class="search row">
    <div class="col-b">
      <label for="item">Item</label><br />
      <input type="text" name="item" placeholder="Items, Players..">
      <span class="autocomplete">{{ autocomplete }}</span>
    </div>
    <div class="col-b">
      <label>Time</label><br />
      <div class="input a-ie">
        <span>This Week</span> - <span>Last Week</span>
        <img src="/img/ui/add.svg" class="ico-16" alt="">
      </div>
    </div>
    <div class="col-b">
      <div class="input-container">
        <label>Rank</label><br />
        <div class="input a-ie">
          <span>Any Rank</span>
          <img src="/img/ui/add.svg" class="ico-16" alt="">
        </div>
      </div>
      <div class="button-container">
        <button class="btn-outline" type="button" name="search">
          Search
        </button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    computed: {
      autocomplete() {
        return this.$store.state.search.autocomplete
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '~src/styles/partials/importer';

  .row {
    margin-top:10px;
    min-width: 45vw;
  }
  .col-b {
    background: rgba(27, 34, 40, 0.7);
    padding: 20px;
    margin: 1px;
    margin-top: 1px !important;
    margin-bottom: 1px !important;
    width: 33%;

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
      color: white;
    }

    input, .input {
      font-size: 1.05em;
      display: inline-block;
      color: white;
      margin-bottom: -15px;
    }

    input {
      margin-top: 9px;
    }

    .a-ie {
      margin-left:-10px;
    }
  }
</style>
