<template>
  <div class="filters">
    <div class="container">
      <div class="row">
        <div class="col-b row">
          <div :class="{ inactive: types[0].inactive }" class="col inline-data" @click="select('types', types[0])">
            <label>Selling</label>
            <span class="data">{{ supply.count }}</span>
            <span :class="{ 'inline-data-increase': supply.rawDiff > 0 }" class="diff">{{ supply.diff }}</span>
          </div>
          <div :class="{ inactive: types[1].inactive }" class="col inline-data" @click="select('types', types[1])">
            <label>Buying</label>
            <span class="data">{{ demand.count }}</span>
            <span :class="{ 'inline-data-increase': demand.rawDiff > 0 }" class="diff">{{ demand.diff }}</span>
          </div>
          <div class="col"><!-- Dummy --></div>
        </div>
        <div class="col-b">
          <label>Region</label>
          <button v-for="d in regions" :key="d.name" :disabled="d.disabled" :class="{ inactive: d.inactive }"
                  type="button" @click="select('regions', d)">
            <span>{{ d.name }}</span>
          </button>
        </div>
        <div class="col-b">
          <label>Platform</label>
          <button v-for="d in platforms" :key="d.name" :disabled="d.disabled" :class="{ inactive: d.inactive }"
                  type="button" @click="select('platforms', d)">
            <span>{{ d.name }}</span>
          </button>
        </div>
        <div class="col-b">
          <label>Data Source</label>
          <button v-for="d in sources" :key="d.name" :disabled="d.disabled" :class="{ inactive: d.inactive }"
                  type="button" @click="select('sources', d)">
            <span>{{ d.name }}</span>
          </button>
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

      regions: [{
        name: 'NA'
      }, {
        name: 'EU'
      }, {
        name: 'AS',
        disabled: true
      }, {
        name: 'RU',
        disabled: true
      }, {
        name: 'SA',
        disabled: true
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
        name: 'Warframe.market',
        disabled: true
      }]
    }
  },

  computed: {
    supply () {
      const focus = this.$store.state.items.item.supply.count
      const comparison = this.$store.state.items.itemComparison.supply.count
      const diff = ((focus - comparison) / comparison * 100).toFixed(2)

      return {
        count: focus > 999 ? `${(focus / 1000).toFixed(1)}K` : focus,
        diff: diff > 0 ? `+${diff}%` : `${diff}%`,
        rawDiff: diff
      }
    },
    demand () {
      const focus = this.$store.state.items.item.demand.count
      const comparison = this.$store.state.items.itemComparison.demand.count
      const diff = ((focus - comparison) / comparison * 100).toFixed(2)

      return {
        count: focus > 999 ? `${(focus / 1000).toFixed(1)}K` : focus,
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
          target[j].inactive = i !== j
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
  margin-top: 80px;
  padding: 15px;
  background: $color-bg-transparent;

  @media (max-width: $breakpoint-m) {
    margin-top: 70px;
  }
  .container > .row > .col-b {
    margin-top: 15px;
    margin-bottom: 15px;
    margin-right: 30px;
    margin-left: 30px;
    flex-basis: auto;
    border-right: 1px solid $color-subtle;

    &:last-of-type {
      margin-right: 0;
      border-right: none;
    }
    &:first-of-type {
      margin-left: 0;
    }
    @media (max-width: $breakpoint-m) {
      margin-left: 0;
      border: none;
    }
  }
  label {
    display: block;
    font-size: 0.9em;
    font-weight: 400;
    color: white;
    margin-bottom: 5px;
  }
  .inline-data {
    @include ie;
    flex-grow: 0;
    border-radius: 2px;
    padding-right: 15px;
    margin: -9px 10px -10px -8px; // even out the ie() padding

    &.inactive {
      opacity: 0.5;
    }
    .data {
      display: block;
      font-size: 1.2em;
      color: white;
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

  button {
    margin-top: 5px;
    margin-right: 5px;
    font-size: 0.85em;
    background: $color-bg-lighter;
    @include shadow-0;

    &:disabled {
      background: transparent;
      color: $color-font-subtle;
      cursor: auto;
      box-shadow: none;

      .status-circle {
        background: transparent;
        border: 0.5px solid $color-font-subtle;
      }
    }
    &.inactive {
      background: transparent;

      .status-circle {
        background: white;
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
