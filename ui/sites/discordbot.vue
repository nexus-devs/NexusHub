<template>
  <div>
    <navigation/>
    <app-content>
      <ui-header>
        <h1>Get NexusHub on Discord!</h1>
        <p>Have NexusHub conveniently available in your discord server with NexusBot!</p>

        <a href="https://discordapp.com/oauth2/authorize?&client_id=590557310053777428&scope=bot&permissions=0" target="_blank" class="interactive comm">
          <img src="/img/contact/discord.svg" alt="Discord">
          <span>Invite NexusBot</span>
        </a>
      </ui-header>

      <div class="cute-fluff">
        <img src="/img/company/blobot.svg" alt="Blobot" class="blobot">
      </div>

      <div class="container-dark">
        <section>
          <div class="sub-container">
            <h2>Features</h2>
            <div class="features">
              <p>📈 Comprehensive price check for Warframe items and components</p>
              <p>🔔 Alerts when an item or component hits a certain price</p>
              <p>💬 Live trade chat tracking</p>
            </div>
          </div>
        </section>
      </div>

      <div class="container-light">
        <section>
          <div class="sub-container">
            <h2>Commands</h2>
          </div>
        </section>
      </div>

    </app-content>
  </div>
</template>



<script>
import appContent from 'src/app-content.vue'
import meta from 'src/components/seo/meta.js'
import navigation from 'src/components/ui/nav/warframe.vue'
import uiHeader from 'src/components/ui/header.vue'

export default {
  components: {
    navigation,
    appContent,
    uiHeader
  },

  head: {
    title: 'NexusHub · Discord Bot',
    meta: meta({
      title: 'NexusBot for Discord',
      description: 'Get NexusBot for Discord and have the full power of NexusHub conveniently available on your server.'
    })
  }
}
</script>



<style lang="scss" scoped>
@import '~src/styles/partials/importer';

/deep/ header .container {
  text-align: center;
  padding-bottom: 0;
  padding-top: 200px;
  position: relative;
  left: -2vw; // For some reason the content just doesn't look centered.

  h1 {
    font-size: 2.6em;
  }
  p {
    font-size: 1.1em;
    margin: auto;
  }
}

.comm {
  @include field;
  position: relative;
  top: 40px;
  display: inline-flex;
  justify-content: center;
  flex-direction: column;
  border-radius: 2px;
  padding: 20px;
  margin-top: 60px;
  width: 200px;
  height: 80px;
  margin-left: 20px;

  &:first-of-type {
    margin-left: 0;
  }
  &:before {
    border-radius: 0;
  }
  img {
    height: 50px;
  }
  span {
    display: block;
    color: white;
  }

  background: #7289DA;

  &:hover {
    background: #7289DA;
  }
}

.cute-fluff {
  text-align: center;
  position: relative;
  overflow: hidden;
  height: 400px;
  top: -250px;
  margin-top: 100px;
  margin-bottom: -300px;
  z-index: 0;
  left: -2vw;
  .blobot {
    position: relative;
    top: 220px;
    max-height: 200px;
  }
}

.container-light {
  text-align: left;
  position: relative;
  overflow: hidden;
  padding: 40px 0 20px 100px;
  background: $color-bg-dark;
}
.container-dark {
  text-align: center;
  position: relative;
  overflow: hidden;
  padding: 40px 0 20px;
  background: $color-bg-darker;
}
.features {
  display: inline-block;
  text-align: left;
}
.sub-container {
  max-width: 800px;
  margin: auto;

  p {
    border: none;
    padding: 0;
    margin-top: 20px;
  }
  h1 {
    font-weight: 600;
    max-width: 600px;
    line-height: 1.2;
    margin: 60px 0;
  }
  h2 {
    font-size: 1.6em;
  }
  p, span {
    font-size: 1.1em;
    max-width: 800px;
  }
  a {
    margin-top: 15px;
  }
}

section {
  margin-top: 40px;
  color: white;
  position: relative;
  left: -2vw; // For some reason the content just doesn't look centered.
}
</style>
