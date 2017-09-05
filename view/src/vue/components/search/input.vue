<template>
  <div class="col-b">
    <label>Search</label><br />
    <input type="text" placeholder="Items, Players.." v-model="input"
                                                      v-on:keyup="search"
                                                      v-on:keydown.tab.prevent="complete">
    <span class="autocomplete"> {{ autocomplete }} </span>
  </div>
</template>


<script>
export default {
  data() {
    return {
      input: ''
    }
  },

  computed: {
    autocomplete() {
      return this.$store.state.search.autocomplete
    }
  },

  methods: {
    /**
     * Dynamically get fuzzy search results from search endpoint and save in store
     */
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
    },

    /**
     * Change input to full suggestion with correct capitalization
     */
    complete() {
      if (this.$store.state.search.suggestions.length) {
        let actual = this.$store.state.search.suggestions[0].name
        this.input = actual
        this.$store.commit('setSearchAutocomplete', actual)
      }
    }
  }
}
</script>


<style lang="scss">
</style>
