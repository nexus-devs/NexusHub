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
  </div>
</template>



<script>
export default {
}
</script>



<style lang="scss" scoped>
@import '~src/styles/partials/importer';

.module {
  @include field;
  display: flex;
  flex-direction: column;

  @media (max-width: $breakpoint-s) {
    width: 100% !important;
  }
  &.a-ie {
    padding: 0;

    &:before {
      border-radius: 2px;
    }
  }
}

.header {
  padding: 30px 35px 0;

  h2, h3 {
    display: inline-block;
    vertical-align: middle;
    font-size: 0.85em !important;
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
  span {
    display: block;
  }
}

.body {
  padding: 25px 35px;

  li {
    margin-top: 8px;
    margin-left: 15px;
    color: white;
    margin-bottom: 20px;
  }
  p, span {
    color: white;
    font-size: 0.95em;
  }
  li, p, span {
    max-width: 650px;
  }
}

.footer {
  display: flex;
  padding: 4px 25px;
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
</style>
