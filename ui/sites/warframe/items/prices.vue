<template>
  <div>
    <sidebar>
      <sidebar-search/>
    </sidebar>
    <app-content>
      <item-header/>
      <section>
        kek
      </section>
    </app-content>
  </div>
</template>



<script>
import appContent from 'src/app-content.vue'
import sidebar from 'src/components/ui/sidebar/sidebar.vue'
import sidebarSearch from 'src/components/ui/sidebar/search.vue'
import itemheader from 'src/components/items/header.vue'

export default {
  components: {
    'app-content': appContent,
    sidebar,
    'sidebar-search': sidebarSearch,
    'item-header': itemheader
  },

  beforeCreate () {
    this.$store.commit('showSidebar')
    this.$store.commit('keepSidebarVisible', true)
  },

  beforeMount () {
    // this.subscribe() // requires on-route change destructor
  },

  beforeDestroy () {
    this.$store.commit('hideSidebar')
    this.$store.commit('keepSidebarVisible', false)
  },

  asyncData ({ store, route }) {
    return store.dispatch('fetchItemData', route.params.item.replace(/(?:(\-)(?!\1))+/g, ' ').replace(/- /g, '-'))
  }
}
</script>



<style lang="scss" scoped>
@import '~src/styles/partials/importer';

</style>
