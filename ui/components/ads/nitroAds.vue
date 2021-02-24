<template>
  <div ref="venatusAd"
       :class="[{ 'blocked-unit': blocked, 'ad-unit': !blocked }, blocked ? theme.blocked : '']"
       class="layout-center vm-placement"
       data-id="601a74e94b1a0874cf35a794"
  >
    <span v-if="blocked">Advertising seems to be blocked by your browser. This is fine.</span>
    <span v-if="blocked">NexusHub is completely free and we want it to stay that way.
      Advertising is currently our only income to pay for the servers and to help us to develop NexusHub even further!</span>
    <span v-if="blocked">Please consider adding an exception for NexusHub.co on your Adblocker.
      If you think that any ads are intrusive or inappropriate, feel free to contact us.</span>
  </div>
</template>



<script>
import getTheme from 'src/components/_theme.js'

export default {
  props: ['name', 'maxHeight', 'maxWidth'],

  data () {
    return {
      blocked: false
    }
  },

  computed: {
    theme () {
      return getTheme(this)
    }
  },

  mounted () {
    this.$nextTick(() => {
      // eslint-disable-next-line camelcase
      window.top.__vm_add = window.top.__vm_add || []
      window.top.__vm_add.push(this.$refs.venatusAd)
    })
  },

  beforeDestroy () {
    // eslint-disable-next-line camelcase
    window.top.__vm_remove = window.top.__vm_remove || []
    window.top.__vm_remove.push(this.$refs.venatusAd)
  }
}
</script>


<style lang="scss" module="warframe">
@import '~src/styles/partials/importer';

.blocked {
  border-color: $color-bg !important;

  span {
    color: $color-font-body;
  }
}
</style>

<style lang="scss" module="wow-classic">
@import '~src/styles/partials/wow-classic/importer';

.blocked {
 border-color: $color-bg !important;

  span {
    color: $color-font-body;
  }
}
</style>

<style lang="scss">
@import '~src/styles/partials/importer';

.ad-unit {
  display: block;
  position: relative;
  overflow: hidden; // for border-radius
  margin: 24px 0;
  border-radius: 3px;
}

// Need separate class because ad-unit is on some adblock lists
.blocked-unit {
  display: block;
  padding: 25px;
  border: 2px solid;
  border-radius: 2px;

  span {
    font-size: 0.9em;
    display: flex;
    &:not(:first-of-type) {
      margin-top: 10px;
    }
  }
}
</style>
