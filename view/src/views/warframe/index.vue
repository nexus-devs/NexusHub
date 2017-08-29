<template>
  <div>
    <div class="search-container">
      <video id="bgvid" playsinline autoplay muted loop>
        <source src="https://n8k6e2y6.ssl.hwcdn.net/images/prime-access/primeaccessoberon/background.webm" type="video/webm">
      </video>
      <div class="g-ct">
        <div class="search-component">
          <h1>
            <img src="/img/brand/logo-white-outline.svg" alt="nexus-stats" class="ico-32">
            <span>Search for item prices, player data and more.</span>
          </h1>
          <search></search>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Search from 'src/components/search.vue'
  export default {
    components: {
      Search
    }
  }
</script>

<style lang='scss' scoped>
  @import '~src/styles/partials/importer';

  h1 {
    font-size: 1.4em;
  }

  video {
    position:absolute;
    top: 50%;
    left: 50%;
    min-width: 100%;
    min-height: 100%;
    width: auto;
    height: auto;
    opacity:0.7;
    filter: grayscale(0.3) blur(7px) contrast(0.8);
    z-index: -100;
    transform: translateX(-50%) translateY(-50%);
  }

  .search-container {
    position:relative;
    overflow: hidden;
    margin-top:-100px;
    display:flex;
    height: 65vh;
    min-height: 450px;
    align-items: center;
    background-size: cover;
  }
  .search-component {
    text-align: left;
    transform: translateY(50px);
    animation: moveUp 0.7s forwards;
    animation-delay: 0.15s;
  }

  .search {
    opacity: 0;
    animation: fadeinUp 0.7s forwards;
    animation-delay: 0.3s;
  }
  @keyframes fadeinUp {
    from {
      opacity: 0;
      transform: translateY(25px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  @keyframes moveUp {
    from {
      transform: translateY(50px);
    }
    to {
      transform: translateY(0);
    }
  }

  @media (max-width: $breakpoint-s) {
    .search-component {
      img {
        display: none;
      }
    }
  }
</style>
