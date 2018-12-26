<template>
  <section class="section-contact">

    <heading-secondary theme="light" message="Contact"></heading-secondary>
    <div class="section-contact__button-box">
      <primary-button type="square" message="Email"/>
      <primary-button type="square" message="Discord"/>
    </div>
    <div class="section-contact__form">
      <h3 class="section-contact__text">or leave me a message:</h3>
      <input class="section-contact__input" type="text" placeholder="name">
      <input class="section-contact__input" type="tel" placeholder="telephone no.">
      <input class="section-contact__input" type="email" placeholder="email">
      <textarea class="section-contact__input"   placeholder="message"></textarea>
      <primary-button type="square" message="Send" ></primary-button>
      </div>

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

    background-color: $color-white;


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
    width: 50%;
    min-width: 50%;
    justify-content: center;
    align-items: center;
  }

  &__input {
    font-size: $font-default;
    width: 100%;
    border: 1px solid $color-grey;
    padding: 0.5rem;
    border-radius: 3px;
    margin: 0.5rem;
    font-family: "Montserrat", sans-serif;
    font-weight: 300;
  }

  &__text {
    margin: 2rem 0;
    padding-top: 1rem;
    text-transform: uppercase;
    color: $color-primary-very-dark;
    letter-spacing: 0.3rem;
    font-size: 2rem;
    font-weight: 500;
  }

  textarea {

    min-width: 100%;
    width: 100%;
    height: 15rem;
    resize: vertical;
  }


}
</style>
