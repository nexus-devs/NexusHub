<template>
  <module :class="{ visible }" class="patchlog">
    <template slot="header">
      <h3>{{ patchlog.title }}</h3>
      <time :datetime="patchlog.date">{{ overview ? moment (new Date(patchlog.isoDate)).fromNow() : moment(new Date(patchlog.isoDate)).format('MMMM Do YYYY') }}</time>
    </template>
    <template slot="body">
      <div class="image">
        <img v-if="(visible || seen) && patchlog.imgUrl" :src="patchlog.imgUrl" :alt="patchlog.name" onerror="this.style.display='none'">
        <div class="shade" />
      </div>
      <div v-if="patchlog.content">
        <p v-for="(log, i) in content" :key="log + i">
          {{ log }}
        </p>
      </div>
    </template>
    <template slot="footer">
      <a :href="patchlog.guid" target="_blank">
        Continue reading
        <img src="/img/ui/arrow-right.svg" class="ico-h-20" alt="Contine reading">
      </a>
    </template>
  </module>
</template>



<script>
import module from 'src/components/ui/module.vue'
import moment from 'moment'

export default {
  components: {
    module
  },

  props: ['patchlog', 'overview'],

  data () {
    return {
      visible: false,
      seen: false,
      itemName: this.$route.params.item
    }
  },

  computed: {
    content () {
      return this.patchlog.content.split('\n').filter(c => c)
    }
  },

  methods: {
    moment
  }
}
</script>



<style lang="scss" scoped>
@import '~src/styles/partials/wow-classic/importer';

.module {
  position: relative;
  overflow: hidden;
  max-width: 650px;

  /deep/ .header {
    position: relative;
    z-index: 1;
  }
  /deep/ .body {
    overflow-y: auto;
    margin-top: 15px;
    margin-bottom: 10px;
    max-height: 225px;

    .image {
      position: absolute;
      left: 0;
      top: 0;
      opacity: 0.66;
      z-index: 0;
      width: 100%;
      margin-bottom: 40px;
      border-radius: 2px;

      img {
        width: 100%;
      }
      .shade {
        position: absolute;
        top: 1px; // 1px because the bottom may not cover the image on high res screens
        height: 100%;
        width: 100%;
        @include gradient-background(transparent, #3b424f);
      }
    }

    h3, h4, p {
      position: relative;
      z-index: 1;
    }
    h4 {
      font-size: 0.9em;
      margin-top: 10px;
    }
    p {
      word-wrap: break-word;
      margin-bottom: 20px;
    }
  }

  /deep/ .footer {
    position: relative;
    z-index: 1;
  }
}
</style>
