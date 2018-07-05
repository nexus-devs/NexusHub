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
              <span v-for="component in item.components" v-if="item.components.length > 1" :key="component.name"
                    :class="{ selected: selectedComponent === component.name }"
                    @click="selectComponent">
                {{ component.name }}
              </span>
              <span v-for="tag in item.tags" v-else :key="tag" class="selected">
                {{ tag }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
    <nav ref="subnav" class="subnav">
      <div class="container">
        <div :style="navPosition" class="subnav-active-highlight"/>
        <router-link :to="itemUrl" exact>Overview</router-link>
        <router-link :to="`${itemUrl}/prices`">Prices</router-link>
        <router-link :to="`${itemUrl}/trade`">Trade</router-link>
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

  data () {
    return {
      navPosition: {}
    }
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

  watch: {
    $route () {
      setTimeout(() => this.updateNavPosition(), 1)
    }
  },

  mounted () {
    this.updateNavPosition()
    window.addEventListener('resize', this.updateNavPosition)
  },

  beforeDestroy () {
    window.removeEventListener('resize', this.updateNavPosition)
  },

  methods: {
    selectComponent (e) {
      const tag = e.srcElement.outerText
      this.$store.commit('setItemComponent', tag)
    },
    updateNavPosition () {
      const active = this.$refs.subnav.getElementsByClassName('router-link-active')[0]
      if (active) {
        const styles = {
          left: active.offsetLeft + 'px',
          width: active.offsetWidth + 'px'
        }
        this.navPosition = styles
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
   padding: 115 0;
   box-shadow: none;
   z-index: 0;

   /deep/ .background-container {
     top: 0;
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
     opacity: 0;
     filter: blur(60px) brightness(1.1) contrast(0.5);

     @media (max-width: $breakpoint-s) {
       left: auto;
       right: -75%;
       top: -15%;
       max-height: 200%;
       max-width: 200%;
       height: 200%;
       width: 200%;
       opacity: 0.75;
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
      opacity: 0.5;
      cursor: pointer;
    }
    span.selected {
      opacity: 1;
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
    font-size: 0.875em;
    letter-spacing: 0.5;

    &:before {
      border-radius: 0;
    }
  }
  .container {
    position: relative;
  }
  @media (max-width: $breakpoint-s) {
    margin-top: 20px;
  }
}
.subnav-active-highlight {
  position: absolute;
  bottom: 0;
  width: 20px;
  height: 2px;
  border-radius: 4px;
  @include gradient-background-dg($color-primary, $color-accent);
  @include ease(0.25s);
}
</style>
