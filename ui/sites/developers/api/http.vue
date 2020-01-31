<template>
  <docs>
    <h1>HTTP connection</h1>
    <p>
      HTTP connections are pretty straight forward. Just use the http client
      of your choice and GET, POST, PATCH, etc any URL you want. If you send
      a payload, it's alsways gonna be in JSON.
    </p>

    <h2>Authentication</h2>
    <p>
      For requests that require authentication, put your access token in the
      <code>Authorization</code> header as <code>"Bearer &lt;your_token&gt;"</code>.
    </p>
    <br>
    <h4>Authenticated request example (Node.js)</h4>
    <pre v-highlightjs>
      <code class="javascript">const request = require('request-promise')

// Set it as default, so we don't have to do it on every single request.
request.defaults({
  baseUrl: 'https://api.nexushub.co'
  headers: {
    Authorization: 'Bearer &lt;access_token&gt;'
  }
})

const secretUserData = await request.get('/super/secret/userdata')
</code>
    </pre>

    <p>
      For more information on how to get an access token, check out the
      <router-link to="/developers/api/authentication">
        authentication guide
      </router-link>.
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
