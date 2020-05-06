<template>
  <module ref="graphHeatmap" :class="{ optionsActive }" class="graph">
    <template slot="header">
      <div class="title">
        <img src="/img/wow-classic/ui/trade.svg" alt="Trade" class="ico-h-20">
        <h3>{{ title }}</h3>
      </div>
      <div class="legend-container">
        <div class="legend">
          <div class="legend-above">
            <span>{{ legendStats.min }}</span>
            <span>{{ legendStats.max }}</span>
          </div>
          <div class="legend-bar">
            <div class="medium-divide" />
          </div>
          <div class="legend-below">
            <span>{{ medium.label }} ({{ legendStats.medium }})</span>
          </div>
        </div>
      </div>
    </template>
    <template slot="body">
      <heatmap :data="data" :medium="medium.value" :opts="heatmapOpts" />
    </template>
    <template slot="footer" class="optionsActive">
      <module-time :days="timerange" :fn="setTimerange" />
      <div class="interactive" @click="toggleOptions('optionsActive')">
        <img src="/img/ui/settings.svg" :class="{ active: optionsActive }" class="ico-h-20" alt="Options">
      </div>
      <div :class="{ active: optionsActive }" class="options">
        <div class="row">
          <div class="col-b">
            <span>Primary:</span>
            <div class="dropdown-container">
              <div class="interactive" @click="toggleOptions('optionsPrimaryActive')">
                <span>{{ options.primary.name }}</span>
                <img src="/img/ui/dropdown.svg" class="ico-h-20" alt="Dropdown">
              </div>
              <div :class="{ active: optionsPrimaryActive }" class="dropdown">
                <div class="dropdown-body">
                  <span v-for="entry in valueEntries"
                        :key="'primary' + entry.key"
                        :class="{ selected: options.primary.key === entry.key }"
                        @click="selectValueEntry(entry); toggleOptions('optionsPrimaryActive')"
                  >
                    {{ entry.name }}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-b">
            <span>Remove outliers:</span>
            <input v-model="options.outlier">
            <span>%</span>
          </div>
        </div>
      </div>
    </template>
  </module>
</template>

<script>
import heatmap from 'src/components/charts/overhaul/heatmap.vue'
import module from 'src/components/ui/module.vue'
import moduleTime from 'src/components/ui/module-time.vue'

export default {
  components: {
    module,
    heatmap,
    moduleTime
  },

  props: ['valueEntries', 'title', 'storage'],

  data () {
    return {
      optionsActive: false,
      optionsPrimaryActive: false,
      options: {
        outlier: 10,
        primary: this.valueEntries[0]
      }
    }
  },

  computed: {
    item () {
      return this.$store.state.items.item
    },
    timerange () {
      return this.$store.state.items.graphs[this.storage].timerange
    },
    medium () {
      if (this.options.primary.key === 'marketValue') return { label: 'Market Value', value: this.item.stats && this.item.stats.current ? this.item.stats.current.marketValue : null }
      return { label: 'Avg. ' + this.options.primary.name, value: Math.round(this.data.reduce((total, next) => total + next.value, 0) / this.data.length) }
    },
    data () {
      if (!this.$store.state.items.graphs[this.storage].data) return []

      const data = []
      const bracketSize = 2 // Hours per bracket
      const rawData = this.$store.state.items.graphs[this.storage].data.slice()

      rawData.sort((a, b) => a[this.options.primary.key] - b[this.options.primary.key])
      const len = rawData.length
      const median = len ? (len % 2 ? rawData[Math.floor(len / 2)][this.options.primary.key] : (rawData[len / 2][this.options.primary.key] + rawData[len / 2 - 1][this.options.primary.key]) / 2) : 0

      for (const entry of rawData) {
        const value = entry[this.options.primary.key]
        if ((median / value <= this.options.outlier / 100) || (value <= median * (this.options.outlier / 100))) continue

        const scannedAt = new Date(entry.scannedAt)
        const day = (((scannedAt.getDay() - 1) % 7) + 7) % 7 // Change it so 0 is monday (also emulate modulo, fuck you javascript)
        const hour = Math.floor(scannedAt.getHours() / bracketSize)

        const storedData = data.find(d => d.day === day && d.hour === hour)
        if (!storedData) data.push({ value, count: 1, day, hour })
        else {
          storedData.value += value
          storedData.count++
        }
      }

      return data.map(d => {
        return { ...d, value: Math.round(d.value / d.count) }
      })
    },
    legendStats () {
      const mappedValues = this.data.map(d => d.value)
      const min = Math.min(...mappedValues)
      const max = Math.max(...mappedValues)

      const toGold = (p) => (p / 10000).toFixed(2) + 'g'
      return this.heatmapOpts.parsePrice
        ? { min: toGold(min), max: toGold(max), medium: toGold(this.medium.value) }
        : { min, max, medium: this.medium.value }
    },
    heatmapOpts () {
      return {
        parsePrice: this.options.primary.price
      }
    }
  },

  methods: {
    selectValueEntry (entry) {
      if (this.options.primary.key === entry.key) return
      this.options.primary = entry
    },
    toggleOptions (dropdown) {
      this[dropdown] = !this[dropdown]
    },
    async setTimerange (timerange) {
      if (timerange === this.timerange) return

      this.$refs.graphHeatmap.$refs.progress.start()

      const itemId = this.$store.state.items.item.itemId
      const server = this.$store.state.servers.activeServer.slug
      const itemData = await this.$cubic.get(`/wow-classic/v1/items/${server}/${itemId}/prices?timerange=${timerange}`)
      this.$store.commit('setGraph', {
        graph: this.storage,
        data: itemData.data,
        timerange
      })

      this.$refs.graphHeatmap.$refs.progress.finish()
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~src/styles/partials/wow-classic/importer';

.graph {
  max-width: none !important;
  max-height: 314px;

  > /deep/ .body {
    padding: 0;
    margin: 0;
    min-height: 210px;
  }
  /deep/ .heatmap {
    height: 210px;
  }

  > /deep/ .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  > /deep/ .footer {
    flex-wrap: wrap;
    justify-content: space-between;
  }

  &.optionsActive {
    max-height: none;
  }
}
.interactive {
  padding: 6px 10px;
  font-size: 1.1em;

  img:not(.active) {
    opacity: 0.5;
  }
}
.options {
  border-top: 1px solid $color-font-subtle;
  padding: 10px;
  flex-basis: 100%;
  font-size: 1.1em;

  .col-b {
    display: flex;
    align-items: center;
  }
  .interactive {
    text-align: center;
    min-width: 100px;
    margin-left: 5px;
    font-size: 1em;
  }
  .dropdown-container {
    position: relative;
  }
  .dropdown {
    z-index: 1;
    background-color: $color-bg;
    position: absolute;
    top: 0;
    width: 100%;
    padding: 5px 0;
    @include ease(0.15s);
    @include shade-1;

    .dropdown-body {
      display: flex;
      flex-direction: column;

      span {
        cursor: pointer;
        padding: 10px 15px;
        @include ease(0.15s);
      }
      span:hover {
        background: rgba(0,0,0,0.15);
      }
      span:not(.selected) {
        color: $color-font-body;
      }
    }
    &:not(.active) {
      pointer-events: none;
      opacity: 0;
      transform: translateY(-5px);
      transform-origin: top;
      @include ease(0.15s);
    }
  }

  &:not(.active) {
    display: none;
  }
  .row:not(:first-child) {
    margin-top: 10px;
  }

  input {
    font-family: Monospace;
    font-weight: bold;
    border-radius: 2px;
    text-overflow: ellipsis;

    background-color: #554942;
    padding: 4px 6px;
    text-align: center;
    width: 35px;
    margin-left: 5px;
  }
}
.legend-container {
  flex-basis: 35%;
  padding-right: 5px;

  @media (max-width: $breakpoint-s) {
    flex-basis: 50%;
    padding-right: 0;
  }

  .legend {
    display: flex;
    flex-direction: column;

    .legend-above, .legend-below {
      color: $color-font-body;
      font-size: 0.7em;
      display: flex;
      justify-content: space-between;
      flex: 1;
      width: 100%;
    }
    .legend-below {
      justify-content: space-around;
    }
    .legend-bar {
      display: flex;
      justify-content: center;
      height: 8px;
      width: 100%;
      background: linear-gradient(to right, #00c0ff, transparent, #e6ad02);

      .medium-divide {
        width: 1px;
        height: 100%;
        background-color: $color-font-body;
      }
    }
  }
}
</style>
