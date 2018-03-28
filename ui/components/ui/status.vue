<template>
  <div class="status" :class="{ offline }">
    <img src="/img/ui/error-loading.svg" class="ico-h-24" alt="loading">
    <p>{{ offline ? 'Connecting to the Nexus-Stats API...' : 'Connected!' }}</p>
  </div>
</template>



<script>
export default {
  computed: {
    offline() {
      return !this.$store.state.api.online
    }
  },

  mounted() {
    setTimeout(() => {
      this.update()
      this.listen()
    }, 5000)
  },

  methods: {
    update() {
      this.$store.commit('setStatus', this.$blitz.connection.client.connected)
    },
    listen() {
      setInterval(this.update, 1000)
    }
  },

  storeModule: {
    name: 'api',
    state: {
      online: true
    },
    mutations: {
      setStatus(state, online) {
        state.online = online
      }
    }
  }
}
</script>



<style lang="scss" scoped>
@import '~src/styles/partials/importer';

.status {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 56px;
  left: 56px;
  padding: 5px 0;
  width: calc(100% - 56px);
  text-transform: uppercase;
  font-size: 0.9em;
  color: $color-font-error;
  z-index: 0;
  transform: translateY(-40px);
  transition-delay: 1s;
  @include gradient-background-dg($color-error, $color-error-dark)
  @include shadow-1;
  @include ease(0.35s);

  img {
    margin-right: 3px;
  }
  @media (max-width: $breakpoint-m) {
    left: 0;
    width: 100%;
  }
  @media (max-width: $breakpoint-s) {
    font-size: 0.8em;
  }
}

.offline {
  transform: translateY(0);
}
</style>
