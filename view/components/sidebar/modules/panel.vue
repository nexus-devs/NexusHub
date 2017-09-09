<template>
  <div class="panel">
    <div class="panel-head">
      <h3>Search</h3>
      <span>CTRL + F</span>
    </div>
  </div>
</template>



<style lang="scss" scoped>
@import '~src/styles/partials/importer';

.panel {
  position: absolute;
  margin-top: -53px;
  left: 64px;
  width: 286px;
  z-index: -1;
  transform: translateX(-300px);
  @include ease(0.45s);

  .panel-head {
    padding: 21px 35px;
    cursor: pointer;
    border-top: 1px solid $colorSubtleDark;
    @include ease(0.25s);

    &:hover {
      background: $colorBackgroundDarker;
    }

    h3 {
      display: inline-block;
      vertical-align: middle;
      font-size: 1em;

      // Shortcut
      & + span {
        display: inline-block;
        vertical-align: middle;
        float: right;
        font-size: 0.65em;
        margin-top: -0.2em;
        color: $colorFontSubtle;
        padding: 5px;
        border-radius: 2px;
        border: 1px solid $colorSubtle;
      }
    }
  }
}
</style>
