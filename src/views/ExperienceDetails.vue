<template>
  <section class="experiences">
    <h1>Experiences</h1>
    <h2>{{ experience.name }}</h2>
    <div class="experience-details">
      <img :src="require(`@/assets/${experience.image}`)"
           :alt="experience.name"
      />
      <p>{{ experience.description }}</p>
    </div>
  </section>
</template>

<script>
import store from "@/store";

export default {
  name: "ExperienceDetails",
  props: {
    slug: {
      type: String,
      require: true
    },
    experienceSlug: {
      type: String,
      require: true
    }
  },
  computed: {
    destionation() {
      return store.destinations.find (
        destination => destination.slug === this.slug
      );
    },
    experience() {
      return this.destionation.experiences.find (
        experience => experience.slug === this.experienceSlug
      );
    }
  }
}
</script>

<style scoped>
.experiences {
  height: auto;
  width: 100%;
  max-height: 400px;
}
.experience-details {
  display: flex;
  justify-content: space-between;
}

p {
  margin: 0 40px;
  font-size: 20px;
  text-align: left;
}
</style>