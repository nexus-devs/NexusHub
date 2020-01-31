<template>
  <div>
    <navigation />
    <app-content>
      <section>
        <div class="container">
          <h1>
            Build awesome tools that reach thousands of gamers with
            <router-link to="/developers/api/Warframe-Orders/orders">
              trading data
            </router-link>,
            <router-link to="/developers/api/Warframe-Items/base">
              item data
            </router-link>, and
            <router-link to="/developers/api/General/foo">
              anything else on this platform
            </router-link>.
          </h1>
          <p>
            These pages are made to help you build up your tools with data from NexusHub.
          </p>
          <router-link to="/developers/api/General/foo" class="btn-outline">
            API Docs
          </router-link>
        </div>
      </section>
      <section>
        <div class="container sign-deal-with-the-devil-kappa123">
          <h2>Feeling especially awesome?</h2>
          <p>
            If you think your tool would be a good fit as an addition to NexusHub,
            <router-link to="/contact">
              let us know!
            </router-link> We'd love to help you
            integrate and maintain your idea on this site and serve it to millions of people,
            while <b>you</b> get the revenue in return.
          </p>
          <a href="https://discord.gg/TCxe6P4" target="_blank" class="btn-outline">
            Join us on Discord
          </a>
        </div>
      </section>
    </app-content>
  </div>
</template>



<script>
import appContent from 'src/app-content.vue'
import meta from 'src/components/seo/meta.js'
import navigation from 'src/components/ui/nav/developers.vue'

export default {
  components: {
    navigation,
    appContent
  },

  head: {
    title: 'NexusHub · Developers',
    meta: meta({
      title: 'NexusHub for Developers',
      description: 'Find all resources required to build your own application with data from NexusHub.'
    })
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
    max-width: 750px;

    a {
      color: $color-primary-subtle !important;
      font-family: 'Circular';
    }
  }
  p {
    margin: 30px 0 10px;
  }
}
.sign-deal-with-the-devil-kappa123 {
  p {
    margin: 20px 0 10px;
  }
}
.btn-outline {
  display: inline-block;
  margin-top: 20px;
  padding: 12px 15px;
}
</style>
