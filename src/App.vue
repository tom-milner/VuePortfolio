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


*,
*::after,
*::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
    // border: 1px solid red;
}


html {
    // defines 1 rem
    font-size: 62.5%; // 1rem = 10px; 10/16 = 62.5% 
}

body {
    box-sizing: border-box;
    font-family: "Montserrat", sans-serif;
    // padding: 3rem;
}

</style>

