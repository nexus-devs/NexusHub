<template>
  <div class="search">
    <navigation></navigation>
    <sidebar>
      <sidebar-search></sidebar-search>
    </sidebar>
    <app-content>
      <ui-header>
        <search></search>
      </ui-header>
    </app-content>
  </div>
</template>

<script>
import appContent from 'src/app-content.vue'
import sidebar from 'src/components/ui/sidebar.vue'
import sidebarSearch from 'src/components/ui/sidebar/search.vue'
import search from 'src/components/search/input.vue'
import navigation from 'src/components/ui/nav.vue'
import uiheader from 'src/components/ui/header.vue'

export default {
  components: {
    'app-content': appContent,
    sidebar,
    'sidebar-search': sidebarSearch,
    search,
    navigation,
    'ui-header': uiheader
  },
  mounted() {
    console.log(this.$route.query)

  }
}
</script>

<style lang="scss" scoped>
@import '~src/styles/partials/importer';

header {
  /deep/ {
    .field {
      position: relative;
      padding: 15px;
      border-radius: 2px;
      background: $colorBackgroundDark;

      label {
        font-size: 0.9em;
        color: white;
      }
      input {
        position: relative;
        z-index: 1;
        width: 100%;
        margin-top: 5px;
        color: white;
        font-size: 1.1em;
      }
      .autocomplete {
        position: absolute;
        left: 15px;
        margin-top: 5px;
        font-size: 1.1em;
      }
      .autocomplete-type {
        display: none;
      }
    }

    // Disable suggestions here (we'll have them below)
    .tools {
      display: none;
    }
  }
}
</style>
