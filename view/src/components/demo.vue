<template>
  <div>
    Last request: {{request}}
  </div>
</template>

<script>
  export default {
    computed: {
      request() {
        return this.$store.state.value
      }
    },

    async asyncData({ store }, api) {
      let requests = await api.get('/warframe/v1/requests')
      store.commit('setValue', requests[0].user)
    },

    beforeMount() {
      this.setLatestRequests()
    },

    methods: {
      async setLatestRequests() {
        this.$blitz.subscribe('/warframe/v1/requests')
        let requests = await this.$blitz.get('/warframe/v1/requests')
        this.$store.commit('setValue', requests[0].user)
        this.$blitz.on('/warframe/v1/requests', request => {
          requests.pop()
          requests.unshift(request)
          this.$store.commit('setValue', requests[0].user)
        })
      }
    }
  }
</script>
