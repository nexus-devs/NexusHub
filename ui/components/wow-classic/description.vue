<template>
  <module>
    <template slot="header">
      <img src="/img/wow-classic/ui/description.svg" alt="Description" class="ico-h-16">
      <h3>Description</h3>
    </template>
    <template slot="body">
      <p>Item Level: {{ item.itemLevel }}</p>
      <p>Required Level: {{ item.requiredLevel }}</p>
      <p>Sell Price: {{ parsePrice(item.sellPrice) }}</p>
    </template>
    <template slot="footer">
      <a v-if="wowheadUrl" :href="wowheadUrl" target="_blank">
        View on Wowhead
        <img src="/img/ui/arrow-right.svg" alt="View on Wowhead" class="ico-20">
      </a>
    </template>
  </module>
</template>



<script>
import module from 'src/components/ui/module.vue'
import utility from './utility'

export default {
  components: {
    module
  },

  computed: {
    item () {
      return this.$store.state.items.item
    },
    wowheadUrl () {
      return `https://classic.wowhead.com/item=${this.item.itemId}`
    }
  },

  created () {
    this.parsePrice = utility.parsePrice
  }
}
</script>



<style lang="scss" scoped>

</style>
