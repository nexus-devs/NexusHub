<template>
  <docs>
    <h1>Client Packages</h1>
    <p>
      The easiest way to connect to our API is always gonna be our own client
      packages. They provide a simple interface for every endpoint, while also
      dealing with rate limits and authentication automatically. Support is
      currently limited to Node.
    </p>

    <h2>Setup - Node.js</h2>
    <h4>Installing</h4>
    <pre v-highlightjs>
      <code class="javascript">npm i nexushub-client</code>
    </pre>

    <h4>Setting up the Client</h4>
    <pre v-highlightjs>
      <code class="javascript">const Nexus = require('nexushub-client')
const nexus = new Nexus({
  user_key,
  user_secret
})
</code>
    </pre>
    <p>
      user_key can be found in your profile, while user_secret is your password.
      User accounts are not required at this point, but will give access to
      certain endpoints concerning your own user data at a later date.
    </p>

    <h2>Basic Usage</h2>
    <h4>GET example</h4>
    <pre v-highlightjs>
      <code class="javascript">const res = await nexus.get('/foo') // Returns 'bar'</code>
    </pre>

    <h4>POST, DELETE, etc example</h4>
    <pre v-highlightjs>
      <code class="javascript">const res = await nexus.post('/post', someObject) // Returns the object</code>
    </pre>

    <h4>Pub/Sub example</h4>
    <pre v-highlightjs>
      <code class="javascript">nexus.subscribe('/warframe/v1/orders/opm', opm => {
  console.log(opm) // Logs orders per minute every time a new order comes in.
})
</code>
    </pre>

    <h2>Advanced usage</h2>
    <p>For full docs, check out the official <a href="https://github.com/nexus-devs/nexus-stats-api">Github repo</a>.</p>
  </docs>
</template>



<script>
import docs from 'src/sites/developers/api/index.vue'

export default {
  components: {
    docs
  }
}
</script>



<style lang="scss" scoped>
@import '~src/styles/partials/importer';

</style>
