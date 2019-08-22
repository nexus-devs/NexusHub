<template>
  <div>
    <navigation/>
    <app-content>
      <ui-header>
        <h1>Get NexusHub on Discord!</h1>
        <p>Have NexusHub conveniently available in your discord server with NexusBot!</p>

        <a href="https://github.com/nexus-devs/nexus-bot/tree/rework" target="_blank" class="source">
          <img src="/img/developers/github.svg" class="ico-20" alt="Source Code on Github">
          <span>View source code.</span>
        </a>

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

            <div class="command">
              <div class="btn-subtle active route">
                <div class="verb">price-check</div>
                &lt;item&gt; [component]
              </div>
              <div class="btn-subtle active">Aliases: pc, pcheck</div>
              <div class="btn-subtle active">Throttling: 5 usages per 10 seconds</div>
              <p>Returns a comprehensive price check for an item or component.</p>
            </div>
            <div class="command">
              <div class="btn-subtle active route">
                <div class="verb">price-alert</div>
                &lt;item&gt; [component] [order type] [threshold type] &lt;price&gt;
              </div>
              <div class="btn-subtle active">Aliases: alert, palert</div>
              <div class="btn-subtle active">Throttling: 3 alerts per user</div>
              <p>Sets an alert for an item or component. The bot messages you, when the price hits the set threshold.</p>
            </div>
            <div class="command">
              <div class="btn-subtle active route">
                <div class="verb">price-alert-list</div>
                [operation] [list item]
              </div>
              <div class="btn-subtle active">Aliases: alert-list, palert-list</div>
              <p>Lists all set alerts or performs an operation on them.</p>
            </div>

            <div class="command">
              <div class="btn-subtle active route">
                <div class="verb">track</div>
              </div>
              <div class="btn-subtle active">Permissions: MANAGE_CHANNELS</div>
              <div class="btn-subtle active">Throttling: 1 channel per server</div>
              <p>Starts tracking the tradechat in the current channel. Only works on a server.</p>
            </div>
            <div class="command">
              <div class="btn-subtle active route">
                <div class="verb">untrack</div>
              </div>
              <div class="btn-subtle active">Permissions: MANAGE_CHANNELS</div>
              <p>Stops tracking the tradechat in the current channel. Only works if the tradechat is currently getting tracked.</p>
            </div>


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

.source {
  display: block;
  margin-top: 15px;
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
  p, span {
    font-size: 1.1em;
    max-width: 800px;
  }
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
  a {
    margin-top: 15px;
  }
}

.command {
  border-bottom: 1px solid $color-subtle-dark;
  margin-top: 15px;
  padding-bottom: 15px;
}
.btn-subtle {
  text-transform: none;
  pointer-events: none;
  font-size: 0.85em;

  &:not(.route) {
    background: $color-bg-darker;
  }
}
.route {
  display: inline-block;
  vertical-align: middle;
  margin-right: 15px;
  font-size: 1em;
  font-family: 'Consolas', Monospace;
  padding: 7px 12px;
}
.verb {
  display: inline-block;
  vertical-align: middle;
  font-family: 'Consolas', Monospace;
  color: $color-primary-subtle;
  font-weight: 600;
  margin-right: 3px;
}

section {
  margin-top: 40px;
  color: white;
  position: relative;
  left: -2vw; // For some reason the content just doesn't look centered.
}
</style>
