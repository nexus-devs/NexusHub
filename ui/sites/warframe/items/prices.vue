<template>
  <div>
    <navigation/>
    <sidebar>
      <sidebar-search/>
    </sidebar>
    <item-header/>
    <app-content>
      <section>
        <div class="container">
          <h2 class="sub">{{ item.name }} Prices</h2>

          <div class="row-margin">
            <price v-for="component in components" v-if="component.tradable" :key="component.name"
                   :component="component" class="col-b"/>
          </div>
          <filters/>
        </div>
      </section>
    </app-content>
  </div>
</template>



<script>
import navigation from 'src/components/ui/nav/warframe/items.vue'
import appContent from 'src/app-content.vue'
import sidebar from 'src/components/ui/sidebar/sidebar.vue'
import sidebarSearch from 'src/components/ui/sidebar/search.vue'
import itemHeader from 'src/components/items/header.vue'
import filters from 'src/components/items/price-filters.vue'
import price from 'src/components/items/price.vue'

export default {
  components: {
    navigation,
    appContent,
    sidebar,
    sidebarSearch,
    itemHeader,
    filters,
    price
  },

  computed: {
    item () {
      return this.$store.state.items.item
    },
    components () {
      return this.item.components
    }
  }
}
</script>



<style lang="scss" scoped>
@import '~src/styles/partials/importer';

/deep/ {
  .zoom-enter-active, .fade-leave-active {
    @include ease(0.4s);
  }
  .zoom-enter, .zoom-leave-to {
    transform: translateY(7px);
    transform-origin: top;
    opacity: 0.75;
  }
}

.app-content {
  background: $color-bg-darker;
}
</style>
