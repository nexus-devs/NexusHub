<template>
  <module>
    <span>{{ price.gold }}g {{ price.silver }}s {{ price.copper }}c</span>
  </module>
</template>

<script>
export default {
  data () {
    return {
      price: {}
    }
  }
}
</script>
