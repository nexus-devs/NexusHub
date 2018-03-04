<template>
  <div class="notification-container">
    <div class="notification" v-bind:class="{ active }">
      <div class="navigation a-ie" v-on:click="next">
        <img src="/img/notifications/arrow-left.svg" class="ico-24" alt="next">
      </div>
      <img src="/img/notifications/alert.svg" class="ico-28" alt="notification">
      <div class="message">
        <h3>
          {{ title }}
        </h3>
        <p>
          {{ content }}
        </p>
      </div>
      <div class="navigation a-ie" v-on:click="previous">
        <img src="/img/notifications/arrow-right.svg" class="ico-24" alt="previous">
      </div>
    </div>
    <div class="hint a-ie" v-on:click="activate">
      <img src="/img/notifications/hint.svg" class="ico-20" alt="Show Notifications">
    </div>
  </div>
</template>



<script>
export default {
  computed: {
    title() {
      return this.$store.state.notifications.current.title
    },
    content() {
      return this.$store.state.notifications.current.content
    },
    active() {
      return this.$store.state.notifications.active
    }
  },

  /**
   * Listen to notifications as soon as we load on the client
   */
  mounted() {
    this.listen()
  },

  methods: {
    listen() {
      this.$blitz.subscribe('/notifications')
      this.$blitz.on('/notifications', notification => {
        // Push to store
        if (notification.game === this.$store.state.game.name || notification.game === 'global') {
          this.$store.dispatch('pushNotification', notification.message)
        }
      })
    },
    activate() {
      this.$store.dispatch('displayNotification')
    },
    next() {
      this.$store.dispatch('nextNotification')
    },
    previous() {
      this.$store.dispatch('previousNotification')
    }
  },

  storeModule: {
    name: 'notifications',
    state: {
      active: false,
      current: {
        title: 'No Notifications',
        content: 'Seems there\'s nothing new. We have dispatched a pigeon to deliver the latest news soon™'
      },
      selected: 0,
      list: []
    },
    actions: {
      nextNotification({ commit, state }) {
        let list = state.list
        let next = state.selected + 1
        commit('selectNotification', next >= list.length ? 0 : next)
      },
      previousNotification({ commit, state }) {
        let list = state.list
        let previous = state.selected - 1
        commit('selectNotification', previous < 0 ? list.length - 1 : previous)
      },
      displayNotification({ commit }) {
        commit('selectNotification', 0)
        commit('toggleNotification')
        setTimeout(() => commit('toggleNotification'), 5000)
      },
      pushNotification({ commit, dispatch }, notification) {
        commit('addNotification', notification)
        dispatch('displayNotification')
      }
    },
    mutations: {
      selectNotification(state, index) {
        let list = state.list
        let current = list[index]

        if (current) {
          state.selected = index
          state.current = current
        }
      },
      addNotification(state, notification) {
        state.list.unshift(notification)
      },
      toggleNotification(state) {
        state.active = !state.active
      }
    }
  }
}
</script>


<style lang='scss' scoped>
@import '~src/styles/partials/importer';

.notification {
  position: fixed;
  overflow: hidden;
  z-index: 2;
  right: 0;
  bottom: 15vh;
  background: $color-bg;
  padding: 15px 5px;
  transform: translateX(500px);
  transition-delay: 0.1s;
  pointer-events: none;
  @include ease-out(0.5s);
  @include shadow-3;
  @media (max-width: $breakpoint-s) {
    padding: 15px;
  }

  .navigation {
    display: inline-block;
    vertical-align: middle;
    opacity: 0.5;
    @include ease(0.25s);
    @media (max-width: $breakpoint-s) {
      padding: 0;
    }
    &:hover {
      opacity: 1;
    }
  }

  .ico-28 {
    vertical-align: top;
  }

  .message {
    display: inline-block;
    vertical-align: middle;
    margin-left: 5px;
    max-width: 300px;
    @media (max-width: $breakpoint-s) {
      max-width: 250px;
    }

    h3 {
      font-weight: 400;
      font-size: 1.1em;
    }

    p {
      margin-top: 5px;
    }
  }
  &:hover {
    pointer-events: all;
    transform: translateX(0); // don't auto-hide on hover
  }

  &.active {
    pointer-events: all;
    transform: translateX(0);
  }
}

.hint {
  position: fixed;
  overflow: hidden;
  z-index: 1;
  opacity: 0.1;
  border: 1px solid rgba(255,255,255,0.5);
  bottom: calc(15vh + 20px);
  right: -25px;
  height: 40px;
  width: 40px;
  @include ease(0.25s);

  img {
    margin-top: 9px;
    margin-left: 2px;
  }
  &:hover {
    opacity: 1;
    border: 1px solid transparent;
  }
}
</style>
