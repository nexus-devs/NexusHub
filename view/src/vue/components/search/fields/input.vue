<template>
  <div class="col-b">
    <div class="field">
      <label>Search</label><br />
      <input type="text" placeholder="Items, Players.." v-model="input"
                                                        v-on:keyup="search"
                                                        v-on:keydown.tab.prevent="complete">
      <span class="autocomplete"> {{ autocomplete }} </span>
    </div>
    <div class="tools">
      <div class="suggestion" v-for="suggestion in suggestions">
        <div class="ico-36">
          <img :src="suggestion.imgUrl" :alt="suggestion.name">
          <img :src="suggestion.imgUrl" :alt="suggestion.name" class="backdrop">
        </div>
        <div class="suggestion-main">
          <span class='suggestion-name'>{{ suggestion.name }}</span>
          <span class="suggestion-type">{{ suggestion.type }}</span>
        </div>
        <span class="suggestion-data">{{ suggestion.keyData }}</span>
      </div>
    </div>
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
    },
    suggestions() {
      return this.$store.state.search.suggestions
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
