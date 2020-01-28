<template>
  <nav class="row">
    <div class="col nav-l">
      <router-link to="/" exact>
        <img src="/img/brand/nexushub-logo-typeface.svg" alt="Nexushub Logo" class="logo ico-h-20">
      </router-link>
    </div>
    <div class="subnav">
      <p :class="{ 'router-link-active': activePage === 'Start' }" class="interactive" @click="scrollToPage('Start')">
        Start
      </p>
      <p :class="{ 'router-link-active': activePage === 'Blog' }" class="interactive" @click="scrollToPage('Blog')">
        Blog
      </p>
    </div>
    <div class="col nav-r">
      <notifications />
    </div>
  </nav>
</template>



<script>
import notifications from 'src/components/ui/notifications.vue'

export default {
  components: {
    notifications
  },

  props: ['pageElements'],

  computed: {
    activePage () {
      return this.$store.state.index.activePage
    }
  },

  methods: {
    scrollToPage (page) {
      let position = 0
      if (page !== 'Start') {
        const el = this.pageElements[page.toLowerCase()]
        position = el.getBoundingClientRect().top + window.pageYOffset - 56 // Absolute position + Navbar offset
      }
      window.scrollTo({ top: position, behavior: 'smooth' })
    }
  },

  storeModule: {
    name: 'index',
    state: {
      activePage: 'Start'
    },
    mutations: {
      setActivePage (state, page) {
        state.activePage = page
      }
    }
  }
}
</script>



<style lang="scss" scoped>
@import "~src/styles/partials/importer";

nav {
  position: fixed;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap !important;
  width: calc(100% - 30px);
  padding: 0 15px;
  height: 56px;
  top: 0;
  z-index: 4;
  background: $color-bg-dark;
  @include shadow-1;

  a {
    font-size: 0.9em;

    &:nth-of-type(3) {
      margin-left: 25px;
    }
  }
  .logo {
    height: 22px;
    padding-left: 10px;
    padding-right: 20px; // For search bar margin
  }
  @media (max-width: $breakpoint-s) {
    width: calc(100% - 28px);
    padding: 0 14px;
  }
}
.nav-l {
  a:first-of-type {
    @media (max-width: $breakpoint-s) {
      img {
        margin-top: 1px;
      }
    }
  }

  .sub {
    position: relative;
    top: 1px;
    vertical-align: middle;
    @include uppercase;
    font-size: 0.75em;
    margin-left: -12px;
    color: $color-font-body !important;
    @include ease(0.3s);

    @media (max-width: $breakpoint-s) {
      display: none;
    }
  }
}
.nav-r {
  text-align: right;
  margin-left: 10px;

  @media (max-width: $breakpoint-s) {
    a span {
      display: none;
    }
  }

  @media (max-width: $breakpoint-xs) {
    a img {
      display: none;
    }
  }
}

.subnav {
  position: relative;
  width: 100%;
  height: 100%;
  flex-grow: 1;
  max-width: $max-width;
  display: flex;
  justify-content: right;

  p {
    display: inline-flex;
    align-items: center;
    padding: 14px 20px 8px; // 8px to compensate for border
    border-bottom: 2px solid transparent;
    margin-right: 5px;
    border-radius: 2px;
    @include uppercase;
    font-size: 0.8em;
    letter-spacing: 0.5;
    margin-top: 0;

    &:before {
      border-radius: 0;
    }
  }
  .router-link-active {
    border-bottom: 2px solid $color-primary-subtle;
  }
}

// Context icon for mobile
.ctx {
  display: none;
  float: right;

  @media (max-width: $breakpoint-xs) {
    display: block;
  }
}
</style>
