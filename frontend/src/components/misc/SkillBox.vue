<template>
  <div class="skill-box">
    <img class="skill-box__image" :src="getImage(card.img)">
    <h3 class="heading-tertiary">{{card.skill}}</h3>
    <p class="paragraph paragraph--small">{{card.text}}</p>
  </div>
</template>

<script>
export default {
  props: {
    card: {
      img: String,
      skill: String,
      text: String
    }
  },
  methods: {
    getImage: function(pic) {
      var images = require.context("@/assets/img/", false, /\.svg$/);
      console.log(images("./" + pic + ".svg"));
      return images("./" + pic + ".svg");
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../scss/global";
.skill-box {
  background-color: rgba(#cdcdcd, 0.95);
  padding: 4rem 2.5rem;
  width: 30rem;
  height: 40rem;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 1.5rem 4rem rgba(#000, 0.15);
  transition: all 0.2s;
  text-align: center;

  @include respond(tab-port) {
    margin: 2rem 0; 
  }

  &__image {
    height: 15rem;
    width: 15rem;
    fill: $color-white;
    color: $color-white;
  }

  &:hover {
    transform: skewY(0) translateY(-1.5rem) scale(1.03);
  }
}
</style>
