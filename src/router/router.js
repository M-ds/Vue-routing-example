import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home", // Name of the route
    component: Home // Where we refer to
  },
  {
    path: "/about",
    name: "About",
    // Called dynamic loading. Only executed when the component is loaded.
    component: () =>
      // Underneath you can find the a magic comment, this will be displayed as name when debugging in Network tab (F12)
      import(/* webpackChunkName: "about" */ "../views/About")
  },
  {
    path: "/brazil",
    name: "brazil",
    // Dynamic loading, only loaded when the link is clicked
    component: () => import(/* webpackChunkName: "brazil" */"../views/Brazil")
  },
  {
    path: "/hawaii",
    name: "hawaii",
    // Dynamic loading, only loaded when the link is clicked
    component: () => import(/* webpackChunkName: "hawaii" */"../views/Hawaii")
  },
  {
    path: "/jamaica",
    name: "jamaica",
    // Dynamic loading, only loaded when the link is clicked
    component: () => import(/* webpackChunkName: "jamaica" */"../views/Jamaica")
  },
  {
    path: "/panama",
    name: "panama",
    // Dynamic loading, only loaded when the link is clicked
    component: () => import(/* webpackChunkName: "panama" */"../views/Panama")
  }
];

const router = new VueRouter({
  routes
});

export default router;
