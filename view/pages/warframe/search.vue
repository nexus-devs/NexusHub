<template>
  <div class="search">
    <navigation></navigation>
    <sidebar>
      <sidebar-search></sidebar-search>
    </sidebar>
    <app-content>
      <ui-header>
        <search></search>
        <div slot="sub" class="search-types">
          <div class="g-ct">
            <a class="active">All</a>
            <a>Items</a>
            <a>Players</a>
          </div>
        </div>
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
  padding: 30px 0 0 0 !important;

  .search-types {
    display: flex;
    margin-top: 40px;
    @include gradient-background-dg($color-bg-transparent-1, $color-bg-transparent-2);
    width: 100%;

    .g-ct {
      display: flex;
      padding-top: 0;
      padding-bottom: 0;
    }
    a {
      cursor: pointer;
      padding: 12px 25px;
      color: $colorFontBody !important;

      &.active {
        color: white !important;
        font-weight: 600;
        border-bottom: 2px solid $colorPrimary;
      }
    }
  }

  /deep/ {
    .g-ct {
      padding-bottom: 0 !important;
    }
    .field {
      position: relative;
      padding: 15px;
      border-radius: 2px;
      background: $colorBackgroundDark;
      @include shadow-0;

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
      }
      .autocomplete {
        position: absolute;
        left: 15px;
        margin-top: 5px;
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
