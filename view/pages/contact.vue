<template>
  <div>
    <navigation></navigation>
    <sidebar>
      <sidebar-search></sidebar-search>
    </sidebar>
    <ui-header>
      <h1>Contact</h1>
      <p>Wanna talk with us, or just feeling lonely? Hit us up on one of the channels below!</p>
    </ui-header>
    <div class="g-ct">
      <section>
          <h2>Discord</h2>
          <p>
            The easiest way to reach us is through Discord. Just join our server
            and PM one of the devs.
          </p>
          <div class="row">
            <a href="https://discord.gg/TCxe6P4" target="_blank" class="btn">Join us on Discord</a>
          </div>
      </section>
      <section>
        <h2>E-Mail</h2>
        <p>
          If you rather stick with traditional means of communication, you can also send us a mail!
        </p>
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
.btn {
  white-space: nowrap;
}
</style>
