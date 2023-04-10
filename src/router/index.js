import { createRouter, createWebHistory } from "vue-router";

import HomeView from "../views/HomeView.vue";
import ServiceView from "../views/ServiceView.vue";
import ProductView from "../views/ProductView.vue";
import ContactView from "../views/ContactView.vue";
import AddProductView from "../views/AddProductView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "root",
      component: HomeView,
    },
    {
      path: "/home",
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
    {
      path: "/contact",
      name: "contact",
      component: ContactView,
    },
    {
      path: "/modify/product",
      name: "modify product",
      component: AddProductView,
    },
  ],
});

export default router;
