<template>
  <popup :class="{ active: order && order.user }" class="order-popup">
    <template slot="header">
      <h4>
        <img src="/img/warframe/ui/trade.svg" alt="Trade" class="ico-h-20">
        You are {{ order.offer === 'Selling' ? 'buying' : 'selling' }}
      </h4>
    </template>
    <template slot="body">
      <div class="image-wrapper">
        <div class="item">
          <img :src="component.imgUrl" :alt="component.name">
        </div>
        <div class="user">
          <div class="user-image">
            <img :alt="order.user" src="/img/ui/placeholder.png">
          </div>
          <tooltip>{{ order.user }}</tooltip>
        </div>
      </div>
      <div class="data">
        <h3>{{ item.name }} {{ order.component }}</h3>
        <span class="price">
          {{ order.price ? `${order.price}p` : 'any offer' }}
          <price-diff :type="order.offer" :current="median" :previous="order.price" unit="p"/>
        </span>
        <br>
        <span class="time">
          {{ minutesAgo(order.createdAt) }}
        </span>
        <span v-if="order.message" class="message">
          {{ order.message }}
        </span>
        <div class="message">
          <span ref="message">
            <span>/w {{ order.user }}</span> Hi {{ user }},
            I'd like to {{ order.offer === 'Selling' ? 'buy' : 'sell' }}
            [{{ item.name }} {{ order.component }}]{{ order.price ? ' for ' : '' }}{{ order.price ? `${order.price}p` : '' }}.
            {{ order.source === 'Warframe Market' ? '' : 'Found your offer on NexusHub.' }}
          </span>
        </div>
        <a v-if="order.source === 'Warframe Market'" :href="`https://warframe.market/items/${order.wfmName}`" target="_blank" class="btn-outline">
          Buy on warframe.market
        </a>
        <button v-else @click="copy">
          Copy to Clipboard
        </button>
        <div :class="{ active: copied }" class="copy-confirm">
          Copied!
        </div>
      </div>
    </template>
  </popup>
</template>




<script>
import popup from 'src/components/ui/popup.vue'
import tooltip from 'src/components/ui/sidebar/modules/tooltip.vue'
import priceDiff from 'src/components/items/price-diff.vue'
import moment from 'moment'
const title = (str) => str.toLowerCase().replace(/\b\w/g, l => l.toUpperCase())

export default {
  components: {
    tooltip,
    popup,
    priceDiff
  },

  data () {
    return {
      copied: false
    }
  },

  computed: {
    order () {
      return this.$store.state.orders.selected
    },
    item () {
      return this.$store.state.items.item
    },
    component () {
      return this.item.components.find(c => c.name === this.order.component) || {}
    },
    median () {
      if (this.order.offer && this.component.prices) {
        const type = this.order.offer.toLowerCase()
        return this.component.prices[type].current.median
      }
    },
    // Short username for more authentic message and less characters to avoid
    // character limit. This will remove numbers at the end and only take the
    // first word long word if camel-cased
    user () {
      const full = this.order.user

      if (full) {
        const noXX = full.replace(/(XXX|XX)/ig, '').replace(/(.)\1{2,}/g, '$1$1')
        const noDigits = noXX.replace(/\d+$/g, '')
        const noCamelCase = noDigits.replace(/([a-z](?=[A-Z]))/g, '$1 ').replace(/(-|_)/g, ' ')

        for (const word of noCamelCase.split(' ')) {
          if (noCamelCase.split(' ').length > 1 && word.length > 4) {
            return title(word)
          }
        }
        return title(noDigits)
      }
    }
  },

  methods: {
    close () {
      this.$store.commit('selectOrder', {})
    },
    copy () {
      // Small delay makes it feel more responsive, because it'll show up
      // once the button is fully pressed rather than immediately.
      setTimeout(() => {
        const text = this.$refs.message.outerText
        const el = document.createElement('textarea')
        el.value = text
        el.setAttribute('readonly', '')
        document.body.appendChild(el)
        el.select()
        document.execCommand('copy')
        document.body.removeChild(el)
        this.copied = true
        setTimeout(() => {
          this.copied = false
        }, 750)
      }, 75)
    },
    minutesAgo (date) {
      return moment(date).fromNow()
    }
  }
}
</script>




<style lang="scss" scoped>
@import '~src/styles/partials/importer';

/deep/ .body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.image-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}
.user {
  position: absolute;
  margin-top: 30px;
  margin-left: 40px;

  &:hover {
    & .tooltip {
      opacity: 1;
      transform: translateX(10px);
    }
  }
  .user-image {
    height: 40px;
    width: 40px;
    position: relative;
    overflow: hidden;
    border-radius: 40px;
    @include shade-1;

    img {
      height: 100%;
    }
  }
}
.tooltip {
  display: inline-block;
  position: absolute;
  left: 30px;
  top: 8px;
  width: fit-content;
}
.item {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  width: 100px;
  border-radius: 80px;
  background: $color-bg;

  img {
    max-height: 70%;
    border-radius: 999px;
  }
}
.data {
  margin-top: 15px;
  text-align: center;

  span:last-of-type {
    padding: 0 60px 20px;
  }
  .price {
    display: inline-block;
    color: white;
  }
  .time {
    font-size: 0.9em;
    color: $color-font-subtle;
  }
  .message {
    padding-top: 10px;

    span {
      display: inline-block;
      padding: 15px 15px;
      background: $color-bg-darker;
      max-width: 70%;
      margin-top: 10px;
      margin-bottom: 10px;
      border-radius: 3px;
      color: white;
      font-size: 0.9em;
      letter-spacing: 0.6;

      span:first-of-type {
        color: $color-font-subtle;
        font-size: 1em;
        letter-spacing: 0;
        padding: 0;
        margin-bottom: 0;
        margin-top: 0;
      }
    }
  }
  button, .btn-outline {
    display: inline-block;
    margin-top: 20px;
    padding: 10px 20px;
    font-size: 0.9em;
    text-transform: none;
    @include shadow-2;
  }

  .btn-outline {
    @include gradient-background-dg($color-accent, $color-accent-subtle)
    border: none;

    &:after {
      @include gradient-background-dg($color-accent, $color-accent-subtle)
    }
  }

  .copy-confirm {
    color: $color-primary-subtle;
    font-size: 0.9em;
    margin-top: 3px;
    transform: translateY(-5px);
    opacity: 0;
    @include ease-wubble(0.5s)

    &.active {
      opacity: 1;
      transform: translateY(0);
    }
  }
}
</style>
