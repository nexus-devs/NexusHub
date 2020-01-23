<template>
  <div>
    <navigation />
    <app-content>

    </app-content>
  </div>
</template>

<script>
import appContent from 'src/app-content.vue'
import meta from 'src/components/seo/meta.js'
import navigation from 'src/components/ui/nav/general.vue'

export default {
  components: {
    appContent,
    navigation
  },

  head: {
    title: 'NexusHub · Making Games more transparent!',
    meta: meta({
      title: 'NexusHub · Making Games more transparent!',
      description: 'Get up-to-date trading data and prices for Warframe and World of Warcraft: Classic.'
    })
  }
}
</script>
