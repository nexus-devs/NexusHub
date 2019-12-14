<template>
  <div :style="{
    'width': percent+'%',
    'height': height,
    'background-color': canSuccess? color : failedColor,
    'opacity': show ? 1 : 0
  }" class="progress"
  />
</template>

<script>
export default {
  data () {
    return {
      percent: 0,
      show: false,
      canSuccess: true,
      duration: 1500,
      height: '0.125em',
      color: '#ffca2b',
      failedColor: '#ff0000'
    }
  },

  methods: {
    start () {
      this.show = true
      this.canSuccess = true
      if (this._timer) {
        clearInterval(this._timer)
        this.percent = 0
      }
      this._cut = 10000 / this.duration
      this._timer = setInterval(() => {
        this.increase(this._cut * Math.random())

        // First stage (rather fast), then 10x slower after 33%
        if (this.percent > 33) {
          clearInterval(this._timer)
          this.throttle()
        }
      }, 100)
      return this
    },
    throttle () {
      this._timer = setInterval(() => {
        this.increase(this._cut * Math.random() * 0.1)
        if (this.percent > 85) {
          clearInterval(this._timer)
        }
      }, 100)
    },
    set (num) {
      this.show = true
      this.canSuccess = true
      this.percent = Math.floor(num)
      return this
    },
    get () {
      return Math.floor(this.percent)
    },
    increase (num) {
      this.percent = this.percent + num
      return this
    },
    decrease (num) {
      this.percent = this.percent - num
      return this
    },
    finish () {
      this.percent = 100
      this.hide()
      return this
    },
    pause () {
      clearInterval(this._timer)
      return this
    },
    hide () {
      clearInterval(this._timer)
      this._timer = null
      setTimeout(() => {
        this.show = false
        this.$nextTick(() => {
          setTimeout(() => {
            this.percent = 0
          }, 200)
        })
      }, 500)

      return this
    },
    fail () {
      this.canSuccess = false
      return this
    }
  }
}
</script>


<style lang="scss" scoped>
@import '~src/styles/partials/importer';

.progress {
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  height: 2px;
  width: 0%;
  transition: width 0.2s, opacity 0.4s;
  opacity: 1;
  z-index: 999999;
}
</style>
