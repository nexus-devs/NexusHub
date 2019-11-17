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
        </div>
      </section>
    </app-content>
  </div>
</template>



<script>
import appContent from 'src/app-content.vue'
import itemHeader from 'src/components/wow-classic/header.vue'
import navigation from 'src/components/ui/nav/wow-classic.vue'

export default {
  components: {
    appContent,
    navigation,
    itemHeader
  },

  computed: {
    item () {
      return this.$store.state.items.item
    }
  },

  head () {
    return {
      title: `${this.item.name} · NexusHub`
    }
  }
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
</style>
