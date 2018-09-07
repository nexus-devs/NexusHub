<template>
  <nav>
    <div class="links">
      <h3>Connecting</h3>
      <router-link to="/developers/api/dong" exact>Client packages</router-link>
      <router-link to="/developers/api/dong" exact>HTTP</router-link>
      <router-link to="/developers/api" exact>Socket.io</router-link>
      <router-link to="/developers/api/dong" exact>Authentication</router-link>

      <div v-for="group in groups" :key="group.name">
        <h3>{{ group.name }}</h3>
        <router-link v-for="endpoint in group.endpoints" :key="endpoint.route + endpoint.method"
                     :to="`/developers/api/${group.name.replace(/ \/ /g, '-')}/${endpoint.name}`"
                     exact>
          {{ endpoint.name }}
        </router-link>
      </div>
    </div>
  </nav>
</template>



<script>
const reviver = (key, value) => {
  if (typeof key === 'string' && key.indexOf('function ') === 0) {
    const functionTemplate = `(${value})`
    return functionTemplate
  }
  return value
}

export default {
  computed: {
    endpoints () {
      return this.$store.state.docs.endpoints
    },
    groups () {
      return this.$store.state.docs.groups
    }
  },

  async asyncData () {
    const endpoints = await this.$cubic.get('/docs/endpoints')
    this.$store.commit('setDocsEndpoints', JSON.parse(endpoints, reviver))
  },

  storeModule: {
    name: 'docs',
    state: {
      endpoints: [],
      groups: []
    },
    mutations: {
      setDocsEndpoints (state, endpoints) {
        state.endpoints = endpoints
      },
      setDocsGroups (state, groups) {
        state.groups = groups
      }
    }
  }
}
</script>



<style lang="scss" scoped>
@import '~src/styles/partials/importer';

nav {
  width: 25%;
  min-width: 320px;
  max-width: 350px;
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
      margin-top: 40px;
      color: $color-font-body !important;
      text-transform: uppercase;
      font-size: 0.75em;
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
</style>
