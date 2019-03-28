<template>
  <div class="module">
    <div class="header">
      <slot name="header"/>
    </div>
    <div class="body">
      <slot name="body"/>
    </div>
    <div class="footer">
      <slot name="footer"/>
    </div>
    <progressbar ref="progress"/>
  </div>
</template>



<script>
import progressbar from 'src/components/progress.vue'

export default {
  components: {
    progressbar
  }
}
</script>



<style lang="scss" scoped>
@import '~src/styles/partials/importer';

.module {
  position: relative;
  @include field;
  display: flex;
  flex-direction: column;

  @media (max-width: $breakpoint-s) {
    width: 100% !important;
  }
  &.interactive {
    padding: 0;

    &:before {
      border-radius: 2px;
    }
  }
}

.header {
  padding: 25px 25px 0;

  h2, h3 {
    display: inline-block;
    vertical-align: middle;
    font-size: 0.8em !important;
    letter-spacing: 0.5;
    color: $color-primary-subtle !important;
    text-transform: uppercase;
  }
  time {
    display: block;
    font-size: 0.85em;
    margin-top: 2px;
  }
  img {
    display: inline-block;
    vertical-align: middle;
  }
  .img {
    position: relative;
    overflow: hidden;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    vertical-align: middle;
    margin-right: 5px;
    height: 40px;
    width: 40px;
    border-radius: 40px;
    background: $color-bg;

    img, object {
      position: relative;
      max-height: 80%;
    }
  }
  span {
    display: block;
  }
  @media (max-width: $breakpoint-s) {
    padding: 25px 25px 0;
  }
}

.body {
  margin: 20px 0;
  padding: 0 25px;

  li {
    margin-top: 15px;
    margin-left: 15px;
    color: white;
    margin-bottom: 20px;
  }
  p {
    padding-top: 0px;
  }
  p, span {
    color: white;
    font-size: 0.9em;
  }
  li, p, span {
    max-width: 650px;
  }
  @media (max-width: $breakpoint-s) {
    padding: 0 25px;
    margin: 15px 0 20px;
  }
}

.footer {
  display: flex;
  padding: 2px 15px;
  margin-top: auto;
  background: $color-bg;
  font-size: 0.75em !important;
  border-radius: 2px;

  a {
    display: flex;
    margin-left: auto;
    align-items: center;
    text-transform: uppercase;
    @include ie;
    padding: 5px 10px;
    letter-spacing: 0.5;
    position: relative;
    left: 10px;

    &:hover {
      color: white !important;
    }
    img {
      height: 20px;
      margin-top: -3px;
      margin-left: -2px;
    }
  }
}

.progress {
  // Set to important because the main progress bar overrides it back to fixed
  // when compiling for production, due to some weird bug.
  position: absolute !important;
  top: 0;
  border-radius: 2px;
}
</style>
