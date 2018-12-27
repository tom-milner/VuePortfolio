<template>
  <section class="section-skills">
    <heading-secondary class="dark" message="Skills"/>
    <div class="section-skills__skills">
      <skill-box
        :card="{img: 'code', skill: 'Backend', text: 'I have experience in Java and NodeJS, and enjoy building complex, data-driven applications.'}"
      ></skill-box>
      <skill-box
        :card="{img: 'paintbrush', skill: 'Frontend', text: 'I enjoy using Vue and other frontend technologies like SCSS to create effective web sites and applications.'}"
      ></skill-box>
      <skill-box
        :card="{img: 'computer', skill: 'Design', text: 'My favourite aspect of web development: I believe beautiful design can bring a website or application to a whole new level.'}"
      ></skill-box>
    </div>
  </section>
</template>

<script>
import SkillBox from "@/components/misc/SkillBox";
import HeadingSecondary from "@/components/typography/HeadingSecondary";
export default {
  components: {
    SkillBox,
    HeadingSecondary
  }
};
</script>

<style lang="scss" scoped>
@import "../../../scss/global";

.section-skills {
  // background-color: #7da4ad;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  padding: 15rem 0;
  transform: skewY(4.5deg);
  & > * {
    transform: skewY(-4.5deg);
  }

  background-image: linear-gradient(
      to right bottom,
      rgba(#7da4ad, 0.8),
      rgba(#25373b, 0.8)
    ),
    url("../../../assets/img/skills-bg.jpeg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: bottom;

  &__skills {
    margin-top: 6rem;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    @include respond(tab-port) {
      flex-direction: column;
    }
  }
}
</style>
