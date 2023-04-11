<script setup>
import "./assets/css/bootstrap.min.css";
import "./assets/css/style.css";
import "./assets/lib/owlcarousel/assets/owl.carousel.min.css";
// import "./assets/lib/counterup/counterup.min.js";
// import "./assets/lib/waypoints/waypoints.min.js";
// import "./assets/lib/easing/easing.min.js";
// import "./assets/js/main.js";

import { RouterView } from "vue-router";

import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

import HomeView from "./views/HomeView.vue";

// import AboutView from "./views/AboutView.vue";
// import ServiceView from "./views/ServiceView.vue";
// import ProductView from "./views/ProductView.vue";
</script>

<template>
  <Header />

  <RouterView @route="HomeView"></RouterView>

  <!-- <RouterView @route="AboutView"></RouterView>
    <RouterView @route="ServiceView"></RouterView>
    <RouterView @route="ProductView"></RouterView> -->

  <Footer />
</template>
