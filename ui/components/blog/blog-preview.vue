<template>
  <module class="blog-preview">
    <template slot="header">
      <h3>{{ blogpost.title }}</h3>
      <time :datetime="blogpost.date">{{ moment(new Date(blogpost.date)).format('MMMM Do YYYY') }}</time>
    </template>
    <template slot="body">
      <div>
        <!-- eslint-disable-next-line vue/no-v-html -->
        <p v-for="(line, i) in blogpost.content" :key="line + i" v-html="line" />
      </div>
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

  props: ['blogpost'],

  methods: {
    moment
  }
}
</script>


<style lang="scss" scoped>
@import '~src/styles/partials/importer';

.blog-preview {
  max-width: 650px;
}
</style>
