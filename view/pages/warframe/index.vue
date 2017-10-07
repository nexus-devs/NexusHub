<template>
  <div>
    <header>
      <div class="background">
        <video playsinline autoplay muted loop>
          <source src="https://giant.gfycat.com/IckyEssentialHamadryad.webm" type="video/webm">
        </video>
      </div>
      <search></search>
    </header>
  </div>
</template>



<script>
import search from 'src/components/search/index.vue'

export default {
  beforeMount() {
    this.$store.commit('setActiveGame', 'warframe')
  },
  components: {
    search
  }
}
</script>



<style lang='scss' scoped>
@import '~src/styles/partials/importer';

header {
  position: relative;
  display: flex;
  height: 45vh;
  min-height: 500px;
  width: 100%;
  align-items: center;
  @include gradient-background-dg(#596570, $colorBackgroundLight);

  .background {
    position: absolute;
    overflow: hidden;
    top: 25%;
    left: 50%;
    min-width: 100%;
    min-height: 100%;
    width: auto;
    height: auto;
    transform: translateX(-50%) translateY(-25%);
  }
  video {
    position:absolute;
    top: 25%;
    left: 50%;
    min-width: 100%;
    min-height: 100%;
    width: auto;
    height: auto;
    opacity: 0.4;
    filter: blur(5px);
    background: $colorBackground;
    transform: translateX(-50%) translateY(-25%);
  }

  .search-components {
    width: 100%;
  }
  @media (max-width: $breakpoint-m) {
    padding-top: 40px;
  }
}
</style>
