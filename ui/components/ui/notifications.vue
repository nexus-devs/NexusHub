<template>
  <div>
    <div class="notifications">
      <div class="nav-ico" @click="toggle">
        <img src="/img/ui/notifications.svg" alt="Notifications" class="ico-h-20">
      </div>
      <div :class="{ unread: unread.length }" class="unread-bubble"/>
      <div :class="{ visible }" class="notification-container">
        <div class="notification-header">
          <span>Notifications</span>
        </div>
        <div class="notification-body">
          <div v-if="unread.length" class="notification-wrapper">
            <div v-for="notification in unread" :key="notification.title" class="notification">
              <h4>{{ notification.title }}</h4>
              <p>{{ notification.body }}</p>
              <img src="/img/ui/close.svg" alt="Dismiss" class="dismiss ico-h-20" @click="dismiss(notification)">
            </div>
          </div>
          <div v-else class="no-notifcations">
            No notifications. We have dispatched a pigeon to deliver the latest news soon 🕊️
          </div>
        </div>
      </div>
    </div>
    <div :class="{ visible }" class="hide" @click="toggle"/>
  </div>
</template>



<script>
export default {
  data () {
    return {
      visible: false
    }
  },

  computed: {
    unread () {
      return this.$store.state.notifications.unread
    }
  },

  watch: {
    unread () {
      this.visible = true
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


<style lang='scss' scoped>
@import '~src/styles/partials/importer';

.notifications {
  position: relative;
  z-index: 1;
}

.nav-ico {
  display: inline-block;
  @include ie();
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
    transform: translateY(0);
    opacity: 1;
    pointer-events: all;
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
}

.notification-header {
  background: $color-bg;
  padding: 15px 30px;
  color: white;
}

.notification-body {
  position: relative;
  overflow-y: scroll;
  background: $color-bg-dark;
  min-height: 80px;
  max-height: 250px;
}

.notification {
  position: relative;
  margin: 20px;
  padding: 20px;
  background: $color-bg;

  p {
    padding-top: 0;
  }
  .dismiss {
    position: absolute;
    top: 15px;
    right: 15px;
    @include ie;
    padding: 8px;
  }
}

.unread-bubble {
  position: absolute;
  z-index: 1;
  top: 9px;
  right: 9px;
  font-size: 0.85em;
  color: white;
  height: 11px;
  width: 11px;
  border-radius: 25px;
  opacity: 0;
  transform: scale(0.75);
  pointer-events: none;
  @include gradient-background-dg($color-primary, $color-accent);
  @include ease(0.25s);
  animation-name: pulse;
  animation-timing-function: ease;
  animation-duration: 1.75s;
  animation-iteration-count: infinite;

  &.unread {
    transform: scale(1);
    opacity: 1;
    pointer-events: all;
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
