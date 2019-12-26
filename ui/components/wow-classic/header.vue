<template>
  <header>
    <div class="item-img-shade" />
    <div class="item-img-shade-2" />
    <div class="background" />
    <div class="container">
      <div class="item-profile">
        <div class="icon">
          <img :src="item.icon">
        </div>
        <div class="item-profile-data-info">
          <h1>{{ item.name }} {{ regionServerString }}</h1>
          <br>
          <span v-for="(tag, i) in item.tags" :key="tag + i">
            {{ tag }}
          </span>
        </div>
      </div>
    </div>
    <nav ref="subnav" class="subnav">
      <div class="container">
        <router-link :to="`${itemUrl}`" exact class="interactive">
          Overview
        </router-link>
        <router-link :to="`${itemUrl}/crafting`" class="interactive">
          Crafting
        </router-link>
      </div>
    </nav>
  </header>
</template>



<script>
import storeModule from 'src/store/wow-classic/items.js'

export default {

  async asyncData ({ store, route }) {
    const item = route.params.item
    const slug = route.params.slug

    // Only fetch item data if we actually have a new item or new server
    if (store.state.items.item.itemId !== parseInt(item) || store.state.items.item.server !== slug) {
      const itemData = await this.$cubic.get(`/wow-classic/v1/items/${slug}/${item}`)
      store.commit('setItem', itemData)
    }
  },
  computed: {
    item () {
      return this.$store.state.items.item
    },
    itemUrl () {
      const route = this.$route.fullPath.split(this.item.itemId)[0]
      return `${route}${this.item.itemId}`
    },
    regionServerString () {
      let str = ''
      if (this.item.region) {
        const server = this.item.server ? this.item.server.charAt(0).toUpperCase() + this.item.server.slice(1).toLowerCase() : undefined
        const serverString = server ? ` - ${server}` : ''
        str = `[${this.item.region}${serverString}]`
      }
      return str
    }
  },

  storeModule
}
</script>



<style lang="scss" scoped>
@import '~src/styles/partials/wow-classic/importer';

@keyframes pulse {
  0% {
    transform: scaleX(1);
  }
  50% {
    transform: scale3d(1.15,1.15,1.15);
  }
  100% {
    transform: scaleX(1);
  }
}

header {
  position: relative;
  background: $color-bg-lighter;
  overflow: hidden;
  padding: 150 0 0 0;
  box-shadow: none;
  z-index: 0;

  @media (max-width: $breakpoint-s) {
    padding: 100 0 0 0;
    @include shadow-1; // would blend with background due to colored nav
  }
}

.icon {
  display: inline-block;
  vertical-align: middle;
  position: relative;
  margin-right: 10px;
  padding-top: 12px;

  img {
    border: 1px solid $color-bg;
  }
}

.item-img-shade {
  position: absolute;
  z-index: 0;
  height: 33%;
  width: 100%;
  bottom: 0;
  left: 0;
  @include gradient-smooth($color-bg);

  @media (max-width: $breakpoint-s) {
    bottom: 30px;
    height: 100%;
  }
}
.item-img-shade-2 {
  @extend .item-img-shade;
  height: 100%;
  opacity: 0.66;
}

.background {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: url('/img/warframe/index-blob.svg');
    background-size: cover;
    animation-name: pulse;
    animation-timing-function: ease-in-out;
    animation-duration: 35s;
    animation-iteration-count: infinite;
  }

/**
 * Item header data
 */
.item-profile {
  display: flex;
  margin-bottom: 10px;
}

.item-profile-data-info {
  position: relative;
  white-space: nowrap;
  padding-bottom: 10px;

  h1 {
    display: inline-block;
    vertical-align: middle;
    margin-top: 5px;
  }
  span {
    position: relative;
    top: -5px;
    color: white;
    @include textshadow;
  }
  span.selected {
    color: $color-primary-subtle;
  }
  span:after {
    content: ' /';
    color: white;
  }
  span:last-of-type:after {
    content: ''
  }
}

.item-profile-lower {
  margin-top: 18px;
}

/**
 * Sub-page nav
 */
.subnav {
  a {
    display: inline-flex;
    align-items: center;
    padding: 14px 20px 12px; // 12px to compensate for border
    border-bottom: 2px solid transparent;
    margin-right: 5px;
    border-radius: 2px;
    @include uppercase;
    font-size: 0.8em;
    letter-spacing: 0.5;

    &:before {
      border-radius: 0;
    }
  }
  .container {
    position: relative;
  }
  @media (max-width: $breakpoint-s) {
    position: relative;
    margin-top: 20px;
    background: $color-bg-dark;
    z-index: 2;
  }
  .router-link-active {
    border-bottom: 2px solid $color-primary-subtle;
  }
  .btn-counter {
    padding: 0px 8px;
    border: 1px solid $color-subtle;
  }
}
</style>