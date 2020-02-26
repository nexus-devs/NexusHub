<template>
  <div>
    <navigation />
    <app-content>
      <div class="content-wrapper">
        <sidebar-nav />
        <section>
          <!-- Manual Documentation -->
          <slot v-if="!endpoint" />

          <!-- Auto-generated endpoint -->
          <div v-else>
            <div class="flex">
              <h1>
                {{ endpoint.group || 'General' }} -
                {{ endpoint.name.toLowerCase().replace(/\b\w/g, l => l.toUpperCase()) }}
              </h1>
              <a :href="endpoint.sourceUrl" target="_blank" class="source">
                <img src="/img/developers/github.svg" class="ico-20" alt="Source Code on Github">
                <span>View source code.</span>
              </a>
            </div>

            <!-- Basic Info -->
            <a :href="`https://api.nexushub.co${endpoint.route}`" target="_blank" class="btn-subtle active route">
              <div class="verb">{{ endpoint.method }}</div>
              {{ endpoint.route }}
            </a>
            <div v-if="endpoint.pubsub" class="btn-subtle active">
              Pub/Sub ✔
            </div>
            <div class="btn-subtle active">
              Cache: {{ endpoint.cache ? endpoint.cache.duration : 60 }}s
            </div>
            <div class="btn-subtle active">
              Rate Limit: {{ endpoint.limit ? endpoint.limit.maxInInterval : 20 }}
              requests per
              {{ endpoint.limit ? endpoint.limit.interval / 1000 : 5 }}s
            </div>
            <div class="btn-subtle active">
              Authorization: {{ endpoint.scope || 'none' }}
            </div>
            <p v-if="endpoint.description" class="description">
              {{ endpoint.description }}
            </p>

            <!-- Request/Response -->
            <div v-if="endpoint.method !== 'GET'" class="sub-section">
              <h2>Request Format</h2>
              <pre v-highlightjs="stringify(endpoint.request.body)">
                <code class="javascript" />
              </pre>
            </div>
            <div v-if="endpoint.response || example" class="sub-section">
              <div class="flex">
                <h2>Response Format</h2>
                <div v-if="!endpoint.scope && endpoint.response" class="btn-outline" @click="toggleExample">
                  Live Example
                </div>
              </div>
              <pre v-highlightjs="stringify(example) || stringify(endpoint.response)">
                <code class="javascript" />
              </pre>
            </div>

            <!-- Params -->
            <div v-if="endpoint.query.length" class="sub-section">
              <h2>Query Params</h2>
              <div v-for="query in endpoint.query" :key="query.name">
                <h3>{{ query.name }}{{ query.required ? ' (required)' : '' }}</h3>
                <p v-if="query.description">
                  {{ query.description }}
                </p>
                <div v-if="query.default !== undefined">
                  <h4>Default</h4>
                  <pre v-highlightjs="typeof query.default === 'string' && (query.default.startsWith('function') || query.default.startsWith('() => '))
                    ? query.default : stringify(query.default)"
                  >
                    <code class="javascript" />
                  </pre>
                </div>
              </div>
            </div>

            <ad name="developers-api-article" />
          </div>
        </section>
      </div>
    </app-content>
  </div>
</template>



<script>
import Vue from 'vue'
import VueHighlightJS from 'vue-highlightjs'
import ad from 'src/components/ads/nitroAds.vue'
import appContent from 'src/app-content.vue'
import meta from 'src/components/seo/meta.js'
import navigation from 'src/components/ui/nav/developers.vue'
import sidebarNav from 'src/components/developers/sidebar.vue'
const title = (str) => str.toLowerCase().replace(/\b\w/g, l => l.toUpperCase())
const replacer = (key, value) => {
  // if we get a function, give us the code for that function
  if (typeof value === 'string' && value.startsWith('function ')) {
    return value.split(' ')[1].replace('()', '')
  }
  return value
}

export default {
  components: {
    ad,
    navigation,
    appContent,
    sidebarNav
  },

  data () {
    return {
      example: undefined
    }
  },

  computed: {
    endpoints () {
      return this.$store.state.docs.endpoints
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

          // Change some endpoint data
          endpoint.name = endpoint.name === 'index' ? (name.split(' / ').pop()).toLowerCase() : endpoint.name
          endpoint.group = name

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
      this.$store.commit('setDocsGroups', groups)
      return groups
    },
    endpoint () {
      const group = this.$route.params.group
      const name = this.$route.params.name
      const groups = this.groups

      // Reset active examples
      /* eslint vue/no-side-effects-in-computed-properties: "off" */
      this.example = undefined

      if (group && groups) {
        return groups.find(g => g.name.replace(/\-/g, ' / ') === group.replace(/\-/g, ' / '))
          .endpoints.find(e => e.name === name)
      }
      return
    }
  },

  watch: {
    $route () {
      // Toggle example right away if no response is given
      if (this.endpoint && !this.endpoint.response) {
        this.toggleExample()
      }
    }
  },

  beforeMount () {
    Vue.use(VueHighlightJS)
  },

  created () {
    // Toggle example right away if no response i=s given
    if (this.endpoint && !this.endpoint.response) {
      this.toggleExample()
    }
  },

  methods: {
    async toggleExample () {
      const e = this.endpoint

      if (this.example) {
        this.example = undefined
      } else {
        if (e.method === 'GET') {
          const res = await this.$cubic.get(e.request ? e.request.url : e.route)
          this.example = Array.isArray(res) ? res.slice(0, 1).concat(['// Truncated response']) : res
        } else {
          const res = await this.$cubic[e.method.toLowerCase()](e.request.url || e.route, e.request.body)
          this.example = Array.isArray(res) ? res.slice(0, 1).concat(['// Truncated response']) : res
        }
      }
    },
    stringify (obj) {
      const stringified = JSON.stringify(obj, replacer, 2)
      return stringified ? stringified.replace(/"Number"/g, 'Number')
        .replace(/"String"/g, 'String')
        .replace(/"Boolean"/g, 'Boolean')
        : stringified
    }
  },

  head: {
    title: 'NexusHub · API Documentation',
    meta: meta({
      title: 'NexusHub API Documentation',
      description: 'Find all resources required to build your own application with data from NexusHub.'
    })
  }
}
</script>



<style lang='scss' scoped>
@import '~src/styles/partials/importer';

/deep/ .zoom-enter-active, .fade-leave-active {
  transition: none;
  transform: scale(1);
}
/deep/ .content-wrapper {
  display: flex;
  width: 100%;
  height: calc(100vh - 56px);
  min-height: 500px;

  section {
    overflow-y: auto;
    padding: 70px 80px;
    margin: 0;

    h1 {
      margin-bottom: 8px;
    }
    h2 {
      margin-top: 60px;
      margin-bottom: 10px;
    }
    h1 + a {
      margin-left: 20px;
      margin-bottom: 8px;
      @include ie;
      color: white !important;
    }
    h3 {
      margin-top: 40px;
      font-family: 'Consolas', Monospace;
    }
    h3 + p {
      margin-top: 0;
      padding-top: 0;
      margin-bottom: 10px;
    }
    h4 {
      font-family: 'Roboto';
      font-size: 0.85em;
      font-weight: 400;
      letter-spacing: 0.2;
      margin-top: 15px;
    }
    .flex {
      display: flex;
      align-items: center;
      max-width: 800px;
    }
    .btn-outline {
      margin-top: 60px;
      margin-bottom: 2px;
      margin-right: 0;
      margin-left: auto;
      border-radius: 2px;

      &:before {
        border-radius: 2px;
      }
    }
    .verb {
      display: inline-block;
      vertical-align: middle;
      font-family: 'Consolas', Monospace;
      color: $color-primary-subtle;
      font-weight: 600;
      margin-right: 3px;
    }
    .btn-subtle {
      text-transform: none;
      pointer-events: none;
      font-size: 0.85em;

      &:not(.route) {
        background: $color-bg-darker;
      }
    }
    .route {
      display: inline-block;
      vertical-align: middle;
      margin-right: 15px;
      font-size: 1em;
      font-family: 'Consolas', Monospace;
      padding: 7px 12px;
      pointer-events: all;
    }
    .description {
      padding-top: 20px;
      border-top: 1px solid $color-subtle-dark;
      margin-top: 40px;
    }
    code {
      max-width: 770px;
    }
    pre + p {
      margin-bottom: 60px;
    }
  }
}
</style>
