<template>
  <div>
    <navigation></navigation>
    <sidebar>
      <sidebar-search></sidebar-search>
    </sidebar>
    <app-content>
      <div class="company">
        <video playsinline autoplay muted loop class="background">
          <source src="https://giant.gfycat.com/IckyEssentialHamadryad.webm" type="video/webm">
        </video>
        <div class="g-ct">
          <div class="row">
            <div class="col-b">
              <h1>Making Game Data more Transparent with Nexus-Stats</h1>
              <p>
                The best decisions in gaming are made on data. Whether it's about buying
                that item we always wanted, or finding ways to improve our playstyle.
                Nexus-Stats is about bringing that data to you, regardless if you're a
                mighty pro gamer or a casual in it for the fun.
              </p>
            </div>
            <div class="col-b ico">
              <img src="/img/brand/nexus-stats-logo-bw.svg" alt="">
            </div>
          </div>
        </div>
        <svg viewBox="0 0 3920 240" preserveAspectRatio="xMidYMid meet">
          <path fill-rule="evenodd"
                d="M0.000,88.823 C0.000,88.823 190.856,-36.849 677.231,28.404 C1163.605,93.656 1234.110,90.001 1450.505,49.349 C1672.756,7.597 1734.942,-11.070 2000.909,8.264 C2266.876,27.598 2323.761,103.990 2759.407,72.711 C2999.824,55.449 3238.394,-10.264 3622.568,33.237 C4006.743,76.739 4015.362,114.602 4131.107,79.156 C4246.852,43.710 4037.526,359.499 4037.526,359.499 L7.388,374.000 L0.000,88.823 Z"/>
        </svg>
      </div>
      <div class="g-ct">
        <section class="who-we-are">
          <h2>Who we are</h2>
          <p>
            We're a small group of passionate gamers from all over the world,
            building Nexus-Stats in our spare time. <br>
            Our journey started just over a year ago when we tackled the lack of
            transparency in Warframe's ingame economy with the use of
            Optical Character Recognition for the ingame tradechat. <br><br>
            Since then, Nexus-Stats has evolved into a fully scalable framework
            for every type of data imaginable, aiming to achieve the most useful
            data visualizations for actual gamers.
          </p>
        </section>
      </div>
      <div class="stats-container">
        <section>
          <div class="stats g-ct">
            <h2>We're getting pretty popular</h2>
            <p>
              Our platform has been growing continously since day one, so it seems we're doing
              things right.
            </p>
            <div class="row">
              <div class="col-b">
                <div class="number">
                  200,000
                </div>
                <div class="label">
                  Monthly Users
                </div>
              </div>
              <div class="col-b">
                <div class="number">
                  4,000,000
                </div>
                <div class="label">
                  Monthly Page Views
                </div>
              </div>
              <div class="col-b">
                <div class="number">
                  1,000,000
                </div>
                <div class="label">
                  Processed ingame offers each month
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <section class="join">
        <div class="g-ct">
          <h2>Help us shape Nexus-Stats!</h2>
          <p>
            We currently don't have any open paid positions, but if you're as excited
            about Nexus-Stats as we are, you can always work right on our source code through our
            <a href="https://github.com/nexus-devs/nexus-stats" target="_blank">open source repositories</a>.
            If that sounds fun to you, join our Discord Server and PM one of the devs!
          </p>
          <br>
          <a href="https://discord.gg/TCxe6P4" target="_blank" class="btn">Join us on Discord</a>
        </div>
      </section>
    </app-content>
  </div>
</template>



<script>
import appContent from 'src/app-content.vue'
import sidebar from 'src/components/ui/sidebar.vue'
import sidebarSearch from 'src/components/ui/sidebar/search.vue'
import navigation from 'src/components/ui/nav.vue'

export default {
  components: {
    'app-content': appContent,
    sidebar,
    'sidebar-search': sidebarSearch,
    navigation,
  }
}
</script>



<style lang="scss" scoped>
@import '~src/styles/partials/importer';

.company {
  position: relative;
  overflow: hidden;
  top: -56px;
  padding-top: 50px;
  padding-bottom: 220px;
  @include gradient-background-dg($color-primary-dark, $color-accent-dark);

  @media (max-width: $breakpoint-m) {
    padding-top: 100px;
  }
  p {
    color: white !important;
  }
  .g-ct {
    position: relative;
    z-index: 1;
    max-width: 1100px;
  }
  .background {
    position:absolute;
    top: 25%;
    left: 50%;
    min-width: 100%;
    min-height: 100%;
    width: auto;
    height: auto;
    opacity: 0.4;
    z-index: 0;
    filter: blur(7px);
    background: $color-bg;
    transform: translateX(-50%) translateY(-25%);
  }
  .ico {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 120px;

    img {
      height: 96px;
      animation: hover 15s infinite;
    }
  }
}
svg {
  position: absolute;
  z-index: 1;
  left: 0;
  width: calc(100vw + 300px);
  min-width: 1920px;
  margin-top: 160px;
  fill: $color-bg-dark;
  animation: goostuff 60s linear infinite;
}
h1 {
  font-weight: 600;
  max-width: 500px;
  line-height: 1.2;
  margin-top: 150px;
  margin-bottom: 15px;
}
p {
  font-size: 1.05em;
  max-width: 800px;
}
a {
  margin-top: 15px;
}
.who-we-are {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  background: $color-bg-dark;
  padding-top: 80px;
  margin-bottom: 40px;

  p {
    margin: auto;
    margin-top: 20px;
    text-align: left;
  }
  @media (max-width: $breakpoint-s) {
    text-align: left;
  }
}
.stats-container {
  background: $color-bg-darker;
  section {
    padding: 100px 0;
  }
}
.stats {
  max-width: 800px;
  margin: auto;

  .col-b {
    &:nth-of-type(2) {
      text-align: center;
      @media (max-width: $breakpoint-s) {
        text-align: left;
      }
    }
    &:nth-of-type(3) {
      text-align: right;
      @media (max-width: $breakpoint-s) {
        text-align: left;
      }
    }
    .number {
      font-size: 2em;
      color: $color-primary;
      margin-top: 20px;
    }
    .label {
      margin-top: -5px;
      color: white;
    }
  }
}
.join {
  text-align: center;
  padding: 20px 0;

  p {
    display: inline-block;
    text-align: left;
  }
  .btn {
    display: inline-block;
    margin-top: 30px;
  }
  @media (max-width: $breakpoint-s) {
    text-align: left;
  }
}

@keyframes goostuff {
    0% {
      transform: translateX(0);
    }
    50% {
      transform: translateX(-300px);
    }
    100% {
      transform: translateX(0);
    }
}
@keyframes hover {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0);
  }
}
</style>
