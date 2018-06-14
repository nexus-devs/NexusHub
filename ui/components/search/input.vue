<template>
  <div class="col-b search">
    <div class="field">
      <label>Search</label><br>
      <input ref="input" :value="input.name || input" type="text" placeholder="Try: Soma Prime, Maim..."
             @input="search" @keydown.tab.prevent="complete" @keyup.enter="query">
      <span class="autocomplete">{{ autocomplete.name }}</span>
      <span class="autocomplete-type">{{ autocomplete.type }}</span>
      <slot/>
    </div>
    <div class="tools">
      <div v-for="suggestion in suggestions" :key="suggestion.name" class="suggestion" @click="complete(suggestion)">
        <div class="ico-36">
          <img :src="suggestion.imgUrl" :alt="suggestion.name">
          <img :src="suggestion.imgUrl" :alt="suggestion.name" class="backdrop">
        </div>
        <div class="suggestion-main">
          <span class="suggestion-name">{{ suggestion.name }}</span>
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

  data () {
    return {
      input: '',
      autocomplete: {
        name: '',
        type: ''
      },
      suggestions: []
    }
  },
  mounted () {
    this.$refs.input.focus()
  },

  storeModule: {
    name: 'search',
    state: {
      input: ''
    },
    mutations: {
      setSearchInput (state, input) {
        state.input = input
      }
    },
    actions: {
      applyInputQuery ({ commit }, route) {
        if (route.query.input) {
          commit('setSearchInput', route.query.input)
        }
      }
    }
  },

  methods: {
    async search (event) {
      this.input = event.target.value
      this.$store.commit('setSearchInput', event.target.value)

      // Update if autocomplete doesn't match input in entered letters
      if (!this.autocomplete.name.startsWith(event.target.value)) {
        this.autocomplete = {
          name: '',
          type: 'Any'
        }
      }
      await this.fetchSuggestions()
    },
    async fetchSuggestions () {
      let result = []

      // Only run if timeout isn't after search is done
      if (this.input.length > 1) {
        result = await this.$cubic.get(`/warframe/v1/search?query=${this.input}&limit=3`)
      }
      // Found suggestions and input still matches result (may not if user types too fast)
      const regex = new RegExp(`^${this.input}`, 'i')
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
    complete (suggestion = {}) {
      // Take directly passed suggestion (when selecting from suggestion list)
      if (suggestion.name) {
        this.input = suggestion
        this.autocomplete = suggestion
        this.$store.commit('setSearchInput', suggestion)
        this.suggestions = []
      }
      // Take first suggestion in list
      else if (this.suggestions.length) {
        const first = this.suggestions[0]
        this.input = first
        this.autocomplete = first
        this.$store.commit('setSearchInput', first)
        this.suggestions = []
      }
    },

    /**
     * Visit link set by user input
     */
    query () {
      this.complete()
      button.methods.search.bind(this)()
    }
  }
}
</script>
