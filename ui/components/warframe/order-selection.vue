<template>
  <div class="selection">
    <div class="data">
      <div class="meta">
        <div class="meta-data">
          <h4>Posted</h4>
          <span class="sub time">
            {{ minutesAgo(order.createdAt) }}
          </span>
        </div>
        <div class="meta-data">
          <h4>Source</h4>
          <span class="sub">
            {{ order.source }}
          </span>
          <a v-if="order.source === 'Warframe Market'" :href="`https://warframe.market/items/${order.wfmName}`" target="_blank" style="display: inline-block; margin-top: -5px;">
            <img src="/img/ui/open-link.svg" alt="Open on Warframe Market" class="ico-h-16 interactive">
          </a>
        </div>
        <div class="meta-data">
          <h4 v-if="order.message">Original Message</h4>
          <span v-if="order.message" class="sub">
            {{ order.message }}
          </span>
        </div>
      </div>
      <div class="message">
        <span ref="message">
          <span>/w {{ order.user }}</span> Hi {{ user }},
          I'd like to {{ order.offer === 'Selling' ? 'buy' : 'sell' }}
          [{{ item.name }} {{ order.component }}]{{ order.price ? ' for ' : '' }}{{ order.price ? `${order.price}p` : '' }}.
          {{ order.source === 'Warframe Market' ? '' : 'Found your offer on NexusHub.' }}
        </span>
        <div class="copy">
          <button @click="copy">
            Copy
          </button>
          <div :class="{ active: copied }" class="copy-confirm">
            Copied!
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
import moment from 'moment'
const title = (str) => str.toLowerCase().replace(/\b\w/g, l => l.toUpperCase())

export default {
  props: ['visible', 'order', 'item', 'component'],

  data () {
    return {
      copied: false
    }
  },

  computed: {
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
      this.visible = false
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
        }, 1000)
      }, 75)
    },
    minutesAgo (date) {
      return moment(date).fromNow()
    }
  },
}
</script>




<style lang="scss" scoped>
@import '~src/styles/partials/importer';

.selection {
  border-top: 1px solid $color-subtle;
  padding: 5px 20px;
  width: 100%;
}

.sub {
  color: $color-font-body;
}

h4 {
  @include uppercase;
  margin-bottom: 4px;
  font-size: 0.8em;
}

.data {
  margin-top: 30px;

  .meta {
    margin-top: 10px;
  }
  .meta-data {
    display: inline-block;
    margin-right: 40px;
  }

  .message {
    margin: 0 0 10px;
    padding-top: 10px;

    span {
      display: inline-block;
      padding: 15px 15px;
      padding-right: 80px;
      background: $color-bg;
      max-width: 70%;
      margin-top: 10px;
      margin-bottom: 10px;
      border-radius: 999px;
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
  .copy {
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    vertical-align: middle;
    position: relative;
    left: -70px;
  }
  button, .btn-outline {
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
    margin-left: 15px;
    transform: translateX(-5px);
    opacity: 0;
    @include ease-wubble(0.5s)

    &.active {
      opacity: 1;
      transform: translateX(0);
    }
  }
}
</style>
