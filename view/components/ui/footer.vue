<template>
  <footer>
    <img src="/img/footer/nexus-logo.svg" alt="Nexus-Stats" class="ico-36 logo" v-on:mousedown="track"
      v-bind:style="{ transform: [`translate(${position[0]}px, ${position[1]}px)`] }">
    <img src="/img/memes/goose.png" class="ico-48 goose">
    <div class="resources">
      <router-link to="">Contact</router-link>
      <router-link to="">Open Source</router-link>
      <router-link to="">Developers</router-link>
      <router-link to="">Privacy Policy</router-link>
      <router-link to="">Imprint</router-link>
      <router-link to="">Sitemap</router-link>
    </div>
    <div class="brands">
      <a href="https://warframe.market"><img src="/img/footer/warframe-market.svg" class="ico-h-32" alt="Warframe Market"></a>
      <a href="https://discord.gg/TCxe6P4"><img src="/img/footer/discord.svg" class="ico-h-32" alt="Discord"></a>
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
      track() {
        document.onmousemove = this.move
        document.onmouseup = this.untrack
        setTimeout(() => {
          this.$store.dispatch('pushNotification', {
            title: '( ͡° ͜ʖ ͡°)',
            content: 'UGJ6ciBvbnB4IGZiYmEgc2JlIHpiZXI\ngZ2IgcGJ6ci4= 💗'
          })
        }, 1500)
      },
      untrack() {
        document.onmousemove = null
        document.onmouseup = null
      },
      move(event) {
        let posX = this.position[0]
        let posY = this.position[1]
        let updated = [posX += event.movementX, posY += event.movementY]
        this.position = updated
      }
    }
  }
</script>



<style lang='scss' scoped>
  @import '~src/styles/partials/importer';

  footer {
    margin-top: auto;
    text-align: center;
    padding: 0 0 20px;
    background: $colorBackgroundDarker;

    .logo {
      position: relative;
      z-index: 1;
      margin-top: 20px;
      opacity: 1;
      will-change: transform;
      padding: 15px;
      border-radius: 60px;
      background: $colorBackgroundDarker;

      &:hover{
        @include shadow-1;
      }
    }

    .goose {
      position: absolute;
      margin-left: -60px;
      margin-top: 30px;
      z-index: 0;
      border-radius: 60px;
    }

    .resources {
      max-width: $max-width;
      padding: 10px 0;
      margin: auto;

      a {
        color: $colorFontSubtle !important;
        padding: 0 10px;
        border-right: 1px solid $colorSubtle;
        font-size: 0.9em;
        line-height: 0.8;

        &:hover {
          color: white !important;
        }

        &:last-of-type {
          border-right: none;
        }

        @media (max-width: $breakpoint-s) {
          display: inline-block;
          margin: 5px 0;
        }
      }
    }

    .brands {
      margin-top: 5px;
      margin-bottom: 10px;

      a {
        opacity: 0.65;
        margin: 0 15px;

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

    @media (max-width: $breakpoint-s) {
      .logo, .goose {
        height: 28px;
        padding: 10px;
        margin-bottom: -10px;
      }
      .goose {
        height: 26px;
      }
    }
  }
</style>
