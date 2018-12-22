<template>
  <section class="section-contact">
    <!-- <div class="column"> -->
      <heading-secondary theme="light" message="Contact"></heading-secondary>
      <div class="section-contact__button-box">
        <primary-button type="square" message="Email"/>
        <primary-button type="square" message="Discord"/>
      </div>
      <div class="section-contact__form">
        <input class="section-contact__input" type="text" placeholder="name">
        <input class="section-contact__input" type="text" placeholder="telephone no.">
        <input class="section-contact__input" type="text" placeholder="email">
        <input class="section-contact__input" type="text" placeholder="message">
      </div>
    <!-- </div> -->
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


.section-contact {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 15rem 0;
  width: 100%;
  transform: skewY(4.5deg);

  & > * {
    transform: skewY(-4.5deg);
  }


  &__button-box {
    width: 70%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-top: 5rem;
  }

  &__form {
    display: flex;
    flex-direction: column;
    width: 70%;
    justify-content: center;
    align-items: center;
  }

  &__input {
    width: 100%;
    border: 1px solid $color-grey-dark;
    padding: 1rem;
  }
}
</style>
