<template>
  <div>
    <navigation :landing-page="true" />
    <app-content>
      <div class="landing-page">
        <div class="container">
          <div class="server-box">
            <module>
              <template slot="header">
                <h2>Europe</h2>
              </template>
              <template slot="body">
                <div class="server-list">
                  <span v-for="s in serverlist.EU" :key="s">{{ s }}</span>
                </div>
              </template>
            </module>
          </div>
          <div class="server-box">
            <module>
              <template slot="header">
                <h2>United States</h2>
              </template>
              <template slot="body">
                <div class="server-list">
                  <span v-for="s in serverlist.US" :key="s">{{ s }}</span>
                </div>
              </template>
            </module>
          </div>
        </div>
      </div>
    </app-content>
  </div>
</template>


<script>
import appContent from 'src/app-content.vue'
import meta from 'src/components/seo/meta.js'
import module from 'src/components/ui/module.vue'
import navigation from 'src/components/ui/nav/wow-classic.vue'

export default {
  components: {
    appContent,
    module,
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

  span {
    cursor: pointer;
    padding: 15px 15px;
    @include ease(0.15s);
    color: $color-font-paragraph;
  }
  span:hover {
    background: rgba(0,0,0,0.15);
  }
}
</style>
