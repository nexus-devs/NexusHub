<template>
  <docs>
    <h1>Socket.io</h1>
    <p>
      If you want to use real-time features, Socket.io is the way to go. We
      generally recommend using this instead of HTTP connections if you plan to
      make frequent requests or want to use our pub/sub endpoints.
    </p>
    <br>
    <h4>Authenticated connection (Node.js)</h4>
    <pre v-highlightjs>
      <code class="javascript">const io = require('socket.io-client')
const client = io.connect('https://api.nexushub.co/', {
  query: 'bearer=&lt;access_token&gt;'
})
</code>
    </pre>
    <p>
      For more information on how to get an access token, check out the
      <router-link to="/developers/api/authentication">authentication guide</router-link>.
    </p>

    <h2>RESTful requests</h2>
    <h4>GET</h4>
    <pre v-highlightjs>
      <code class="javascript">client.emit('GET', '/foo', res => {
  console.log(res) // bar
})
</code>
    </pre>

    <h4>POST</h4>
    <pre v-highlightjs>
      <code class="javascript">client.emit('POST', { url: 'post', { foo: 'bar' }}, res => {
  console.log(res) // { foo: 'bar' }
})
</code>
    </pre>

    <h2>Pub/Sub</h2>
    <p>
      For real-time data, you'll want to subscribe to Pub/Sub endpoints. Their
      response format is usually the same as on a normal GET request.
    </p>

    <h4>Subscribe</h4>
    <pre v-highlightjs>
      <code class="javascript">client.emit('subscribe', '/warframe/v1/orders/opm')
client.on('/warframe/v1/orders/opm', opm => {
  console.log(opm) // Logs orders per minute every time a new order comes in.
})
</code>
    </pre>

    <h4>Unsubscribe</h4>
    <pre v-highlightjs>
      <code class="javascript">client.emit('unsubscribe', '/warframe/v1/orders/opm')
client.off('/warframe/v1/orders/opm')
  </code>
    </pre>
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
