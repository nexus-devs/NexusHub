<template>
  <div class="search">
    <navigation />
    <app-content>
      <div class="search-input">
        <div class="container">
          <div class="search">
            <div class="field">
              <input ref="input" type="text" placeholder="Try: Black Lotus, Devils..." @input="search">
              <img src="/img/ui/search.svg" alt="Search" class="search-ico ico-h-16">
            </div>
          </div>
          <div class="search-filters">
            <div class="search-filters-label interactive" @click="toggleFilters">
              <img src="/img/ui/filter.svg" alt="Filter" class="ico-h-20">
              <span>Filters</span>
            </div>
          </div>
        </div>
      </div>
      <div ref="filters" :class="{ expanded: filtersExpanded }" class="search-filters-options">
        <div class="container">
          Sorry, no filters here yet. Look around again soon™!
        </div>
      </div>
      <section :class="{ expanded: filtersExpanded }" class="results">
        <div class="results-background-fix" />
        <div class="container">
          <div class="results-headline">
            <span>Results for</span>
            <h1>{{ input }}</h1>
          </div>
          <ad name="wow-classic-serp-filter" />
          <results-group :type="'items'" />
          <ad name="wow-classic-serp-results" />
        </div>
      </section>
    </app-content>
  </div>
</template>



<script>
import ad from 'src/components/ads/nitroAds.vue'
import appContent from 'src/app-content.vue'
import meta from 'src/components/seo/meta.js'
import navigation from 'src/components/ui/nav/wow-classic.vue'
import resultsGroup from 'src/components/search/results-wow-classic/results-group.vue'
import search from 'src/components/search/wow-classic.vue'
import storeModule from 'src/store/wow-classic/serp.js'
let ongoing = setTimeout(() => {})

export default {
  components: {
    ad,
    navigation,
    appContent,
    // eslint-disable-next-line vue/no-unused-components
    search, // Just load the store module
    resultsGroup
  },

  async asyncData ({ store, route }) {
    const slug = route.params.slug
    const input = route.query.input
    await store.dispatch('fetchSerpResults', { input, slug })
  },

  data () {
    return {
      filtersExpanded: false
    }
  },

  computed: {
    results () {
      return this.$store.state.serp.results
    },
    input () {
      return this.$store.state.search.input
    }
  },

  mounted () {
    this.filtersHeight = this.$refs.filters.offsetHeight
    this.$refs.input.focus()
    for (let i = 0; i < this.$store.state.serp.activeFilters.length; i++) {
      this.$store.commit('popSerpActiveFilter')
    }
  },

  beforeCreate () {
    this.$store.dispatch('applyInputQuery', this.$route)
  },

  beforeDestroy () {
    for (let i = 0; i < this.$store.state.serp.activeFilters.length; i++) {
      this.$store.commit('popSerpActiveFilter')
    }
  },

  methods: {
    async search (event) {
      this.$store.commit('setSearchInput', event.target.value)

      // Wait for 200ms before performing request. If new characters are typed
      // within those 200ms, then cancel all old requests to reduce unnecessary
      // bandwidth usage.
      clearTimeout(ongoing)
      ongoing = setTimeout(() => {
        this.$store.dispatch('fetchSerpResults', event.target.value)
        window.history.pushState({}, null, `/wow-classic/search?input=${event.target.value}`)
      }, 200)
    },
    toggleFilters () {
      this.filtersExpanded = !this.filtersExpanded
    }
  },

  storeModule,

  head () {
    return {
      title: `${this.input} · NexusHub Search`,
      meta: meta({
        title: `${this.input} Search Results on NexusHub`,
        description: this.results.length ? `Find ${this.results.length} matches for ${this.input}. ${this.results[0].name}` : 'No search results :(',
        image: this.results.length ? `${this.results[0].imgUrl}` : 'https://nexushub.co/img/brand/og-banner-wow-classic.jpg'
      })
    }
  }
}
</script>



<style lang="scss" scoped>
@import '~src/styles/partials/wow-classic/importer';

.ad-unit, .blocked-unit { // For whatever reason first of type doesnt work here
  &:not(:last-of-type) {
    margin: 0;
  }
}

.search-input {
  position: relative;
  z-index: 1;
  border-bottom: 1px solid $color-subtle-dark;

  @media (max-width: $breakpoint-m) {
    border-top: none;
  }

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: $breakpoint-s) {
      // wrap category
      display: block;
      margin-top: 30px;
    }
  }

  .field {
    position: relative;
    margin: 24px 0 20px;
    padding: 10px;
    max-width: 250px;
    border-radius: 2px;
    background: $color-bg-darker;
    @include ease(0.35s);

    @media (max-width: $breakpoint-m) {
      margin: 20px 0 14px;
    }
    @media (max-width: $breakpoint-s) {
      margin: 24px 0;
      max-width: 100%;
    }
    input {
      position: relative;
      z-index: 1;
      width: 100%;
      color: white;
      margin-left: 25px;
    }
  }

  .search-ico {
    position: absolute;
    top: 11px;
  }

  .search-filters {
    .search-filters-label {
      display: flex;
      align-items: center;
      @include uppercase;
      font-size: 0.85em;
      color: white;

      @media (max-width: $breakpoint-s) {
        position: absolute;
        right: 50px;
        top: 0;
        z-index: 1;
      }
      @media (max-width: $breakpoint-xs) {
        position: absolute;
        right: 30px;
        top: 0;
        z-index: 1;
      }
    }
  }
}

.search-filters-options {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  height: 142px;
  background: $color-bg-darker;

  .container {
    opacity: 0;
    @include ease(0.35s);
    transition-delay: 0.1s;
  }
  &.expanded {
    .container {
      opacity: 1;
    }
  }
}

.results {
  position: relative;
  padding-top: 30px;
  padding-bottom: 0;
  margin-top: 0;
  margin-bottom: 0;
  transform: translateY(-142px);
  will-change: transform margin-bottom;
  @include ease-out(0.35s);

  &.expanded {
    transform: translateY(0);
    margin-bottom: 142px;
  }
  .container {
    position: relative; // fix for results-background-fix covering contents
  }
  .results-headline {
    padding: 30px 0;
  }
  // Cover filters with just as much background as necessary. Otherwise chrome
  // has some color banding issues with its gpu acceleration due to lots of
  // transform elements above the background.
  .results-background-fix {
    position: absolute;
    top: 0;
    height: 142px;
    width: 100%;
    background: $color-bg-dark;
  }
}

/deep/ .result-info {
  text-align: center;

  span {
    font-size: 0.9em;
  }
}
</style>
