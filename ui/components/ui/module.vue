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
}

.header {
  padding: 25px 30px;
  border-bottom: 1px solid $color-subtle-dark;
  padding-bottom: 20px;

  time {
    display: block;
    font-size: 0.9em;
    margin-top: 2px;
  }
  img {
    margin-top: 20px;
    width: 100%;
    max-width: 650px;
    max-height: 50vh;
    border-radius: 2px;
  }
}

.body {
  padding: 30px;

  li {
    margin-top: 8px;
    margin-left: 15px;
    color: white;
  }
  p, span {
    color: white;
  }
  li, p, span {
    max-width: 650px;
  }
}

.footer {
  display: flex;
  padding: 4px 10px;
  margin-top: auto;
  border-top: 1px solid $color-subtle-dark;
  font-size: 0.85em;

  a {
    display: flex;
    align-items: center;
    text-transform: uppercase;
    margin-left: auto;
    @include ie;
    padding: 5px 10px;

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
