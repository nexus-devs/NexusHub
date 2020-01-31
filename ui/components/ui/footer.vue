<template>
  <footer :class="theme.footer">
    <div class="container">
      <div :class="theme.row" class="row row-b">
        <v-touch class="col-b goosetainer" @pan="move">
          <img :style="{ transform: [`translate(${position[0]}px, ${position[1]}px)`] }" src="/img/brand/nexushub-logo-typeface-bw.svg" alt="NexusHub"
               :class="theme.logo" class="ico-h-24 logo"
          >
          <img src="/img/memes/goose.png" class="ico-48 goose">
        </v-touch>
        <div class="col-b" />
        <div :class="theme['col-b']" class="col-b">
          <h4>Project</h4>
          <router-link to="/opensource">
            Open Source
          </router-link>
          <router-link to="/branding">
            Branding
          </router-link>
          <!-- <router-link to="/discordbot">Discord Bot</router-link> -->
        </div>
        <div :class="theme['col-b']" class="col-b">
          <h4>Developers</h4>
          <router-link to="/developers">
            Developer Hub
          </router-link>
          <router-link to="/developers/api/General/foo">
            API Docs
          </router-link>
        </div>
        <div :class="theme['col-b']" class="col-b">
          <h4>Company</h4>
          <router-link to="/company">
            About
          </router-link>
          <router-link to="/contact">
            Contact
          </router-link>
        </div>
        <div :class="theme['col-b']" class="col-b">
          <h4>Resources</h4>
          <router-link to="/privacy">
            Privacy Policy
          </router-link>
        </div>
      </div>
      <div class="brands">
        <a href="https://discord.gg/TCxe6P4" target="_blank">
          <img :src="themeName === 'wow-classic' ? '/img/footer/discord-wow-classic.svg' : '/img/footer/discord.svg'" class="ico-h-32" alt="Discord">
        </a>
        <a href="https://github.com/nexus-devs/nexus-stats" target="_blank">
          <img :src="themeName === 'wow-classic' ? '/img/footer/github-wow-classic.svg' : '/img/footer/github.svg'" class="ico-h-20 ico-github" alt="NexusHub on Github">
        </a>
      </div>
    </div>
  </footer>
</template>



<script>
import getTheme from 'src/components/_theme.js'

export default {
  data () {
    return {
      position: [0, 0]
    }
  },

  computed: {
    theme () {
      return getTheme(this)
    },
    themeName () {
      return getTheme(this, true)
    }
  },

  methods: {
    move (e) {
      if (e.isFinal) {
        const response = () => {
          this.$store.commit('addNotification', {
            title: 'Your deeds have been noted.',
            body: 'The goose does not forget.'
          })
          this.$store.commit('removeNotification', {
            title: 'A goose approaches.'
          })
        }

        setTimeout(() => this.$store.commit('addNotification', {
          title: 'A goose approaches.',
          body: 'Which path will you take?',
          buttons: [{
            text: 'Embrace the goose',
            fn: response
          }, {
            text: 'Punch it',
            fn: response
          }]
        }), 500)
      }
      this.position = [e.deltaX, e.deltaY]
    }
  }
}
</script>


<style lang="scss" module="warframe">
@import '~src/styles/partials/importer';

.footer {
  background: $color-bg-darkest;
}
.row {
  border-bottom: 1px solid $color-subtle-dark;
}
.col-b {
  a {
    color: $color-font-subtle !important;
  }
}
.logo {
  background: $color-bg-darkest;
}
</style>

<style lang="scss" module="wow-classic">
@import '~src/styles/partials/wow-classic/importer';

.footer {
  background: $color-bg-darkest;
}
.row {
  border-bottom: 1px solid $color-subtle-dark;
}
.col-b {
  a {
    color: $color-font-subtle !important;
  }
}
.logo {
  background: $color-bg-darkest;
}
</style>

<style lang='scss' scoped>
@import '~src/styles/partials/importer';

footer {
  margin-top: auto;
  padding: 10px 0 20px;

  .row {
    padding: 10 0;
  }

  .col-b {
    padding: 20px 10px;

    @media (max-width: $breakpoint-s) {
      padding: 5px 5px 20px;
    }
    &:first-of-type {
      padding-left: 0;
    }
    &:last-of-type {
      padding-right: 0;
    }
    // Dummy for mobile
    &:nth-of-type(2) {
      padding: 0;
      flex: 0;
      flex-basis: 0;

      @media (max-width: $breakpoint-s) {
        flex: 1;
        flex-basis: calc(50% - 50px);
      }
    }
    h4 {
      margin-top: 5px;
      margin-bottom: 10px;
      text-transform: none;
      letter-spacing: normal;
    }
    a {
      display: block;
      font-size: 0.95em;

      &:hover {
        color: white !important;
      }
    }
  }

  .logo {
    position: relative;
    z-index: 1;
    opacity: 1;
    will-change: transform;
    padding: 0;
    padding-bottom: 60px;
    padding-right: 20px;

    @media (max-width: $breakpoint-s) {
      margin-top: 10px;
      padding-bottom: 0;
    }
  }

  .goose {
    position: absolute;
    margin-left: -85px;
    margin-top: 10px;
    z-index: 0;
    border-radius: 60px;

    @media (max-width: $breakpoint-m) {
      display: none;
    }
  }

  .goosetainer {
    @media(max-width: $breakpoint-m) {
      pointer-events: none;
    }
  }

  .brands {
    margin-top: 25px;
    margin-bottom: 10px;

    a {
      opacity: 0.65;
      margin: 0 15px;

      &:first-of-type {
        margin-left: 0;
      }
      &:last-of-type {
        margin-right: 0;
      }
      &:hover {
        opacity: 1 !important;
      }
    }
    .ico-github {
      position: relative;
      top: -2px;
    }

    @media (max-width: $breakpoint-s) {
      margin-bottom: 0px;
    }
  }
}
</style>
