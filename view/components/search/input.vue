<template>
  <div class="col-b search">
    <div class="field">
      <label>Search</label><br>
      <input type="text" placeholder="Try: Soma Prime, Maim..." :value="input" @input="search"
       v-on:keydown.tab.prevent="complete" v-on:keyup.enter="query" ref="input">
      <span class="autocomplete">{{ autocomplete.name }}</span>
      <span class="autocomplete-type">{{ autotype }}</span>
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

  computed: {
    autotype() {
      return this.autocomplete.type
    }
  },

  methods: {
    /**
     * Dynamically get fuzzy search results from search endpoint and save in store
     */
    async search(event) {
      let result = []
      this.input = event.target.value
      this.$store.commit('setSearchDone', false)

      // Clear existing timeout (no search suggestions while typing fast)
      if (this.inputQueryDelay) {
        clearTimeout(this.inputQueryDelay)
      }

      // Update if autocomplete doesn't match input in entered letters
      if (!this.autocomplete.name.startsWith(this.input)) {
        this.autocomplete = {
          name: this.input,
          type: 'Any'
        }
        await this.fetchSuggestions(result)
      }

      // Only fetch new data when user is done typing to reduce server load.
      else {
        this.inputQueryDelay = setTimeout(() => {
          this.fetchSuggestions(result)
        }, 100)
      }
    },
    async fetchSuggestions(result) {
      // Only run if timeout isn't after search is done
      if (!this.$store.state.search.done) {
        if (this.input.length > 1) {
          result = await this.$blitz.get(`/warframe/v1/search?query=${this.input}&limit=3`)
          this.$store.commit('setSearchInput', {
            name: this.input,
            type: 'Any'
          })
        }
        // Found suggestions
        if (result.length) {
          let regex = new RegExp(`^${this.input}`, 'i')
          this.autocomplete = {
            name: result[0].name.replace(regex, this.input),
            content: result[0].content
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
      }
    },

    /**
     * Change input to full suggestion with correct capitalization
     */
    complete(suggestion = {}) {
      if (suggestion.name) {
        this.input = suggestion.name
        this.$store.commit('setSearchInput', suggestion)
        this.autocomplete = suggestion
        this.suggestions = []
      } else if (this.suggestions.length) {
        let actual = this.suggestions[0]
        this.input = actual.name
        this.$store.commit('setSearchInput', actual)
        this.autocomplete = actual
        this.suggestions = []
      }
    },

    /**
     * Visit link set by user input
     */
    query() {
      this.complete()
      button.methods.search.bind(this)()
    }
  },

  storeModule: {
    name: 'search',
    state: {
      input: {
        name: '',
        type: ''
      },
      done: false
    },
    mutations: {
      setSearchInput(state, input) {
        state.input = input
      },
      setSearchDone(state, bool) {
        state.done = bool
      }
    }
  },
}
</script>
