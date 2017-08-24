<template>
  <div class="row">
    <h1>Hi!</h1>
    <demo></demo>
  </div>
</template>

<script>
  import demo from "src/components/demo.vue"
  export default {
    components: {
      demo
    }
  }
</script>

<style lang="scss" scoped>
  h1 {
      font-weight: 200;
      font-size: 4em;
  }
  .row {
      height: 100vh;
      flex-direction: column;
      align-items: center;
      justify-content: center;
  }
</style>
