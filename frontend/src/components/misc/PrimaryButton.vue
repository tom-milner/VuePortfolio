<template>
  <a :href="link" role="button" class="btn"  :class="type">{{message}}</a>
</template>

<script>
export default {
  props: {
    message: String,
    type: String,
    link: {
      default: "",
      type: String
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../scss/global";

</style>
