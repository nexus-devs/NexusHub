<template>
  <div class="item-header">
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
              <div v-if="item.components.length > 1">
                <span v-for="component in item.components" v-if="component.tradable || component.name === 'Set'" :key="component.name"
                      :class="{ selected: selectedComponent === component.name }"
                      @click="selectComponent">
                  {{ component.name }}
                </span>
              </div>
              <span v-for="tag in item.tags" v-else :key="tag" class="selected">
                {{ tag }}
              </span>
            </div>
            <div class="item-profile-lower">
              <router-link :to="`${itemUrl}/trading`">
                <button class="btn-outline buy">Buyers</button>
              </router-link>
              <router-link :to="`${itemUrl}/trading`">
                <button class="btn-outline sell">Sellers</button>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </header>
    <nav ref="subnav" class="subnav">
      <div class="container">
        <router-link :to="itemUrl" exact>Overview</router-link>
        <router-link :to="`${itemUrl}/prices`">Prices</router-link>
        <router-link :to="`${itemUrl}/trading`">Trade</router-link>
        <router-link v-if="item.patchlogs" :to="`${itemUrl}/patchlogs`">Patchlogs</router-link>
      </div>
    </nav>
  </div>
</template>



<script>
import header from 'src/components/ui/header.vue'

export default {
  components: {
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
    selectedComponent () {
      return this.$store.state.items.selected.component
    }
  },

  async asyncData ({ store, route }) {
    const item = route.params.item.replace(/(?:(\-)(?!\1))+/g, ' ').replace(/- /g, '-')
    const itemData = await this.$cubic.get(`/warframe/v1/items/${item}`)
    store.commit('setItem', itemData)
  },

  methods: {
    selectComponent (e) {
      const tag = e.srcElement.outerText
      this.$store.commit('setItemComponent', tag)
    }
  },

  storeModule: {
    name: 'items',
    state: {
      item: { name: '' },
      test: false,
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
        state.selected.component = component.trim()
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
    }
  }
}
</script>



<style lang="scss" scoped>
@import '~src/styles/partials/importer';

.item-header {
  @include ease(0.15s);
}

/**
 * Header background. Item image will be visible here on mobile.
 */
 .header-bg {
   overflow: hidden;
   padding: 115 0;
   box-shadow: none;
   z-index: 0;
   @include gradient-background-dg($color-bg-lighter, $color-bg-light);

   /deep/ .background-container {
     top: 0;
   }
   /deep/ .blobs {
     display: none;
   }
   /deep/ .container {
     position: static;
   }
   @media (max-width: $breakpoint-s) {
     padding: 150 0;
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
     opacity: 0.2;
     height: 60%;
     width: 100%;
     bottom: 0;
     left: 0;
     @include gradient-background(transparent, $color-bg);

     @media (max-width: $breakpoint-s) {
       height: 70%;
       opacity: 1;
     }
   }
   .item-img-blur {
     position: absolute;
     z-index: 0;
     opacity: 0;

     @media (max-width: $breakpoint-s) {
       left: auto;
       right: -75%;
       top: -15%;
       max-height: 200%;
       max-width: 200%;
       height: 200%;
       width: 200%;
       opacity: 0.75;
       filter: blur(60px) brightness(1.1) contrast(0.5);
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
  margin-right: 25px;
  @include gradient-background-dg(#323947, $color-bg);
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
    white-space: nowrap;

    h1 {
      margin-top: 5px;
    }
    span {
      @include ie;
      position: relative;
      top: -5px;
      margin-left: -20px;
      color: white;
      cursor: pointer;

      &:first-of-type {
        margin-left: -7px; // padding
      }
    }
    span.selected {
      color: $color-primary-subtle;
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
}

.item-profile-lower {
  margin-top: 18px;
}

/**
 * Sub-page nav
 */
.subnav {
  margin-top: 25px;
  border-top: 1px solid $color-subtle-dark;
  @include shadow-1;

  a {
    @include ie;
    display: inline-block;
    padding: 17.5px 20px;
    margin-right: 5px;
    border-radius: 0px;
    text-transform: uppercase;
    font-size: 0.875em;
    letter-spacing: 0.5;

    &:before {
      border-radius: 0;
    }
    @media (max-width: $breakpoint-s) {
      color: $color-font-body !important;
      padding: 15px 20px ;
    }
  }
  .container {
    position: relative;
  }
  @media (max-width: $breakpoint-s) {
    margin-top: 20px;
  }
  .router-link-active {
    border-bottom: 2px solid $color-primary-subtle;
  }
}
</style>
