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

    asyncData({ store }) {
      return store.commit('setValue', '什么他妈的你他妈的刚才说我')
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
