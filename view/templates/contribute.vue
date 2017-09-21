<template>
  <div>
    <ui-header>
      <h1 slot="headline">Contribute</h1>
      <p slot="description">Help us shape the future of Nexus-Stats with your own ideas!</p>
    </ui-header>
    <div class="g-ct">
      <section>
          <h2>Adding a Feature</h2>
          <p>
            Since Nexus-Stats is completely <router-link to="/open-source">open source</router-link>
            you can start digging around right away. But before you start building,
            please take the following points into consideration to ensure your
            feature meets our quality standards.
          </p>
          <h3>Which problem will your feature solve?</h3>
          <p>
            The most important part of each feature is that it solves actual
            problems. Having features merely for their own sake will just take
            away attention from the features that matter.
          </p>
          <h3>What scenario will your feature be used in?</h3>
          <p>
            The usage context of a feature is indispensable for us to ensure
            the best possible UX.
          </p>
          <br>
          <br>
          <p>
            If you can answer these questions with ease, go ahead and open a
            <a>new issue here</a>. Please make sure to document your code before
            even building it. This ensures your code will meet user expectations
            and not the other way around.
          </p>
          <br>
          <span>
            Note: If you plan to build a UI feature and need help with design,
            feel free to contact Kilian#8972 on Discord.
          </span>
      </section>
    </div>
    <div class="g-ct">
      <section>
        <h2>Expanding to another Game</h2>
        <p>
          If you're interested in leading Nexus-Stats as your own project in your
          favorite game, <router-link to="/contact">contact us here.</router-link>
          If you have the skills it takes or can team up with the necessary talent,
          we'll provide you with everything you need to get the project started.
          Naturally, you can expect to receive payment appropriate to the revenue
          your project is collecting.
        </p>
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

h3 {
  margin-top: 50px;
}

span {
  margin-top: -10px;
  font-size: 0.9em;
  opacity: 0.6;
}
</style>
