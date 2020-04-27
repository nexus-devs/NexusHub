<template>
  <module ref="graphDoubleline" :class="{ optionsActive }" class="graph">
    <template slot="header">
      <div class="title">
        <img src="/img/wow-classic/ui/trade.svg" alt="Trade" class="ico-h-20">
        <h3>{{ title }}</h3>
      </div>
      <div class="legend-container">
        <div class="legend">
          <div class="primary">
            <span class="dot" /> {{ options.primary.name }}
          </div>
          <div class="secondary">
            <span class="dot" /> {{ options.secondary.name }}
          </div>
        </div>
      </div>
    </template>
    <template slot="body">
      <doubleline :data="data" :opts="doublelineOpts" />
    </template>
    <template slot="footer" class="optionsActive">
      <module-time :days="timerange" :fn="setTimerange" />
      <div class="interactive" @click="toggleOptions('optionsActive')">
        <span>Options</span>
        <img src="/img/ui/dropdown.svg" class="ico-h-20" alt="Dropdown">
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
                        @click="selectValueEntry('primary', entry); toggleOptions('optionsPrimaryActive')"
                  >
                    {{ entry.name }}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-b">
            <span>Secondary:</span>
            <div class="dropdown-container">
              <div class="interactive" @click="toggleOptions('optionsSecondaryActive')">
                <span>{{ options.secondary.name }}</span>
                <img src="/img/ui/dropdown.svg" class="ico-h-20" alt="Dropdown">
              </div>
              <div :class="{ active: optionsSecondaryActive }" class="dropdown">
                <div class="dropdown-body">
                  <span v-for="entry in valueEntries"
                        :key="'secondary' + entry.key"
                        :class="{ selected: options.secondary.key === entry.key }"
                        @click="selectValueEntry('secondary', entry); toggleOptions('optionsSecondaryActive')"
                  >
                    {{ entry.name }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
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
import doubleline from 'src/components/charts/overhaul/doubleline.vue'
import module from 'src/components/ui/module.vue'
import moduleTime from 'src/components/ui/module-time.vue'

export default {
  components: {
    module,
    doubleline,
    moduleTime
  },

  props: ['valueEntries', 'title', 'storage', 'refetchFn'],

  data () {
    return {
      optionsActive: false,
      optionsPrimaryActive: false,
      optionsSecondaryActive: false,
      options: {
        outlier: 10,
        primary: this.valueEntries[0],
        secondary: this.valueEntries[1]
      }
    }
  },

  computed: {
    timerange () {
      return this.$store.state.items.graphs[this.storage].timerange
    },
    data () {
      const data = this.$store.state.items.graphs[this.storage].data.map(d => {
        return {
          x: new Date(d.scannedAt),
          y1: d[this.options.primary.key],
          y2: d[this.options.secondary.key]
        }
      })

      const medianArr = data.slice(0).sort((a, b) => a.y1 - b.y1)
      const len = medianArr.length
      const median = len ? (len % 2 ? medianArr[Math.floor(len / 2)].y1 : (medianArr[len / 2].y1 + medianArr[len / 2 - 1].y1) / 2) : 0

      return data.filter(d => (median / d.y1 > this.options.outlier / 100) && (d.y1 > median * (this.options.outlier / 100)))
    },
    doublelineOpts () {
      return {
        secondaryLabel: this.options.secondary.name,
        secondaryScale: this.options.primary.price !== this.options.secondary.price,
        parsePrice: { primary: this.options.primary.price, secondary: this.options.secondary.price },
        areaChart: { primary: this.options.primary.area, secondary: this.options.secondary.area }
      }
    }
  },

  methods: {
    selectValueEntry (value, entry) {
      if (this.options[value].key === entry.key) return
      this.options[value] = entry
    },
    toggleOptions (dropdown) {
      this[dropdown] = !this[dropdown]
    },
    async setTimerange (timerange) {
      if (timerange === this.timerange) return

      this.$refs.graphDoubleline.$refs.progress.start()
      await this.refetchFn(timerange)
      this.$refs.graphDoubleline.$refs.progress.finish()
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~src/styles/partials/wow-classic/importer';

.graph {
  max-width: none !important;
  max-height: 306px;

  > /deep/ .body {
    padding: 0;
    margin: 0;
    min-height: 210px;
  }

  > /deep/ .header {
    display: flex;
    justify-content: space-between;
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

.title {
  display: inline-block;
}
.legend-container {
  display: flex;
  justify-content: right;
  flex: 1;
  padding-right: 35px;

  @media (max-width: $breakpoint-s) {
    padding-right: 0;
  }
}
.legend {
  white-space: nowrap;
  font-size: 0.7em;
  color: $color-font-body;
  pointer-events: all;

  .dot {
    margin-top: -1px;
    height: 7px;
    width: 7px;
    border-radius: 50%;
    display: inline-block;
  }
  .primary .dot {
    background-color: $color-primary-subtle;
  }
  .secondary .dot {
    background-color: $color-accent-subtle;
  }
}
</style>
