<template>
  <div class="notification-container">
    <div class="notification" :class="{ active, hide }" v-on:mouseover="markRead" v-on:click.right.prevent="deactivate">
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
    <div class="hint a-ie" :class="{ unread }" v-on:click="activate">
      <img src="/img/notifications/hint.svg" class="ico-20" alt="Show Notifications">
    </div>
    <div class="unread-bubble" :class="{ unread }" v-on:click.right.prevent="markRead">
      {{ unread }}
    </div>
  </div>
</template>



<script>
let toggleTimeout

export default {
  computed: {
    title() {
      return this.$store.state.notifications.current.title
    },
    content() {
      return this.$store.state.notifications.current.content
    },
    unread() {
      return this.$store.state.notifications.unread
    },
    active() {
      return this.$store.state.notifications.active
    },
    hide() {
      return this.$store.state.notifications.hide
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
      this.$cubic.subscribe('/notifications', notification => {
        if (notification.game === this.$store.state.game.name || notification.game === 'global') {
          this.$store.dispatch('pushNotification', notification.message)
        }
      })
    },
    activate() {
      if (this.$store.state.notifications.hide) {
        this.$store.commit('toggleNotificationHiddenState')
      }
      this.$store.dispatch('displayNotification')
    },
    deactivate() {
      this.$store.commit('toggleNotification')
      clearTimeout(toggleTimeout)
      this.$store.commit('toggleNotificationHiddenState')
    },
    next() {
      this.$store.dispatch('nextNotification')
    },
    previous() {
      this.$store.dispatch('previousNotification')
    },
    markRead() {
      if (this.$store.state.notifications.unread) {
        this.$store.commit('resetUnread')
      }
    }
  },

  storeModule: {
    name: 'notifications',
    state: {
      active: false,
      hide: false,
      current: {
        title: 'No Notifications',
        content: 'Seems there\'s nothing new. We have dispatched a pigeon to deliver the latest news soon™'
      },
      selected: 0,
      unread: 0,
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
        clearTimeout(toggleTimeout)
        commit('selectNotification', 0)
        commit('toggleNotification')
        toggleTimeout = setTimeout(() => commit('toggleNotification'), 5000)
      },
      pushNotification({ commit, dispatch }, notification) {
        commit('addNotification', notification)
        commit('incrementUnread')
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
      incrementUnread(state) {
        state.unread++
      },
      resetUnread(state) {
        state.unread = 0
      },
      toggleNotification(state) {
        state.active = !state.active
      },
      toggleNotificationHiddenState(state) {
        state.hide = !state.hide
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
  will-change: transform;
  transition-delay: 0.1s;
  pointer-events: none;
  @include ease-out(0.5s);
  @include shadow-3;
  @media (max-width: $breakpoint-s) {
    padding: 15px;
  }
  &:hover {
    pointer-events: all;
    transform: translateX(0); // don't auto-hide on hover
  }
  &.active {
    pointer-events: all;
    transform: translateX(0);
  }
  &.hide {
    transform: translateX(500px);
    pointer-events: none;
  }
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
    padding-top: 0;
    border-top: 0;
    margin-top: 5px;
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
  &.unread {
    opacity: 0.5;
  }
  &:hover {
    opacity: 1;
    border: 1px solid transparent;
  }
  &.unread {
    border: 1px solid rgba(255,255,255,0.5);
  }
}

.unread-bubble {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  right: 15px;
  bottom: calc(15vh + 50px);
  font-size: 0.85em;
  color: white;
  height: 30px;
  width: 30px;
  border-radius: 25px;
  opacity: 0;
  transform: scale(0.75);
  cursor: pointer;
  pointer-events: none;
  @include gradient-background-dg($color-primary, $color-accent);
  @include ease(0.25s);

  &.unread {
    transform: scale(1);
    opacity: 1;
    pointer-events: all;
  }
}
</style>
