<template>
  <div>
    <navigation>
      <router-link to="/developers" class="sub">Developers</router-link>
      <router-link to="/developers/api">API Docs</router-link>
      <router-link to="/developers/api">Contributing</router-link>
    </navigation>
    <sidebar>
      <sidebar-search/>
    </sidebar>
    <app-content>
      <div class="content-wrapper">
        <nav>
          <div class="links">
            <h3>Connecting</h3>
            <router-link to="/developers/api/dong" exact>Client packages</router-link>
            <router-link to="/developers/api/dong" exact>HTTP</router-link>
            <router-link to="/developers/api" exact>Socket.io</router-link>
            <router-link to="/developers/api/dong" exact>Authentication</router-link>

            <div v-for="group in groups" :key="group.name">
              <h3>{{ group.name }}</h3>
              <router-link v-for="endpoint in group.endpoints" :key="endpoint.route"
                           :to="`/developers/api/${group.name.replace(/ \/ /g, '-')}/${endpoint.name}`"
                           exact>
                {{ endpoint.name.toLowerCase().replace(/\b\w/g, l => l.toUpperCase()) }}
              </router-link>
            </div>
          </div>
        </nav>
        <section>
          {{ endpoint }}
        </section>
      </div>
    </app-content>
  </div>
</template>



<script>
import navigation from 'src/components/ui/nav.vue'
import appContent from 'src/app-content.vue'
import sidebar from 'src/components/ui/sidebar/sidebar.vue'
import sidebarSearch from 'src/components/ui/sidebar/search.vue'
const title = (str) => str.toLowerCase().replace(/\b\w/g, l => l.toUpperCase())

export default {
  components: {
    navigation,
    'app-content': appContent,
    sidebar,
    'sidebar-search': sidebarSearch
  },

  computed: {
    endpoints () {
      return this.$store.state.docs.endpoints
    },
    endpoint () {
      const group = this.$route.params.group
      const name = this.$route.params.name

      if (group) {
        return this.groups.find(g => g.name === group.replace(/\-/g, ' / '))
          .endpoints.find(e => e.name === name)
      }
    },
    groups () {
      const groups = [{ group: 'general', name: 'General', endpoints: [] }]

      for (const endpoint of this.endpoints) {
        const split = endpoint.route.split('/')

        // Sub group?
        if (split.length > 2) {
          const group = split[1]
          const name = title(`${split[1]}${split.length > 3 ? ` / ${split[3]}` : ''}`)
          const saved = groups.find(g => g.name === name)
          endpoint.name = endpoint.name === 'index' ? name.split(' / ')[1] : endpoint.name

          if (saved) {
            saved.endpoints.push(endpoint)
          } else {
            groups.push({
              group,
              name,
              endpoints: [endpoint]
            })
          }
        }
        // Main group
        else {
          groups.find(g => g.group === 'general').endpoints.push(endpoint)
        }
      }
      return groups
    }
  },

  async asyncData () {
    const endpoints = await this.$cubic.get('/docs/endpoints')
    this.$store.commit('setDocsEndpoints', endpoints)
  },

  storeModule: {
    name: 'docs',
    state: {
      endpoints: []
    },
    mutations: {
      setDocsEndpoints (state, endpoints) {
        state.endpoints = endpoints
      }
    }
  }
}
</script>



<style lang='scss' scoped>
@import '~src/styles/partials/importer';

.content-wrapper {
  display: flex;
  width: 100%;
  height: calc(100vh - 246px - 56px);
  min-height: 500px;

  nav {
    width: 25%;
    min-width: 290px;
    max-width: 400px;
    background: $color-bg;
    overflow-y: auto;
    @include shadow-1;

    .links {
      margin-top: 20px;
      margin-left: 85px;
      margin-right: 20px;
      margin-bottom: 50px;

      h3 {
        display: inline-block;
        margin-top: 30px;
        color: $color-font-body !important;
        text-transform: uppercase;
        font-size: 0.85em;
      }
      a {
        position: relative;
        left: -8px;
        display: block;
        padding: 5px 8px;
        font-size: 0.95em;

        &:first-of-type {
          margin-top: 5px;
        }
        &.router-link-active {
          @include gradient-background-dg($color-primary-subtle, $color-accent);
          border-radius: 2px;
          @include shadow-0;
        }
      }
    }
  }
  section {
    overflow-y: auto;
    padding: 45px 40px;
    margin: 0;
  }
}
</style>
