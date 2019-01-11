<template>
  <div id="app">
    <nav-bar></nav-bar>
    <transition name="page" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<script>
import NavBar from "@/components/Navigation";
export default {
  name: "App",
  components: {
    NavBar
  }
};
</script>

<style lang="scss">
@import "/scss/global";

.page-enter-active, .page-leave-active {
  transition: opacity .2s, transform .2s;
}

</style>

