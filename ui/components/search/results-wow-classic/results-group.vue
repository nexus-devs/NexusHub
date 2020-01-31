<template>
  <div class="results-group">
    <h2>{{ type.charAt(0).toUpperCase() + type.slice(1) }}</h2>
    <span>{{ results.length }} Result{{ results.length !== 1 ? 's' : '' }}</span>

    <!-- Filters -->
    <div class="filter">
      <div class="filter-tags">
        <div class="filter-tag-row">
          <div v-for="filter in filters" :key="filter.name" :class="{ active: filter.active, descending: filter.descending }" class="btn-tag" @click="selectFilterTag(filter)">
            <img v-if="filter.icon" :src="filter.icon" :alt="filter.alt" class="ico-12">
            <span>{{ filter.name }}</span>
            <img :class="{ descending: filter.descending }" src="/img/ui/dropdown.svg" class="ico-16 asc-desc" alt="Ascending/Descending">
          </div>
        </div>
      </div>
      <div class="filter-view">
        <div :class="{ active: listType === 'list' }" class="interactive" @click="selectListView('list')">
          <img src="/img/ui/list-view.svg" class="ico-20" alt="List">
          <span>List</span>
        </div>
        <div :class="{ active: listType === 'grid' }" class="interactive" @click="selectListView('grid')">
          <img src="/img/ui/card-view.svg" class="ico-20" alt="Grid">
          <span>Grid</span>
        </div>
      </div>
    </div>

    <!-- Content -->
    <div :style="{ height: `${listHeight}px` }" class="results-container">
      <transition-group ref="grid" :class="{ active: listType === 'grid' }" name="list" class="result-grid list">
        <item-grid v-for="result in results" :key="result.name" :result="result" :filters="filters" :selection="selection" />
      </transition-group>
      <transition-group ref="list" :class="{ active: listType === 'list' }" name="list" class="result-list list">
        <item-list v-for="result in results" :key="result.name" :result="result" :filters="filters" class="result row" />
      </transition-group>
    </div>

    <div class="add-items">
      Think we missed an item?
      <router-link to="/contact">
        Let us know
      </router-link> or
      <a href="https://github.com/nexus-devs/warframe-items" target="_blank">add items yourself</a> if you
      wanna help us support the project.
    </div>
  </div>
</template>



<script>
import itemGrid from 'src/components/search/results-wow-classic/results-grid-snippet.vue'
import itemList from 'src/components/search/results-wow-classic/results-list-snippet.vue'

export default {
  components: {
    'item-grid': itemGrid,
    'item-list': itemList
  },

  props: ['type'],

  data () {
    return {
      listHeight: 0,
      listType: 'list',
      selection: ''
    }
  },

  computed: {
    filters () {
      return this.$store.state.serp.filters
    },
    results () {
      return this.$store.state.serp.results
    }
  },

  watch: {
    /** Resize results height when results change. Delayed by 1ms because the
     * event is triggered *before* the data actually changes, meaning that
     * we need for the view to render the new height first.
     */
    results () {
      setTimeout(() => this.onResize(), 75)
    }
  },

  // Set active view (required for generating parent height)
  mounted () {
    this.onResize()
    window.addEventListener('resize', this.onResize)
  },

  beforeDestroy () {
    window.removeEventListener('resize', this.onResize)
  },

  methods: {
    /**
     * Resize result container. We have to do this because the list/card view
     * is positioned absolutely to enable smooth transitions while staying at
     * the same place. The html tag height will be expanded without this when
     * the smaller list is selected.
     */
    onResize () {
      if (this.listType === 'grid') {
        this.listHeight = this.$refs.grid.$el.offsetHeight
      } else {
        this.listHeight = this.$refs.list.$el.offsetHeight
      }
      this.listHeight += 40 // padding
    },

    /**
     * Swap between list view types (grid/list)
     */
    selectListView (type) {
      this.listType = type
      this.onResize()
    },

    /**
     * Select filters and adjust sorting. First click -> activate, descending;
     * Second click -> activate, ascending; Third click -> deactivate
     */
    selectFilterTag (filter) {
      const newFilters = [].concat(this.$store.state.serp.filters)
      const target = newFilters.find(f => f.name === filter.name)

      // Only allow two filters at once
      const activeFilters = this.$store.state.serp.activeFilters
      const isActive = activeFilters.find(f => f.name === filter.name)

      if (this.$store.state.serp.activeFilters.length >= 2 && !isActive) {
        this.$store.commit('popSerpActiveFilter')
      }

      // Sort order selection logic
      if (target.descending) {
        target.active = false
        target.descending = false
        this.$store.commit('removeSerpActiveFilter', target.name)
      } else {
        target.descending = target.active
        target.active = true
        this.$store.commit('addSerpActiveFilter', target.name)
      }
      // Overwrite original to trigger DOM update
      this.$store.commit('setSerpFilters', newFilters)

      // Sort results if filters are active, otherwise reset to initial
      if (newFilters.reduce((a, f) => a + (f.active ? 1 : 0), 0)) {
        this.$store.dispatch('applySerpFilters')
      } else {
        this.$store.commit('resetSerpResults')
      }

      // Show user which filter order is selected
      this.setSelection()
    },

    /**
     * Generate easy to understand string behind filters displaying the current
     * sorting order.
     */
    setSelection () {
      const filters = this.$store.state.serp.activeFilters
      let selection = ''

      for (const filter of filters) {
        if (selection) {
          selection += filter.active ? ` per ${filter.name}` : ''
        } else {
          selection += filter.active ? filter.name : ''
        }
      }
      this.selection = selection
    }
  }
}
</script>



<style lang="scss" scoped>
@import '~src/styles/partials/wow-classic/importer';

.list-enter-active, .list-leave-active {
  transition: all 0s;
}
.list-enter, .list-leave-to {
  opacity: 0;
}

.results-container {
  position: relative; // for position: absolute item list views
  overflow: hidden;
  @include ease-out(0.35s); // When results block gets resized
}

h2 {
  position: relative;
  z-index: 1;
  display: inline-block;
  margin: 20px 5px 0px 0;
  padding-bottom: 10px;
  font-size: 1em;
  border-bottom: 2px solid $color-primary-subtle;

  & + span {
    color: $color-font-subtle;
    font-size: 0.9em;
  }
}

.filter {
  position: relative;
  display: flex;
  align-content: center;
  flex-wrap: wrap;
  border-top: 1px solid $color-subtle-dark;
  top: -1px; // mix with border-bottom from h2 tag
  padding-top: 15px;

  .filter-tags {
    // Filters currently disabled, but height needed
    opacity: 0;
    pointer-events: none;

    display: flex;
    align-items: center;
    margin-right: 150px; // break when view type is supposed to cause break

    @media (max-width: $breakpoint-s) {
      width: 100%;
    }
    .filter-tags-row {
      display: inline-block;
      margin-right: 20px;
      padding-right: 20px;
    }
  }
  .filter-view {
    position: absolute;
    right: 0;
    margin-top: -5px; // compensate for icon padding
    padding-left: 20px;

    .interactive {
      display: inline-block;
      opacity: 0.4;

      &:hover {
        opacity: 0.8;
      }
      span {
        @include uppercase;
        color: white;
        font-size: 0.8em;
      }
    }
    .active {
      opacity: 1;

      &:hover {
        opacity: 1;
      }
    }
  }
}

.list {
  position: absolute;
  width: 100%;
  transform: scale(0.95);
  transform-origin: 50% 200px;
  pointer-events: none;
  opacity: 0;
  will-change: transform, opacity;
  @include ease(0.3s);

  &.active {
    transform: scale(1);
    opacity: 1;
    pointer-events: all;
  }
}

// List view types
.result-grid {
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  width: calc(100% + 15px); // compensate for card margin right
}

.result-list {
  margin-top: 30px;
}

.add-items {
  margin: 30px 0 0px;
  font-size: 0.9em;
  opacity: 0.6;
}
</style>
