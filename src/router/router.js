import Vue from "vue";
import Router from "vue-router";
import Home from "../views/Home.vue";

Vue.use(Router);

export default new Router({
  // This will make the url look normal
  mode: "history",
  // With this you can define your own active class (when clicked on router)
  linkExactActiveClass: "bla-bla",
  routes: [
    {
      path: "/",
      name: "Home", // Name of the route
      component: Home, // Which component we refer to
      props: true
    },
    {
      // We now specify that a param is provided in the url (this example an id)
      path: "/details/:slug",
      name: "DestinationDetails",
      component: () => import(/* webpackChunkName: "DestinationDetails" */"../views/DestinationDetails"),
      props: true
    }
  ]
});
