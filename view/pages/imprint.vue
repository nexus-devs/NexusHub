<template>
  <div>
    <navigation></navigation>
    <sidebar>
      <sidebar-search></sidebar-search>
    </sidebar>
    <ui-header>
      <h1>Imprint</h1>
    </ui-header>
    <div class="g-ct">
      <section>
        <h2>Nexus-Stats</h2>
        <p>
          Kilian Volb <br>
          Schillerstr. 13 <br>
          66497, Contwig <br>
          Germany
        </p>
      </section>
      <section>
        <h2>Contact</h2>
        <a href="mailto:contact@nexus-stats.com?Subject=Regarding%20Nexus-Stats">contact@nexus-stats.com</a>
      </section>
    </div>
  </div>
</template>



<script>
import sidebar from 'src/components/ui/sidebar.vue'
import sidebarSearch from 'src/components/ui/sidebar/search.vue'
import navigation from 'src/components/ui/nav.vue'
import uiheader from 'src/components/ui/header.vue'

export default {
  components: {
    sidebar,
    'sidebar-search': sidebarSearch,
    navigation,
    'ui-header': uiheader
  }
}
</script>



<style lang="scss" scoped>
@import '~src/styles/partials/importer';

p {
  font-size: 1.05em;
}
a {
  margin-top: 15px;
}
</style>
