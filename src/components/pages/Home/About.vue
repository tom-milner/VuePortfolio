<template>
  <section class="section-about">
    <heading-secondary theme="light" message="About Me"></heading-secondary>
    <div class="content">
      <p>Lorem, ipsum dolor Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, optio consequatur. Temporibus, repellat libero repellendus ducimus inventore atque quas consequatur, aperiam sed at qui itaque magni consectetur minus alias ad. sit amet consectetur adipisicing elit. Enim impedit illo quis fuga, autem cumque itaque nostrum ipsa mollitia asperiores, aspernatur nemo! Dicta excepturi officia unde illum rerum accusantium odio?</p>
      <br>
      <p>Lorem, ipsum do. Temporibus, repellat libero repellendus ducimus inventore atque quas consequatur, aperiam sed at qui itaque magni consectetur minus alias ad. sit amet consectetur adipisicing elit. Enim impedit illo quis fuga, autem cumque itaque nostrum ipsa mollitia asperiores, aspernatur nemo! Dicta excepturi officia unde illum rerum accusantium odio?</p>
      <br>
      <p>Lorem, ipsum do! Dicta excepturi officia unde illum rerum accusantium odio?</p>
    </div>
    <primary-button type="round" id="unSkew" message="See my work"></primary-button>
  </section>
</template>

<script>
import HeadingSecondary from "@/components/typography/HeadingSecondary";
import PrimaryButton from"@/components/misc/PrimaryButton";

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

  background-color: #efefef;
  padding: 17rem 0;
  margin-top: -10vh;
  overflow: hidden;
  transform: skewY(4.5deg);

  & > * {
    transform: skewY(-4.5deg);
  }
}

.content {
  display: flex;
  flex-direction: column;
  width: 70%;
  font-size: $font-default;
  text-align: center;
  padding: 5rem 0;
  letter-spacing: 0.3rem;
  word-spacing: 0.5rem;
}


// FixPrimaryButtonfrom skewing on hover
#unSkew:hover {
  transform: skewY(-4.5deg) translateY(-3px);
}
#unSkew:active {
  transform: skewY(-4.5deg) translateY(-1px);
}
</style>
