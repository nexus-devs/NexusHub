<template>
  <module>
    <template slot="header">
      <h3>Description</h3>
    </template>
    <template slot="body">
      <p>{{ item.description }}</p>
    </template>
  </module>
</template>



<script>
import module from 'src/components/ui/module.vue'

export default {
  components: {
    module
  },

  computed: {
    item () {
      return this.$store.state.items.item
    }
  }
}
</script>



<style lang="scss" scoped>
@import '~src/styles/partials/importer';

</style>
