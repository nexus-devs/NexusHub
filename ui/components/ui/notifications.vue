<template>
  <div>
    <div class="notifications">
      <div class="nav-ico interactive" @click="toggle">
        <img src="/img/ui/notifications.svg" alt="Notifications" class="ico-h-20">
      </div>
      <div :class="[{ unread: unread.length }, theme['unread-bubble']]" class="unread-bubble" />
      <div :class="{ visible }" class="notification-container">
        <div :class="theme['notification-header']" class="notification-header">
          <span>Notifications</span>
        </div>
        <div :class="theme['notification-body']" class="notification-body">
          <div v-if="unread.length" class="notification-wrapper">
            <div v-for="notification in unread" :key="notification.title" class="notification">
              <h4>{{ notification.title }}</h4>
              <p>{{ notification.body }}</p>
              <div v-if="notification.buttons" :class="theme.footer" class="footer">
                <button v-for="button in notification.buttons" :key="button.text" @click="button.fn">
                  {{ button.text }}
                </button>
              </div>
              <img src="/img/ui/close.svg" alt="Dismiss" class="dismiss ico-h-20 interactive" @click="dismiss(notification)">
            </div>
          </div>
          <div v-else class="no-notifcations">
            No notifications. We have dispatched a pigeon to deliver the latest news soon 🕊️
          </div>
        </div>
      </div>
    </div>
    <div :class="{ visible }" class="hide" @click="toggle" />
  </div>
</template>



<script>
import getTheme from 'src/components/_theme.js'

export default {
  data () {
    return {
      visible: false
    }
  },

  computed: {
    theme () {
      return getTheme(this)
    },
    unread () {
      return this.$store.state.notifications.unread
    }
  },

  watch: {
    unread () {
      if (this.unread.length) {
        this.visible = true
      }
    }
  },

  mounted () {
    this.listen()
  },

  methods: {
    listen () {
      this.$cubic.subscribe('/notifications', notification => {
        if (notification.game === this.$store.state.game.name || notification.game === 'global') {
          this.$store.commit('addNotification', notification.message)
        }
      })
    },
    toggle () {
      this.visible = !this.visible
    },
    dismiss (notification) {
      this.$store.commit('removeNotification', notification)
    }
  },

  storeModule: {
    name: 'notifications',
    state: {
      unread: []
    },
    mutations: {
      addNotification (state, notification) {
        state.unread.push(notification)
      },
      removeNotification (state, notification) {
        state.unread.splice(state.unread.findIndex(n => n.title === notification.title), 1)
      }
    }
  }
}
</script>


<style lang="scss" module="warframe">
@import '~src/styles/partials/importer';

.notification-header {
  background: $color-bg;
}
.notification-body {
  background: $color-bg-dark;
}
.footer /deep/ button {
  @include gradient-background-dg(transparent, transparent);
  border: 1px solid $color-subtle;

  &:hover {
    @include gradient-background-dg($color-primary, $color-accent);
  }
}
.unread-bubble {
  border: 2px solid $color-bg-dark;
  @include gradient-background-dg($color-primary, $color-accent);
}
</style>

<style lang="scss" module="wow-classic">
@import '~src/styles/partials/wow-classic/importer';

.notification-header {
  background: $color-bg;
}
.notification-body {
  background: $color-bg-dark;
}
.footer /deep/ button {
  @include gradient-background-dg(transparent, transparent);
  border: 1px solid $color-subtle;

  &:hover {
    @include gradient-background-dg($color-primary, $color-accent);
  }
}
.unread-bubble {
  border: 2px solid $color-bg-dark;
  @include gradient-background-dg($color-primary, $color-accent);
}
</style>


<style lang='scss' scoped>
@import '~src/styles/partials/importer';

.notifications {
  position: relative;
  z-index: 1;

  @media (max-width: $breakpoint-s) {
    position: static;
  }
}

.nav-ico {
  display: inline-block;
}

.notification-container {
  position: absolute;
  overflow: hidden;
  right: 0;
  width: 450px;
  text-align: left;
  opacity: 0;
  transform: translateY(-5px);
  pointer-events: none;
  @include ease(0.15s);
  @include shadow-3;

  &.visible {
    transform: translateY(-1px); // -1px to avoid a very fine transparent line
    opacity: 1;
    pointer-events: all;
  }
  @media (max-width: $breakpoint-s) {
    margin-top: 7px;
    width: 100vw;
  }
}

.no-notifcations {
  padding: 30px;
}

.hide {
  pointer-events: none;
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;

  &.visible {
    pointer-events: all;
  }
  @media (max-width: $breakpoint-s) {
    display: none;
  }
}

.notification-header {
  padding: 15px 30px;
  color: white;
}

.notification-body {
  position: relative;
  overflow-y: scroll;
  min-height: 80px;
  max-height: calc(250px + 10vh);
}

.notification {
  @include field;
  position: relative;
  margin: 20px;
  padding: 20px;

  p {
    padding-top: 0;
    margin-top: 3px;
    font-size: 1em;
  }
  .dismiss {
    position: absolute;
    top: 15px;
    right: 15px;
    padding: 8px;
  }
}

.footer {
  margin-top: 20px;
}

.footer /deep/ button {
  margin-right: 10px;
  font-size: 0.9em;
  @include shadow-0;
  @include ease(0.25s);
  border-radius: 9999px !important;

  &:after {
    display: none;
  }
}

.unread-bubble {
  position: absolute;
  z-index: 1;
  top: 7px;
  right: 7px;
  font-size: 0.85em;
  color: white;
  height: 9px;
  width: 9px;
  border-radius: 999px;
  opacity: 0;
  transform: scale(0.75);
  pointer-events: none;
  @include ease(0.25s);
  animation-name: pulse;
  animation-timing-function: ease;
  animation-duration: 1.5s;
  animation-iteration-count: infinite;

  &.unread {
    transform: scale(1);
    opacity: 1;
    pointer-events: all;
  }
  @media (max-width: $breakpoint-s) {
    right: 30px;
    top: 13px;
  }
}

@keyframes pulse {
  0% {
    transform: scaleX(1);
  }
  50% {
      transform: scale3d(1.15,1.15,1.15);
  }
  100% {
      transform: scaleX(1);
  }
}
</style>
