<template>
  <nav v-bind:class="{ active }">
    <div class="nav-upper" v-on:click="toggle">
      <div class="ico-wrapper">
        <div class="ico-a-ie">
          <img src="/img/nav/side-nav.svg" alt="Sidebar Navigation" class='ico-20'>
        </div>
        <span>Expand</span>
      </div>
    </div>
    <div class="nav-lower">
      <div class="ico-wrapper">
        <div class="ico-a-ie">
          <img src="/img/sidebar/search.svg" alt="" class='ico-20'>
        </div>
        <span>Search</span>
      </div>
    </div>
    <div class="nav-expanded" v-bind:class="{ active }">
      <h2>Tools</h2>
      <img src="/img/ui/close.svg" class="ico-16 a-ie" alt="close" v-on:click="toggle">
      <div class="nav-expanded-section">
        <div class="nav-expanded-section-head">
          <h3>Search</h3>
          <span>ctrl + f</span>
        </div>
      </div>
    </div>
  </nav>
</template>


<script>
const store = {
  state: {
    active: false
  },
  mutations: {
    toggleSidebar(sidebar) {
      sidebar.active = !sidebar.active
    }
  }
}

export default {
  beforeCreate() {
    this.$store.registerModule('sidebar', store)
  },
  computed: {
    active() {
      return this.$store.state.sidebar.active
    }
  },
  methods: {
    toggle() {
      this.$store.commit('toggleSidebar')
    }
  }
}
</script>


<style lang='scss' scoped>
@import '~src/styles/partials/importer';

nav {
    position: relative;
    z-index: 2;
    display: flex;
    flex-direction: column;
    position: fixed;

    &.active {
        .ico-a-ie + span {
            opacity: 0 !important;
            pointer-events: none;
        }

        .nav-expanded {
            transform: translateX(0);
        }
    }

    .nav-upper {
        position: relative;
        z-index: 1;
        background: $colorBackgroundDarkest;
        @include shadow-1;
    }

    .nav-lower {
        position: relative;
        z-index: 1;
        height: calc(100vh - 64px);
        background: $colorBackgroundLight;
        @include ease(0.35s);
        @include shadow-1;
        .ico-wrapper:first-of-type {
            background: rgba(0,5,10,0.4);
        }
        @media (max-width: $breakpoint-s) {
            transform: translateX(-100%);
        }
    }

    .ico-wrapper {
        position: relative;
        padding: 12px;
        @media (max-width: $breakpoint-s) {
            padding: 8px;
        }
    }

    .ico-a-ie {
        @include ie(24);
        display: inline-block;

        // Tooltips
        & + span {
            position: absolute;
            pointer-events: none;
            text-align: center;
            border-radius: 2px;
            font-size: 0.85em;
            font-weight: 400;
            width: 70px;
            padding: 5px;
            top: 18px;
            left: 45px;
            color: white;
            opacity: 0;
            @include gradient-background-dg($colorPrimaryDark, $colorAccentDark);
            @include shadow-2;
            @include ease(0.25s);
        }
        &:hover {
            & + span {
                opacity: 1;
                transform: translateX(10px);
            }
        }
    }

    .nav-expanded {
        position: absolute;
        left: 64px;
        background: $colorBackgroundDark;
        height: 100vh;
        width: 286px;
        transform: translateX(-350px);
        @include shadow-3;
        @include ease(0.4s);

        h2 {
            font-size: 0.8em;
            padding: 24px 20px 22px;
            text-transform: uppercase;
            letter-spacing: 1.0;
            border-bottom: 1px solid $colorSubtleDark;
            color: $colorFontBody !important;
        }

        h2 + img {
            position: absolute;
            top: 0;
            right: 0;
            margin: 20px;
            opacity: 0.8;
            &:hover {
                opacity: 1;
            }
        }

        .nav-expanded-section {
            cursor: pointer;

            .nav-expanded-section-head {
                padding: 20.5px 20px;
                @include ease(0.25s);
                &:hover {
                    background: $colorBackgroundDarker;
                }

                h3 {
                    display: inline-block;
                    vertical-align: middle;
                    font-size: 1em;
                }

                h3 + span {
                    float: right;
                    margin-top: 3px;
                    margin-right: 10px;
                    display: inline-block;
                    vertical-align: middle;
                    font-size: 0.8em;
                    letter-spacing: 0.9;
                    color: $colorFontSubtle;
                    text-transform: uppercase;
                }
            }
        }
    }
}
</style>
