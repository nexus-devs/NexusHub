<template>
  <div>
    <navigation />
    <app-content>
      <div class="container err">
        <h1>{{ error.code }} - {{ error.error }}</h1>
        <p>
          {{ error.reason }}
        </p>
      </div>
    </app-content>
  </div>
</template>



<script>
import appContent from 'src/app-content.vue'
import navigation from 'src/components/ui/nav/warframe.vue'

export default {
  components: {
    navigation,
    appContent
  },

  data () {
    return {
      error: {
        code: 404,
        error: 'Not found',
        reason: 'Could not find <page URL>'
      }
    }
  },

  head () {
    return {
      title: `NexusHub · ${this.error.code} ${this.error.error}`
    }
  }
}
</script>



<style lang="scss" scoped>
@import '~src/styles/partials/importer';

.err {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 60px 0;
  min-height: calc(100vh - 425px);
}
</style>
