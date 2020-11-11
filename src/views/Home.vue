<template>
  <div class="home">
    <h1>
      All Destinations
    </h1>
    <div class="destinations">
      <div v-for="destination in destinations"
           :key="destination.name">
        <!--
        We make use of NamedRoutes, which makes it easier to maintain, as this is all done in the router.js
        We also provide a param to the router, as this makes it possible to load the correct data which is linked to the selected id.
        -->
        <router-link :to="{ name: 'DestinationDetails', params: { slug: destination.slug }}">
          <h2>{{ destination.name }}</h2>
        </router-link>
        <figure>
          <!-- We make use of NamedRoutes, which makes it easier to maintain, as this is all done in the router.js -->
          <router-link :to="{name: 'DestinationDetails', params: { slug: destination.slug }}">
            <img :src="require(`@/assets/${destination.image}`)" :alt="destination.name">
          </router-link>
        </figure>
      </div>
    </div>
  </div>
</template>

<script>
import store from "@/store.js"

export default {
  name: "Home",
  components: {},
  data() {
    return {
      destinations: store.destinations
    };
  }
};
</script>
<style scoped>
.home {
  max-width: 1400px;
  margin: 0 auto;
}

img {
  max-width: 200px;
}

.destinations {
  display: flex;
  justify-content: space-between;
}
a {
  color: lightseagreen;
  text-decoration: none;
}
a:hover,
a:visited {
  text-decoration: underline;
}
</style>
