<template>
  <h2 :class="theme">{{message}}</h2>
</template>

<script>
export default {
  props: ["message", "theme"]
};
</script>

<style lang="scss" scoped>
@import "../../scss/global";

h2 {
  font-size: 4rem;
  text-transform: uppercase;
  font-weight: 500;
  display: inline-block;

  -webkit-background-clip: text;
  color: transparent;
  letter-spacing: 0.2rem;
  transition: all 0.2s;
  margin-top: -5rem;
  // margin-bottom: 5rem;

  &:hover {
    transform: skewY(2deg) skewX(15deg) scale(1.1);
    text-shadow: 0.5rem 1rem 2rem rgba(#000, 0.2);
  }
}

.light {
  background-image: linear-gradient(
    to right,
    $color-primary-light,
    $color-primary-dark
  );
}

.dark {
  background-image: linear-gradient(
    to right,
    $color-white,
    $color-primary-light
  );
}

</style>
