<template>
  <div>
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
    /**
     * Active state for class. Hidden when false
     */
    data() {
      return {
        active: false
      }
    },

    /**
     * Reactive values for active notification
     */
    computed: {
      title() {
        return this.$store.state.notifications.current.title
      },
      content() {
        return this.$store.state.notifications.current.content
      }
    },

    /**
     * Listen to notifications as soon as we load on the client
     */
    beforeMount() {
      this.listen()
    },

    /**
     * Modifiers for notification states
     */
    methods: {
      listen() {
        this.$blitz.subscribe('/notifications')
        this.$blitz.on('/notifications', notification => {
          // Push to store
          if (notification.game === 'warframe') {
            this.$store.commit('addNotification', notification.message)
            this.$store.commit('selectNotification', 0)
          }
          // Show notification for 5s
          this.activate()
        })
      },

      activate() {
        this.active = true
        setTimeout(() => {
          this.active = false
        }, 5000)
      },

      next() {
        this.$store.dispatch('nextNotification')
      },

      previous() {
        this.$store.dispatch('previousNotification')
      }
    }
  }
</script>


<style lang='scss' scoped>
  @import '~src/styles/partials/importer';

  .notification {
    position: fixed;
    overflow: hidden;
    background: rgba(47, 54, 60, 0.8);
    padding: 20px 10px;
    z-index: 3;
    right: 0;
    top: 80vh;
    transform: translateX(500px);
    @include ease-out(0.5s);
    @include shadow-3;

    .navigation {
      display: inline-block;
      vertical-align: middle;
      opacity: 0.5;
      @include ease(0.25s);

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

      h3 {
        font-weight: 400;
        font-size: 1.1em;
      }

      p {
        margin-top: 5px;
      }
    }

    &:hover {
      transform: translateX(0); // don't auto-hide on hover
    }

    &.active {
      transform: translateX(0);
    }
  }

  .hint {
    position: fixed;
    opacity: 0.1;
    border: 1px solid rgba(255,255,255,0.5);
    top: calc(80vh + 5px);
    right: -25px;
    height: 40px;
    width: 40px;
    @include ease(0.25s);

    img {
      margin-top: 9px;
    }

    &:hover {
      opacity: 1;
      border: 1px solid transparent;
    }
  }
</style>
