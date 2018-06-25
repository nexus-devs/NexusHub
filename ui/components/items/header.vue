<template>
  <div class="item-header">
    <subnav/>
    <ui-header class="header-bg">
      <img :src="item.imgUrl" :alt="item.name" draggable="false" class="item-img-blur">
      <img :src="item.imgUrl" :alt="item.name" draggable="false" class="item-img">
      <div class="item-img-shade"/>
    </ui-header>
    <header>
      <div class="container">
        <div class="item-profile">
          <div class="item-profile-img">
            <img :src="item.imgUrl" :alt="item.name" draggable="false">
            <img :src="item.imgUrl" :alt="item.name" draggable="false" class="item-profile-img-blur">
            <div class="item-profile-img-shade"/>
          </div>
          <div class="item-profile-data">
            <div class="item-profile-data-info">
              <h1>{{ item.name }}</h1>
              <span v-for="tag in item.tags" :key="tag">{{ tag }}</span>
              <span v-if="item.components.length > 1">{{ component.name }}</span>
            </div>
            <div class="item-profile-data-lower">
              <!-- Disabled abilities. We currently lack data and images on them
                   anyway. Besides they make prime frame profiles quite noisy. -->
              <!--
              <div v-if="item.abilities" class="item-profile-data-abilities item-data-wrapper">
                <div v-for="ability in item.abilities" :key="ability.name" class="item-data">
                  <img :src="ability.imgUrl" :alt="ability.name" class="ico-h-20">
                </div>
              </div>
              -->
              <div class="item-profile-data-price item-data-wrapper">
                <div class="item-data">
                  <img src="/img/warframe/ui/platinum.svg" alt="Platinum" class="ico-h-16">
                  <span class="item-data-price">
                    {{ priceCurrent }}p
                  </span>
                  <span :class="{ negative: priceDiff.percentage < 0 }" class="item-data-price-diff">
                    {{ priceDiff.percentage > 0 ? '+' : '' }}{{ priceDiff.percentage }}%
                  </span>
                </div>
              </div>
              <div v-if="component.ducats" class="item-profile-data-ducats item-data-wrapper">
                <div class="item-data">
                  <img src="/img/warframe/ui/ducats.svg" alt="Ducats per Platinum" class="ico-h-16">
                  <span>{{ component.ducats }} Ducats</span>
                  <span class="ducats">{{ (component.ducats / priceCurrent).toFixed(2) }}</span>
                  <span>Ducats/Plat</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <nav class="subnav">
      <div class="container">
        <router-link :to="itemUrl" exact>Overview</router-link>
        <router-link :to="`${itemUrl}/prices`">Prices</router-link>
        <router-link :to="`${itemUrl}/patchlogs`">Patchlogs</router-link>
      </div>
    </nav>
  </div>
</template>



<script>
import subnav from 'src/components/items/subnav.vue'
import header from 'src/components/ui/header.vue'

export default {
  components: {
    subnav,
    'ui-header': header
  },

  computed: {
    item () {
      return this.$store.state.items.item
    },
    itemUrl () {
      return `/warframe/items/${this.item.name.replace(/ /g, '-').toLowerCase()}`
    },
    component () {
      const item = this.$store.state.items.item
      const selected = this.$store.state.items.selected.component
      const component = item.components.find(c => c.name === selected)
      return component
    },
    priceCurrent () {
      return Math.round((this.component.selling.current.median + this.component.buying.current.median) / 2)
    },
    pricePrevious () {
      return Math.round((this.component.selling.previous.median + this.component.buying.previous.median) / 2)
    },
    priceDiff () {
      const value = this.priceCurrent - this.pricePrevious
      return {
        value,
        percentage: (value / this.pricePrevious * 100).toFixed(2)
      }
    }
  },

  beforeMount () {
    // this.subscribe() // requires on-route change destructor
  },

  beforeDestroy () {
    this.unsubscribe()
  },

  methods: {
    async subscribe () {
      const itemUrl = `/warframe/v1/items/${this.$store.state.items.item.name}/statistics`
      this.$cubic.subscribe(itemUrl, data => {
        this.$store.commit('setItem', data)
      })
    },
    async unsubscribe () {
      const itemUrl = `/warframe/v1/items/${this.$store.state.items.item.name}/statistics`
      this.$cubic.unsubscribe(itemUrl)
    }
  },

  storeModule: {
    name: 'items',
    state: {
      item: { name: '' },
      selected: {
        component: 'Set',
        offerType: 'combined',
        regions: []
      },
      patchlogs: {
        current: 0,
        active: []
      }
    },

    mutations: {
      setItem (state, item) {
        item.tags = []
        item.tags.push(item.category)
        item.tags.push(item.name.includes(' Prime') ? 'Prime' : item.type)
        state.item = item
      },
      setItemComponent (state, component) {
        state.selected.component = component
      },
      setItemOfferType (state, type) {
        state.selected.offerType = type.toLowerCase()
      },
      setItemRegions (state, regions) {
        state.selected.regions = regions
      },
      addItemPatchlog (state, patchlog) {
        state.patchlogs.current = state.item.patchlogs.findIndex(p => p.name === patchlog.name)
      },
      removeItemPatchlog (state, patchlog) {
        const i = state.patchlogs.active.find(p => p.name === patchlog.name)

        if (i) {
          state.patchlogs.active.slice(i, 1)
          state.patchlogs.current = state.item.patchlogs.findIndex(p => p.name === patchlog.name)
        }
      }
    },

    actions: {
      async fetchItemData ({ commit, rootState }, name) {
        commit('setItem', await this.$cubic.get(`/warframe/v1/items/${name}`))
        commit('setItemComponent', 'Set')
      }
    }
  }
}
</script>



<style lang="scss" scoped>
@import '~src/styles/partials/importer';

/**
 * Header background. Item image will be visible here on mobile.
 */
 .header-bg {
   overflow: hidden;
   padding: 135 0;
   box-shadow: none;
   z-index: 0;

   /deep/ .background-container {
     top: 0;
   }
   img {
     position: absolute;
     bottom: -40%;
     left: 20%;
     max-height: 150%;

     @media (max-width: $breakpoint-s) {
       right: 0;
       max-height: 90%;
       bottom: 0;
     }
   }
   .item-img {
     display: none;
     border-radius: 999px;

     @media (max-width: $breakpoint-s) {
       display: block;
     }
   }
   .item-img-shade {
     position: absolute;
     z-index: 0;
     height: 90%;
     width: 100%;
     bottom: 0;
     left: 0;

     @media (max-width: $breakpoint-s) {
       height: 70%;
      @include gradient-background(transparent, $color-bg);
     }
   }
   .item-img-blur {
     position: absolute;
     z-index: 0;
     opacity: 0.35;
     top: 75%;
     left: -50%;
     max-height: 100%;
     max-width: 150%;
     height: 100%;
     width: 150%;
     filter: blur(60px) brightness(1.1) contrast(0.5);

     @media (max-width: $breakpoint-s) {
       left: auto;
       right: -75%;
       top: -15%;
       max-height: 200%;
       max-width: 200%;
       height: 200%;
       width: 200%;
     }
   }

   /deep/ .container {
     padding: 0;
   }
 }

/**
 * Item header data
 */
.item-profile {
  display: flex;
  position: relative;
  top: -80px;
  margin-bottom: -80px;
}
.item-profile-img {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  height: 135px;
  flex: 0 0 135px;
  background: $color-bg;
  margin-right: 25px;
  @include shadow-1;

  img {
    position: relative;
    z-index: 1;
    max-height: 70%;
    border-radius: 999px;
  }
  .item-profile-img-blur {
    position: absolute;
    z-index: 0;
    top: 0;
    left: 0;
    max-height: 80%;
    filter: blur(60px);
  }
  .item-profile-img-shade {
    position: absolute;
    z-index: 2;
    height: 70%;
    width: 100%;
    bottom: 0;
    left: 0;
    @include gradient-background(transparent, $color-bg);
  }
  @media (max-width: $breakpoint-s) {
    display: none;
  }
}
.item-profile-data {
  .item-profile-data-info {
    h1 {
      margin-top: 5px;
    }
    span {
      position: relative;
      top: -5px;
      color: white;
    }
    span:after {
      content: ' /\00a0'
    }
    span:last-of-type:after {
      content: ''
    }

    @media (max-width: $breakpoint-s) {
      margin-top: -5px;
    }
  }
  .item-profile-data-lower {
    display: flex;
    flex-wrap: wrap;
    position: relative;
    overflow: hidden;
    margin-top: 15px;

    @media (max-width: $breakpoint-s) {
      margin-top: 30px;
    }
  }
  .item-data {
    display: inline-block;
    padding: 8px;
    background: $color-bg;
    margin-right: 6px;
    margin-bottom: 8px;

    span {
      color: white;
      font-size: 0.85em;
      padding-right: 8px;
      border-right: 1px solid $color-subtle;
    }
    // Every span after first
    span:nth-of-type(1) ~ span {
      padding-left: 5px;
    }
    span:last-of-type {
      border-right: none;
    }
  }
  .item-profile-data-price, .item-profile-data-ducats {
    img {
      padding: 3.5px;
    }
    span.negative {
      color: $color-error;
    }
    .item-data-price-diff {
      color: $color-primary;
    }
  }
  .ducats {
    color: #EEBE62 !important;
    border-right: none !important;
    padding-right: 0 !important;
  }
  .ducats ~ span {
    padding-left: 0 !important;
    color: $color-font-body;
  }
}

/**
 * Sub-page nav
 */
.subnav {
  margin-top: 40px;
  border-top: 1px solid $color-subtle-dark;
  @include shadow-1;

  a {
    @include ie;
    display: inline-block;
    padding: 17.5px 20px;
    margin-right: 5px;
    border-radius: 0px;
    text-transform: uppercase;
    font-size: 0.9em;
    border-bottom: 1px solid transparent;

    &:before {
      border-radius: 0;
    }
  }
  a.router-link-active {
    @include gradient-border-bottom($color-primary, $color-accent);

    &:hover {
      @include gradient-border-bottom($color-primary, $color-accent);
    }
  }
  @media (max-width: $breakpoint-s) {
    margin-top: 20px;
  }
}
</style>
