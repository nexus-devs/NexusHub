<template>
  <button class="search-button" @click.stop.prevent="search">
    <div class="icon">
      <img src="/img/sidebar/search.svg" class="ico-16" alt="Search">
    </div>
    <div class="text">
      Search
    </div>
  </button>
</template>



<script>
export default {
  props: ['path'],

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
          path = `${this.path}?input=${input}`
        }

        // View generated URL
        this.$router.push(path)
      }
    }
  }
}
</script>
