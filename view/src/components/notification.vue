<template>
  <span>top kek</span>
</template>


<script>
  export default {
    computed: {
      message() {
        return this.$store.state.notifications.active
      }
    },

    beforeMount() {
      this.listen()
    },

    methods: {
      listen() {
        this.$blitz.subscribe('/warframe/v1/notifications')
        this.$blitz.on('/warframe/v1/notifications', notification => {
          this.$store.commit('set', {
            key: 'notifications.active',
            data: 0
          })
        })
      },

      next() {

      },

      previous() {

      }
    }
  }
</script>
