<template>
  <section>
    <div class="container">
      <h2>Latest Traders</h2>
      <div class="realtime">
        <realtime-traders/>
        <div class="realtime-users row">
          <realtime-user v-for="n in 6" class="realtime-user col-b"/>
        </div>
      </div>
    </div>
  </section>
</template>



<script>
import realtimeTraders from 'src/components/items/modules/realtime-traders.vue'
import realtimeUser from 'src/components/items/modules/realtime-user.vue'

export default {
  components: {
    'realtime-traders': realtimeTraders,
    'realtime-user': realtimeUser
  }
}
</script>



<style lang="scss" scoped>
@import '~src/styles/partials/importer';

h2 {
  margin-bottom: 20px;
}
.module {
  display: inline-flex;
}
.realtime {
  display: flex;

  @media (max-width: $breakpoint-s) {
    flex-direction: column;
  }
}
.realtime-users {
  position: relative;
  display: inline-flex;
  flex-wrap: wrap;
  vertical-align: top;
  margin-left: 30px;
  margin-bottom: -10px;
  width: 100%;

  @media (max-width: $breakpoint-s) {
    margin-left: 0;
    margin-top: 20px;
  }
}
</style>
