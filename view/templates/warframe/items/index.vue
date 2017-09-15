<template>

</template>

<script>
export default {
  beforeMount() {
    this.$store.commit('setActiveGame', 'warframe')
  }
}
</script>

<style lang="scss" scoped>
</style>
