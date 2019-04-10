<template>
  <div class="search">
    <div class="field">
      <label>Search</label>
      <input ref="input" :placeholder="placeholder || 'Try: Frost Prime, Maiming Strike...'" :value="input.name || input" type="text"
             @input="fetch" @keydown.tab.prevent="complete" @keyup.enter="search">
      <span class="autocomplete">{{ autocomplete.name }}</span>
      <span class="autocomplete-type">{{ autocomplete.category }}</span>
    </div>
    <div class="tools">
      <div v-for="suggestion in suggestions" :key="suggestion.uniqueName" class="suggestion" @click="search(suggestion)">
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
export default {
  props: ['placeholder', 'focus'],

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
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)

    if (this.focus && !isMobile) {
      this.$refs.input.focus()
    }
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
    async fetch (event) {
      this.input = event.target.value
      this.$store.commit('setSearchInput', event.target.value)

      // Update if autocomplete doesn't match input in entered letters
      if (!this.autocomplete.name.startsWith(event.target.value)) {
        this.autocomplete = {
          name: '',
          category: 'Any'
        }
      }
      await this.fetchSuggestions()
    },
    async fetchSuggestions () {
      let result = []

      // Only run if timeout isn't after search is done
      if (this.input.length > 1) {
        result = await this.$cubic.get(`/warframe/v1/suggestions?query=${this.input}&limit=3`)
      }

      // Found suggestions and input still matches result (may not if user types too fast)
      const regex = new RegExp(`^${this.input}`, 'i')
      if (result.length && result[0].name.replace(regex, this.input).startsWith(this.input)) {
        this.autocomplete = {
          name: result[0].name.replace(regex, this.input),
          category: result[0].category
        }
        this.suggestions = result
      }

      // No suggestion -> Suggest 'Any' for custom search
      else {
        this.autocomplete = {
          name: '',
          category: 'Any'
        }
        this.suggestions = []
      }
      // Input cleared again
      if (this.input.length < 1) {
        this.autocomplete = {
          name: '',
          category: ''
        }
      }
    },

    /**
     * Change input to full suggestion with correct capitalization
     */
    complete (suggestion = {}) {
      if (this.autocomplete.name) {
        this.input = this.autocomplete.name
      }
    },

    /**
     * Perform actual search based on selected input
     */
    search (suggestion = {}) {
      if (suggestion.name) {
        this.input = ''
        this.autocomplete = {
          name: '',
          category: ''
        }
        this.query(suggestion.webUrl)
      }
      if (this.suggestions.length) {
        this.input = ''
        this.autocomplete = {
          name: '',
          category: ''
        }
        this.query(this.suggestions[0].webUrl)
        this.suggestions = []
      } else {
        this.$router.push(`/warframe/search?input=${this.input}`)
      }
    },

    /**
     * Get to new page. If we're on a item sub-page, we'll stay there when
     * switching as well.
     */
    query (url) {
      let path
      const route = this.$route.path
      const item = this.$route.params.item

      if (this.$route.fullPath.startsWith('/warframe/items/')) {
        path = `${url}${route.split(item)[1]}`
        path = path.endsWith('//') ? path.slice(0, -1) : path
      } else {
        path = url
      }

      this.$router.push(path)
    }
  }
}
</script>
