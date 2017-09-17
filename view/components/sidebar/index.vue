<template>
  <sidebar>
    <search></search>
  </sidebar>
</template>



<script>
import sidebar from './sidebar.vue'
import search from './tools/search.vue'

export default {
  components: {
    sidebar,
    search
  }
}
</script>
