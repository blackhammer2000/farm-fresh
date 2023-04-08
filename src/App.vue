<script setup>
import "./assets/css/bootstrap.min.css";
import "./assets/css/style.css";
import "./assets/lib/owlcarousel/assets/owl.carousel.min.css";

import { RouterView } from "vue-router";

import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

import About from "./views/AboutView.vue";
import AboutView from "./views/AboutView.vue";
</script>

<template>
  <main
    class="container-fluid d-flex flex-column align-iyems-center justify-content-start"
  >
    <Header />

    <RouterView v-bind:route="HomeVue"></RouterView>
    <RouterView v-bind:route="AboutView"></RouterView>
    <RouterView v-bind:route="ServiceView"></RouterView>

    <Footer />
  </main>
</template>

/*
<!-- <style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style> -->
*/
