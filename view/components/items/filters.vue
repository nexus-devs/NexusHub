<template>
  <div class="filters">
    <div class="g-ct">
      <div class="row">
        <div class="col-b">
          <h2>Offer Type</h2>
          <button type="button" v-for="d in types" :disabled="d.disabled"
                  v-on:click="select('types', d)" :class="{ inactive: d.inactive }">
            <div class="status-circle"></div>
            <span>{{ d.name }}</span>
          </button>
        </div>
        <div class="col-b">
          <h2>Region</h2>
          <button type="button" v-for="d in regions" :disabled="d.disabled"
                  v-on:click="select('regions', d)" :class="{ inactive: d.inactive }">
            <div class="status-circle"></div>
            <span>{{ d.name }}</span>
          </button>
        </div>
        <div class="col-b">
          <h2>Platform</h2>
          <button type="button" v-for="d in platforms" :disabled="d.disabled"
                  v-on:click="select('platforms', d)" :class="{ inactive: d.inactive }">
            <div class="status-circle"></div>
            <span>{{ d.name }}</span>
          </button>
        </div>
        <div class="col-b">
          <h2>Data Source</h2>
          <button type="button" v-for="d in sources" :disabled="d.disabled"
                  v-on:click="select('sources', d)" :class="{ inactive: d.inactive }">
            <div class="status-circle"></div>
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
        name: 'NA'
      }, {
        name: 'EU'
      }, {
        name: 'AS'
      }, {
        name: 'RU',
        inactive: true,
        disabled: true
      }, {
        name: 'SA',
        inactive: true,
        disabled: true
      }],

      platforms: [{
        name: 'PC'
      }, {
        name: 'PS4',
        inactive: true,
        disabled: true
      }, {
        name: 'XB1',
        inactive: true,
        disabled: true
      }],

      sources: [{
        name: 'Trade Chat'
      }, {
        name: 'Warframe.market',
        inactive: true,
        disabled: true
      }]
    }
  },

  methods: {
    select(data, d) {
      let target = [].concat(this[data]) // Get rid of existing reference
      let i = target.findIndex(e => e.name === d.name)
      target[i].inactive = target[i].inactive ? false : true

      // If all targets disabled -> enable all
      let allInactive = true
      target.forEach(el => {
        if (!el.inactive) {
          allInactive = false
        }
      })
      if (allInactive) {
        target.forEach(el => {
          el.inactive =  el.disabled ? true : false
        })
      }

      this[data] = target // We need to reassign the variable for vue to re-render it
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
    margin-top: 10px;
    margin-bottom: 10px;
    margin-right: 20px;

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
    font-size: 0.9em;
    background: $colorBackground;

    &:disabled {
      background: $colorBackgroundDark;
      color: $colorFontSubtle;
      cursor: auto;

      .status-circle {
        background: transparent;
        border: 1px solid $colorFontSubtle;
      }
    }
    &.inactive {
      background: $colorBackgroundDark;

      .status-circle {
        background: transparent;
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
