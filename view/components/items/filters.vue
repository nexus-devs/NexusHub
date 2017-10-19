<template>
  <div class="filters">
    <div class="g-ct">
      <div class="row">
        <div class="col-b">
          <h2>Offer Type</h2>
          <button type="button" v-for="d in types" :disabled="d.disabled"
                  v-on:click="select('types', d)" :class="{ selected: d.selected }">
            <span>{{ d.name }}</span>
          </button>
        </div>
        <div class="col-b">
          <h2>Region</h2>
          <button type="button" v-for="d in regions" :disabled="d.disabled"
                  v-on:click="select('regions', d)" :class="{ selected: d.selected }">
            <span>{{ d.name }}</span>
          </button>
        </div>
        <div class="col-b">
          <h2>Platform</h2>
          <button type="button" v-for="d in platforms" :disabled="d.disabled"
                  v-on:click="select('platforms', d)" :class="{ selected: d.selected }">
            <span>{{ d.name }}</span>
          </button>
        </div>
        <div class="col-b">
          <h2>Data Source</h2>
          <button type="button" v-for="d in sources" :disabled="d.disabled"
                  v-on:click="select('sources', d)" :class="{ selected: d.selected }">
            <span>{{ d.name }}</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
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
      target[i].selected = target[i].selected ? false : true
      this[data] = target // We need to reassign the variable for vue to re-render it
    }
  },

  watch: {
    types(oldData, newData) {
      const selling = newData.find(d => d.name === 'Selling')
      const buying = newData.find(d => d.name === 'Buying')

      if ((selling.selected && buying.selected) || (!selling.selected && !buying.selected)) {
        return this.$store.commit('setOfferType', 'combined')
      }
      if (selling.selected) {
        this.$store.commit('setOfferType', 'selling')
      }
      if (buying.selected) {
        this.$store.commit('setOfferType', 'buying')
      }
    },
    regions(oldData, newData) {
      const regions = []

      newData.forEach(region => {
        if (region.selected) {
          regions.push(region.name)
        }
      })
      console.log(regions)
    }
  }
}
</script>

<style lang="scss">
@import '~src/styles/partials/importer';

.filters {
  padding: 15px;
  background: $colorBackgroundDarker;

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
    background: $colorBackgroundDark;

    &:disabled {
      background: $colorBackgroundDark;
      color: $colorFontSubtle;
      cursor: auto;

      .status-circle {
        background: transparent;
        border: 0.5px solid $colorFontSubtle;
      }
    }
    &.selected {
      background: $colorBackground;

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
