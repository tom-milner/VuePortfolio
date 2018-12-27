<template>
  <div id="app">
    <nav-bar></nav-bar>
    <router-view/>
  </div>
</template>

<script>

import NavBar from "@/components/Navigation"
export default {
  name: 'App',
  components: {
    NavBar
  }
}
</script>

<style lang="scss">

  @import '/scss/global';



</style>

