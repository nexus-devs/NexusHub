<template>
  <div class="filters">
    <div class="row">
      <div class="col-b row">
        <div :class="{ inactive: types[0].inactive }" class="col inline-data interactive" @click="select('types', types[0])">
          <label>Selling</label>
          <span class="data">{{ supply.count }}</span>
          <span :class="{ 'inline-data-increase': supply.rawDiff > 0 }" class="diff">{{ supply.diff }}</span>
        </div>
        <div :class="{ inactive: types[1].inactive }" class="col inline-data interactive" @click="select('types', types[1])">
          <label>Buying</label>
          <span class="data">{{ demand.count }}</span>
          <span :class="{ 'inline-data-increase': demand.rawDiff > 0 }" class="diff">{{ demand.diff }}</span>
        </div>
        <div class="col"><!-- Dummy --></div>
      </div>
      <div class="col-b">
        <label>Platform</label>
        <div v-for="d in platforms" :key="d.name" :class="{ active: !d.inactive, disabled: d.disabled }" class="btn-subtle"
             type="button" @click="select('platforms', d)">
          <span>{{ d.name }}</span>
        </div>
      </div>
      <div class="col-b">
        <label>Data Source</label>
        <div v-for="d in sources" :key="d.name" :class="{ active: !d.inactive, disabled: d.disabled }" class="btn-subtle"
             type="button" @click="select('sources', d)">
          <span>{{ d.name }}</span>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
import _ from 'lodash'

export default {
  data () {
    return {
      types: [{
        name: 'Selling'
      }, {
        name: 'Buying'
      }],

      platforms: [{
        name: 'PC'
      }, {
        name: 'PS4',
        disabled: true
      }, {
        name: 'XB1',
        disabled: true
      }],

      sources: [{
        name: 'Trade Chat'
      }, {
        name: 'Warframe.market'
      }]
    }
  },

  computed: {
    supply () {
      const set = this.$store.state.items.item.components.find(c => c.name === 'Set')
      const current = set.prices.selling.current.orders
      const previous = set.prices.selling.previous.orders
      const diff = ((current - previous) / previous * 100).toFixed(2)

      return {
        count: current > 999 ? `${(current / 1000).toFixed(1)}K` : current,
        diff: diff > 0 ? `+${diff}%` : `${diff}%`,
        rawDiff: diff
      }
    },
    demand () {
      const set = this.$store.state.items.item.components.find(c => c.name === 'Set')
      const current = set.prices.buying.current.orders
      const previous = set.prices.buying.previous.orders
      const diff = ((current - previous) / previous * 100).toFixed(2)

      return {
        count: current > 999 ? `${(current / 1000).toFixed(1)}K` : current,
        diff: diff > 0 ? `+${diff}%` : `${diff}%`,
        rawDiff: diff
      }
    }
  },

  watch: {
    types (oldData, newData) {
      const selling = newData.find(d => d.name === 'Selling')
      const buying = newData.find(d => d.name === 'Buying')

      if ((selling.inactive && buying.inactive) || (!selling.inactive && !buying.inactive)) {
        return this.$store.commit('setItemOfferType', 'combined')
      }
      if (selling.inactive) {
        this.$store.commit('setItemOfferType', 'buying')
      }
      if (buying.inactive) {
        this.$store.commit('setItemOfferType', 'selling')
      }
    },
    regions (oldData, newData) {
      const query = _.cloneDeep(this.$route.query)
      const regions = []

      newData.forEach(region => {
        if (!region.inactive && !region.disabled) {
          regions.push(region.name)
        }
      })

      // Get number of disabled regions so we can figure out when all are
      // selected or when they aren't
      let disabled = 0
      this.regions.forEach(region => {
        disabled += region.disabled ? 1 : 0
      })

      // Commit to store, then update URL (triggers data update)
      this.$store.commit('setItemRegions', regions.length < this.regions.length - disabled ? regions : [])

      // Some regions selected
      if (regions.length && regions.length < this.regions.length - disabled) {
        this.$router.replace({
          path: this.$route.path,
          query: Object.assign(query, {
            region: regions.join(',')
          })
        })
      }

      // Either all or none selected
      else {
        delete query.region
        this.$router.replace({
          path: this.$route.path,
          query
        })
      }
    }
  },

  methods: {
    select (data, d) {
      const target = [].concat(this[data]) // Get rid of existing reference
      const i = target.findIndex(e => e.name === d.name)
      let allActive = true
      let allInactive = true

      this[data].forEach(el => {
        if (el.inactive && !el.disabled) {
          allActive = false
        }
        if ((!el.inactive || el.disabled) && el.name !== target[i].name) {
          allInactive = false
        }
      })

      // Labels are all active -> user wants to activate only the one they selected
      if (allActive) {
        for (let j = 0; j < target.length; j++) {
          target[j].inactive = i === j
        }
      }

      // All labels inactive -> select all
      else if (allInactive) {
        for (let j = 0; j < target.length; j++) {
          target[j].inactive = false
        }
      }

      // Some are active -> user wants to reactive a certain label
      else {
        target[i].inactive = !target[i].inactive
      }

      // Now we need to reassign the variable for vue to re-render it
      this[data] = target
    }
  }
}
</script>



<style lang="scss" scoped>
@import '~src/styles/partials/importer';

.filters {
  margin-top: 60px;

  .col-b {
    flex-grow: 0;
    flex-basis: auto;
    margin-bottom: 40px;

    &:not(:last-of-type) {
      @media (min-width: $breakpoint-s) {
        padding-right: 40px;
        margin-right: 40px;
        border-right: 1px solid $color-subtle-dark;
      }
      @media (max-width: $breakpoint-s) {
        width: 100%;
      }
    }
  }

  label {
    display: block;
    font-size: 0.85em;
    font-weight: 400;
    color: white;
    margin-bottom: 5px;
  }
  .inline-data {
    flex-grow: 0;
    border-radius: 2px;
    padding: 12px 15px;
    margin-right: 10px;
    background: rgba(200,225,255,0.1);
    @include shadow-0;

    &.inactive {
      opacity: 0.5;
      background: transparent;
    }
    .data {
      display: block;
      font-size: 1.2em;
      color: white;
      margin-bottom: 5px;
    }
    .diff {
      display: inline-block;
      font-size: 0.8em;
      color: $color-error;
      letter-spacing: -0.5;

      &.inline-data-increase {
        color: $color-primary;
      }
    }
    &:before {
      border-radius: 2px;
    }
  }

  .btn-subtle {
    margin-top: 5px;
    margin-right: 5px;
    font-size: 0.85em !important;
    @include shadow-0;

    &:not(.active) {
      background: transparent;
      color: white;

      &:hover {
        background: rgba(200,225,255,0.1)
      }
      .status-circle {
        background: white;
      }
    }
    &.disabled {
      color: $color-font-subtle;
      cursor: auto;
      pointer-events: none;
      box-shadow: none;
      background: transparent;
      opacity: 0.5;

      .status-circle {
        background: transparent;
        border: 0.5px solid $color-font-subtle;
      }
    }
    .status-circle {
      display: inline-block;
      vertical-align: middle;
      margin-right: 6.5px;
      height: 2px;
      width: 2px;
      background: white;
      border: 1px solid white;
      border-radius: 50%;
    }
  }
}
</style>
