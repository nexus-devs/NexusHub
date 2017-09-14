<template>
  <div class="col-b time">
    <div class="field" v-bind:class="{ active }">
      <label>Time</label><br />
      <div class="input a-ie" v-on:click="toggle">
        <span v-bind:class="{ selected: selected === 'start' }">{{ from }}</span> -
        <span v-bind:class="{ selected: selected === 'end' }">{{ to }}</span>
        <img src="/img/ui/dropdown.svg" class="ico-16" alt="">
      </div>
      <slot></slot>
    </div>
    <div class="tools timepicker" v-bind:class="{ active }">
      <div class="suggestions row">
        <div class="col a-ie" v-for="suggestion in suggestions" v-on:click="select(suggestion)">
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
  sameElse: 'DD/MM/YYYY'
}

const store = {
  state: {
    focus: {
      start: {
        time: moment().endOf('day'),
      },
      end: {
        time: moment().subtract(7, 'days').startOf('day'),
        format: '7 days ago'
      }
    },
    compare: {
      start: {
        time: moment().subtract(7, 'days').endOf('day')
      },
      end: {
        time: moment().subtract(14, 'days').startOf('day')
      }
    }
  },
  mutations: {
    setFocusStart(state, date) {
      state.focus.start = date
    },
    setFocusEnd(state,  date) {
      state.focus.end = date
    },
    setCompareStart(state, date) {
      state.compare.start = date
    },
    setCompareEnd(state, date) {
      state.compare.end = date
    }
  }
}

export default {
  beforeCreate() {
    this.$store.registerModule('time', store)
  },
  data() {
    return {
      active: false,
      modified: false,
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
    from() {
      let date = this.$store.state.time.focus.start
      return date.format || date.time.calendar(null, calendarOptions)
    },
    to() {
      let date = this.$store.state.time.focus.end
      return date.format || date.time.calendar(null, calendarOptions)
    }
  },
  methods: {
    toggle() {
      this.selected = 'start'
      this.active = !this.active
    },
    select(date) {
      this.modified = true

      // Modify start of time range
      if (this.selected === 'start') {
        date.time = date.time.endOf('day')
        let timeend = this.$store.state.time.focus.end.time
        let compareDate = {
          time: timeend.subtract(date.time.diff(timeend, 'days'), 'days')
        }

        // Set new main time start and comparison end based on diff to
        // main time range end
        this.$store.commit('setFocusStart', date)
        this.$store.commit('setCompareEnd', compareDate)
        this.selected = 'end'
      }

      // Modify end of timerange
      else {
        date.time = date.time.startOf('day')
        let timestart = this.$store.state.time.focus.start.time
        let compareDate = {
          time: date.time.subtract(timestart.diff(date.time, 'days'), 'days')
        }

        // Set new time range ends, but also new start of comparison range
        // Since it starts where the focus range ends
        this.$store.commit('setFocusEnd', date)
        this.$store.commit('setCompareStart', this.$store.state.time.focus.end)
        this.$store.commit('setCompareEnd', compareDate)
        this.validate()
        this.toggle()
        this.selected = 'start'
      }
    },
    // Ensure picked time range makes sense (switch dates if necessary)
    validate() {
      const focusStart = this.$store.state.time.focus.start
      const focusEnd = this.$store.state.time.focus.end
      const compareStart = this.$store.state.time.compare.start
      const compareEnd = this.$store.state.time.compare.end

      if (focusStart.time < focusEnd.time) {
        this.$store.commit('setFocusStart', focusEnd)
        this.$store.commit('setFocusEnd', focusStart)
        this.$store.commit('setCompareStart', compareEnd)
        this.$store.commit('setCompareEnd', compareStart)
      }
    }
  }
}
</script>
