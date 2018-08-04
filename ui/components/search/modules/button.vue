<template>
  <a href="/warframe/search" class="button-container" @click.stop.prevent="search">
    <div class="button-icon">
      <img src="/img/sidebar/search.svg" class="ico-16" alt="Search">
    </div>
    <button type="button">
      Search
    </button>
  </a>
</template>



<script>
export default {
  methods: {
    async search () {
      const input = this.$store.state.search.input

      if (input) {
        let path

        // If full object is passed, assume suggestion is taken and webUrl to be included
        if (typeof input !== 'string') {
          const route = this.$route.path
          const item = this.$route.params.item

          // Stay on current sub-page if we're on an item page
          if (this.$route.fullPath.startsWith('/warframe/items/')) {
            path = `${input.webUrl}${route.split(item)[1]}`
            path = path.endsWith('//') ? path.slice(0, -1) : path
          } else {
            path = input.webUrl
          }
        } else {
          path = `/warframe/search?input=${input}`
        }

        // View generated URL
        this.$router.push(path)

        // Close sidebar if open
        if (this.$store.state.sidebar.active) {
          this.$store.commit('toggleSidebar')
          this.$store.commit('hideSidebar')
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
