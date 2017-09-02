<template>
  <nav>
    <div class="nav-upper">
      <div class="ico-wrapper">
        <div class="ico-a-ie">
          <img src="/img/nav/side-nav.svg" alt="Sidebar Navigation" class='ico-20'>
        </div>
        <span>Expand</span>
      </div>
    </div>
    <div class="nav-lower">
      <div class="ico-wrapper">
        <div class="ico-a-ie">
          <img src="/img/sidebar/search.svg" alt="" class='ico-20'>
        </div>
        <span>Search</span>
      </div>
    </div>
  </nav>
</template>


<style lang='scss' scoped>
  @import '~src/styles/partials/importer';

  nav {
    position: relative;
    z-index: 2;
    display: flex;
    flex-direction: column;
    position: fixed;

    .nav-upper {
      background: rgba(27,31,36,0.8);
    }

    .nav-lower {
      height: calc(100vh - 52px);
      @include gradient-background(rgba(47, 54, 60, 0.8), $colorBackground);
      @include shadow-2;
      @include ease(0.35s);

      @media (max-width: $breakpoint-s) {
        transform: translateX(-100%);
      }
    }

    .ico-wrapper {
      position: relative;
      padding: 12px;

      &:first-of-type {
        background: rgba(0,5,10,0.3);
      }
    }

    .ico-a-ie {
      @include ie(24);
      display: inline-block;

      // Tooltips
      & + span {
        position: absolute;
        pointer-events: none;
        text-align: center;
        font-size: 0.85em;
        font-weight: 400;
        width: 70px;
        padding: 5px;
        top: 18px;
        left: 45px;
        color: white;
        opacity: 0;
        background: rgba(27, 34, 40, 0.8);
        @include shadow-2;
        @include ease(0.25s);
      }

      &:hover {
        & + span {
          opacity: 1;
          transform: translateX(10px);
        }
      }
    }

    .border {
      width: 50%;
      margin-left: auto;
      margin-right: auto;
      margin-bottom: 10px;
      height: 1.5px;
      border-radius: 100px;
      background: $colorSubtle;
    }
  }
</style>
