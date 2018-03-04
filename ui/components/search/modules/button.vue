<template>
  <a href="/warframe/search" class="button-container" v-on:click.stop.prevent="search">
    <div class="button-icon">
      <img src="/img/sidebar/search.svg" class="ico-16" alt="Search">
    </div>
    <button class="btn-outline" type="button">
      Search
    </button>
  </a>
</template>



<script>
export default {
  methods: {
    async search() {
      const input = this.$store.state.search.input
      const time = this.$store.state.time
      const rank = this.$store.state.rank

      if (input) {
        let path
        let query = {}

        // If full object is passed, assume suggestion is taken and webUrl to be included
        if (typeof input !== 'string') {
          path = input.webUrl
        } else {
          path = `/warframe/search?query=${input}`
        }

        // Add URL params based on state
        if (time.modified) {
          query.timestart = time.focus.start.time.valueOf()
          query.timeend = time.focus.end.time.valueOf()
        }
        if (rank.selected !== 'Any Rank') {
          query.rank = rank.selected
        }

        // View generated URL
        this.$router.push({
          path,
          query
        })

        // Close sidebar if open
        if (this.$store.state.sidebar.active) {
          this.$store.commit('toggleSidebar')
        }
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
