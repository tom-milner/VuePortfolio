<template>
  <div class="project-card">
    <img :src="getImage(thumbnail)" class="project-card__image">
    <h3 class="project-card__text">{{name}}</h3>
  </div>
</template>

<script>
export default {
  props: {
    thumbnail: String,
    name: String,
    index: String
  },
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

.project-card {
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
  }

  &__text {
    margin: 2rem 0;
    padding-top: 1rem;
    text-transform: uppercase;
    color: $color-white;
    letter-spacing: 0.3rem;
    font-size: 2rem;
    font-weight: 500;
  }
}
</style>
