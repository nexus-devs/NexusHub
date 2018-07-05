<template>
  <div>
    <sidebar>
      <sidebar-search/>
    </sidebar>
    <app-content>
      <ui-header>
        <h1>Imprint</h1>
      </ui-header>
      <div class="container">
        <section>
          <h2>NexusHub</h2>
          <p>
            Kilian Volb <br>
            Schillerstr. 13 <br>
            66497, Contwig <br>
            Germany
          </p>
        </section>
        <section>
          <h2>Contact</h2>
          <a href="mailto:contact@nexus-stats.com?Subject=Regarding%20NexusHub">contact@nexus-stats.com</a>
        </section>
      </div>
    </app-content>
  </div>
</template>



<script>
import appContent from 'src/app-content.vue'
import sidebar from 'src/components/ui/sidebar/sidebar.vue'
import sidebarSearch from 'src/components/ui/sidebar/search.vue'
import uiheader from 'src/components/ui/header.vue'

export default {
  components: {
    'app-content': appContent,
    sidebar,
    'sidebar-search': sidebarSearch,
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
