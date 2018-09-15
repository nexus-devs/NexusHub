<template>
  <div>
    <navigation/>
    <sidebar>
      <sidebar-search/>
    </sidebar>
    <app-content>
      <section>
        <div class="container">
          <div class="row">
            <div class="col">
              <h1>
                Building a platform <br>that matters
              </h1>
              <p>
                NexusHub is an open source project completely
                powered by its community, so anyone is welcome to
                build their own vision of this platform for any game they like.
                All while getting the full revenue for what you've built in return!
              </p>
              <p class="typer">
                <span>Want to</span>
                <vue-typer :text="['join a family of developers?', 'create awesome tools for the game you love?', 'make a living with your passion for games?']"/>
              </p>
              <a href="https://discord.gg/TCxe6P4" target="_blank" class="btn">
                Join us on Discord
              </a>
            </div>
            <div class="col img-col">
              <img src="/img/open-source/coding.svg" class="codez" alt="">
            </div>
          </div>
        </div>

      </section>
      <section>
        <div class="container repos">
          <h2>Here's some stuff that we've built so far.</h2>
          <div class="row-margin">
            <a href="https://github.com/nexus-devs/NexusHub" target="_blank" class="col-b">
              <module class="a-ie">
                <template slot="header">
                  <img src="/img/brand/nexushub-logo-bw.svg" class="ico-h-32" alt="NexusHub">
                  <h3>NexusHub</h3>
                </template>
                <template slot="body">
                  <p>Economy Analytics and Game Data for Warframe.</p>
                </template>
              </module>
            </a>

            <a href="https://github.com/cubic-js/cubic" target="_blank" class="col-b">
              <module class="a-ie">
                <template slot="header">
                  <img src="/img/open-source/cubic.svg" class="ico-h-32" alt="NexusHub">
                  <h3>Cubic</h3>
                </template>
                <template slot="body">
                  <p>Fully Modular Javascript App Platform.</p>
                </template>
              </module>
            </a>

            <a href="https://github.com/nexus-devs/beholder" target="_blank" class="col-b">
              <module class="a-ie">
                <template slot="header">
                  <img src="/img/open-source/beholder.svg" class="ico-h-32" alt="NexusHub">
                  <h3>Beholder</h3>
                </template>
                <template slot="body">
                  <p>Layout detection framework for DirectX11 applications.</p>
                </template>
              </module>
            </a>

            <a href="https://github.com/WFCD/warframe-items" target="_blank" class="col-b">
              <module class="a-ie">
                <template slot="header">
                  <img src="/img/open-source/warframe-items.svg" class="ico-h-32" alt="NexusHub">
                  <h3>warframe-items</h3>
                </template>
                <template slot="body">
                  <p>Complete collection of data for every item in Warframe.</p>
                </template>
              </module>
            </a>
          </div>
        </div>
      </section>
      <section>
        <div class="container contribute">
          <h2>Want to contribute?</h2>
          <p>
            We made some easy guides which teach you how to build a
            feature like the <a @click="demoNotifications">notification box.</a>
          </p>
          <router-link to="/developers/contributing" class="btn-outline">
            Building an API endpoint
          </router-link>
          <router-link to="/developers/contributing" class="btn-outline">
            Building a UI component
          </router-link>
        </div>
      </section>
    </app-content>
  </div>
</template>



<script>
import navigation from 'src/components/ui/nav/general.vue'
import appContent from 'src/app-content.vue'
import sidebar from 'src/components/ui/sidebar/sidebar.vue'
import sidebarSearch from 'src/components/ui/sidebar/search.vue'
import module from 'src/components/ui/module.vue'
let VueTyper
try {
  window
  VueTyper = require('vue-typer').VueTyper
} catch (err) {
  // SSR - don't load
}

export default {
  components: {
    navigation,
    appContent,
    sidebar,
    sidebarSearch,
    VueTyper,
    module
  },

  methods: {
    demoNotifications () {
      this.$store.commit('addNotification', {
        title: 'This notification box..',
        body: '..to be precise.'
      })
    }
  }
}
</script>



<style lang='scss' scoped>
@import '~src/styles/partials/importer';

section:first-of-type {
  padding: 100px 0;
  background-size: 450px;
  background-repeat: repeat;
  background-image: url('/img/developers/circuit-board.svg');

  h1 {
    font-size: 2.8em;

    a {
      color: $color-primary-subtle !important;
      font-family: 'Circular';
    }
  }
  p {
    margin: 20px 0 10px;
    font-size: 1.15em;
    color: white;
    max-width: 600px;
  }
}

.typer {
  span {
    font-family: 'Consolas', monospace;
    font-size: 1.1em;
  }
}
/deep/ .vue-typer {
  margin-left: 5px;

  span {
    font-family: 'Consolas', monospace;
    color: white !important;
  }
  .custom.char {
    &.selected {
      background: #4286f4;
    }
  }
  .custom.caret {
    background: white;
  }
}
.btn {
  display: inline-block;
  margin-top: 20px;
}
.btn-outline {
  display: inline-block;
  margin-top: 20px;
  padding: 12px 15px;
}
.img-col {
  text-align: center;

  @media (max-width: $breakpoint-m) {
    display: none;
  }
}
.codez {
  height: 300px;
  margin-top: 25px;
}

/**
 * Open source repos
 */
.repos {
  padding: 20px 0;

  h2 {
    margin-bottom: 20px;
  }
}

/deep/ .module {
  min-width: 225px;

  .header {
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  h3 {
    margin-top: 10px;
    font-size: 1em !important;
  }
}

.contribute {
  padding-top: 20px;

  .btn-outline {
    border-radius: 2px;
    border: none;
    padding: 20px 20px 18px;
    font-family: 'Circular';

    &:first-of-type {
      background: #4286f4;
    }
    &:nth-of-type(2) {
      background: $color-primary-subtle;
    }
    &:before {
      border-radius: 2px;
    }
  }
  p a {
    cursor: pointer;
  }
}
</style>
