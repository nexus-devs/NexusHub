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
export default {
  methods: {
    async search() {
      const search = this.$store.state.search
      const time = this.$store.state.time
      const rank = this.$store.state.rank

      if (search.input.name && !search.done) {
        let path = `/warframe/${search.input.type.toLowerCase()}/${search.input.name.toLowerCase()}`.replace(/-/g, '--').replace(/ /g, '-')
        let query = {}

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
