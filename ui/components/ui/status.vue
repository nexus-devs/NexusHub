<template>
  <div :class="{ offline }" class="status">
    <img src="/img/ui/status-loading.svg" class="ico-h-24" alt="loading">
    <p>{{ offline ? 'Connecting to the NexusHub API...' : 'Connected!' }}</p>
  </div>
</template>



<script>
export default {
  computed: {
    offline () {
      return this.$store.state.api.offline
    }
  },

  mounted () {
    setTimeout(() => {
      this.update()
    }, 2500)
  },

  methods: {
    update () {
      this.$store.commit('setApiStatus', this.$cubic.connection.client.readyState !== 1)
    }
  },

  storeModule: {
    name: 'api',
    state: {
      offline: false
    },
    mutations: {
      setApiStatus (state, status) {
        state.offline = status
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
  top: 0;
  padding: 5px 0;
  width: 100%;
  text-transform: uppercase;
  font-size: 0.9em;
  color: $color-font-body;
  z-index: 1;
  transform: translateY(-40px);
  transition-delay: 1s;
  background: $color-bg-darkest;
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
  transform: translateY(56px);
}
</style>
