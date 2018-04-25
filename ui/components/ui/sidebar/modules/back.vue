<template>
  <span class="back a-ie" @click.stop="back">
    <img src="/img/ui/back.svg" class="ico-20" alt="Back">
    Back
  </span>
</template>



<script>
export default {
  methods: {
    back () {
      this.$store.commit('setActivePanel', 0)
    }
  }
}
</script>



<style lang="scss" scoped>
@import '~src/styles/partials/importer';

.back {
  position: absolute;
  right: 30px;
  top: 13px;
  pointer-events: none;
  font-size: 0.8em;
  color: white;
  text-transform: uppercase;
  letter-spacing: 1;
  opacity: 0;

  img {
    margin-left: -4px;
    margin-top: -4px;
    margin-bottom: -2px;
    padding: 0;
  }

  @media (max-width: $breakpoint-m) {
    right: 20px;
  }
}
</style>
