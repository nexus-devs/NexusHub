<template>
  <header>
    <div class="container">
      <div class="item-profile-img">
        <img :src="item.imgUrl" :alt="item.name" draggable="false" onerror="this.style.display='none'">
        <img :src="item.imgUrl" :alt="item.name" draggable="false" class="item-profile-img-blur" onerror="this.style.display='none'">
      </div>
    </div>
    <div class="item-img-shade" />
    <div class="item-img-shade-2" />
    <div class="background" />
    <div class="container">
      <div class="item-profile">
        <div class="item-profile-data-info">
          <h1>{{ item.name }}</h1>
          <div v-if="item.vaulted" class="vaulted">
            <img src="/img/warframe/ui/vaulted.svg" class="ico-h-24 interactive" alt="Vaulted">
            <tooltip>Vaulted</tooltip>
          </div>
          <br>
          <div v-if="item.components.length > 1">
            <span v-for="comp in filteredComponents" :key="comp.name"
                  :class="{ selected: selectedComponent === comp.name }" class="interactive"
                  @click="selectComponent"
            >
              {{ component.name }}
            </span>
          </div>
          <span v-for="(tag, i) in item.tags" v-else :key="tag + i" class="selected interactive">
            {{ tag }}
          </span>
        </div>
      </div>
    </div>
    <nav ref="subnav" class="subnav">
      <div class="container">
        <router-link :to="itemUrl" exact class="interactive">
          Overview
        </router-link>
        <router-link v-if="item.tradable" :to="`${itemUrl}/prices`" class="interactive">
          Prices
        </router-link>
        <router-link v-if="item.tradable" :to="`${itemUrl}/trading`" class="interactive">
          Trade
          <span class="btn-counter">{{ item.activeOrders }}</span>
        </router-link>
        <router-link v-if="item.patchlogs && item.patchlogs.length" :to="`${itemUrl}/patchlogs`" class="interactive">
          Patchlogs
        </router-link>
      </div>
    </nav>
  </header>
</template>



<script>
import storeModule from 'src/store/warframe/items.js'
import tooltip from 'src/components/ui/tooltip.vue'
const title = (str) => str.toLowerCase().replace(/\b\w/g, l => l.toUpperCase())

export default {
  components: {
    tooltip
  },

  async asyncData ({ store, route }) {
    const item = encodeURIComponent(title(route.params.item.replace(/(?:(\-)(?!\1))+/g, ' ').replace(/- /g, '-')))

    // Only fetch item data if we actually have a new item
    if (title(store.state.items.item.name) !== item) {
      const itemData = await this.$cubic.get(`/warframe/v1/items/${item}`)
      itemData.patchlogs = await this.$cubic.get(`/warframe/v1/patchlogs?item=${item}`)

      if (itemData.tradable) {
        itemData.activeOrders = (await this.$cubic.get(`/warframe/v1/orders?item=${item}`)).length
      }
      store.commit('setItem', itemData)
    }
  },

  computed: {
    item () {
      return this.$store.state.items.item
    },
    itemUrl () {
      const item = this.item.name.replace(/ /g, '-').toLowerCase()
      return `/warframe/items/${item}`
    },
    component () {
      const item = this.$store.state.items.item
      const selected = this.$store.state.items.selected.component
      const component = item.components.find(c => c.name === selected)
      return component
    },
    selectedComponent () {
      return this.$store.state.items.selected.component
    },
    filteredComponents () {
      return this.item.components.filter(c => c.tradable || c.name === 'Set')
    }
  },

  methods: {
    selectComponent (e) {
      const tag = e.srcElement.outerText
      this.$store.commit('setItemComponent', tag)
    }
  },

  storeModule
}
</script>



<style lang="scss" scoped>
@import '~src/styles/partials/importer';

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
.item-profile-img {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 0;
  bottom: -75px;
  height: 350px;
  margin-right: 25px;
  border-radius: 2px;

  img {
    position: relative;
    z-index: 1;
    max-height: 70%;
    border-radius: 999px;
  }
  .item-profile-img-blur {
    position: absolute;
    z-index: 0;
    top: 25%;
    left: -100%;
    min-height: 200%;
    opacity: 0.75;
    filter: blur(150px);
  }
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
    margin-left: -20px;
    color: white;
    @include textshadow;

    &:first-of-type {
      margin-left: -7px; // padding
    }
  }
  span.selected {
    color: $color-primary-subtle;
  }
  span:after {
    content: ' /\00a0';
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

.vaulted {
  display: inline-block;
  vertical-align: middle;
  position: relative;
  margin-left: 5px;

  &:hover {
    .tooltip {
      opacity: 1;
      transform: translateX(5px);
    }
  }
  .tooltip {
    top: 5px;
    left: 35px;
  }
}
</style>
