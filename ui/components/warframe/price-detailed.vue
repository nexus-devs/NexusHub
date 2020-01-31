<template>
  <div :class="{ active }" class="price-detailed">
    <!-- Left Panel -->
    <div v-if="active" class="item">
      <div class="back interactive" @click="back">
        <img src="/img/ui/back-thin.svg" class="ico-h-12" alt="Back">
        <span>Back</span>
      </div>
      <div class="overview">
        <div class="img-wrapper">
          <img :src="component.imgUrl" :alt="`${item.name} ${component.name}`">
        </div>
        <h3>{{ item.name }} {{ component.name }}</h3>
        <div class="price">
          <indicator :diff="current - previous" />
          <span class="num">{{ current }}p</span>
          <br>
          <span class="diff">
            {{ previous }}p (<price-diff :current="previous" :previous="current" type="buying" unit="p" base="previously" />)
          </span>
        </div>
      </div>
    </div>

    <!-- Middle panel / Graph -->
    <div v-if="active" class="users">
      <user-prices :data="detailed.data" />
    </div>

    <!-- Right panel -->
    <div v-if="active" class="selection">
      <div v-if="selected.user && selected.component === detailed.component && selected.item === detailed.item" class="active">
        <time :datetime="selected.createdAt">
          {{ Math.floor((new Date() - new Date(selected.createdAt)) / (1000 * 60 * 60)) }} hours ago
        </time>
        <div class="img-wrapper">
          <img :alt="selected.user" src="/img/ui/placeholder.png">
        </div>
        <h3>{{ selected.user }}</h3>
        <p>
          {{ selected.offer }} {{ item.name }} {{ component.name }} for
        </p>
        <span class="num">
          {{ selected.price }}p
        </span>
        <price-diff :current="current" :previous="selected.price" :type="selected.offer.toLowerCase()" unit="p" base="median" />
      </div>
      <div v-else class="inactive">
        <div class="circle">
          <div class="inner" />
        </div>
        <div class="info">
          Click on a data point to show more details
        </div>
      </div>
    </div>
  </div>
</template>



<script>
import indicator from 'src/components/charts/indicator.vue'
import priceDiff from 'src/components/warframe/price-diff.vue'
import userPrices from 'src/components/charts/userprices.vue'

export default {
  components: {
    priceDiff,
    indicator,
    userPrices
  },

  data () {
    return {
      data: []
    }
  },

  computed: {
    active () {
      return this.detailed.data.length && this.detailed.item === this.item.name
    },
    item () {
      return this.$store.state.items.item
    },
    component () {
      return this.$store.state.items.item.components.find(c => c.name === this.detailed.component)
    },
    detailed () {
      return this.$store.state.prices.detailed
    },
    priceComponent () {
      return this.$store.state.prices.components.find(c => c.name === this.detailed.component)
    },
    current () {
      const prices = this.priceComponent.prices

      if (this.offerType === 'combined') {
        return Math.round((prices.selling.current.median + prices.buying.current.median) / 2)
      }
      return prices[this.offerType].current.median
    },
    previous () {
      const prices = this.priceComponent.prices

      if (this.offerType === 'combined') {
        return Math.round((prices.selling.previous.median + prices.buying.previous.median) / 2)
      }
      return prices[this.offerType].previous.median
    },
    offerType () {
      return this.$store.state.items.selected.offerType
    },
    selected () {
      return this.$store.state.prices.selected
    }
  },

  methods: {
    back () {
      this.$store.commit('setPricesDetailed', {
        data: []
      })
    }
  }
}
</script>



<style lang="scss" scoped>
@import '~src/styles/partials/importer';

.price-detailed {
  z-index: 1;
  display: flex;
  justify-content: space-between;
  width: 100%;
  min-height: 400px;
  @include field;
  background: $color-bg;
  opacity: 0;
  transform: scale(0.95);
  pointer-events: none;
  @include ease(0.3s);

  &:hover {
    background: $color-bg;
  }
  &.active {
    opacity: 1;
    transform: scale(1);
    pointer-events: all;
  }
  @media (max-width: $breakpoint-m) {
    flex-wrap: wrap;
    box-shadow: none;

    .selection {
      border-left: 0;
      border-top: 10px solid $color-bg-dark;
      width: 100%;
    }
  }

  @media (max-width: $breakpoint-s) {
    .item {
      width: 100%;
      border-bottom: 10px solid $color-bg-dark;

      .overview {
        padding: 20px 0;
      }
    }
  }
}
.item {
  @include field;
  box-shadow: none;
  padding: 25px 40px;
  min-width: 15%;

  .overview {
    text-align: center;
    padding: 60px 0;
  }
  h3 {
    margin-top: 10px;
  }
  .price {
    margin-top: 20px;
  }
  .num {
    font-size: 1.3em;
    color: white;
  }
  .diff {
    font-size: 0.9em;
  }
}

.back {
  display: inline-block;
  color: white;
  font-size: 0.85em;
  margin-left: -10px;
  margin-top: -8px;
  @include uppercase;
}

.img-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  margin: auto;
  height: 80px;
  width: 80px;
  border-radius: 100px;
  background: $color-bg;

  img {
    max-height: 100%;
  }
}

.users {
  display: flex;
  padding: 25px 40px;
  flex: 1;
  min-height: 300px;
}

.selection {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 25px 40px;
  min-width: 15%;
  border-left: 1px solid $color-subtle-dark;

  .inactive {
    display: flex;
    flex-direction: column;
    align-items: center;

    .circle {
      position: relative;
      height: 20px;
      width: 20px;
      border-radius: 20px;
      border: 3px solid $color-subtle;

      .inner {
        height: calc(100% - 4px);
        width: calc(100% - 4px);
        border-radius: 100%;
        border: 2px solid $color-font-body;
      }
    }
    .info {
      max-width: 200px;
      margin-top: 10px;
      text-align: center;
      color: $color-font-subtle;
    }
  }

  .active {
    text-align: center;

    time {
      position: absolute;
      top: 25px;
      right: 40px;
      font-size: 0.9em;
      color: $color-font-subtle;
    }
    h3 {
      margin-top: 20px;
    }
    p {
      margin-top: -15px;
      max-width: 200px;
    }
    .num {
      display: inline-block;
      font-size: 1.3em;
      color: white;
      margin-top: 15px;
    }
    .price-diff {
      margin-top: 15px;
    }
  }
}
</style>
