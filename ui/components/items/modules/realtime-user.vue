<template>
  <div class="realtime-user">
    <div class="profile">
      <div class="profile-img">
        <img src="/img/warframe/items/generic-warframe-prime-helmet.png" alt="Username">
      </div>
      <span class="username">Theroxbeans</span>
      <p>Selling <span>Neuroptics</span> for <span>25p</span></p>
    </div>
    <img src="/img/warframe/items/generic-warframe-prime-helmet.png" class="background blur">
  </div>
</template>




<script>
export default {
}
</script>




<style lang="scss" scoped>
@import '~src/styles/partials/importer';

.realtime-user {
  @include ie;
  @include field;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  background: $color-bg;
  height: 150px;
  margin-right: 15px;
  margin-bottom: 10px;
  width: 25%;
  flex-basis: auto;

  &:before {
    border-radius: 2px;
  }
  @media (max-width: $breakpoint-m) {
    width: inherit;
    margin-right: 0;
    height: auto;
    padding: 10px 20px;
  }
  @media (max-width: $breakpoint-s) {
    padding: 15px 20px;
  }
}
.profile {
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: white;

  .profile-img {
    position: relative;
    overflow: hidden;
    width: 56px;
    height: 56px;
    border-radius: 80px;
    margin-bottom: 10px;
  }
  img {
    position: absolute;
    top: 0;
    left: -40%;
    max-height: 120%;
    z-index: 1;
  }
  .username {
    font-family: 'Circular', sans-serif;
  }
  p {
    color: $color-font-body;
    font-size: 0.9em;

    span {
      color: white;
    }
  }
  @media (max-width: $breakpoint-m) {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    width: 100%;

    .profile-img {
      display: none;
    }
    .username {
      margin-right: 20px;
    }
    p {
      margin-left: auto;
    }
  }
}
.background {
  position: absolute;
  left: 0;
  filter: blur(60px);
  opacity: 0.33;

  @media (max-width: $breakpoint-m) {
    display: none;
  }
}
time {
  position: absolute;
  top: 15px;
  right: 15px;
  font-size: 0.9em;

  @media (max-width: $breakpoint-m) {
    display: none;
  }
}
</style>
