<template>
  <docs>
    <h1>Authentication</h1>
    <p>
      In order to access protected endpoints, you'll need an <b>access token</b>
      which contains data on your user identity and permissions. Our
      <router-link to="/developers/api/clients">
        client packages
      </router-link>
      handle authentication automatically, so we strongly recommend using those if
      you can.
      <br>
      <br>
      <b>All endpoints on this page refer to auth.nexushub.co</b>
    </p>
    <h2>Registration</h2>
    <p>
      Registration currently requires raw POST requests as we don't have any
      UI built for it yet. In the future, registered users will be limited to
      actual user accounts.
    </p>

    <a href="https://auth.nexushub.co/register" target="_blank" class="btn-subtle active route">
      <div class="verb">POST</div>
      /register
    </a>
    <h4>Payload</h4>
    <pre v-highlightjs>
      <code class="javascript">{
  user_id: &lt;username&gt;,
  user_secret: &lt;password&gt;
}
</code>
    </pre>

    <h4>Response</h4>
    <pre v-highlightjs>
      <code class="javascript">{
  user_key: &lt;key&gt;
}
</code>
    </pre>
    <p>
      The <code>user_key</code> and <code>user_secret</code> is what you'll need
      to get your access/refresh token, so make sure to save them somewhere safe.
    </p>

    <h2>Getting the access token</h2>
    <p>
      The access token is like a passport. It tells us who you are and what
      you're allowed access. And just like a real passport, they expire way too
      quickly. For us, this means they expire within <b>1 hour</b>. Don't worry
      though, you'll also be given a long-lived <code>refresh_token</code> on
      your first authentication request.
      <br>
      <br>
      This setup helps us mitigate the risk of an attacker abusing leaked access tokens
      when accessing resource servers.
    </p>

    <a href="https://auth.nexushub.co/authenticate" target="_blank" class="btn-subtle active route">
      <div class="verb">POST</div>
      /authenticate
    </a>
    <h4>Payload</h4>
    <pre v-highlightjs>
      <code class="javascript">{
  user_key: &lt;key&gt;,
  user_secret: &lt;password&gt;,
}
</code>
    </pre>

    <h4>Response</h4>
    <pre v-highlightjs>
      <code class="javascript">{
  access_token: &lt;access_token&gt;,
  refresh_token: &lt;refresh_token&gt;
}
</code>
    </pre>

    <h2>Refreshing your access token</h2>
    <p>
      If you've read everything before (I salute you sir, if you did), you'll
      know that <b>access tokens expire within 1 hour</b>. To refresh them, we
      urge you to use the /refresh endpoint instead of authenticating directly again. If
      the refresh token leaks, we can easily change it, but if your user
      credentials leak, you might also have trouble on other services where you
      use the same password.
    </p>

    <a href="https://auth.nexushub.co/refresh" target="_blank" class="btn-subtle active route">
      <div class="verb">POST</div>
      /refresh
    </a>
    <h4>Payload</h4>
    <pre v-highlightjs>
      <code class="javascript">{
 refresh_token: &lt;refresh_token&gt;
}
</code>
    </pre>

    <h4>Response</h4>
    <pre v-highlightjs>
      <code class="javascript">{
 access_token: &lt;access_token&gt;
}
</code>
    </pre>

    <h2>Further documentation</h2>
    <p>
      For detailed docs, including some fancy visualized model, check out the
      <a href="https://github.com/cubic-js/cubic/tree/development/packages/auth">official Github repo</a>.
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

.btn-subtle {
  margin-top: 40px;
}
h2 {
  margin-top: 80px !important;
}
</style>
