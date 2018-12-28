<template>
  <header class="header">
    <div class="header__content">
      <div class="header__text-box">
        <h1 class="header__main">Tom Milner</h1>
        <h2 class="header__subtext">developer</h2>
      </div>
      <primary-button type="round" link="#section-about" message="Find out more"></primary-button>
    </div>
  </header>
</template>

<script>
import PrimaryButton from "@/components/misc/PrimaryButton";

export default {
  components: {
    PrimaryButton
  }
};
</script>

<style lang="scss" scoped>
@import "../../../scss/global";

.header {
  position: relative;
  justify-content: center;
  text-align: center;
  height: 100vh;
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;

  background-image: url("../../../assets/img/bg.jpeg");
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
  // clip-path: polygon(0 0, 100% 0, 100% 100%, 0 85vh);

  &__content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 45rem;
    width: 100%;
    align-items: center;
    color: $color-white;
    font-family: "Montserrat", sans-serif;

    @include respond(header-multiline) {
      height: 70rem;
    }

    @include respond(phone) {
      height: 50rem;
    }

    // & > * {
    //   @include respond(header-multiline) {
    //     margin-bottom: 10rem;
    //   }
    // }
  }

  &__text-box {
    color: $color-white;
    font-family: "Montserrat", sans-serif;
  }

  &__main {
    font-size: 15rem;
    text-transform: uppercase;
    font-weight: 100;
    letter-spacing: 2rem;

    @include respond(phone) {
      font-size: 10rem;
      text-transform: uppercase;
      font-weight: 100;
      letter-spacing: 1rem;
    }
  }

  &__subtext {
    font-size: 6rem;
    font-weight: 300;
    letter-spacing: 2.5rem;

    @include respond(phone) {
      font-size: 4rem;
      font-weight: 300;
      letter-spacing: 2.5rem;
    }
  }
}
</style>