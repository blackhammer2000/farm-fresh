<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <header>
    <!-- Topbar Start -->
    <div class="container-fluid px-5 d-none d-lg-block">
      <div class="row gx-5 py-3 align-items-center">
        <div class="col-lg-3">
          <div class="d-flex align-items-center justify-content-start">
            <i class="bi bi-phone-vibrate fs-1 text-primary me-2"></i>
            <h2 class="mb-0">+012 345 6789</h2>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="d-flex align-items-center justify-content-center">
            <a href="index.html" class="navbar-brand ms-lg-5">
              <h1 class="m-0 display-4 text-primary">
                <span class="text-secondary">Farm</span>Fresh
              </h1>
            </a>
          </div>
        </div>
        <div class="col-lg-3">
          <div class="d-flex align-items-center justify-content-end">
            <a class="btn btn-primary btn-square rounded-circle me-2" href="#"
              ><i class="fab fa-twitter">a</i></a
            >
            <a class="btn btn-primary btn-square rounded-circle me-2" href="#"
              ><i class="fab fa-facebook-f">b</i></a
            >
            <a class="btn btn-primary btn-square rounded-circle me-2" href="#"
              ><i class="fab fa-linkedin-in">c</i></a
            >
            <a class="btn btn-primary btn-square rounded-circle" href="#"
              ><i class="fab fa-instagram">d</i></a
            >
          </div>
        </div>
      </div>
    </div>
    <!-- Topbar End -->

    <!-- Navbar Start -->
    <nav
      class="navbar navbar-expand-lg bg-primary navbar-dark shadow-sm py-3 py-lg-0 px-3 px-lg-5"
    >
      <a href="index.html" class="navbar-brand d-flex d-lg-none">
        <h1 class="m-0 display-4 text-secondary">
          <span class="text-white">Farm</span>Fresh
        </h1>
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <div class="navbar-nav mx-auto py-0">
          <RouterLink class="nav-item nav-link active" to="/">Home</RouterLink>

          <RouterLink class="nav-item nav-link" to="/about">About</RouterLink>

          <RouterLink class="nav-item nav-link" to="/services"
            >Services</RouterLink
          >

          <RouterLink class="nav-item nav-link" to="/products"
            >Products</RouterLink
          >

          <RouterLink class="nav-item nav-link" to="/modify/product"
            >Modify Product</RouterLink
          >

          <div class="nav-item dropdown">
            <a
              href="#"
              class="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
              >Pages</a
            >
            <div class="dropdown-menu m-0">
              <RouterLink class="nav-item nav-link" to="/pages"
                >Blog Grid</RouterLink
              >
              <RouterLink class="nav-item nav-link" to="/pages"
                >Blog Details</RouterLink
              >
              <RouterLink class="nav-item nav-link" to="/pages"
                >Features</RouterLink
              >
              <RouterLink class="nav-item nav-link" to="/pages"
                >The Team</RouterLink
              >
              <RouterLink class="nav-item nav-link" to="/pages"
                >Testimonial</RouterLink
              >
            </div>
          </div>

          <RouterLink class="nav-item nav-link" to="/contact"
            >Contact</RouterLink
          >
        </div>
      </div>
    </nav>
  </header>
</template>
