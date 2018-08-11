<template>
  <module>
    <template slot="header">
      <div>
        <img src="/img/warframe/ui/drops.svg" alt="Drops" class="ico-h-24">
        <h3>Drop Rates</h3>
      </div>
      <span>{{ component.name === 'Set' ? item.components[item.components.length - 1].name : component.name }}</span>
    </template>
    <template slot="body">
      <div v-for="drop in drops" :key="drop.location" class="drop">
        <router-link v-if="drop.location.match(/(Intact|Exceptional|Flawless|Radiant)/)"
                     :to="`/warframe/items/${drop.location.replace(/( |\/|\*)/g, '-').toLowerCase()}`">
          <img :src="`/img/warframe/items/${drop.location.replace(/( |\/|\*)/g, '-').toLowerCase()}.png`" alt="">
        </router-link>
        <h4 class="location">{{ drop.location }}</h4>
        <span class="rarity">{{ drop.rarity }} -
        <span class="chance">{{ (drop.chance * 100).toFixed(2) }}%</span></span>
      </div>
    </template>
    <template slot="footer">
      <router-link to="">
        Drop Locations
        <img src="/img/ui/arrow-right.svg" alt="View full patch notes" class="ico-20">
      </router-link>
    </template>
  </module>
</template>



<script>
import module from 'src/components/ui/module.vue'

export default {
  components: {
    module
  },

  computed: {
    item () {
      return this.$store.state.items.item
    },
    component () {
      const item = this.$store.state.items.item
      const selected = this.$store.state.items.selected.component
      const component = item.components.find(c => c.name === selected)
      return component
    },
    drops () {
      let drops = []
      const components = this.item.components

      if (this.component.drops) {
        drops = this.component.drops.slice(0, 4)
      } else {
        for (const component of components) {
          if (component.drops) {
            drops = component.drops.slice(0, 4)
            break
          }
        }
      }
      return drops.sort((a, b) => {
        if (a.chance > b.chance) {
          return -1
        }
        if (a.chance < b.chance) {
          return 1
        }
        return 0
      })
    }
  }
}
</script>



<style lang="scss" scoped>
@import '~src/styles/partials/importer';

/deep/ .header {
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    font-size: 0.9em;
    color: white;
  }
}
/deep/ .body {
  margin: auto;
}
.drop {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 50%;
  margin-bottom: 30px;
  padding-bottom: 10px;

  &:nth-of-type(2n - 1) {
    width: calc(50% - 20px);
    padding-right: 20px;
  }
  &:nth-of-type(1n + 2){
    padding-bottom: 0;
    margin-bottom: 0;
  }
  .location {
    font-size: 0.9em;
  }
  .chance {
    margin-top: 3px;
  }
  .rarity {
    color: $color-font-body;
    font-size: 0.9em;
  }
  a {
    @include ie;
    background: rgba(255,255,255,0.04);
    display: flex;
    justify-content: center;
    height: 48px;
    width: 48px;
  }
  img {
    height: 48px;
    filter: grayscale(0.3);
    @include ease(0.25s);
  }
}
</style>
