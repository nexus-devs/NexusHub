<template>
  <div>
    <sidebar>
      <sidebar-search/>
    </sidebar>
    <app-content>
      <div class="company">
        <div class="container">
          <h1>Making Games more transparent with NexusHub.</h1>
          <p>
            The best decisions in gaming are made on data. Whether it's about buying
            that item we always wanted, or finding ways to improve our playstyle.
            NexusHub is about bringing that data to you, regardless if you're a
            mighty pro gamer or a casual in it for the fun.
          </p>
        </div>
        <img src="/img/company/blob.svg" class="blob">
      </div>
      <div class="who-we-are-container container">
        <section class="who-we-are">
          <div>
            <h2>Who we are</h2>
            <p>
              We're a small group of gamers from all over the world,
              building Nexus-Stats in our spare time. Starting out as
              just some casual players who made a bot to monitor
              Warframe's trade chat, we have grown into a diverse community of open source
              developers, persisting in our mission to simply make games more
              accessible for everyone.
            </p>
          </div>
        </section>
      </div>
      <div class="stats-container">
        <img src="/img/ui/header-blobs.svg" class="stats-blob">
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
        <img src="/img/company/bottom-blob.svg" class="bottom-blob">
        <img src="/img/company/blobot.svg" alt="Blobot" class="blobot">
      </div>
    </app-content>
  </div>
</template>



<script>
import appContent from 'src/app-content.vue'
import sidebar from 'src/components/ui/sidebar/sidebar.vue'
import sidebarSearch from 'src/components/ui/sidebar/search.vue'
const parseNum = (num) => (Math.round(num / 1000) * 1000)
  .toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')

export default {
  components: {
    'app-content': appContent,
    sidebar,
    'sidebar-search': sidebarSearch
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

  async asyncData () {
    let users, views, offers

    await Promise.all([
      this.$cubic.get('/analytics/v1/ga/users').then(data => { users = data }),
      this.$cubic.get('/analytics/v1/ga/views').then(data => { views = data }),
      this.$cubic.get('/warframe/v1/analytics/offers').then(data => { offers = data })
    ])
    this.$store.commit('setAnalyticsUsers', users)
    this.$store.commit('setAnalyticsViews', views)
    this.$store.commit('setAnalyticsOffers', offers)
  },

  storeModule: {
    name: 'analytics',
    state: {
      users: null,
      views: null
    },
    mutations: {
      setAnalyticsUsers (state, users) {
        state.users = users
      },
      setAnalyticsViews (state, views) {
        state.views = views
      },
      setAnalyticsOffers (state, offers) {
        state.offers = offers
      }
    }
  }
}
</script>



<style lang="scss" scoped>
@import '~src/styles/partials/importer';

.company {
  position: relative;
  overflow: hidden;
  padding-top: 40px;
  padding-bottom: 200px;
  @include gradient-background-dg($color-primary-subtle, $color-accent-subtle);

  .container {
    position: relative;
    top: -30px;
    left: -200px;
    padding-left: 300px;

    @media (max-width: $breakpoint-m) {
      left: 0;
      padding-left: 42px;
    }
  }
  @media (max-width: $breakpoint-m) {
    padding-top: 0px;
  }
  p {
    color: white !important;
    max-width: 600px;
  }
}
.blob {
  position: absolute;
  z-index: 1;
  left: -50px;
  bottom: -30px;
  width: calc(100vw + 150px);
  min-width: 1920px;
  fill: $color-bg-dark;
  animation: goostuff 60s linear infinite;
}
h1 {
  font-weight: 600;
  max-width: 600px;
  line-height: 1.2;
  margin-top: 150px;
  margin-bottom: 15px;
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
  margin-bottom: 40px;

  h2 {
    text-align: center;
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
      font-size: 2em;
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
  padding: 100px 0 120px;

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
  top: -325px;
  margin-bottom: -345px;
  z-index: 0;

  .bottom-blob {
    position: absolute;
    opacity: 0.4;
    top: 150px;
    left: -100px; // blob isn't optically centered
    width: 2200px;
    min-width: calc(100vw + 300px);
    animation: goostuff 30s linear infinite;
  }
  .blobot {
    position: relative;
    top: 220px;
    max-height: 225px;
  }
}

@keyframes goostuff {
    0% {
      transform: translateX(0);
    }
    50% {
      transform: translateX(-100px);
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
