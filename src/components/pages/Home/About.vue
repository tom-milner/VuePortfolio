<template>
  <section class="section-about">
    <heading-secondary message="About Me"></heading-secondary>
    <div class="content">
      <p>Lorem, ipsum dolor Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, optio consequatur. Temporibus, repellat libero repellendus ducimus inventore atque quas consequatur, aperiam sed at qui itaque magni consectetur minus alias ad. sit amet consectetur adipisicing elit. Enim impedit illo quis fuga, autem cumque itaque nostrum ipsa mollitia asperiores, aspernatur nemo! Dicta excepturi officia unde illum rerum accusantium odio?</p>
      <br>
      <p>Lorem, ipsum do. Temporibus, repellat libero repellendus ducimus inventore atque quas consequatur, aperiam sed at qui itaque magni consectetur minus alias ad. sit amet consectetur adipisicing elit. Enim impedit illo quis fuga, autem cumque itaque nostrum ipsa mollitia asperiores, aspernatur nemo! Dicta excepturi officia unde illum rerum accusantium odio?</p>
      <br>
      <p>Lorem, ipsum do! Dicta excepturi officia unde illum rerum accusantium odio?</p>    
    </div>
    <round-button message="See my work"></round-button>

  </section>
</template>

<script>
import HeadingSecondary from "@/components/HeadingSecondary";
import RoundButton from "@/components/RoundButton";

export default {
  components: {
    HeadingSecondary,
    RoundButton
  }
};
</script>

<style lang="scss" scoped>
.section-about {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  background-color: #efefef;
  padding: 25rem 0;
  padding-bottom: 100rem;
  margin-top: -20vh;
  overflow: hidden;
}

.content {
  width: 80%;
  font-size: 1.9rem;
  text-align: center;
  padding: 5rem 0;
  letter-spacing: .3rem;
  word-spacing: .5rem;
}
</style>
