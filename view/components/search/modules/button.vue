<template>
  <div class="button-container" v-on:click="search">
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

export default {
  methods: {
    async search() {
      const search = this.$store.state.search
      const time = this.$store.state.time
      const rank = this.$store.state.rank

      if (search.input) {
        let params = {}
        let type = search.input.type.toLowerCase()
        this.$progress.start()

        // Adjust params based on input state
        if (time.modified) {
          params.timestart = time.focus.start.time.unix()
          params.timeend = time.focus.end.time.unix()
        }
        if (rank.selected !== 'Any Rank') {
          params.rank = rank.selected
        }

        // Visit generated router view
        this.$router.push({
          path: `/warframe/${type}/${search.input.name}`,
          params
        })

        // Toggle sidebar if open
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
