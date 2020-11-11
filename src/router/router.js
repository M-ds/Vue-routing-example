import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home", // Name of the route
    component: Home // Which component we refer to
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
  },
  {
    path: "/details",
    name: "DestinationDetails",
    component: () => import(/* webpackChunkName: "DestinationDetails" */"../views/DestinationDetails")
  }
];

const router = new VueRouter({
  routes
});

export default router;
