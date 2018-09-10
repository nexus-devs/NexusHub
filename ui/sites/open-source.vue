<template>
  <div>
    <navigation/>
    <sidebar>
      <sidebar-search/>
    </sidebar>
    <app-content>
      <ui-header>
        <h1>Open-Source</h1>
        <p>
          NexusHub is completely open source. That means you  can see exactly
          how the data we're displaying is gathered, but even more importantly: you
          can shape this platform however you want it to be!
        </p>
      </ui-header>
      <div class="container">
        <section>
          <h2>Github</h2>
          <p>
            Explore our source code or report any bugs you find here. If you're
            bored, we always welcome contributions!
          </p>
          <a href="http://github.com/nexus-devs/nexus-stats" target="_blank">www.github.com/nexus-devs/nexus-stats</a>
        </section>
        <section>
          <h2>Contributing</h2>
          <p>
            If there's anything about NexusHub that you'd like to change,
            you can actually just do it. To keep everything organized, please
            see our <router-link to="/contribute">contribution guidelines</router-link>
            first.
          </p>
        </section>
        <section>
          <h2>Responsible Disclosure</h2>
          <p>
            If you find any critical vulnerabilities, please send us a private
            mail instead of opening issues on Github. We can't offer you bounties
            like the big guys, but we'll never forget your help for helping us
            make this platform more secure.
          </p>
          <br>
          <a href="mailto:devs@nexus-stats.com?Subject=System%20Vulnerability%20Inquiry">devs@nexus-stats.com</a>
        </section>
      </div>
    </app-content>
  </div>
</template>



<script>
import navigation from 'src/components/ui/nav/warframe/general.vue'
import appContent from 'src/app-content.vue'
import sidebar from 'src/components/ui/sidebar/sidebar.vue'
import sidebarSearch from 'src/components/ui/sidebar/search.vue'
import uiheader from 'src/components/ui/header.vue'

export default {
  components: {
    navigation,
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
