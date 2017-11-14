<template>
  <div class="col-b search">
    <div class="field">
      <label>Search</label><br>
      <input type="text" placeholder="Try: Soma Prime, Maim..." :value="input.name || input" @input="search"
       v-on:keydown.tab.prevent="complete" v-on:keyup.enter="query" ref="input">
      <span class="autocomplete">{{ autocomplete.name }}</span>
      <span class="autocomplete-type">{{ autocomplete.type }}</span>
      <slot></slot>
    </div>
    <div class="tools">
      <div class="suggestion" v-for="suggestion in suggestions" v-on:click="complete(suggestion)">
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
import button from './modules/button.vue' // to get the search function


export default {
  mounted() {
    this.$refs.input.focus()
  },

  data() {
    return {
      input: '',
      autocomplete: {
        name: '',
        type: ''
      },
      suggestions: []
    }
  },

  methods: {
    /**
     * Dynamically get fuzzy search results from search endpoint and save in store
     */
    async search(event) {
      let result = []
      this.input = event.target.value
      await this.fetchSuggestions()

      // Update if autocomplete doesn't match input in entered letters
      if (!this.autocomplete.name.startsWith(this.input)) {
        this.autocomplete = {
          name: '',
          type: 'Any'
        }
      }
    },
    async fetchSuggestions() {
      let result = []

      // Only run if timeout isn't after search is done
      if (this.input.length > 1) {
        result = await this.$blitz.get(`/warframe/v1/search?query=${this.input}&limit=3`)
      }
      // Found suggestions and input still matches result (may not if user types too fast)
      let regex = new RegExp(`^${this.input}`, 'i')
      if (result.length && result[0].name.replace(regex, this.input).startsWith(this.input)) {
        this.autocomplete = {
          name: result[0].name.replace(regex, this.input),
          type: result[0].type
        }
        this.suggestions = result
      }
      // No suggestion -> Suggest 'Any' for custom search
      else {
        this.autocomplete = {
          name: '',
          type: 'Any'
        }
        this.suggestions = []
      }
      // Input cleared again
      if (this.input.length < 1) {
        this.autocomplete = {
          name: '',
          type: ''
        }
      }
    },

    /**
     * Change input to full suggestion with correct capitalization
     */
    complete(suggestion = {}) {
      // Take directly passed suggestion (when selecting from suggestion list)
      if (suggestion.name) {
        this.input = suggestion
        this.autocomplete = suggestion
        this.suggestions = []
      }
      // Take first suggestion in list
      else if (this.suggestions.length) {
        let actual = this.suggestions[0]
        this.input = actual
        this.autocomplete = actual
        this.suggestions = []
      }
    },

    /**
     * Visit link set by user input
     */
    query() {
      this.complete()
      button.methods.search.bind(this)(this.input)
    }
  }
}
</script>
