<template>
  <span>
    <span v-if="price.gold">{{ price.gold }}<span class="price-gold">g</span></span>
    <span v-if="price.silver || price.gold">{{ price.silver }}<span class="price-silver">s</span></span>
    <span>{{ price.copper }}<span class="price-copper">c</span></span>
  </span>
</template>

<script>
export default {
  props: ['price', 'svg']
}
</script>

<style lang="scss" scoped>
@import '~src/styles/partials/wow-classic/importer';

.price-gold {
  color: #CAAA00
}
.price-silver {
  color: #777
}
.price-copper {
  color: #B87333
}
</style>
