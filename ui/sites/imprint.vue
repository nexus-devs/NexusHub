<template>
  <div>
    <navigation/>
    <app-content>
      <ui-header>
        <h1>Imprint</h1>
        <p>
          Huge shoutouts to the German government for legally requiring me to dox myself!<br>
          Seriously, what is wrong with you Germany?
        </p>
      </ui-header>
      <div class="container">
        <section>
          <h2>NexusHub</h2>
          <p class="data">
            Kilian Volb <br>
            Schillerstr. 13 <br>
            66497, Contwig <br>
            Germany
          </p>
          <p>I'd appreciate if you don't send me poop to this address. Thank you.</p>
          <router-link to="/contact">
            <button>Contact</button>
          </router-link>
        </section>
      </div>
    </app-content>
  </div>
</template>



<script>
import appContent from 'src/app-content.vue'
import navigation from 'src/components/ui/nav/warframe.vue'
import uiHeader from 'src/components/ui/header.vue'

export default {
  components: {
    navigation,
    appContent,
    uiHeader
  }
}
</script>



<style lang="scss" scoped>
@import '~src/styles/partials/importer';

a {
  display: inline-block;
  margin-top: 30px;
}
.data {
  color: white;
}
</style>
