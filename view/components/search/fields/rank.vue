<template>
  <div class="col-b rank">
    <div class="field">
      <div class="input-container">
        <label>Rank</label><br />
        <div class="input a-ie" v-on:click="toggle">
          <span>{{ selected }}</span>
          <img src="/img/ui/dropdown.svg" class="ico-16" alt="">
        </div>
      </div>
      <slot></slot>
    </div>
    <div class="tools ranks" v-bind:class="{ active }">
      <div class="ranks-head">
        <h3>Rank</h3>
        <span>- {{ selected }}</span>
      </div>
      <div class="suggestions" ref="ranks">
        <div class="suggestion" v-for="suggestion in available" v-on:click="select(suggestion)">
          {{ suggestion }}
        </div>
      </div>
      <div class="ranks-input">
        <input type="text" placeholder="Enter Rank" v-model="input" v-on:keydown.enter="select(input)">
      </div>
    </div>
  </div>
</template>



<script>
const available = []
for (let i = 0; i < 11; i++) {
  available.push(i)
}
available.push('Any Rank')

const store = {
  state: {
    available,
    selected: 'Any Rank'
  },
  mutations: {
    setSearchRank(state, rank) {
      state.selected = rank
    },
    appendSearchRank(state) {
      if (state.available[state.available.length - 1] !== state.available[0]) {
        state.available.push(state.available[0])
      }
    },
    shiftSearchRank(state) {
      state.available.shift()
    },
    popSearchRank(state) {
      state.available.pop()
    }
  }
}

export default {
  beforeCreate() {
    this.$store.registerModule('rank', store)
  },
  data() {
    return {
      active: false,
      input: ''
    }
  },
  computed: {
    available() {
      return this.$store.state.rank.available
    },
    selected() {
      return this.$store.state.rank.selected
    }
  },
  methods: {
    toggle() {
      this.active = !this.active
      this.input = ''
    },
    select(rank) {
      this.$store.commit('setSearchRank', rank)
      this.toggle()
    }
  }
}
</script>
