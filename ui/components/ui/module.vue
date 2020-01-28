<template>
  <div :class="theme.module" class="module">
    <div :class="theme.header" class="header">
      <slot name="header" />
    </div>
    <div class="body">
      <slot name="body" />
    </div>
    <div :class="theme.footer" class="footer">
      <slot name="footer" />
    </div>
    <progressbar ref="progress" />
  </div>
</template>



<script>
import getTheme from 'src/components/_theme.js'
import progressbar from 'src/components/progress.vue'

export default {
  components: {
    progressbar
  },

  computed: {
    theme () {
      return getTheme(this)
    }
  }
}
</script>


<style lang="scss" module="warframe">
@import '~src/styles/partials/importer';

.module {
  @include field;
}
.header {
  :global {
    h2, h3 {
      color: $color-primary-subtle !important;
    }
    .img {
      background: $color-bg;
    }
  }
}
.footer {
  background: $color-bg;
}
</style>

<style lang="scss" module="wow-classic">
@import '~src/styles/partials/wow-classic/importer';

.module {
  @include field;
}
.header {
  :global {
    h2, h3 {
      color: $color-primary-subtle !important;
    }
  }
}
.footer {
  background: $color-bg;
}
</style>

<style lang="scss" scoped>
@import '~src/styles/partials/importer';

.module {
  position: relative;
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
    @include uppercase;
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
  height: 100%;

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
  font-size: 0.75em !important;
  border-radius: 2px;

  a {
    display: flex;
    margin-left: auto;
    align-items: center;
    @include uppercase;
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
