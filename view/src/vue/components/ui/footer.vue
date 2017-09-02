<template>
  <footer>
    <img src="/img/brand/logo-white-outline.svg" alt="Nexus-Stats" class="ico-36">
    <div class="resources">
      <router-link to="">Contact</router-link>
      <router-link to="">How do we get our data?</router-link>
      <router-link to="">Developers</router-link>
      <router-link to="">Privacy Policy</router-link>
      <router-link to="">Imprint</router-link>
      <router-link to="">Sitemap</router-link>
    </div>
  </footer>
</template>

<style lang='scss' scoped>
  @import '~src/styles/partials/importer';

  footer {
    margin-top: auto;
    text-align: center;
    padding: 20px;
    background: $colorBackgroundDarker;

    img {
      margin-top: 20px;
      opacity: 0.4;
    }

    .resources {
      max-width: $max-width;
      padding: 20px 0;
      margin: auto;

      a {
        color: $colorFontSubtle !important;
        font-weight: 300;
        padding: 0 10px;
        border-right: 1px solid $colorSubtle;

        &:hover {
          color: white !important;
        }

        &:last-of-type {
          border-right: none;
        }
      }
    }
  }
</style>
