<template>
  <div>
    <searchfield>
      <div class="button-wrapper">
        <searchbutton></searchbutton>
      </div>
    </searchfield>
    <timefield></timefield>
    <rankfield></rankfield>
  </div>
</template>



<script>
  import searchfield from 'src/components/search/fields/input.vue'
  import timefield from 'src/components/search/fields/time.vue'
  import rankfield from 'src/components/search/fields/rank.vue'
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

/deep/ .search {
  margin-top: 15px;

  label, br {
    display: none;
  }
  .field {
    border-radius: 9999px;
    padding: 8px 15px;
    background: $colorBackgroundDarker;
  }
  input {
    position: relative;
    color: white;
    z-index: 1;
  }
  .autocomplete {
    position: absolute;
    left: 50px;
  }
  .autocomplete-type {
    display: none;
  }
  .button-wrapper {
    position: absolute;
    z-index: 1;
    overflow: hidden;
    margin-top: -29.5px;
    border-radius: 9999px;
    right: 35px;
    height: 37px;
    width: 60px;

    .button-icon {
      display: inline-block;
      position: relative;
      left: 18px;
      top: -4px;
      @include ie(20);
      padding: 12px 10px;
      border-radius: 0;
      @include gradient-background-dg($colorPrimary, $colorAccent);

      &:hover {
        @include gradient-background-dg($colorPrimary, $colorAccent);
      }
      img {
        position: relative;
        left: -2px;
      }
    }
    button {
      display: none;
    }
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
        margin-top: -3px;
        font-size: 0.9em;
      }
    }
    .suggestion-data {
      display: none;
    }
  }
}

/deep/ .time {
  border-top: 1px solid $colorSubtleDark;
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
        margin-left: -10px;
        margin-bottom: 8px;
        color: white;
        font-size: 0.9em;
        padding: 5px 15px;
        background: $colorBackgroundDarker;

        &:hover {
          background: $colorBackgroundLight;
        }
      }
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

/deep/ .rank {
  border-top: 1px solid $colorSubtleDark;
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
        margin: 3px;
        background: $colorBackgroundDarker;
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
