<template>
  <div class="popup">
    <div class="popup__content" v-on-clickaway="close">
      <div class="popup__image-box">
        <img :src="getImage(project.imageURL)" class="popup__image" alt>
      </div>
      <div class="popup__project-details">
        <h3 class="heading-tertiary heading-tertiary--popup-title">{{project.name}}</h3>
        <a v-if="project.link != null" :href="project.link" class="site-link">{{project.link}}</a>
        <p class="paragraph paragraph--small" v-html="project.description"></p>
      </div>
    </div>
  </div>
</template>

<script>
import { mixin as clickaway } from "vue-clickaway";

export default {
  mixins: [clickaway],

  props: ["project"],

  methods: {
    getImage: function(pic) {
      var images = require.context("@/assets/img/sites", false, /\.png$/);
      console.log(images("./" + pic + ".png"));
      return images("./" + pic + ".png");
    },

    close: function() {
      console.log("close");
      return this.$emit("close-popup");
    }
  }
};
</script>

<style lang="scss" scoped >
@import "../../scss/_global.scss";

.popup {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  z-index: 10000;
  background-color: rgba($color-black, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;

  &__content {
    background-color: $color-grey-light;
    border-radius: 3px;
    width: 70%;
    height: 70%;
    padding: 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @include respond(tab-port) {
      flex-direction: column-reverse;
      padding: 1rem;
      width: 90%;
      height: auto;
    }
    @include respond(tab-land) {
      padding: 3rem;
      width: 90%;
    }
  }

  &__image-box {
    height: 100%;
    flex-basis: auto;
    overflow: hidden;
    text-align: center;
    width: 55%;
    max-width: 55%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 3px;

    @include respond(tab-port) {
      overflow: scroll;
      display: relative;
      height: 50%;
      max-height: 50vh;
      width: 90%;
      margin-top: 5rem;
    }
  }

  &__image {
    max-height: 100%;
    max-width: 100%;

    @include respond(tab-port) {
      width: 100%;
      height: auto;
      background-size: cover;
      background-repeat: no-repeat;
    }
  }

  &__project-details {
    display: flex;
    flex-direction: column;
    height: 100%;
    align-items: center;
    justify-content: center;
    flex-basis: 66%;
  }
}
</style>
