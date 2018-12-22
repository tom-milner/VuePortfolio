<template>
  <div class="home">
    <page-header></page-header>
    <about></about>
    <skills></skills>
    <contact/>
  </div>
</template>

<script>
import PageHeader from "@/components/pages/Home/PageHeader";
import About from "@/components/pages/Home/About";
import Skills from "@/components/pages/Home/Skills"
import Contact from "@/components/pages/Home/Contact"

export default {
  components: {
    PageHeader,
    About,
    Skills,
    Contact
  }
};
</script>

<style lang="scss" scoped>

</style>

