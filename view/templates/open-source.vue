<template>
  <div>
    <ui-header>
      <h1 slot="headline">Open-Source</h1>
      <p slot="description">
        Nexus-Stats is completely open source. That means you  can see exactly
        how the data we're displaying is gathered, but even more importantly: If
        you know how to program, you can shape this platform however you want it
        to be!
      </p>
    </ui-header>
    <div class="g-ct">
      <section>
          <h2>Github</h2>
          <p>
            Here you can open issues if you find bugs or have any requests, or
            maybe even help us fix some of the issues if you have the necessary
            skills.
          </p>
          <a href="http://github.com/nexus-devs" target="_blank">www.github.com/nexus-devs</a>
      </section>
      <section>
          <h2>Documentation</h2>
          <p>
            For documentation regarding our source code, you'll find everything
            in the repository readmes. For our API documentation, please view
            <a href="https://drive.google.com/open?id=16rbyQAG1cgQhwfFfXcHqn-o8txZ5dAZBf4hzr3VeJJE">this page</a>.
          </p>
      </section>
      <section>
        <h2>Responsible Disclosure</h2>
        <p>
          If you find any critical vulnerabilities, please send us a private
          mail instead of opening issues on Github. We can't offer you bounties
          like the big guys, but we'll never forget your help for helping us
          make this platform secure.
        </p>
        <a href="mailto:devs@nexus-stats.com?Subject=System%20Vulnerability%20Inquiry">devs@nexus-stats.com</a>
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

p {
  font-size: 1.05em;
}
a {
  margin-top: 15px;
}
</style>
