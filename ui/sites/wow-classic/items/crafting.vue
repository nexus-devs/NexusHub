<template>
  <div>
    <navigation />
    <item-header />
    <app-content>
      <section>
        <div class="container">
          <h2 class="sub">
            Crafting
          </h2>

          <!-- All Orders-->
          <div v-for="(entry, i) in crafting.reagentFor" :key="entry.itemId + '-' + i">
              <crafting-entry :crafting="entry" />
          </div>
        </div>
      </section>
    </app-content>
  </div>
</template>



<script>
import appContent from 'src/app-content.vue'
import craftingEntry from 'src/components/wow-classic/crafting-entry.vue'
import itemHeader from 'src/components/wow-classic/header.vue'
import navigation from 'src/components/ui/nav/wow-classic.vue'
import storeModule from 'src/store/wow-classic/crafting.js'

export default {
  components: {
    appContent,
    craftingEntry,
    navigation,
    itemHeader
  },

  async asyncData ({ store, route }) {
    const item = route.params.item
    const slug = route.params.slug

    // Only fetch item data if we actually have a new item or new server
    if (store.state.crafting.itemId !== parseInt(item) || store.state.crafting.slug !== slug) {
      const craftingData = await this.$cubic.get(`/wow-classic/v1/crafting/${slug}/${item}`)
      store.commit('setCrafting', craftingData)
    }
  },

  computed: {
    item () {
      return this.$store.state.items.item
    },
    crafting () {
      return {
        createdBy: this.$store.state.crafting.createdBy,
        reagentFor: this.$store.state.crafting.reagentFor
      }
    }
  },

  head () {
    return {
      title: `${this.item.name} · NexusHub`
    }
  },

  storeModule
}
</script>



<style lang="scss" scoped>
@import '~src/styles/partials/wow-classic/importer';

/deep/ {
  .zoom-enter-active, .fade-leave-active {
    @include ease(0.4s);
  }
  .zoom-enter, .zoom-leave-to {
    transform: translateY(7px);
    transform-origin: top;
    opacity: 0.75;
  }
}

.app-content {
  background: $color-bg-darker;
}

.row-margin {
  justify-content: flex-start;
}

.column {
  position: relative;
  display: flex;
  flex-direction: column;
  flex-grow: 0;
  min-width: 400px;

  & > *:first-of-type {
    margin-bottom: 20px;
  }
  @media (max-width: $breakpoint-s) {
    min-width: 0;
  }
}

.btn-subtle {
  margin-top: 20px;
}

.labels {
  @include uppercase;
  color: $color-font-subtle;
  font-size: 0.8em;
  padding: 10px 20px;
  border-radius: 2px;
  background: $color-bg-darker;

  .interactive {
    padding: 0;
    background: transparent;

    &:before {
      background: transparent;
    }
  }
  .item {
    margin-right: 95px;
  }
  .price {
    position: relative;
    left: 10px;
  }
  .user {
    @media (max-width: $breakpoint-s) {
      display: none;
    }
  }
  .whitespace {
    @media (max-width: $breakpoint-s) {
      display: none;
    }
  }
}
</style>
