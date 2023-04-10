<template>
  <h1>Students Data</h1>
  <h1>{{ studetsStore }}</h1>
  <h1>Students Data</h1>
</template>

<script setup>
import { useProductsStore } from "../stores/products";
let productsStore = useProductsStore();
</script>
