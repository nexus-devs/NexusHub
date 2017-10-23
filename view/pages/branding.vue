<template>
  <div>
    <navigation></navigation>
    <sidebar>
      <sidebar-search></sidebar-search>
    </sidebar>
    <ui-header>
      <img slot="headline" src="/img/brand/nexus-stats-typeface-bw.svg" alt="Nexus-Stats">
      <h1 slot="headline">BRAND</h1>
      <p slot="description">
        Nexus-Stats is an agile, reactive brand that is always ready for action.
        Feel free to use the assets below when you need to reference our service.
      </p>
    </ui-header>
    <div class="g-ct">
      <section>
          <h2>Nexus-Stats Logo</h2>
          <p>
            Please do not edit, distort, recolor, or otherwise repurpose the Nexus-Stats logo.
          </p>
          <div class="row row-margin">
            <div class="col logo">
              <img src="/img/brand/nexus-stats-logo-typeface-color.svg" alt="Full Color Nexus-Stats Logo">
              <div class="logo-download">
                <a href="/img/brand/nexus-stats-logo-typeface-color.svg" download>.svg</a>
                <a href="/img/brand/nexus-stats-logo-typeface-color.png" download>.png</a>
              </div>
            </div>
            <div class="col logo">
              <img src="/img/brand/nexus-stats-logo-typeface-bw.svg" alt="Black/White Nexus-Stats Logo">
              <div class="logo-download">
                <a href="/img/brand/nexus-stats-logo-typeface-bw.svg" download>.svg</a>
                <a href="/img/brand/nexus-stats-logo-typeface-bw.png" download>.png</a>
              </div>
            </div>
            <div class="col logo">
              <img src="/img/brand/nexus-stats-logo-typeface-b.svg" alt="Full Color Nexus-Stats Logo">
              <div class="logo-download">
                <a href="/img/brand/nexus-stats-logo-typeface-b.svg" download>.svg</a>
                <a href="/img/brand/nexus-stats-logo-typeface-b.png" download>.png</a>
              </div>
            </div>
          </div>
          <div class="row row-margin">
            <div class="col logo-alt">
              <img src="/img/brand/nexus-stats-logo-color.svg" alt="Full Color Nexus-Stats Logo">
              <div class="logo-download">
                <a href="/img/brand/nexus-stats-logo-color.svg" download>.svg</a>
                <a href="/img/brand/nexus-stats-logo-color.png" download>.png</a>
              </div>
            </div>
            <div class="col logo-alt">
              <img src="/img/brand/nexus-stats-logo-typeface-v-color.svg" alt="Full Color Nexus-Stats Logo">
              <div class="logo-download">
                <a href="/img/brand/nexus-stats-logo-typeface-v-color.svg" download>.svg</a>
                <a href="/img/brand/nexus-stats-logo-typeface-v-color.png" download>.png</a>
              </div>
            </div>
            <div class="col logo-alt">
              <img src="/img/brand/nexus-stats-logo-bw.svg" alt="Black/White Nexus-Stats Logo">
              <div class="logo-download">
                <a href="/img/brand/nexus-stats-logo-bw.svg" download>.svg</a>
                <a href="/img/brand/nexus-stats-logo-bw.png" download>.png</a>
              </div>
            </div>
            <div class="col logo-alt">
              <img src="/img/brand/nexus-stats-logo-typeface-v-bw.svg" alt="Black/White Nexus-Stats Logo">
              <div class="logo-download">
                <a href="/img/brand/nexus-stats-logo-typeface-v-bw.svg" download>.svg</a>
                <a href="/img/brand/nexus-stats-logo-typeface-v-bw.png" download>.png</a>
              </div>
            </div>
            <div class="col logo-alt">
              <img src="/img/brand/nexus-stats-logo-b.svg" alt="Full Color Nexus-Stats Logo">
              <div class="logo-download">
                <a href="/img/brand/nexus-stats-logo-b.svg" download>.svg</a>
                <a href="/img/brand/nexus-stats-logo-b.png" download>.png</a>
              </div>
            </div>
            <div class="col logo-alt">
              <img src="/img/brand/nexus-stats-logo-typeface-v-b.svg" alt="Full Color Nexus-Stats Logo">
              <div class="logo-download">
                <a href="/img/brand/nexus-stats-logo-typeface-v-b.svg" download>.svg</a>
                <a href="/img/brand/nexus-stats-logo-typeface-v-b.png" download>.png</a>
              </div>
            </div>
          </div>
      </section>
      <section>
        <h2>Nexus-Stats Colors</h2>
        <p>
          Keep in mind that each color in our palette comes in two shades for
          different scenarios.
        </p>
        <div class="row row-margin">
          <div class="col-b color">
            <div class="primary-shade green">
              <span>Primary Shade</span>
              <span>#6ae974</span>
            </div>
            <div class="sub-shade green-shade">
              <span>#58c761</span>
            </div>
          </div>
          <div class="col-b color">
            <div class="primary-shade blue">
              <span>Primary Shade</span>
              <span>#3ad1d7</span>
            </div>
            <div class="sub-shade blue-shade">
              <span>#38b6b9</span>
            </div>
          </div>
          <div class="col-b color">
            <div class="primary-shade grey">
              <span>Primary Shade</span>
              <span>#4e5862</span>
            </div>
            <div class="sub-shade grey-shade">
              <span>#414952</span>
            </div>
          </div>
          <div class="col-b color">
            <div class="primary-shade dark">
              <span>Primary Shade</span>
              <span>#20242a</span>
            </div>
            <div class="sub-shade dark-shade">
              <span>#181a20</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>



<script>
import sidebar from 'src/components/ui/sidebar.vue'
import sidebarSearch from 'src/components/ui/sidebar/search.vue'
import navigation from 'src/components/ui/nav.vue'
import uiheader from 'src/components/ui/header.vue'

export default {
  components: {
    sidebar,
    'sidebar-search': sidebarSearch,
    navigation,
    'ui-header': uiheader
  }
}
</script>



<style lang="scss" scoped>
@import '~src/styles/partials/importer';

p {
  font-size: 1.05em;
}

header {
  img {
    display: inline-block;
    vertical-align: middle;
    height: 24px;
    margin-right: 10px;
  }
  h1 {
    position: relative;
    display: inline-block;
    vertical-align: middle;
  }
}

.row {
  .col {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background: $colorBackground;
    @include field;

    .logo-download {
      position: absolute;
      width: 100%;
      text-align: right;
      padding: 10px 0;
      right: 15px;
      bottom: 0;
      font-size: 0.9em;

      a {
        margin: 0 5px;
        color: $colorFontBody !important;

        &:hover {
          color: white !important;
        }
      }
    }
  }
  .logo {
    padding: 50px 50px;

    img {
      height: 48px;
    }
  }
  .logo-alt {
    padding: 40px 30px;

    img {
      height: 44px;
    }
  }
  .color {
    position: relative;
    overflow: hidden;
    color: white;
    border-radius: 2px;
    @include shadow-1;

    .primary-shade {
      display: flex;
      justify-content: space-between;
      padding: 20px 20px 140px;
    }
    .sub-shade {
      padding: 15px 20px;
      text-align: right;
    }
    .green {
      background: $colorPrimary;
    }
    .green-shade {
      background: $colorPrimaryDark;
    }
    .blue {
      background: $colorAccent;
    }
    .blue-shade {
      background: $colorAccentDark;
    }
    .grey {
      background: $colorBackgroundLight;
    }
    .grey-shade {
      background: $colorBackground;
    }
    .dark {
      background: $colorBackgroundDark;
    }
    .dark-shade {
      background: $colorBackgroundDarker;
    }
  }
}
.row-margin {
  margin-top: 5px;

  &:first-of-type {
    margin-top: 20px;
  }
}

a {
  margin-top: 15px;
}
</style>
