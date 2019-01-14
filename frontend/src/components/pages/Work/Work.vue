<template>
  <section class="section-work">
    <heading-secondary class="section-work__title" message="My work" theme="dark"/>
    <div class="section-work__row">
      <project-card
        v-on:click.native="togglePopup(project)"
        v-for="project in projects"
        :key="project.id"
        :project="project"
      ></project-card>

      <h3
        v-if="projects.length == 0"
        class="heading-tertiary heading-tertiary--error"
      >Uh oh! Looks like a server error.</h3>
    </div>
    <transition name="fade">
      <popup v-if="popupIsDisplayed" :project="clickedProject" v-on:close-popup="closePopup()"></popup>
    </transition>
  </section>
</template>

<script>
import HeadingSecondary from "@/components/typography/HeadingSecondary";
import ProjectCard from "@/components/misc/ProjectCard";
import Popup from "@/components/misc/Popup";
import WorkService from "@/services/WorkService";

export default {
  data() {
    return {
      projects: [],
      popupIsDisplayed: false,
      clickedProject: {}
    };
  },

  methods: {
    togglePopup: function(project) {
      // console.log(project);
      this.$data.clickedProject = project;
      this.$data.popupIsDisplayed = true;
    },
    closePopup: function() {
      this.$data.popupIsDisplayed = false;
      console.log(this.$data.popupIsDisplayed);
    }
  },

  components: {
    HeadingSecondary,
    ProjectCard,
    Popup
  },

  async beforeCreate()  {
    this.projects = (await WorkService.work()).data;
  }
}
</script>

<style lang="scss" scoped >
@import "../../../scss/global";

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.section-work {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-color: $color-grey-dark;
  min-height: 100vh;
  // clip-path: polygon(0 0, 100% 0, 100% 100%, 0 85%);
  padding: 5rem;
  &__title {
    margin-top: 3rem;
  }

  &__row {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: space-between;
    width: 100%;
    height: 100%;
    // &:not(:first){
    //   padding: 300rem;
    // }

    @include respond(tab-port) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: auto;
    }
  }
}
</style>
