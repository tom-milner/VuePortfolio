<template>
  <router-link to="#" class="btn">{{message}}</router-link>
</template>

<script>
export default {
  props: ["message"]
};
</script>

<style lang="scss" scoped>
.btn {
  &:link,
  &:visited {
    font-size: 2rem;
    border-radius: 100rem;
    color: #fff;
    background-color: #7da4ad;
    padding: 1.5rem 4rem;
    transition: all 0.2s;
    position: relative;
    letter-spacing: 0.1rem;
    display: inline-block;
    text-decoration: none;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 1rem 2rem rgba(#000, 0.2);

    &::after {
      transform: scaleX(1.4) scaleY(1.6);
      opacity: 0;
    }
  }
  &:active {
    transform: translateY(-1px);
    box-shadow: 0 0.5rem 1rem rgba(#000, 0.2);
  }

  &::after {
    content: "";
    display: inline-block;
    height: 100%;
    width: 100%;
    border-radius: 10rem;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    transition: all 0.4s;
    background-color: #7da4ad;
  }
}
</style>
