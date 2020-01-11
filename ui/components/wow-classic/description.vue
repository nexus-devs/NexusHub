<template>
  <module>
    <template slot="header">
      <img src="/img/wow-classic/ui/description.svg" alt="Description" class="ico-h-16">
      <h3>Description</h3>
    </template>
    <template slot="body">
      <label v-for="(entry, i) in tooltip" :key="`${i}${entry.label}`" :class="entry.format ? 'format-' + entry.format.toLowerCase() : ''">
        <p v-if="entry.format !== 'alignRight' && entry.preformat !== 'alignRight'">{{ entry.label }}</p>
        <span v-else :class="{ 'align-right': entry.format === 'alignRight' }">{{ entry.label }}</span>
      </label>
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
    },
    tooltip () {
      const tooltip = this.item.tooltip.slice(1) // Remove item name

      for (let i = 0; i < tooltip.length; i++) {
        if (tooltip[i].format === 'alignRight' && i > 0) tooltip[i - 1].preformat = 'alignRight'
        if (tooltip[i].label === 'Sell Price:') tooltip[i].label += ' ' + this.parsePrice(this.item.sellPrice)
      }

      return tooltip
    }
  },

  created () {
    this.parsePrice = utility.parsePrice
  }
}
</script>



<style lang="scss" scoped>
@import '~src/styles/partials/wow-classic/importer';

.align-right {
  float: right;
}
.format-indent {
  text-indent: 10px;
  p, span {
    color: $color-bg-lighter !important;
  }
}
.format-misc {
  p, span {
    color: $color-primary-subtle !important;
  }
}
.format-poor {
  p, span {
    color: $color-bg-lighter !important;
  }
}
.format-uncommon {
  p, span {
    color: $color-positive !important;
  }
}
.format-rare {
  p, span {
    color: $color-accent !important;
  }
}
.format-epic {
  p, span {
    color: #bc59ff !important;
  }
}
.format-legendary {
  p, span {
    color: $color-primary !important;
  }
}
</style>
