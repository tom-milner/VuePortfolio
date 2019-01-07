<template>
  <section class="section-work">
    <heading-secondary class="section-work__title" message="My work" theme="light"/>
    <div class="section-work__row">
      <project-card :name="this.projects[0].name" :thumbnail="this.projects[0].thumbnailURL" index=0></project-card>
      <!-- <project-card name="test" thumbnail="InDevelopmentPage" index=0></project-card> -->
    </div>
    <div class="section-work__row"></div>
    <popup></popup>
  </section>
</template>

<script>
import HeadingSecondary from "@/components/typography/HeadingSecondary";
import ProjectCard from "@/components/misc/ProjectCard";
import Popup from "@/components/misc/Popup";
import axios from "axios";
export default {
  data() {
    return {
      projects: []
    };
  },
  components: {
    HeadingSecondary,
    ProjectCard,
    Popup
  },
  methods: {
    getProjects: function() {
      const url = "http://localhost:8081/work/";
      axios
        .get(url)
        .then(response => {
          this.projects = response.data;
          console.log(this.projects)
        })
        .catch(err => err);
    }
  },
  mounted() {
    this.getProjects();
  }
};
</script>

<style lang="scss" scoped >
@import "../../../scss/global";

.section-work {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-color: $color-grey-light;
  height: 85vh;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 85%);
  padding: 2rem;

  &__title {
    margin-top: 3rem;
  }

  &__row {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: space-between;
    width: 100%;

    @include respond(tab-port) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>
