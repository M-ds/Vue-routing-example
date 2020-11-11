<template>
  <nav id="nav">
    <p class="logo">The Vue School Travel App</p>
    <ul class="nav-links">
      <li class="links">
        <router-link to="/">Home</router-link>
      </li>
      <li class="links"
          v-for="destination in destinations"
          :key="destination.name">
        <router-link :to="{
          name: 'DestinationDetails',
          params: { slug:destination.slug }
        }">
          {{ destination.name }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import store from "@/store";

export default {
  name: "TheNavigation",
  data() {
    return {
      destinations: store.destinations
    }
  }
}
</script>

<style scoped>
#nav {
  display: flex;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  padding: 0 10px;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: purple;
}

.nav-links {
  display: flex;
}

.links {
  padding-right: 20px;
  list-style: none;
}

.links:hover {
  text-decoration: underline;
}

.logo {
  font-size: 20px;
  color: purple;
  font-weight: bold;
}

</style>