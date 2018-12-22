<template>
  <div class="skill-box">
    <img class="skill-box__image" :src="'@/assets/img/' + img-type">
    <h3 class="skill-box__heading">{{skill}}</h3>
    <p class="skill-box__text">{{text}}</p>
  </div>
</template>

<script>
export default {

  props: ["img-type", "skill", "text"]
};
</script>

<style lang="scss" scoped>
@import "../scss/global";
.skill-box {
  background-color: rgba(#cdcdcd, 0.95);
  font-size: 1.5rem;
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
