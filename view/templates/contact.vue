<template>
  <div>
    <ui-header>
      <h1 slot="headline">Contact</h1>
      <p slot="description">Wanna talk with us? Or just feeling lonely? We'll be there.</p>
    </ui-header>
    <div class="g-ct">
      <section>
          <h2>Discord</h2>
          <p>
            The easiest way to reach us is through Discord. Just join our server
            and PM one of the devs.
          </p>
          <div class="row">
            <a href="https://discord.gg/TCxe6P4" target="_blank" class="btn">Join</a>
          </div>
      </section>
    </div>
    <div class="g-ct">
      <section>
        <h2>E-Mail</h2>
        <p>
          If you rather stick with traditional means of communication, you can also send us a mail!
        </p>
        <a href="mailto:contact@nexus-stats.com?Subjet=Regarding%20Nexus-Stats">contact@nexus-stats.com</a>
      </section>
    </div>
  </div>
</template>



<script>
import uiheader from 'src/components/ui/header.vue'

export default {
  components: {
    'ui-header': uiheader
  }
}
</script>



<style lang="scss" scoped>
@import '~src/styles/partials/importer';

a {
  margin-top: 15px;
}
</style>
