<template>
  <div class="col-b search">
    <div class="field">
      <label>Search</label><br />
      <input type="text" placeholder="Items, Players.." v-model="input"
                                                        v-on:keyup="search"
                                                        v-on:keydown.tab.prevent="complete"
                                                        v-on:keydown.enter="complete">
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
export default {
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
      let triggers = ' abcdefghijklmnopqrstuvwxyz0123456789-_.[]'.split('')
      triggers.push('backspace')

      if (triggers.includes(event.key.toLowerCase())) {
        if (this.input.length > 1) {
          result = await this.$blitz.get(`/warframe/v1/search?query=${this.input}&limit=4`)
        }
        if (result.length) {
          let regex = new RegExp(`^${this.input}`, 'i')
          this.autocomplete = {
            name: result[0].name.replace(regex, this.input),
            content: result[0].content
          }
          this.suggestions = result
        } else {
          this.autocomplete = {
            name: '',
            type: ''
          }
          this.suggestions = []
        }
      }
    },
    /**
     * Change input to full suggestion with correct capitalization
     */
    complete(suggestion) {
      if (suggestion.name) {
        this.input = suggestion.name
        this.autocomplete = suggestion
        this.suggestions = []
      }
      else if (this.suggestions.length) {
        let actual = this.suggestions[0]
        this.input = actual.name
        this.autocomplete = actual
        this.suggestions = []
      }
    }
  }
}
</script>
