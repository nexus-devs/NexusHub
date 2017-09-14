<template>
  <div class="search-components">
    <div class="g-ct">
      <h1>
        <img src="/img/brand/logo-white-outline.svg" alt="nexus-stats" class="ico-32">
        <span>Search for item prices, player data and more.</span>
      </h1>
      <div class="row">
        <searchfield></searchfield>
        <timefield></timefield>
        <rankfield>
          <searchbutton></searchbutton>
        </rankfield>
      </div>
    </div>
  </div>
</template>



<script>
  import searchfield from './fields/input.vue'
  import timefield from './fields/time.vue'
  import rankfield from './fields/rank.vue'
  import searchbutton from './modules/button.vue'

  export default {
    components: {
      searchfield,
      timefield,
      rankfield,
      searchbutton
    }
  }
</script>



<style lang="scss" scoped>
  @import '~src/styles/partials/importer';

  .search-components {
    h1 {
      font-size: 1.4em;
      transform: translateY(50px);
      animation: moveUp 0.7s forwards;
      animation-delay: 0.15s;

      @media (max-width: $breakpoint-s) {
        img {
          display: none;
        }
      }
    }
    .row {
      margin-top:10px;
      opacity: 0;
      animation: fadeinUp 0.7s forwards;
      animation-delay: 0.3s;
    }
    @media (max-width: $breakpoint-s) {
      .search-component {
        width: 100%;
      }
    }
  }

  // Search fields
  /deep/ .col-b .field {
    background: $colorBackgroundDark;
    padding: 15px;
    margin: 1px;
    margin-top: 1px !important;
    margin-bottom: 1px !important;

    .input-container, .button-container {
      display: inline-block;
      vertical-align: middle;
    }
    .button-container {
      margin-top: 5px;
      margin-left: 10px;
      float:right;
    }
    label {
      font-size: 0.85em;
      font-weight: 400;
      color: white;
    }
    input, .input {
      position: relative;
      z-index: 1;
      display: inline-block;
      color: white;
      margin-bottom: -10px;

      span {
        @include ease(0.15s);
      }
    }
    input {
      padding-top: 10px;
      padding-bottom: 9px;
    }
    .a-ie {
      margin-left:-10px;
    }
    .autocomplete {
      position: absolute;
      left: 16px;
      margin-top: 10px;
      z-index: 0;
    }
    .autocomplete-type {
      float: right;
      padding: 10px;
    }
  }

  /deep/ .col-b .tools {
    position: absolute;
    background: rgba(27, 32, 37, 0.8);
    width: calc(33.33% - 2px);
    margin-top: -1px;
    margin-left: 1px;
    z-index: 2;

    @media (max-width: $breakpoint-s) {
      width: calc(100% - 2px);
      background: $colorBackgroundDarker;
    }

    // Input Suggestions
    .suggestion {
      padding: 15px;
      cursor: pointer;
      @include ease-out(0.25s);

      &:hover {
        background: $colorBackgroundDark;
      }
      .ico-36 {
        position: relative;
        overflow: hidden;
        text-align: center;
        background: $colorBackgroundLight;
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
        display: inline-block;
        vertical-align: middle;

        .suggestion-name, .suggestion-type {
          display: block;
        }
        .suggestion-name {
          color: white;
        }
        .suggestion-type {
          margin-top: -3px;
          font-size: 0.9em;
        }
      }
      .suggestion-data {
        display: inline-block;
        vertical-align: middle;
        float: right;
        font-size: 0.9em;
        margin: 7px 0;
        padding: 3px 10px;
        border-left: 1px solid $colorSubtle;
      }
    }

    // Time picker
    &.timepicker {
      opacity: 0;
      pointer-events: none;
      transform: translateY(-10px);
      @include ease(0.1s);

      &.active {
        opacity: 1;
        pointer-events: all;
        transform: translateY(0);
      }
      .suggestions {
        padding: 10px 15px;

        .col {
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
          color: white;
          background: $colorBackgroundDark;
          font-size: 0.9em;
          padding: 5px 15px;

          &:hover {
            background: $colorBackgroundLight;
          }
          &:not(:last-of-type) {
            margin-right: 5px;
          }
        }
      }
    }

    // Rank selection
    &.ranks {
      top: 50%;
      transform: scale(0.8) translateY(-50%);
      transform-origin: 50% 20%;
      max-width: 150px;
      color: white;
      text-align: center;
      opacity: 0;
      pointer-events: none;
      @include ease(0.15s);

      &.active {
        opacity: 1;
        pointer-events: all;
        transform: scale(1) translateY(-50%);
      }
      .ranks-head, .ranks-input {
        padding: 10px 20px;
        background: $colorBackgroundDark;
        width: calc(100% - 40px);

        h3 {
          display: inline-block;
          vertical-align: middle;
          font-weight: 400;
          font-size: 0.9em;

          & + span {
            display: inline-block;
            vertical-align: middle;
            font-size: 0.9em;
            color: $colorFontBody;
          }
        }
        input {
          max-width: calc(100% - 20px);
          text-align: center;
          font-size: 0.9em;
          border-bottom: 1px solid $colorSubtle;
        }
      }
      .suggestions {
        max-height: 300px;
        overflow-y: scroll;
      }
    }
  }

  // Timepicker workaround to highlight active selection
  /deep/ .col-b .field.active {
    .input {
      span:not(.selected) {
        color: $colorFontBody;
      }
      img {
        transform: rotate(-180deg);
      }
    }
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
</style>
