<template>
  <div>
    <navigation/>
    <sidebar>
      <sidebar-search/>
    </sidebar>
    <app-content>
      <!-- Realtime Orders -->
      <section>
        <div class="container">
          <div class="row-margin overview">
            <div class="col-b-4">
              <h2 class="sub">Market Overview</h2>
              <div class="realtime">
                <opm/>
                <div class="most-traded row">
                  <router-link v-for="order in opm.mostTraded" :key="order.item" :to="`/warframe/items/${order.item.split(' ').join('-').toLowerCase()}/trading`" class="item col interactive">
                    <module>
                      <template slot="header">
                        <div class="img">
                          <object :data="`/img/warframe/items/${order.item.split(' ').join('-').toLowerCase()}.png`" type="image/png">
                            <img :src="`/img/warframe/items/${order.item.split(' ').join('-').toLowerCase()}.jpeg`" :alt="order.item">
                          </object>
                        </div>
                        <h3>{{ order.item }}</h3>
                      </template>
                      <template slot="body">
                        <span class="highlight">{{ order.amount }}</span>
                        <br>
                        <span class="sub"> Orders for {{ order.item }}</span>
                      </template>
                    </module>
                  </router-link>
                </div>
              </div>
            </div>
            <div class="col-b activity-data">
              <h2 class="sub">Busy Hours</h2>
              <activity/>
            </div>
          </div>
        </div>
      </section>

      <!-- Patch logs -->
      <section>
        <div class="container">
          <h2 class="sub">Latest Patchlogs</h2>
          <div class="row-margin patchlogs">
            <patchlog v-for="patchlog in patchlogs" :key="patchlog.date" :patchlog="patchlog" :overview="true" class="col-b"/>
          </div>
        </div>
      </section>
    </app-content>
  </div>
</template>



<script>
import activity from 'src/components/warframe/activity.vue'
import appContent from 'src/app-content.vue'
import module from 'src/components/ui/module.vue'
import navigation from 'src/components/ui/nav/warframe.vue'
import opm from 'src/components/warframe/opm-global.vue'
import patchlog from 'src/components/warframe/patchlog.vue'
import storeModule from 'src/store/warframe/warframe.js'

export default {
  components: {
    navigation,
    appContent,
    opm,
    activity,
    module,
    patchlog
  },

  computed: {
    opm () {
      return this.$store.state.opm.all
    },
    activity () {
      return this.$store.state.busyhours.data
    },
    patchlogs () {
      return this.$store.state.warframe.patchlogs
    }
  },

  mounted () {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)

    if (!isMobile) {
      this.$refs.input.focus()
    }
  },

  async asyncData () {
    this.$store.commit('setWarframePatchlogs', await this.$cubic.get('/warframe/v1/patchlogs'))
  },

  storeModule
}
</script>



<style lang='scss' scoped>
@import '~src/styles/partials/importer';

 #app {
   .realtime {
     display: inline-flex;

     @media (max-width: $breakpoint-s) {
       flex-direction: column;
     }
   }
   .most-traded {
     position: relative;
     overflow: hidden;
     display: inline-flex;
     flex-wrap: wrap;
     margin-left: 20px;
     margin-right: -15px;
     margin-bottom: -15px;

     .item {
       padding: 0;
       border-radius: 2px;
       flex-basis: 33%;
       margin-right: 15px;
       margin-bottom: 15px;
       transition-duration: 0.5s !important;

       &:hover {
         @include gradient-background-dg(#3c4451, #353d49);
       }
       &:before {
         border-radius: 2px;
       }
       &:nth-of-type(n + 5) {
         display: none;
       }
       /deep/ .header {
         padding: 20px 20px 0;
       }
       /deep/ .body {
         padding: 0 25px 5px;
         margin-top: 20px;

         .highlight {
           font-size: 1.3em;
         }
         .sub {
           display: inline-block;
           margin-top: 2px;
           font-size: 0.85em;
           color: $color-font-body;
         }
       }
     }
     @media (max-width: $breakpoint-s) {
       margin-left: 0;
       margin-top: 20px;
     }
   }

   .overview {
     margin: -20px;

     & > *[class*="col-b"] {
       margin: 20px;
     }
   }

   .activity-data {
     @media (max-width: $breakpoint-m) {
       flex-basis: 100%;
     }
   }

   .patchlogs {
     justify-content: flex-start;

     /deep/ .patchlog {
       width: 33%;

       @media (max-width: $breakpoint-m) {
         max-width: calc(50% - 20px);
       }
       @media (max-width: $breakpoint-s) {
         max-width: none;
       }
     }
   }
 }
</style>
