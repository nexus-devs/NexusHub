<template>
  <div class="order" @click="active ? null : select()">
    <!-- Order listing -->
    <div class="row">
      <router-link :to="`/wow-classic/items/${server}/${crafting.itemId}`" class="image-wrapper">
        <img :src="crafting.icon" :alt="crafting.name">
        <img :src="crafting.icon" :alt="crafting.name" class="blur">
      </router-link>
      <router-link :to="`/wow-classic/items/${server}/${crafting.itemId}`" class="item col">
        <span class="component">{{ crafting.name }}</span>
        <br>
        <span>{{ crafting.category }} ({{ crafting.requiredSkill }})</span>
      </router-link>
      <div class="col amount">
        <img src="/img/warframe/ui/quantity.svg" alt="Quantity" class="ico-h-20">
        {{ amountPretty }}x
      </div>
      <div class="col price">
        <img v-if="crafting.marketValue" src="/img/warframe/ui/platinum.svg" alt="Gold" class="ico-h-12">
        <span v-if="crafting.marketValue">{{ parsePrice(crafting.marketValue) }}</span>
        <span v-else class="unavailable">Unavailable</span>
        <!--<price-diff :type="order.offer" :current="median" :previous="order.price" unit="p" />-->
      </div>
      <div class="col profit">
        <span v-if="profit" :class="{ negative: profit < 0 }">
          <indicator :diff="profit" /> {{ parsePrice(Math.abs(profit)) }}
        </span>
      </div>
      <div class="col buy" @click.stop="select">
        <button class="btn-outline">
          Reagents
        </button>
      </div>
    </div>
    <!-- Reagents -->
    <div :class="{ active }" class="selection">
      <div v-for="(reagent) in crafting.reagents" :key="reagent.itemId" class="row">
        <router-link :to="`/wow-classic/items/${server}/${reagent.itemId}`" class="image-wrapper">
          <img :src="reagent.icon" :alt="reagent.name">
          <img :src="reagent.icon" :alt="reagent.name" class="blur">
        </router-link>
        <router-link :to="`/wow-classic/items/${server}/${reagent.itemId}`" class="item col reagent">
          <span>{{ reagent.name }}</span>
        </router-link>
        <div class="col">
          <img src="/img/warframe/ui/quantity.svg" alt="Quantity" class="ico-h-20">
          {{ reagent.amount }}x
        </div>
        <div class="col price reagent">
          <img v-if="reagent.marketValue" src="/img/warframe/ui/platinum.svg" alt="Platinum" class="ico-h-12">
          <span v-if="reagent.marketValue">{{ parsePrice(reagent.marketValue) }}</span>
          <span v-else class="unavailable">Unavailable</span>
          <!--<price-diff :type="order.offer" :current="median" :previous="order.price" unit="p" />-->
        </div>
        <div class="col whitespace" />
        <div class="col whitespace" />
      </div>
    </div>
  </div>
</template>



<script>
import indicator from 'src/components/charts/indicator.vue'
import utility from 'src/components/wow-classic/utility.js'

export default {
  components: {
    indicator
  },

  props: ['crafting', 'cid'],

  computed: {
    amountPretty () {
      const amount = this.crafting.amount
      if (amount[0] !== amount[1]) return `${amount[0]}-${amount[1]}`
      return amount[0]
    },
    active () {
      return this.$store.state.crafting.selected === this.cid
    },
    profit () {
      const cost = this.crafting.reagents.reduce((acc, cV) => acc + cV.marketValue * cV.amount, 0)
      return Math.round(this.crafting.marketValue * ((this.crafting.amount[0] + this.crafting.amount[1]) / 2)) - cost
    },
    server () {
      return this.$store.state.servers.server
    }
  },

  created () {
    this.parsePrice = utility.parsePrice
  },

  methods: {
    select () {
      if (this.active) {
        this.$store.commit('selectCraftingEntry', null)
      } else {
        this.$store.commit('selectCraftingEntry', this.cid)
      }
    }
  }
}
</script>



<style lang="scss" scoped>
@import '~src/styles/partials/wow-classic/importer';

.order {
  margin-top: 10px;
  @include ease(0.3s); // For order transitions
}
.row {
  @include field;
  align-items: center;
  width: 100%;

  color: white;
  margin: 0 10px;
  font-size: 0.9em;

  &:first-of-type {
    margin-left: 0;
  }
}

.amount {
  @media (max-width: $breakpoint-s) {
    display: none;
  }
}

.image-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  height: 60px;
  width: 80px;
  background: rgba(35,40,45, 0.15);
  border-right: 1px solid $color-subtle;

  img {
    position: relative;
    z-index: 1;
    max-height: 60%;
    border-radius: 60px;
  }
  .blur {
    position: absolute;
    z-index: 0;
    height: 150px;
    width: 150px;
    filter: blur(40px);
  }
  @media (max-width: $breakpoint-s) {
    display: none;
  }
}

.item {
  margin-left: 20px;
  color: $color-font-body;
  min-width: 30%;

  .component {
    color: white;
    font-family: 'Circular';
    font-size: 1.1em;
  }
  span:nth-of-type(2) {
    display: inline-block;
    margin-top: -2px;
    color: $color-font-body;
  }
  @media (max-width: $breakpoint-s) {
    margin-left: 0;
    padding: 15px;

    span:nth-of-type(2) {
      display: none;
    }
  }
}
.item.reagent {
  min-width: calc(calc(100% + 80px) * 0.3 - 80px); // Parent width - image wrapper size
  @media (max-width: $breakpoint-s) {
    word-break: break-word;
  }
}

span.negative {
 color: $color-error;
}
.profit {
  color: $color-positive;
}
.whitespace {
  @media (max-width: $breakpoint-s) {
    display: none;
  }
}

.user {
  position: relative;

  .tooltip {
    display: inline-block;
    position: absolute;
    left: 30px;
    top: 5px;
    font-size: 1em;
    width: fit-content;

    @media (min-width: $breakpoint-m) {
      opacity: 1;
      background: transparent;
      box-shadow: none;
      left: 25px;

      /deep/ span {
        font-family: 'Circular';
      }
      /deep/ .tooltip-pointer {
        display: none;
      }
    }
    @media (max-width: $breakpoint-m) {
      transform: translateX(-10px);
    }
  }
  .user-image {
    height: 35px;
    width: 35px;
    position: relative;
    overflow: hidden;
    border-radius: 40px;

    img {
      height: 100%;
    }
  }
  &:hover {
    .tooltip {
      opacity: 1;
      transform: translateX(0);
    }
  }
  @media (max-width: $breakpoint-s) {
    display: none;
  }
}

.price {
  img {
    margin-right: 2px;
  }

  @media (max-width: $breakpoint-s) {
    padding: 15px 4px 15px 15px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    span {
      width: 100%;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    img {
      display: none;
    }
  }

  .unavailable {
    color: $color-font-body;
  }
}
.price.reagent {
  @media (max-width: $breakpoint-s) {
    padding: 15px;
  }
}
.profit {
  @media (max-width: $breakpoint-s) {
    padding: 15px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}

/deep/ .price-diff {
  font-size: 1em !important;
}

.buy {
  display: flex;
  justify-content: flex-end;
  align-items: center;

  button {
    margin-left: 40px;
    margin-right: 10px;
    color: white;
    text-transform: none;
    font-size: 1em;

    &:active {
      background: rgba(222, 200, 187, 0.1);
    }
  }
  @media (max-width: $breakpoint-s) {
    display: none;
  }
}

/**
 * Order selection
 */
.selection {
  max-width: calc(100% - 80px);
  margin-left: 80px;
  opacity: 0;
  max-height: 0;
  @include ease(0.35s);
  will-change: height;

  @media (max-width: $breakpoint-s) {
    max-width: calc(100% - 35px);
    margin-left: 35px;
  }

  &.active {
    max-height: 100%;
    border-top: 1px solid $color-subtle;
    opacity: 1;
  }

  .row {
    margin: 0;

    .item {
      color: white;
    }
  }
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
  margin-top: 40px;

  .meta-data {
    display: inline-block;
    margin-right: 40px;
  }

  .message {
    margin: 0 0 20px;
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
    left: -75px;
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
