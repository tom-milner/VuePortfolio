<template>
  <section class="section-contact" id="section-contact">
    <heading-secondary theme="light" message="Contact"></heading-secondary>
    <div class="section-contact__button-box">
      <primary-button link="mailto:tommilnerdev@gmail.com" type="square" message="Email"/>
      <primary-button link="#" type="square" message="LinkedIn"/>
    </div>
    <form class="section-contact__form" @submit="processForm">
      <h3 class="section-contact__text">or leave me a message:</h3>
      <input
        class="section-contact__input"
        name="name"
        type="name"
        placeholder="name"
        v-model="name"
      >
      <input
        class="section-contact__input"
        name="tel"
        type="tel"
        placeholder="telephone no."
        v-model="tel"
      >
      <input
        class="section-contact__input"
        name="email"
        type="email"
        placeholder="email"
        v-model="email"
      >
      <textarea
        class="section-contact__input"
        name="message"
        placeholder="message"
        v-model="message"
      ></textarea>

      <primary-button
        message="Submit"
        type="square"
        link="#section-contact"
        v-on:click.native="processForm"
      />
    </form>
  </section>
</template>

<script>
import HeadingSecondary from "@/components/typography/HeadingSecondary";
import PrimaryButton from "@/components/misc/PrimaryButton";
import axios from "axios";

export default {
  data() {
    return {
      name: "",
      email: "",
      tel: "",
      message: ""
    };
  },
  components: {
    HeadingSecondary,
    PrimaryButton
  },
  methods: {
     processForm:  function(event) {
      // make post request to server

      var data = {
        name: this.$data.name,
        email: this.$data.email,
        tel: this.$data.tel,
        message: this.$data.message
      };
      console.log(data);

       axios.post("http://localhost:8081/api/contact", data);
    }
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
    transition: all 0.2s;
    outline: none;

    &:focus,
    &:active {
      outline: none;
      border: 1px solid $color-primary-dark;
      box-shadow: 0 0.2rem 1rem rgba(#000, 0.2);
    }
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
    margin-bottom: 3rem;
  }
}
</style>
