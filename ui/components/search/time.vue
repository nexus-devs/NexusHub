<template>
  <div class="col-b time">
    <div :class="{ active }" class="field">
      <label>Time</label><br>
      <div class="input interactive" @click="toggle">
        <span :class="{ selected: selected === 'start' }">{{ from }}</span> -
        <span :class="{ selected: selected === 'end' }">{{ to }}</span>
        <img src="/img/ui/dropdown.svg" class="ico-16" alt="">
      </div>
      <slot />
    </div>
    <div :class="{ active }" class="tools timepicker">
      <div class="suggestions row">
        <div v-for="suggestion in suggestions" :key="suggestion.format" class="col interactive" @click="select(suggestion)">
          {{ suggestion.format }}
        </div>
      </div>
    </div>
  </div>
</template>



<script>
import moment from 'moment'

const calendarOptions = {
  sameDay: '[Today]',
  nextDay: '[Tomorrow]',
  nextWeek: 'dddd',
  lastDay: '[Yesterday]',
  lastWeek: '[Last] dddd',
  sameElse: 'L'
}
const getDate = (date) => date instanceof moment ? { time: date, format: date.calendar(null, calendarOptions) } : date


export default {
  data () {
    return {
      active: false,
      selected: 'start',
      suggestions: [{
        time: moment(),
        format: moment().calendar(null, calendarOptions)
      }, {
        time: moment().subtract(7, 'days'),
        format: '7 days ago'
      }, {
        time: moment().subtract(30, 'days'),
        format: '30 days ago'
      }]
    }
  },

  computed: {
    from () {
      const date = this.$store.state.time.focus.start
      return date.format || date.time.calendar(null, calendarOptions)
    },
    to () {
      const date = this.$store.state.time.focus.end
      return date.format || date.time.calendar(null, calendarOptions)
    }
  },

  methods: {
    toggle () {
      this.selected = 'start'
      this.active = !this.active
    },
    select (date) {
      const time = this.$store.state.time

      // Modify start of time range
      if (this.selected === 'start') {
        date.time = date.time.endOf('day')
        this.$store.commit('setTimeFocusStart', date)
        this.selected = 'end'
      }

      // Modify end of timerange
      else {
        date.time = date.time.startOf('day')
        this.$store.commit('setTimeFocusEnd', date)
        this.validate()
        this.toggle()
        this.selected = 'start'
      }

      // Set modified if the default selection was changed
      if (time.focus.start.format !== 'Today' || time.focus.end.format !== '7 days ago') {
        this.$store.commit('setTimeModified', true)
      }

      // Default format was re-selected, so ensure the '7 days ago' format
      // is applied again. Seems there's no better way to handle this.
      else {
        this.$store.commit('setTimeModified', false)
        this.$store.state.time.focus.end.format = '7 days ago'
      }
    },

    // Ensure picked time range makes sense (switch dates if necessary)
    validate () {
      const focusStart = this.$store.state.time.focus.start
      const focusEnd = this.$store.state.time.focus.end

      if (focusStart.time < focusEnd.time) {
        this.$store.commit('setTimeFocusStart', focusEnd)
        this.$store.commit('setTimeFocusEnd', focusStart)
      }
    }
  },

  storeModule: {
    name: 'time',
    reregister: true,
    state: {
      modified: false,
      focus: {
        start: {
          time: moment().endOf('day')
        },
        end: {
          time: moment().subtract(7, 'days').startOf('day'),
          format: '7 days ago'
        }
      },
      compare: {
        start: {
          time: moment().subtract(8, 'days').endOf('day')
        },
        end: {
          time: moment().subtract(14, 'days').startOf('day')
        }
      }
    },
    mutations: {

      // Focus time range. Automatically adjust to "previous period" when changing
      setTimeFocusStart (state, date) {
        const focusStart = getDate(date)
        const focusEnd = moment(state.focus.end.time)
        const compareStart = moment(state.compare.start.time)

        // Set new time range start and resize the comparison range by "moving"
        // the compare end back or forth by as much as the focus start has been
        // moved
        const compareEnd = compareStart.subtract(focusStart.time.diff(focusEnd, 'days'), 'days')
        state.focus.start = focusStart
        state.compare.end = getDate(compareEnd)
      },
      setTimeFocusEnd (state, date) {
        const focusEnd = getDate(date)
        const focusStart = moment(state.focus.start.time)
        const compareStart = moment(focusEnd.time).subtract(1, 'days')

        // Set new focus end and set the comparison start to be the day before.
        // The new comparison end is the diff between the new focus end and start
        // similar to the approach above.
        const compareEnd = moment(compareStart.valueOf()).subtract(focusStart.diff(focusEnd.time, 'days'), 'days')
        state.focus.end = focusEnd
        state.compare.start = getDate(compareStart)
        state.compare.end = getDate(compareEnd)
      },


      // Comparison range setters. Just apply the explicit value.
      setTimeCompareStart (state, date) {
        state.compare.start = getDate(date)
      },
      setTimeCompareEnd (state, date) {
        state.compare.end = getDate(date)
      },


      // Determine wether or not the default time range was changed. This is
      // important so we query the cached data (without query params) instead of
      // performing a custom time range query.
      setTimeModified (state, bool) {
        state.modified = getDate(bool)
      }
    }
  }
}
</script>
