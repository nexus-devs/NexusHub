<template>
  <div class="module-time">
    <div class="interactive" @click="toggle">
      <span>Options</span>
      <img src="/img/ui/dropdown.svg" class="ico-h-20" alt="Dropdown">
    </div>
    <div :class="{ active }" class="dropdown">
      <div class="body">
        <span @click="toggle()">Options</span>
        <span>Primary: <input /></span>
        <span>Secondary:</span>
        <span>Purge Outliers:</span>
      </div>
    </div>
  </div>
</template>



<script>
export default {
  props: [],

  data () {
    return {
      active: false
    }
  },

  methods: {
    toggle () {
      this.active = !this.active
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~src/styles/partials/wow-classic/importer';

.module-time {
  position: relative;
  z-index: 2;
  font-size: 1.1em;
  color: white;
}
.interactive {
  padding: 6px 10px;
}
.dropdown {
  white-space: nowrap;
  background: $color-bg;
  position: absolute;
  top: 0;
  right: 0;
  padding: 5px 0;
  @include ease(0.15s);
  @include shade-1;

  .body {
    display: flex;
    flex-direction: column;

    span {
      cursor: pointer;
      padding: 10px 15px;
      @include ease(0.15s);
    }
    span:hover {
      background: rgba(0,0,0,0.15);
    }
    span:not(.active) {
      color: $color-font-body;
    }
    input {
      background-color: $color-font-body;
    }
  }
  &:not(.active) {
    pointer-events: none;
    opacity: 0;
    transform: translateY(-5px);
    transform-origin: top;
    @include ease(0.15s);
  }
}
</style>
