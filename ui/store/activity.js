export default {
  name: 'activity',

  state: {
    data: [],
    timerange: 30
  },

  mutations: {
    setActivityData (state, data) {
      // Adjust from UTC
      let all = []
      const tz = new Date().getTimezoneOffset() / 60

      // Get all hours without days so we can shift hours between days
      for (const day of data) {
        for (const hour of day.hours) {
          all.push(hour)
        }
      }

      // Shift every element by timezone offset
      all = all.map((h, i) => {
        const offset = i + tz

        if (offset > all.length) {
          return all[offset - all.length]
        }
        else if (offset < 0) {
          return all[all.length + offset]
        }
        else {
          return all[offset]
        }
      })

      // Re-apply to days
      for (let i = 0; i < data.length; i++) {
        data[i] = {
          day: data[i].day,
          hours: all.slice(i * 24, (i + 1) * 24) // previous 24h to next 24h
        }
      }
      state.data = data
    },

    setActivityTimerange (state, days) {
      state.timerange = days
    }
  }
}
