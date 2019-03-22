<template>
  <section class="section-about" id="section-about">
    <heading-secondary theme="light" message="About Me"></heading-secondary>
    <div class="paragraph paragraph--large">
      <p>Hi. I'm Tom, a developer based in Guildford, UK.</p>
      <br>
      <p>I make websites and apps, and have experience with modern web development technologies (Vue, Node.JS etc) aswell as backend technologies like Java</p>
      <p>I have also used app development frameworks like Flutter to build sleek mobile apps.</p>
      <br>
      <p>I enjoy learning and keeping up with new languages and software development trends, and I love to build all kinds of software, so contact me below!</p>
    </div>
    <primary-button type="round" id="unSkew" message="See my work" link="work"></primary-button>
  </section>
</template>

<script>
import HeadingSecondary from "@/components/typography/HeadingSecondary";
import PrimaryButton from "@/components/misc/PrimaryButton";

export default {
  components: {
    HeadingSecondary,
    PrimaryButton
  }
};
</script>

<style lang="scss" scoped>
@import "../../../scss/global";

.section-about {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  background-color: $color-grey-light;
  padding: 17rem 0;
  margin-top: -10vh;
  overflow: hidden;
  transform: skewY(4.5deg);

  & > * {
    transform: skewY(-4.5deg);
  }
}

// FixPrimaryButtonfrom skewing on hover
#unSkew:hover {
  transform: skewY(-4.5deg) translateY(-3px);
}
#unSkew:active {
  transform: skewY(-4.5deg) translateY(-1px);
}
</style>
