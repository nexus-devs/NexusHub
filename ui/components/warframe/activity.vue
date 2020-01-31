<template>
  <module ref="activity" class="activity">
    <template slot="header">
      <img src="/img/warframe/ui/trade.svg" alt="Trade" class="ico-h-20">
      <h3 class="title">
        Activity
      </h3>
    </template>
    <template slot="body">
      <div class="row days">
        <div v-for="day in data" :key="day.day.name" class="day">
          <div v-for="(hour, i) in day.hours" :key="hour + '' + i" class="hour-wrapper">
            <div :style="{ opacity: scale(hour), transform: `scale(${scale(hour)})` }" :class="{ inactive: !hour }" class="hour" />
            <div class="tooltip">
              <time :datetime="`${i * 2 + 1}:00`">
                {{ day.day.name.substr(0, 3) }},
                {{ i * 2 % 12 + 1 }}{{ i * 2 > 11 ? 'pm' : 'am' }}
              </time>
              -
              <time :datetime="`${i * 2 + 3}:00`">
                {{ (i * 2 + 2) % 12 + 1 }}{{ i * 2 + 2 > 11 ? 'pm' : 'am' }}
              </time>
              <br>
              <span class="num">{{ hour }}</span>
              <br>
              <span>Orders</span>
            </div>
          </div>
          <span class="label">{{ day.day.name.substr(0, 3) }}</span>
        </div>
        <div class="daytime">
          <div v-for="(hour, i) in 24" :key="hour + '' + i" class="time">
            <span v-if="i % 4 === 1" class="label">
              {{ i % 12 + 1 }}{{ i + 1 > 11 ? 'pm' : 'am' }}
            </span>
            <span v-else />
          </div>
        </div>
      </div>
    </template>
    <template slot="footer">
      <module-time :days="timerange" :fn="setTimerange" />
    </template>
  </module>
</template>



<script>
import module from 'src/components/ui/module.vue'
import moduleTime from 'src/components/ui/module-time.vue'
import storeModule from 'src/store/activity.js'
const title = (str) => str.toLowerCase().replace(/\b\w/g, l => l.toUpperCase())

export default {
  components: {
    module,
    moduleTime
  },

  props: ['item'],

  async asyncData ({ route }) {
    const item = route.params.item ? title(route.params.item.replace(/-/g, ' ')) : null
    const data = await this.$cubic.get(`/warframe/v1/orders/activity${item ? `?item=${item}` : ''}`)
    this.$store.commit('setActivityData', data)
  },

  computed: {
    timerange () {
      return this.$store.state.activity.timerange
    },
    // Merge every two hours because the chart gets way too big otherwise ;-;
    data () {
      const original = this.$store.state.activity.data
      const merged = []

      for (const day of original) {
        const hours = []

        for (let i = 0; i < day.hours.length; i += 2) {
          hours.push(day.hours[i] + day.hours[i + 1])
        }
        merged.push({
          day: day.day,
          hours
        })
      }
      return merged
    },
    min () {
      let min = Number.POSITIVE_INFINITY
      for (const day of this.data) {
        for (const hour of day.hours) {
          min = hour < min ? hour : min
        }
      }
      return min === Number.POSITIVE_INFINITY ? null : min
    },
    max () {
      let max = Number.NEGATIVE_INFINITY
      for (const day of this.data) {
        for (const hour of day.hours) {
          max = hour > max ? hour : max
        }
      }
      return max === Number.NEGATIVE_INFINITY ? null : max
    }
  },

  watch: {
    async timerange (to, from) {
      const item = this.$route.params.item ? title(this.$route.params.item.replace(/-/g, ' ')) : null
      let url = '/warframe/v1/orders/activity'
      url += item ? `?item=${item}` : ''
      url += to !== 30 ? `${url.includes('?') ? '&' : '?'}timerange=${to}` : ''
      this.$refs.activity.$refs.progress.start()
      const data = await this.$cubic.get(url)
      this.$refs.activity.$refs.progress.finish()
      this.$store.commit('setActivityData', data)
    }
  },

  methods: {
    scale (num) {
      const scale = num / this.max
      return scale < 0.45 ? 0.45 : scale
    },
    setTimerange (days) {
      this.$store.commit('setActivityTimerange', days)
    }
  },

  storeModule
}
</script>



<style lang="scss" scoped>
@import '~src/styles/partials/importer';

.module {
  display: inline-flex;

  /deep/ .header {
    .btn-subtle {
      padding: 6px 8px;
      text-transform: none;
      margin-top: -4px; // reset margin caused by padding
      float: right;
      border-radius: 42px;
    }
  }
}

.row {
  flex-wrap: nowrap;
}

.day {
  display: flex;
  flex-direction: column;
  width: 28px;

  span {
    font-size: 0.8em;
    margin-top: 8px;
  }
}

.hour {
  height: 10px;
  width: 10px;
  border-radius: 5px;
  background: $color-primary-subtle;

  &.inactive {
    background: transparent;
  }
}
.tooltip {
  position: absolute;
  white-space: nowrap;
  margin-left: 28px;
  opacity: 0;
  background: $color-bg;
  border-radius: 2px;
  padding: 10px 12px;
  pointer-events: none;
  @include shadow-1;

  .num {
    display: inline-block;
    font-size: 1.2em;
    margin: 3px 0;
  }
}

// Wrapper to make it easier to hover over data
.hour-wrapper {
  padding: 3px;
  height: 9px;

  &:hover {
    .hour {
      position: relative;
      opacity: 1 !important;
    }
    .tooltip {
      z-index: 5;
      opacity: 1;
    }
  }
}

.label {
  color: $color-font-body !important;
}

.daytime {
  text-align: right;

  span {
    display: inline-block;
    font-size: 0.8em;
    margin-left: 7px;
    margin-top: 2.5px;
  }
}
</style>
