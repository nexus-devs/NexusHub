<template>
  <div class="button-container" v-on:click.stop="search">
    <div class="button-icon">
      <img src="/img/sidebar/search.svg" class="ico-16" alt="Search">
    </div>
    <button class="btn-outline" type="button">
      Search
    </button>
  </div>
</template>



<script>
import items from 'src/templates/warframe/items/index.vue'

// Helper function for &/? conditional in params
const add = (url, query) => {
  if (url.includes('?')) {
    url += `&${query}`
  } else {
    url += `?${query}`
  }
  return url
}

export default {
  methods: {
    async search() {
      const search = this.$store.state.search
      const time = this.$store.state.time
      const rank = this.$store.state.rank

      if (search.input.name && !search.done) {
        let url = `/warframe/${search.input.type.toLowerCase()}/${search.input.name}`

        // Add URL params based on state
        if (time.modified) {
          const timequery = `timestart=${time.focus.start.time.unix()}&timeend=${time.focus.end.time.unix()}`
          url = add(url, timequery)
        }
        if (rank.selected !== 'Any Rank') {
          const rankquery = `rank=${rank.selected}`
          url = add(url, rankquery)
        }

        // View generated URL
        this.$router.push(url)

        // Toggle sidebar if open
        if (this.$store.state.sidebar.active) {
          this.$store.commit('toggleSidebar')
        }

        // Remove input from state (prevents search without further input)
        this.$store.commit('setSearchDone', true)
      }
    }
  }
}
</script>



<style lang="scss" scoped>
.button-container {
  position: absolute;
  right: 15px;
}
.button-icon {
  display: none; // optional
}
</style>
