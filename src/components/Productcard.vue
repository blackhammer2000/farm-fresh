<script setup>
defineProps({
  product: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div class="pb-5">
    <div
      class="product-item position-relative bg-white d-flex flex-column text-center"
    >
      <img class="img-fluid mb-4" src="../assets/img/product-1.png" alt="" />
      <h6 class="mb-3">{{ product.name }}</h6>
      <h5 class="text-primary mb-0">{{ product.price }}</h5>
      <div class="btn-action d-flex justify-content-center">
        <a class="btn bg-primary py-2 px-3" href=""
          ><i class="bi bi-cart text-white"></i
        ></a>
        <a class="btn bg-secondary py-2 px-3" href=""
          ><i class="bi bi-eye text-white"></i
        ></a>
      </div>
    </div>
  </div>
</template>
