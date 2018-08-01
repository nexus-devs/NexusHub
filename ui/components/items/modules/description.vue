<template>
  <module>
    <template slot="header">
      <img src="/img/warframe/ui/description.svg" alt="Description" class="ico-h-16">
      <h3>Description</h3>
    </template>
    <template slot="body">
      <p>{{ item.description }}</p>
    </template>
    <template slot="footer">
      <a :href="item.wikiaUrl" target="_blank">
        View on Wikia
        <img src="/img/ui/arrow-right.svg" alt="View full patch notes" class="ico-20">
      </a>
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
