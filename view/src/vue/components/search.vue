<template>
  <div class="row">

    <div class="col-b">
      <label>Item</label><br />
      <input type="text" placeholder="Items, Players.." v-model="input" v-on:keyup="search">
      <span class="autocomplete"> {{ autocomplete }} </span>
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
        <button class="btn-outline" type="button">
          Search
        </button>
      </div>
    </div>
  </div>
</template>


<script>
  export default {
    data() {
      return {
        input: ""
      }
    },

    computed: {
      autocomplete() {
        return this.$store.state.search.autocomplete
      }
    },

    methods: {
      async search(event) {
        let result = []
        let triggers = 'abcdefghijklmnopqrstuvwxyz0123456789-_.[]'.split('')
        triggers.push('backspace')

        if (triggers.includes(event.key.toLowerCase())) {
          if (this.input.length > 1) {
            result = await this.$blitz.get(`/warframe/v1/search?query=${this.input}&limit=4`)
          }
          if (result.length) {
            let regex = new RegExp(`^${this.input}`, 'i')
            this.$store.commit('setSearchAutocomplete', result[0].name.replace(regex, this.input))
            this.$store.commit('setSearchSuggestions', result)
          } else {
            this.$store.commit('setSearchAutocomplete', '')
          }
        }
      }
    }
  }
</script>


<style lang="scss" scoped>
  @import '~src/styles/partials/importer';

  .row {
    margin-top:10px;
  }
  .col-b {
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
