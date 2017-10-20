<template>
  <div class="filters">
    <div class="g-ct">
      <div class="row">
        <div class="col-b">
          <h2>Offer Type</h2>
          <button type="button" v-for="d in types" :disabled="d.disabled"
                  v-on:click="select('types', d)" :class="{ inactive: d.inactive }">
            <span>{{ d.name }}</span>
          </button>
        </div>
        <div class="col-b">
          <h2>Region</h2>
          <button type="button" v-for="d in regions" :disabled="d.disabled"
                  v-on:click="select('regions', d)" :class="{ inactive: d.inactive }">
            <span>{{ d.name }}</span>
          </button>
        </div>
        <div class="col-b">
          <h2>Platform</h2>
          <button type="button" v-for="d in platforms" :disabled="d.disabled"
                  v-on:click="select('platforms', d)" :class="{ inactive: d.inactive }">
            <span>{{ d.name }}</span>
          </button>
        </div>
        <div class="col-b">
          <h2>Data Source</h2>
          <button type="button" v-for="d in sources" :disabled="d.disabled"
                  v-on:click="select('sources', d)" :class="{ inactive: d.inactive }">
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
  data() {
    return {
      types: [{
        name: 'Selling'
      }, {
        name: 'Buying'
      }],

      regions: [{
        name: 'NA',
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

  methods: {
    select(data, d) {
      let target = [].concat(this[data]) // Get rid of existing reference
      let i = target.findIndex(e => e.name === d.name)
      target[i].inactive = target[i].inactive ? false : true
      this[data] = target // We need to reassign the variable for vue to re-render it
    }
  },

  watch: {
    types(oldData, newData) {
      const selling = newData.find(d => d.name === 'Selling')
      const buying = newData.find(d => d.name === 'Buying')

      if ((selling.inactive && buying.inactive) || (!selling.inactive && !buying.inactive)) {
        return this.$store.commit('setOfferType', 'combined')
      }
      if (selling.inactive) {
        this.$store.commit('setOfferType', 'buying')
      }
      if (buying.inactive) {
        this.$store.commit('setOfferType', 'selling')
      }
    },
    regions(oldData, newData) {
      const query = _.cloneDeep(this.$route.query)
      const regions = []

      newData.forEach(region => {
        if (!region.inactive && !region.disabled) {
          regions.push(region.name)
        }
      })

      // Get number of inactive regions so we can figure out when all are
      // selected or when they aren't
      let inactive = 0
      this.regions.forEach(region => {
        inactive += region.inactive ? 1 : 0
      })

      // Some regions selected
      if (regions.length && regions.length < this.regions.length) {
        this.$router.replace({
          path: this.$route.path,
          query: Object.assign(query, {
            region: regions.join(',')
          })
        })
      }

      // Either all or none selected
      else if (regions.length === this.regions.length || !regions.length) {
        delete query.region
        this.$router.replace({
          path: this.$route.path,
          query
        })
      }
    }
  }
}
</script>

<style lang="scss">
@import '~src/styles/partials/importer';

.filters {
  margin-top: 80px;
  padding: 15px;
  @include gradient-background-dg(rgba(15, 20, 25, 0.3), rgba(15, 20, 25, 0.35));

  @media (max-width: $breakpoint-m) {
    margin-top: 50px;
  }
  .g-ct > .row > .col-b {
    margin-top: 15px;
    margin-bottom: 15px;
    margin-right: 20px;
    flex-basis: auto;

    &:last-of-type {
      margin-right: 0;
    }
  }
  h2 {
    font-size: 0.9em;
    font-weight: 400;
    margin-bottom: 5px;
  }
  button {
    margin-top: 5px;
    margin-right: 5px;
    font-size: 0.85em;
    background: $colorBackground;
    @include shadow-0;

    &:disabled {
      background: transparent;
      color: $colorFontSubtle;
      cursor: auto;
      box-shadow: none;

      .status-circle {
        background: transparent;
        border: 0.5px solid $colorFontSubtle;
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
