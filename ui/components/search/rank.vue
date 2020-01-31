<template>
  <div class="col-b rank">
    <div class="field">
      <div class="input-container">
        <label>Rank</label><br>
        <div class="input interactive" @click="toggle">
          <span>{{ selected }}</span>
          <img src="/img/ui/dropdown.svg" class="ico-16" alt="">
        </div>
      </div>
      <slot />
    </div>
    <div :class="{ active }" class="tools ranks">
      <div class="ranks-head">
        <h3>Rank</h3>
        <span>- {{ selected }}</span>
      </div>
      <div ref="ranks" class="suggestions">
        <div v-for="suggestion in available" :key="suggestion" class="suggestion" @click="select(suggestion)">
          {{ suggestion }}
        </div>
      </div>
      <div class="ranks-input">
        <input v-model="input" type="text" placeholder="Enter Rank" @keydown.enter="select(input)">
      </div>
    </div>
  </div>
</template>



<script>
/**
 * Generate item ranks
 */
const available = []
for (let i = 0; i < 11; i++) {
  available.push(i)
}
available.push('Any Rank')


export default {
  data () {
    return {
      active: false,
      input: ''
    }
  },

  computed: {
    available () {
      return this.$store.state.rank.available
    },
    selected () {
      return this.$store.state.rank.selected
    }
  },

  methods: {
    toggle () {
      this.active = !this.active
      this.input = ''
    },
    select (rank) {
      this.$store.commit('setSearchRank', rank)
      this.toggle()
    }
  },

  storeModule: {
    name: 'rank',
    state: {
      available,
      selected: 'Any Rank'
    },
    mutations: {
      setSearchRank (state, rank) {
        state.selected = rank
      },
      appendSearchRank (state) {
        if (state.available[state.available.length - 1] !== state.available[0]) {
          state.available.push(state.available[0])
        }
      },
      shiftSearchRank (state) {
        state.available.shift()
      },
      popSearchRank (state) {
        state.available.pop()
      }
    }
  }
}
</script>
