<template>
  <section class="section-skills">
    <div class="section-skills__row">
      <skill-box img-type='code.svg' skill="Design" text="HELLLLLLLOOOOOOOO" ></skill-box>
      <skill-box></skill-box>
      <skill-box></skill-box>
    </div>
  </section>
</template>

<script>
import SkillBox from "@/components/SkillBox";
export default {
  components: {
    SkillBox
  }
};
</script>

<style lang="scss" scoped>
@import "../../../scss/global";

.section-skills {
  // background-color: #7da4ad;
  padding: 15rem 0;
  transform: skewY(4.5deg);
  & > * { 
    transform: skewY(-4.5deg);
  }

  background-image: linear-gradient(
    to right bottom,
    rgba(#7da4ad, 0.8),
    rgba(#25373b, 0.8)
  );
  // url("../../../assets/img/skills-bg.jpeg");
  background-size: cover;

  &__row {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}

}


</style>
