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
      <b>authorization</b> header as <b>"Bearer &lt;your_token&gt;"</b>.
      <br>
      For more information on how to get this token, check out the
      <router-link to="/developers/api/authentication">authentication guide</router-link>.
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
