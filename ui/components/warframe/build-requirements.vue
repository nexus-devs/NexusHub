<template>
  <module class="build-requirements">
    <template slot="header">
      <div class="title">
        <div>
          <img src="/img/warframe/ui/build.svg" alt="Build Requirements" class="ico-h-24">
          <h3>Build Requirements</h3>
        </div>
        <span>{{ item.buildPrice }} Credits</span>
      </div>
    </template>
    <template slot="body">
      <div class="row">
        <div v-for="component in filteredComponents" :key="component.uniqueName" class="component col">
          <div class="component-wrapper interactive" @click="selectComponent(component.name)">
            <img :src="component.imgUrl" :alt="component.name">
            <span v-if="component.itemCount > 1" class="count">x{{ component.itemCount }}</span>
          </div>
          <tooltip>{{ component.name }}</tooltip>
        </div>
      </div>
    </template>
    <template slot="footer">
      <router-link class="disabled" to="">
        Drop Locations
        <img src="/img/ui/arrow-right.svg" alt="View full patch notes" class="ico-20">
      </router-link>
    </template>
  </module>
</template>



<script>
import module from 'src/components/ui/module.vue'
import tooltip from 'src/components/ui/tooltip.vue'

export default {
  components: {
    module,
    tooltip
  },

  computed: {
    item () {
      return this.$store.state.items.item
    },
    filteredComponents () {
      return this.item.components.filter(c => c.name !== 'Set')
    }
  },

  methods: {
    selectComponent (tag) {
      this.$store.commit('setItemComponent', tag)
    }
  }
}
</script>



<style lang="scss" scoped>
@import '~src/styles/partials/importer';

.build-requirements {
  white-space: nowrap;
}
.title {
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    font-size: 0.9em;
    margin-left: 20px;
    color: white;
  }
}

.row {
  flex-wrap: nowrap;

  @media (max-width: $breakpoint-s) {
    flex-wrap: wrap;
  }
}

.component {
  display: flex;
  justify-content: center;
  position: relative;
  border-right: 1px solid $color-subtle-dark;
  padding: 0 5px;

  &:last-of-type {
    border-right: none;
  }
  img {
    max-height: 40px;
  }
  .count {
    position: absolute;
    top: 0;
    right: 10%;
    color: white;
    font-size: 0.85em;
  }
}
.component-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 40px;

  &:hover {
    & + .tooltip {
      opacity: 1;
      transform: translateX(5px);
    }
  }
  & + .tooltip {
    white-space: nowrap;
    margin-left: 10px;
  }
}

</style>
