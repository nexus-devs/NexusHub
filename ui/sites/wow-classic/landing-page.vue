<template>
  <div>
    <navigation :landing-page="true" />
    <app-content>
      <div class="landing-page">
        <div class="container">
          <div class="server-box">
            <h2>Europe</h2>
            <div class="server-list">
              <span v-for="s in serverlist.EU" :key="s">{{ s }}</span>
            </div>
          </div>
          <div class="server-box">
            <h2>United States</h2>
            <div class="server-list">
              <span v-for="s in serverlist.US" :key="s">{{ s }}</span>
            </div>
          </div>
        </div>
      </div>
    </app-content>
  </div>
</template>


<script>
import appContent from 'src/app-content.vue'
import meta from 'src/components/seo/meta.js'
import navigation from 'src/components/ui/nav/wow-classic.vue'

export default {
  components: {
    appContent,
    navigation
  },

  computed: {
    serverlist () {
      return { EU: this.$store.state.servers.EU, US: this.$store.state.servers.US }
    }
  },

  head: {
    title: 'NexusHub · Never miss out on a trade again!',
    meta: meta({
      title: 'NexusHub · Never miss out on a trade again!',
      description: 'Get real-time trading data and prices from more than 100,000 players in Warframe\'s Trade Chat, Warframe Market and more.'
    })
  }
}
</script>


<style lang='scss' scoped>
@import '~src/styles/partials/wow-classic/importer';

.landing-page {
  position: relative;
  width: 100%;
  min-height: calc(100vh - 56px);
  align-items: center;
  @include gradient-background-dg($color-bg, $color-bg-dark);
}

.container {
  display: flex;
  justify-content: space-around;
}
.server-box {
  width: 100%;
  padding: 0 10px;

  h2 {
    text-align: center;
  }
}
.server-list {
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  max-height: 50vh;
  background: $color-bg-dark;

  span {
    cursor: pointer;
    padding: 10px 15px;
    @include ease(0.15s);
  }
  span:hover {
    background: rgba(0,0,0,0.15);
  }
  span:not(.active) {
    color: $color-font-body;
  }
}
</style>
