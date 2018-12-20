<template>
  <div class="home">
    <page-header></page-header>
    <about></about>
    <skills></skills>
  </div>
</template>

<script>
import PageHeader from "@/components/pages/Home/PageHeader";
import About from "@/components/pages/Home/About";
import Skills from "@/components/pages/Home/Skills"

export default {
  components: {
    PageHeader,
    About
  }
};
</script>

<style lang="scss" scoped>

</style>

