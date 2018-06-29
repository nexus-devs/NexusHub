<template>
  <div>
    <sidebar>
      <sidebar-search/>
    </sidebar>
    <app-content>
      <item-header/>
      <overview v-if="$route.path.split('/').slice(-1)[0] === $route.params.item"/>
      <prices v-if="$route.path.includes('/prices')"/>
      <trade v-if="$route.path.includes('/trade')"/>
      <patchlogs v-if="$route.path.includes('/patchlogs')"/>
    </app-content>
  </div>
</template>



<script>
/**
 * This Vue component is a little different than others. We don't want the
 * navigation through sub-pages to trigger a full rebuild like when loading a
 * new page, as it would require redundant API fetches and add suboptimal page
 * transitions.
 *
 * Instead, we use this wrapper to swap the sub-page components dynamically
 * in-place.
 */
import appContent from 'src/app-content.vue'
import sidebar from 'src/components/ui/sidebar/sidebar.vue'
import sidebarSearch from 'src/components/ui/sidebar/search.vue'
import itemHeader from 'src/components/items/header.vue'
import prices from 'src/components/items/prices.vue'
import patchlogs from 'src/components/items/patchlogs.vue'
import overview from 'src/components/items/overview.vue'
import trade from 'src/components/items/trade.vue'

export default {
  components: {
    'app-content': appContent,
    sidebar,
    'sidebar-search': sidebarSearch,
    'item-header': itemHeader,
    prices,
    patchlogs,
    trade,
    overview
  },

  asyncData ({ store, route }) {
    return store.dispatch('fetchItemData', route.params.item.replace(/(?:(\-)(?!\1))+/g, ' ').replace(/- /g, '-'))
  },

  storeModule: {
    name: 'items',
    state: {
      item: { name: '' },
      selected: {
        component: 'Set',
        offerType: 'combined',
        regions: []
      },
      patchlogs: {
        current: 0,
        active: []
      }
    },

    mutations: {
      setItem (state, item) {
        item.tags = []
        item.tags.push(item.category)
        item.tags.push(item.name.includes(' Prime') ? 'Prime' : item.type)
        state.item = item
      },
      setItemComponent (state, component) {
        state.selected.component = component.trim()
      },
      setItemOfferType (state, type) {
        state.selected.offerType = type.toLowerCase()
      },
      setItemRegions (state, regions) {
        state.selected.regions = regions
      },
      addItemPatchlog (state, patchlog) {
        state.patchlogs.current = state.item.patchlogs.findIndex(p => p.name === patchlog.name)
      },
      removeItemPatchlog (state, patchlog) {
        const i = state.patchlogs.active.find(p => p.name === patchlog.name)

        if (i) {
          state.patchlogs.active.slice(i, 1)
          state.patchlogs.current = state.item.patchlogs.findIndex(p => p.name === patchlog.name)
        }
      }
    },

    actions: {
      async fetchItemData ({ commit, rootState }, name) {
        commit('setItem', await this.$cubic.get(`/warframe/v1/items/${name}`))
        commit('setItemComponent', 'Set')
      }
    }
  }
}
</script>



<style lang="scss">
</style>
