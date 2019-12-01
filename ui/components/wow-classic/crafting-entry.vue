<template>
  <div class="order" @click="active ? null : select()">
    <!-- Order listing -->
    <div class="row">
      <div class="image-wrapper">
        <img :src="crafting.icon" :alt="crafting.name">
        <img :src="crafting.icon" :alt="crafting.name" class="blur">
      </div>
      <div class="item col">
        <span class="component">{{ crafting.name }}</span>
        <br>
        <span>{{ crafting.name }}</span>
      </div>
      <div class="user col">
        <div class="user-image">
          <img :alt="crafting.category" src="/img/ui/placeholder.png">
        </div>
        <tooltip>{{ crafting.category }}</tooltip>
      </div>
      <div class="col">
        <img src="/img/warframe/ui/quantity.svg" alt="Quantity" class="ico-h-20">
        {{ crafting.amount[0] }}x
      </div>
      <div class="col price">
        <img v-if="crafting.marketValue" src="/img/warframe/ui/platinum.svg" alt="Platinum" class="ico-h-12">
        <span>{{ crafting.marketValue }}</span>
        <!--<price-diff :type="order.offer" :current="median" :previous="order.price" unit="p" />-->
      </div>
      <!--<div class="col buy" @click.stop="select">
        <button class="btn-outline">
          {{ order.offer === 'Selling' ? 'Buy' : 'Sell' }}
        </button>
      </div>-->

      <!-- Order Selection -->
      <!--<div :class="{ active }" class="selection">
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
              <h4 v-if="order.message">
                Original Message
              </h4>
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
      </div>-->
    </div>
  </div>
</template>



<script>

export default {
  props: ['crafting']
}
</script>



<style lang="scss" scoped>
@import '~src/styles/partials/wow-classic/importer';

.order {
  margin-top: 10px;
  @include ease(0.4s); // For order transitions

  &:first-of-type {
    margin-top: 0;
  }
}
.order .row {
  @include field;
  align-items: center;
  width: 100%;

  // Last of type is order selection
  & > div:not(:last-of-type) {
    color: white;
    margin: 0 10px;
    font-size: 0.9em;

    &:first-of-type {
      margin-left: 0;
    }
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
    padding: 15px;

    span:nth-of-type(2) {
      display: none;
    }
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
    white-space: nowrap;
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
      background: rgba(200,225,255,0.1)
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
  border-top: 1px solid $color-subtle;
  padding: 0px 25px;
  width: 100%;
  opacity: 0;
  max-height: 0;
  @include ease(0.35s);
  will-change: height;

  &.active {
    max-height: 200px;
    opacity: 1;
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
