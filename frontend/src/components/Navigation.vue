<template>
  <nav class="nav" id="navbar">
    <img class="nav__logo" src="../assets/img/logo.svg">
    <div class="nav__menu-box">
      <li>
        <a class="nav__link" href="/">Home</a>
      </li>
      <li>
        <a class="nav__link" href="#">Work</a>
      </li>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    handleScroll(event) {
      var navBar = document.querySelector("#navbar");

    if (document.body.scrollTop >= 10 || document.documentElement.scrollTop >= 10) {
        navBar.classList.add("scroll");
      } else {
        navBar.classList.remove("scroll");
      }
    }
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  }
};
</script>

<style lang="scss" scoped>

@import "../scss/global";

.nav {
  z-index: 100;
  position: fixed;
  width: 100vw;
  height: 8rem;
  font-size: $font-default;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  transition: all .2s;

  &__logo {
    height: 4rem;
  }

  &__menu-box {
    list-style: none;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 20rem;
  }
  &__link {
    &:link,
    &:visited {
      color: $color-white;
      text-decoration: none;
      text-transform: lowercase;
      text-transform: lowercase;
      transition: all 0.2s;
      font-size: $font-default;
      font-weight: 500;
      letter-spacing: 0.3rem;
    }

    &:hover,
    &:active {
      color: #c3c3c3;
      border-bottom: 1px solid #b4b4b4;
    }
  }
}

.scroll {
  background-color: rgba(#7da4ad, 0.95);
  box-shadow: 0 1rem 7rem rgba(#000, 0.2);
}
</style>

