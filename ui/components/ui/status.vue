<template>
  <div :class="[{ offline }, theme.status]" class="status">
    <img :src="themeName === 'wow-classic' ? '/img/ui/status-loading-wow-classic.svg' : '/img/ui/status-loading.svg'" class="ico-h-24" alt="loading">
    <p>{{ offline ? 'Connecting to the NexusHub API...' : 'Connected!' }}</p>
  </div>
</template>



<script>
import getTheme from 'src/components/_theme.js'

export default {
  computed: {
    theme () {
      return getTheme(this)
    },
    themeName () {
      return getTheme(this, true)
    },
    offline () {
      return this.$store.state.api.offline
    }
  },

  mounted () {
    setInterval(() => {
      this.update()
    }, 5000)
  },

  methods: {
    update () {
      this.$store.commit('setApiStatus', this.$cubic.client.api.connection.readyState !== 1)
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


<style lang="scss" module="warframe">
@import '~src/styles/partials/importer';

.status {
  color: $color-font-body;
  background: $color-bg-darkest;
}
</style>

<style lang="scss" module="wow-classic">
@import '~src/styles/partials/wow-classic/importer';

.status {
  color: $color-font-body;
  background: $color-bg-darkest;
}
</style>

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
  @include uppercase;
  font-size: 0.9em;
  z-index: 1;
  transform: translateY(-40px);
  transition-delay: 1s;
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
