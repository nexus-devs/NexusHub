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
                  <div v-for="s in serverlist.EU" :key="s" class="server">
                    <span>{{ s }}</span>
                    <div class="logo-wrapper">
                      <router-link :to="`/wow-classic/${serverSlug(s)}-alliance`"><img src="/img/wow-classic/ui/alliance.svg" alt="Alliance Logo" class="logo"></router-link>
                      <router-link :to="`/wow-classic/${serverSlug(s)}-horde`"><img src="/img/wow-classic/ui/horde.svg" alt="Horde Logo" class="logo"></router-link>
                    </div>
                  </div>
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
                  <div v-for="s in serverlist.US" :key="s" class="server">
                    <span>{{ s }}</span>
                    <div class="logo-wrapper">
                      <router-link :to="`/wow-classic/${serverSlug(s)}-alliance`"><img src="/img/wow-classic/ui/alliance.svg" alt="Alliance Logo" class="logo"></router-link>
                      <router-link :to="`/wow-classic/${serverSlug(s)}-horde`"><img src="/img/wow-classic/ui/horde.svg" alt="Horde Logo" class="logo"></router-link>
                    </div>
                  </div>
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
import utility from 'src/components/wow-classic/utility.js'

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

  created () {
    this.serverSlug = utility.serverSlug
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

  .server {
    // cursor: pointer;
    padding: 10px 15px;
    @include ease(0.15s);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    .logo-wrapper {
      opacity: 0;
      flex: 1;
      display: flex;
      justify-content: space-evenly;
    }
    .logo {
      height: 32px;
    }

    span {
      pointer-events: none;
      flex: 1;
      color: $color-font-paragraph;
    }
  }
  .server:hover {
    background: rgba(0,0,0,0.15);

    .logo-wrapper {
      opacity: 1;
    }
  }
}
</style>
