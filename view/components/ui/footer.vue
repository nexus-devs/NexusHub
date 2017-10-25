<template>
  <footer>
    <div class="g-ct">
      <div class="row row-b">
        <v-touch class="col-b" v-on:pan="move">
            <img src="/img/footer/nexus-logo.svg" alt="Nexus-Stats" class="ico-h-28 logo"
              v-bind:style="{ transform: [`translate(${position[0]}px, ${position[1]}px)`] }">
            <img src="/img/memes/goose.png" class="ico-48 goose">
        </v-touch>
        <div class="col-b"></div>
        <div class="col-b">
          <h4>Product</h4>
          <router-link to="/open-source">Open Source</router-link>
          <router-link to="/branding">Branding</router-link>
        </div>
        <div class="col-b">
          <h4>Developers</h4>
          <a href="https://drive.google.com/open?id=16rbyQAG1cgQhwfFfXcHqn-o8txZ5dAZBf4hzr3VeJJE" target="_blank">API Documentation</a>
          <router-link to="/contribute">Contribute</router-link>
        </div>
        <div class="col-b">
          <h4>Company</h4>
          <router-link to="/company">About</router-link>
          <router-link to="/contact">Contact</router-link>
        </div>
        <div class="col-b">
          <h4>Resources</h4>
          <router-link to="/privacy">Privacy Policy</router-link>
          <router-link to="/imprint">Imprint</router-link>
          <a href="/sitemap.txt">Sitemap</a>
        </div>
      </div>
      <div class="brands">
        <a href="https://discord.gg/TCxe6P4" target="_blank"><img src="/img/footer/discord.svg" class="ico-h-32" alt="Discord"></a>
        <a href="https://warframe.market" target="_blank"><img src="/img/footer/warframe-market.svg" class="ico-h-32" alt="Warframe Market"></a>
      </div>
    </div>
  </footer>
</template>



<script>
  export default {
    data() {
      return {
        position: [0, 0]
      }
    },

    methods: {
      move(e) {
        if (e.isFinal) {
          return this.$store.dispatch('pushNotification', {
            title: '( ͡° ͜ʖ ͡°)',
            content: 'UGJ6ciBvbnB4IGZiYmEgc2JlIHpiZXI\ngZ2IgcGJ6ci4= 💗'
          })
        }
        this.position = [e.deltaX, e.deltaY]
      }
    }
  }
</script>



<style lang='scss' scoped>
  @import '~src/styles/partials/importer';

  footer {
    margin-top: auto;
    padding: 0 0 20px;
    background: $colorBackgroundDarkest;

    .row {
      padding: 10 0;
      border-bottom: 1px solid $colorSubtleDark;
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
        font-size: 0.9em;
        margin-bottom: 10px;
      }
      a {
        display: block;
        font-size: 0.9em;
        color: $colorFontSubtle !important;

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
      background: $colorBackgroundDarkest;
      padding: 0;
      padding-bottom: 60px;
      padding-right: 20px;

      @media(max-width: $breakpoint-s) {
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

      @media (max-width: $breakpoint-s) {
        display: none;
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

      @media (max-width: $breakpoint-s) {
        margin-bottom: 0px;

        img {
          height: 28px;
        }
      }
    }
  }
</style>
