<template>
  <div class="popup" id="popup" >
    <div class="popop__content">
      <div class="popup__content__image-box">
        <img src="../../assets/img/bg.jpeg" alt="Thumbnail" class="popup__content__image-box__image">
      </div>
      <div class="popup__content__details">
        <h3 class="popup__content__details__title">Example</h3>
        <a>www.google.com</a>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure voluptas corrupti ab fugiat inventore minus impedit. Consequatur dolore, rerum natus quia at laudantium unde, nam quibusdam ipsam eius magni doloribus.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped >
  @import "../../scss/_global.scss";
  .popup {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    background-color: rgba($color-black, .8);
    opacity: 0;
    visibility: hidden;
    transition: all .3s;
  }

</style>
