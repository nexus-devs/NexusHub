<template>
  <docs>
    <h1>WebSockets</h1>
    <p>
      If you want to use real-time features, WebSockets are the way to go. We
      generally recommend using this instead of HTTP connections if you plan to
      make frequent requests or want to use our pub/sub endpoints.
      <br>
      <br>
      Please keep in mind that every payload from the server and client is
      expected to be JSON encoded.
    </p>
    <br>
    <h4>Authenticated connection (Node.js)</h4>
    <pre v-highlightjs>
      <code class="javascript">const WebSocket = require('ws')
const ws = new WebSocket('wss://api.nexushub.co/ws', {
  headers: {
    authorization: `bearer ${access_token}`
  }
})
</code>
    </pre>
    <p>
      For more information on how to get an access token, check out the
      <router-link to="/developers/api/authentication">
        authentication guide
      </router-link>.
    </p>

    <h2>Ping/Pong</h2>
    <p>
      In order to keep your client alive, it has to respond to pings from the
      server. If no pong has been sent as a response within 45 seconds, the
      connection is terminated.
    </p>
    <h4>Ping handler</h4>
    <pre v-highlightjs>
      <code class="javascript">ws.on('message', payload => {
  payload = JSON.parse(payload)

  if (typeof payload === 'string' && payload.startsWith('primus::ping::')) {
    ws.send(JSON.stringify(payload.replace('ping', 'pong')))
  }
})
</code>
    </pre>

    <h2>RESTful requests</h2>
    <p>
      Making RESTful requests is fairly straightforward. Set a request id counter
      and send it alongside the request object. The response will then have the
      same id.
      <br>
      <br>
      Depending on your WebSocket implementation, we recommend tracking
      all requests in an array that is checked in a <b>single message event listener</b>.
      The examples below create a listener for every request, which is not how
      you'd want to do things. We merely demonstrate things this way for the sake
      of clarity.
    </p>
    <h4>GET</h4>
    <pre v-highlightjs>
      <code class="javascript">let requestIds = 1

// Request
const id = requestIds++
ws.send(JSON.stringify({
  action: 'GET',
  url: '/foo',
  id
}))

// Response
ws.on('message', payload => {
  payload = JSON.parse(payload)
  if (payload.id === id) {
    console.log(payload.body) // 'foo'
  }
})
</code>
    </pre>

    <h4>POST</h4>
    <pre v-highlightjs>
      <code class="javascript">let requestIds = 1

// Request
const id = requestIds++
ws.send(JSON.stringify({
  action: 'POST',
  url: '/post',
  body: { foo: 'bar' },
  id
}))

// Response
ws.on('message', payload => {
  payload = JSON.parse(payload)
  if (payload.id === id) {
    console.log(payload.body) // { foo: 'bar' }
  }
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
      <code class="javascript">ws.send(JSON.stringify({
  action: 'SUBSCRIBE',
  room: '/warframe/v1/orders/opm'
}))

ws.on('message', payload => {
  payload = JSON.parse(payload)
  if (payload.room === '/warframe/v1/orders/opm') {
    console.log(payload.data) // Logs orders per minute every time a new order comes in.
  }
})
</code>
    </pre>

    <h4>Unsubscribe</h4>
    <pre v-highlightjs>
      <code class="javascript">ws.send(JSON.stringify({
  action: 'UNSUBSCRIBE',
  room: '/warframe/v1/orders/opm'
}))
</code>
    </pre>

    <h2>Full setup</h2>
    <p>
      If you need an overview for a full setup with automated authentication and
      error handling, check out our implementation for
      <a href="https://github.com/cubic-js/cubic/tree/development/packages/client">cubic-client</a>.
    </p>
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
