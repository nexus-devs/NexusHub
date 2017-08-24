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
      console.log('triggured')
      return store.dispatch('setValue', '什么他妈的你他妈的刚才说我？')
    },

    beforeMount() {
      this.setValue('kketeteskekkeke')
    },

    methods: {
      setValue(value) {
        this.$store.dispatch('setValue', value)
      }
    }
  }
</script>
