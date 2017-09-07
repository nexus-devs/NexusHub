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
        <rankfield></rankfield>
      </div>
    </div>
  </div>
</template>


<script>
  import searchfield from 'src/vue/components/search/fields/input.vue'
  import timefield from 'src/vue/components/search/fields/time.vue'
  import rankfield from 'src/vue/components/search/fields/rank.vue'

  export default {
    components: {
      searchfield,
      timefield,
      rankfield,
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
    background: rgba(27, 32, 37, 0.8);
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
      font-size: 1.05em;
      display: inline-block;
      color: white;
      margin-bottom: -10px;
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
      font-size: 1.05em;
      left: 15px;
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

    .suggestion {
      padding: 15px;
      cursor: pointer;
      @include ease-out(0.7s);

      &:hover {
        background: rgba(17, 22, 27, 0.8);
      }

      .ico-36 {
        position: relative;
        overflow: hidden;
        text-align: center;
        background: rgba(47, 52, 57, 0.5);
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

    @media (max-width: $breakpoint-s) {
      width: 100%;
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
