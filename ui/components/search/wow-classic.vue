<template>
  <div class="search">
    <div class="field">
      <label>Search</label>
      <input ref="input" :placeholder="placeholder || 'Try: Black Lotus, Devilsaur Leather...'" :value="input.name || input" type="text"
             @input="fetch" @keydown.tab.prevent.exact="complete" @keyup.enter="search" @keydown.shift.stop
      >
      <span class="autocomplete">{{ autocomplete.name }}</span>
      <span v-if="autocomplete.category" class="autocomplete-type">
        {{ autocomplete.category === 'Any' ? 'Search anywhere' : `Found in ${autocomplete.category}` }}
      </span>
    </div>
    <div class="tools">
      <div v-for="suggestion in suggestions" :key="suggestion.itemId" class="suggestion" @click="search(suggestion)">
        <div class="ico-36">
          <img :src="suggestion.imgUrl" :alt="suggestion.name">
          <img :src="suggestion.imgUrl" :alt="suggestion.name" class="backdrop">
        </div>
        <div class="suggestion-main">
          <span class="suggestion-name">{{ suggestion.name }}</span>
          <span class="suggestion-type">{{ suggestion.type }}</span>
        </div>
      </div>
    </div>
    <slot />
  </div>
</template>



<script>
import storeModule from 'src/store/search.js'

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

  computed: {
    activeServer () {
      return this.$store.state.servers.activeServer
    }
  },

  mounted () {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)

    if (this.focus && !isMobile) {
      this.$refs.input.focus()
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
        const query = encodeURIComponent(this.input)
        result = await this.$cubic.get(`/wow-classic/v1/search/suggestions?query=${query}&limit=4`)
      }

      // Found suggestions and input still matches result (may not if user types too fast)
      const regex = new RegExp(`^${this.input}`, 'i')
      if (result.length && result[0].name.replace(regex, this.input).startsWith(this.input)) {
        this.autocomplete = {
          name: result[0].name.replace(regex, this.input),
          category: result[0].type
        }
        for (const r of result) r.imgUrl = r.imgUrl.replace('/large/', '/medium/') // 36x36 image instead of large
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
        this.query(suggestion.uniqueName)
        this.suggestions = []
      } else if (this.suggestions.length) {
        this.input = ''
        this.autocomplete = {
          name: '',
          category: ''
        }
        this.query(this.suggestions[0].uniqueName)
        this.suggestions = []
      } else {
        this.$router.push(`/wow-classic/search/${this.activeServer.slug}?input=${this.input}`)
      }
    },

    /**
     * Get to new page. If we're on a item sub-page, we'll stay there when
     * switching as well.
     */
    query (itemId) {
      this.$router.push(`/wow-classic/items/${this.activeServer.slug ? `${this.activeServer.slug}/` : ''}${itemId}`)
    }
  },

  storeModule
}
</script>
