<template>
  <module>
    <template slot="header">
      <img src="/img/wow-classic/ui/description.svg" alt="Description" class="ico-h-16">
      <h3>Description</h3>
    </template>
    <template slot="body">
      <template v-for="(entry, i) in tooltip">
        <p v-if="entry.format !== 'alignRight' && entry.preformat !== 'alignRight'" :key="`${i}${entry.label}`"
           :class="[entry.format ? 'format-' + entry.format.toLowerCase() : '', !entry.space ? 'tooltip-label' : '']"
        >
          {{ entry.label }}
        </p>
        <span v-else :key="`${i}${entry.label}`"
              :class="[entry.format ? 'format-' + entry.format.toLowerCase() : '', !entry.space ? 'tooltip-label' : '']"
        >
          {{ entry.label }}
        </span>
      </template>
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
        // Add correct formatting
        tooltip[i].label = tooltip[i].label.replace(/&quot;/g, '"').replace(/&lt;/g, '<').replace(/&gt;/g, '>')

        if (tooltip[i].format === 'alignRight' && i > 0) tooltip[i - 1].preformat = 'alignRight'

        if (tooltip[i].label === 'Sell Price:') {
          tooltip[i].label += ' ' + this.parsePrice(this.item.sellPrice)
          if (i < tooltip.length - 1) tooltip[i + 1].space = true // Assign space after sell price
        }

        // Assign spaces before and after indention
        if (tooltip[i].format === 'indent') {
          if (i > 0 && tooltip[i - 1].format !== 'indent') tooltip[i - 1].space = true
          if (i < tooltip.length - 1 && tooltip[i + 1].format !== 'indent') tooltip[i + 1].space = true
        }
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

// Add space to every <left --- right> span after the first one
span:not(:first-of-type):nth-of-type(odd) {
  &:before {
    content: ' ';
    display: block;
  }
}
.tooltip-label {
  margin: 0;
  padding: 0;
}

.format-alignright {
  float: right;
}
.format-indent {
  text-indent: 10px;
  color: $color-bg-lighter !important;
}
.format-misc {
  color: $color-primary-subtle !important;
}
.format-poor {
  color: $color-bg-lighter !important;
}
.format-uncommon {
  color: $color-positive !important;
}
.format-rare {
  color: $color-accent !important;
}
.format-epic {
  color: #bc59ff !important;
}
.format-legendary {
  color: $color-primary !important;
}
</style>
