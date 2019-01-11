<template>
  <div class="project-card">
    <v-lazy-image :src="getImage(project.thumbnailURL)" class="project-card__image"/>
    <h3 class="heading-tertiary heading-tertiary--white">{{project.name}}</h3>
  </div>
</template>

<script>
import VLazyImage from "v-lazy-image";
export default {
  components: {
    VLazyImage
  },
  props: ["project"],
  methods: {
    getImage: function(pic) {
      var images = require.context("@/assets/img/thumbnails", false, /\.png$/);
      console.log(images("./" + pic + ".png"));
      return images("./" + pic + ".png");
    }
  }
};
</script>

<style lang="scss" scoped >
@import "../../scss/_global.scss";

.v-lazy-image {
  transition: all 0.1s;
  opacity: 0;
}
.v-lazy-image-loaded {
  opacity: 1;
}

.project-card {
  &:hover {
    transform: translateY(-4px) scale(1.02);
    cursor: pointer; 
  }

  @include respond(tab-port) {
    width: auto;
    height: 30rem;
  }

  transition: all 0.2s;
  height: 35rem;
  width: 50rem;
  background-color: $color-white;
  border-radius: 5px;
  box-shadow: 0 1.5rem 4rem rgba(#000, 0.15);
  margin: 2rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 1rem;
  background-image: linear-gradient(
    to right bottom,
    $color-primary-light,
    $color-primary-dark
  );
  &__image {
    overflow: hidden;
    height: 25rem;
    width: 45rem;
    // padding: s.5rem;
    border-radius: 3px;

    @include respond(tab-port) {
      height: 20rem;
      width: 40rem;
    }
  }

  &__text {
    margin: 2rem 0;
    padding-top: 1rem;
    text-transform: uppercase;
    color: $color-white;
    letter-spacing: 0.3rem;
    font-size: 2rem;
    font-weight: 500;
    text-align: center;
  }
}
</style>
