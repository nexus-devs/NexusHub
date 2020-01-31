<template>
  <div>
    <navigation />
    <app-content>
      <div class="company">
        <div class="container">
          <img src="/img/company/header-blobs.svg" class="header-blobs">
          <div class="box-top">
            <h1>Making Games more transparent with NexusHub.</h1>
          </div>
          <div class="box-top-sub" />
          <div class="box-sub">
            <h2>The best decisions in gaming are made on data</h2>
            <p>
              Whether it's about buying
              that item we always wanted, or finding ways to improve our playstyle.
              NexusHub is about bringing that data to you, regardless if you're a
              mighty pro gamer or a casual in it for the fun.
            </p>
          </div>
        </div>
      </div>
      <div class="who-we-are-container container">
        <section class="who-we-are">
          <div>
            <h2>Who we are</h2>
            <p>
              We're a small group of gamers from all over the world,
              building NexusHub in our spare time. Starting out as
              casual players who made a bot to monitor
              Warframe's trade chat, we have grown into a diverse community of open source
              developers, persisting in our mission to simply make games more
              accessible for everyone.
            </p>
          </div>
        </section>
      </div>
      <div class="stats-container">
        <section>
          <div class="stats container">
            <h2>People ❤️ NexusHub</h2>
            <p>
              Our platform has been growing continously since day one, so it seems we're doing
              things right.
            </p>
            <div class="row">
              <div class="col-b">
                <div class="number">
                  {{ users }}
                </div>
                <div class="label">
                  Monthly Users
                </div>
              </div>
              <div class="col-b">
                <div class="number">
                  {{ views }}
                </div>
                <div class="label">
                  Monthly Page Views
                </div>
              </div>
              <div class="col-b">
                <div class="number">
                  {{ offers }}
                </div>
                <div class="label">
                  Processed orders each month
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <section class="join">
        <div class="container">
          <h2>Wanna help us build NexusHub?</h2>
          <p>
            NexusHub is entirely developed by community members of the games
            we support, so if you wanna make some awesome feature for the
            platform, we'd happily have you join our team.
          </p>
          <span>Sounds fun to you? Hit us up on Discord!</span>
          <br>
          <a href="https://discord.gg/TCxe6P4" target="_blank" class="btn">Join us on Discord</a>
        </div>
      </section>
      <div class="cute-fluff">
        <img src="/img/ui/header-blobs.svg" class="bottom-blob">
        <img src="/img/company/blobot.svg" alt="Blobot" class="blobot">
      </div>
    </app-content>
  </div>
</template>



<script>
import appContent from 'src/app-content.vue'
import meta from 'src/components/seo/meta.js'
import navigation from 'src/components/ui/nav/warframe.vue'
import storeModule from 'src/store/analytics.js'
const parseNum = (num) => (Math.round(num / 1000) * 1000)
  .toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')

export default {
  components: {
    navigation,
    appContent
  },

  async asyncData () {
    let users, views, offers

    await Promise.all([
      this.$cubic.get('/analytics/v1/ga/users').then(data => { users = data }),
      this.$cubic.get('/analytics/v1/ga/views').then(data => { views = data }),
      this.$cubic.get('/warframe/v1/analytics/orders').then(data => { offers = data })
    ])
    this.$store.commit('setAnalyticsUsers', users)
    this.$store.commit('setAnalyticsViews', views)
    this.$store.commit('setAnalyticsOffers', offers)
  },

  computed: {
    users () {
      return parseNum(this.$store.state.analytics.users)
    },
    views () {
      return parseNum(this.$store.state.analytics.views)
    },
    offers () {
      return parseNum(this.$store.state.analytics.offers)
    }
  },

  storeModule,

  head: {
    title: 'NexusHub · Company',
    meta: meta({
      title: 'NexusHub',
      description: "Making Games more transparent with NexusHub. Whether it's about buying that item we always wanted, or finding ways to improve our playstyle. NexusHub is about bringing that data to you, regardless if you're a mighty pro gamer or a casual in it for the fun."
    })
  }
}
</script>



<style lang="scss" scoped>
@import '~src/styles/partials/importer';

section {
  padding: 80px 0;
}
.company {
  display: flex;
  justify-content: center;
  position: relative;
  overflow: hidden;
  padding-top: 200px;
  padding-bottom: 200px;
  background: $color-bg-darker;

  .header-blobs {
    position: absolute;
    width: 110%;
    left: -100px;
    top: -100px;
    min-width: 1920px;
    fill: $color-subtle-dark !important;
    animation-name: pulse;
    animation-timing-function: ease-in-out;
    animation-duration: 35s;
    animation-iteration-count: infinite;
  }
  .box-top {
    position: relative;
    z-index: 1;
    display: inline-block;
    padding: 40px;
    max-width: 300px;
    border-radius: 2px;
    animation: fadeinUp 0.7s forwards;
    animation-delay: 0.15s;
    opacity: 0;
    @include shadow-2;
    @include gradient-background-dg(#59d680, $color-accent-subtle);
  }
  .box-top-sub {
    position: absolute;
    height: 250px;
    width: 250px;
    top: 175px;
    margin-left: -40px;
    animation: fadeinUp 0.7s forwards;
    animation-delay: 0.3s;
    opacity: 0;
    background: $color-bg-dark;
    border-radius: 2px;
  }
  .box-sub {
    position: relative;
    font-size: 1em;
    display: inline-block;
    padding: 40px;
    padding-left: 60px;
    max-width: 500px;
    left: -30px;
    top: 65px;
    background: $color-bg-dark;
    border-radius: 2px;
    animation: fadeinSide 1s forwards;
    animation-delay: 0.4s;
    opacity: 0;
    @include shade-1;

    h2 {
      max-width: 400px;
    }
  }
  p {
    max-width: 600px;
    margin-top: 20px;
    margin-bottom: 20px;
  }
  @media (max-width: $breakpoint-m) {
    padding-top: 100px;
    .container {
      flex-direction: column;
    }
    .box-top {
      max-width: 200px;
    }
    .box-sub {
      padding-left: 40px;
      padding-top: 70px;
      margin-left: 50px;
      margin-top: -110px;
    }
    h1 {
      font-size: 1.6em;
      margin: 20px 0;
    }
  }
  @media (max-width: $breakpoint-s) {
    .box-sub {
      margin-left: 0;
      margin-right: -50px;
    }
  }
}
h1 {
  font-weight: 600;
  max-width: 600px;
  line-height: 1.2;
  margin: 60px 0;
}
h2 {
  font-size: 1.6em;
}
p, span {
  font-size: 1.1em;
  max-width: 800px;
}
a {
  margin-top: 15px;
}
.who-we-are {
  display: flex;
  justify-content: center;
  background: $color-bg-dark;
  margin: 40px 0;

  h2 {
  }
  p {
    margin-top: 20px;
    max-width: 800px;
  }
}
.stats-container {
  position: relative;
  overflow: hidden;
  padding: 40px 0 20px;
  background: $color-bg-darker;
}
.stats-blob {
  position: absolute;
  min-width: 1800px;
  opacity: 0.5;
}
.stats {
  max-width: 800px;
  margin: auto;
  text-align: center;

  p {
    border: none;
    padding: 0;
    margin-top: 20px;
    margin-bottom: 40px;
  }
  .col-b {
    &:nth-of-type(2) {
      @media (max-width: $breakpoint-s) {
        margin-top: 20px;
      }
    }
    &:nth-of-type(3) {
      @media (max-width: $breakpoint-s) {
        margin-top: 20px;
        text-align: center;
      }
    }
    .number {
      font-size: 1.8em;
      color: white;
      margin-top: 20px;
    }
    .label {
      margin-top: 5px;
      color: white;
    }
  }
}
.join {
  position: relative;
  z-index: 1;
  text-align: center;
  padding: 120px 0 120px;

  p {
    display: inline-block;
    text-align: left;
    margin: 20 0;
    border: none;
  }
  span {
    display: block;
    max-width: none;
    margin-top: 10px;
    color: $color-font-paragraph;
  }
  .btn {
    display: inline-block;
    margin-top: 30px;
  }
  @media (max-width: $breakpoint-s) {
    text-align: left;
  }
}
.cute-fluff {
  text-align: center;
  position: relative;
  overflow: hidden;
  height: 400px;
  top: -250px;
  margin-bottom: -300px;
  z-index: 0;

  .bottom-blob {
    position: absolute;
    top: -100px;
    left: -100px; // blob isn't optically centered
    width: 2200px;
    min-width: calc(100vw + 300px);
  }
  .blobot {
    position: relative;
    top: 220px;
    max-height: 200px;
  }
}
@keyframes fadeinUp {
  from {
    opacity: 0;
    transform: translateY(25px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes fadeinSide {
  from {
    opacity: 0;
    transform: translateX(-25px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
@keyframes pulse {
  0% {
    transform: scaleX(1);
  }
  50% {
    transform: scale3d(1.15,1.15,1.15);
  }
  100% {
    transform: scaleX(1);
  }
}
</style>
