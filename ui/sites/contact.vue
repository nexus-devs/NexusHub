<template>
  <div>
    <navigation />
    <app-content>
      <ui-header>
        <h1>Hey {{ user }}!</h1>
        <p>Wanna talk with us, or just feeling lonely? Hit us up on one of the channels below!</p>

        <a href="https://discord.gg/TCxe6P4" target="_blank" class="interactive comm discord">
          <img src="/img/contact/discord.svg" alt="Discord">
          <span>Discord</span>
        </a>
        <a href="mailto:contact@nexus-stats.com?Subject=Regarding%20NexusHub" class="interactive comm mail">
          <img src="/img/contact/mail.svg" alt="Mail">
          <span>Good ol' Mail</span>
        </a>
      </ui-header>
      <div class="container">
        <section>
          <img src="/img/ui/info.svg" alt="Information about Discord" class="ico-h-24">
          <span>Please note: Discord is the superior <s>siege engine</s> method of communication.</span>
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

  computed: {
    user () {
      if (this.$store.state.user) {
        return this.$store.state.user.name
      } else {
        return 'there'
      }
    }
  },

  head: {
    title: 'NexusHub · Contact',
    meta: meta({
      title: 'Contact us!',
      description: 'Get in touch with the NexusHub team. You can contact us through Mail or Discord.'
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
  width: 100px;
  height: 100px;
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
}
.discord {
  background: #7289DA;

  &:hover {
    background: #7289DA;
  }
}
.mail {
  top: 35px;

  img {
    height: 40px;
  }
  &:hover {
    @include field;
  }
}

section {
  text-align: center;
  margin-top: 40px;
  color: white;
  opacity: 0.5;
  position: relative;
  left: -2vw; // For some reason the content just doesn't look centered.
}
</style>
