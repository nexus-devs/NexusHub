<template>
  <wrapper>
    <div class="ico-a-ie">
      <img src="/img/sidebar/search.svg" alt="" class="ico-20">
    </div>
    <tooltip>Search</tooltip>
    <panel>
      <div class="panel-head">
        <span>Search</span>
        <span class="shortcut">SHIFT + F</span>
        <back/>
      </div>
      <div class="panel-body">
        <search>
          <div class="button-wrapper">
            <searchbutton/>
          </div>
        </search>
        <timerange/>
        <rank/>
      </div>
    </panel>
  </wrapper>
</template>



<script>
import wrapper from './modules/wrapper.vue'
import tooltip from './modules/tooltip.vue'
import panel from './modules/panel.vue'
import back from './modules/back.vue'
import search from 'src/components/search/input.vue'
import timerange from 'src/components/search/time.vue'
import rank from 'src/components/search/rank.vue'
import searchbutton from 'src/components/search/modules/button.vue'

// Client-side-only requirements
let shortcut, listener
try {
  shortcut = require('keyboardjs')
} catch (err) {}


export default {
  components: {
    wrapper,
    tooltip,
    panel,
    back,
    search,
    timerange,
    rank,
    searchbutton
  },
  data () {
    return {
      id: this.$store.state.sidebar.id + 1 // required before wrapper which increments id
    }
  },
  mounted () {
    listener = shortcut.bind('shift + f', () => {
      // Open sidebar if not already open
      if (!this.$store.state.sidebar.active) {
        this.$store.commit('showSidebar')
        this.$store.commit('toggleSidebar')

        // Get ready to type right away
        this.$el.querySelector('input').focus()

        // Reset shortcut entering value into input field
        setTimeout(() => {
          this.$el.querySelector('input').value = ''
        }, 50)
      }

      // Hide sidebar if panel is already open
      else if (this.id === this.$store.state.sidebar.activeId) {
        this.$store.commit('toggleSidebar')
        this.$el.querySelector('input').blur()

        // Sidebar not visible by default
        if (!this.$store.state.sidebar.keepVisible) {
          this.$store.commit('hideSidebar')
        }
      }
      this.$store.commit('setActivePanel', this.id)
    })
  },
  // Prevent multiple registrations when loading pages with the same sidebar
  // module.
  beforeDestroy () {
    shortcut.unbind('shift + f', listener)
  }
}
</script>



<style lang="scss" scoped>
@import '~src/styles/partials/importer';

/deep/ .search {
  margin-top: 10px;

  label, br {
    display: none;
  }
  .field {
    border-radius: 2px;
    padding: 8px 15px;
    background: $color-bg-darker;
  }
  input {
    position: relative;
    color: white;
    z-index: 1;
  }
  .autocomplete {
    position: absolute;
    left: 50px;
    top: 85px;

    @media (max-width: $breakpoint-m) {
      left: 40px;
    }
  }
  .autocomplete-type {
    display: none;
  }
  .button-wrapper {
    position: absolute;
    z-index: 1;
    overflow: hidden;
    margin-top: -29px;
    border-radius: 2px;
    right: 35px;
    height: 36px;
    width: 60px;

    .button-icon {
      display: inline-block;
      position: relative;
      left: 18px;
      top: -4px;
      @include ie(20);
      padding: 12px 10px;
      border-radius: 0;
      @include gradient-background-dg($color-primary, $color-accent);

      &:hover {
        @include gradient-background-dg($color-primary, $color-accent);
      }
      img {
        position: relative;
        left: -2px;
      }
    }
    button {
      display: none;
    }

    @media (max-width: $breakpoint-m) {
      right: 25px;
    }
  }
  // Input Suggestions
  .suggestion {
    padding: 10px 15px;
    cursor: pointer;
    @include ease-out(0.25s);

    &:first-of-type {
      padding-top: 20px;
    }
    &:hover {
      background: $color-bg-dark;
    }
    .ico-36 {
      position: relative;
      overflow: hidden;
      text-align: center;
      background: $color-bg-lighter;
      border-radius: 2px;
      margin-right: 10px;

      img {
        position: relative;
        left: -50%;
        max-width: 200%;
        z-index: 1;
      }

      .backdrop {
        position: relative;
        top: -50px;
        z-index: 0;
        filter: blur(15px);
      }
    }
    .suggestion-main {
      position: absolute;
      display: inline-block;
      vertical-align: middle;

      .suggestion-name, .suggestion-type {
        display: block;
      }
      .suggestion-name {
        color: white;
      }
      .suggestion-type {
        margin-top: -6px;
        font-size: 0.9em;
      }
    }
    .suggestion-data {
      display: none;
    }

    @media (max-width: $breakpoint-s) {
      padding: 10px;
    }
  }
}

/deep/ .time {
  border-top: 1px solid $color-subtle-dark;
  margin-top: 30px;
  padding-top: 30px;

  label {
    font-size: 0.85em;
    margin-left: 10px;
    color: white;
  }
  .input {
    color: white;
  }
  .timepicker {
    z-index: 1;
    opacity: 0;
    pointer-events: none;
    transform: translateY(-10px);
    @include ease(0.2s);

    &.active {
      opacity: 1;
      pointer-events: all;
      transform: translateY(0);
      margin-bottom: 145px;
    }

    .suggestions {
      position: absolute;
      padding: 10px 15px 0;
      flex-direction: column;

      .col {
        display: flex;
        align-items: center;
        text-align: left;
        border-radius: 2px;
        width: 100%;
        margin-left: -10px;
        margin-bottom: 8px;
        color: white;
        font-size: 0.9em;
        padding: 5px 15px;
        background: $color-bg-darker;

        &:before {
          border-radius: 2px;
        }
        &:hover {
          background: $color-bg-lighter;
        }
      }
    }
  }
}

// Timepicker workaround to highlight active selection
/deep/ .col-b .field.active {
  .input {
    span:not(.selected) {
      color: $color-font-body;
    }
    .selected {
      color: $color-primary;
    }
    img {
      transform: rotate(-180deg);
    }
  }
}

/deep/ .rank {
  border-top: 1px solid $color-subtle-dark;
  margin-top: 20px;
  padding-top: 30px;

  label {
    font-size: 0.85em;
    color: white;
    margin-left: 10px;
  }
  .input {
    cursor: auto;

    &:hover {
      background: none;
    }
    span {
      color: white;
    }
    img {
      display: none;
    }
  }
  .ranks {
    color: white;
    text-align: center;
    @include ease(0.15s);

    .ranks-head, .ranks-input {
      display: none;
    }
    .suggestions {
      text-align: left;
      margin-left: 5px;

      .suggestion {
        display: inline-block;
        cursor: pointer;
        font-size: 0.85em;
        margin: 3px;
        background: $color-bg-darker;
        @include ie();
        padding: 9px 15px;
        border-radius: 2px;

        &::before {
          border-radius: 0;
        }
      }
    }
  }
}
</style>
