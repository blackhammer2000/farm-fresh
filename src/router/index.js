import { createRouter, createWebHistory } from "vue-router";

import HomeView from "../views/HomeView.vue";
import ServiceView from "../views/ServiceView.vue";
import ProductView from "../views/ProductView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/services",
      name: "services",
      component: ServiceView,
    },
    {
      path: "/products",
      name: "products",
      component: ProductView,
    },
  ],
});

export default router;
