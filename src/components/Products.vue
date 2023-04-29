<script>
import { useProductsStore } from "../stores/products";
import { RouterLink } from "vue-router";
import { axios as ax } from "axios";

export default {
  setup() {
    let productsStore = useProductsStore();
    return productsStore.products;
  },
  data() {
    return {
      products: useProductsStore().products,
      productToEdit: null,
    };
  },
  methods: {
    deleteProduct(id) {
      (async function () {
        const requestConfigs = {
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            productID: id,
          }),
        };

        const res =
          await delete ("http://localhost:8082/api/farmfresh/delete/product",
          requestConfigs);
        const { products } = await res.json();

        this.products = products;
      })();
    },

    updateProductToEdit(productToEdit) {
      console.log(productToEdit);

      (async function () {
        const requestConfigs = {
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            product: productToEdit,
          }),
        };
        const res = await patch(
          "http://localhost:8082/api/farmfresh/update/product",
          requestConfigs
        );
        const { products } = await res.json();

        this.products = products;
      })();

      // this.productToEdit = this.products.find(
      //   (product) => product.id === productToEdit.id
      // );
    },

    mouseOverEffects(e) {
      e.target.style.transition = "ease .4s";
      e.target.style.scale = 1.1;
      e.target.style.borderWidth = "2em";
    },
  },
  components: { RouterLink },
};
</script>

<template>
  <!-- Hero Start -->
  <div class="container-fluid bg-primary py-5 bg-hero mb-5">
    <div class="container py-5">
      <div class="row justify-content-start">
        <div class="col-lg-8 text-center text-lg-start">
          <h1 class="display-1 text-white mb-md-4">Our Products</h1>
          <RouterLink to="/home">
            <a class="btn btn-primary py-md-3 px-md-5 me-3">Home</a></RouterLink
          >

          <RouterLink to="/modify/product">
            <a class="btn btn-secondary py-md-3 px-md-5">Modify Products</a>
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
  <!-- Hero End -->

  <!-- Products Start -->
  <div class="container-fluid py-5">
    <div class="container">
      <div class="mx-auto text-center mb-5" style="max-width: 500px">
        <h6 class="text-primary text-uppercase">Products</h6>
        <h1 class="display-5">Our Fresh & Organic Products</h1>
      </div>

      <div class="d-flex flex-wrap justify-content-between align-items-start">
        <div
          class="pb-5 border my-2"
          :on-mouseover="(e) => mouseOverEffects(e)"
          v-if="products"
          v-for="product in products"
        >
          <div
            class="product-item position-relative bg-white d-flex flex-column text-center"
          >
            <img
              class="img-fluid mb-4"
              src="../assets/img/product-2.png"
              alt=""
            />
            <h6 class="mb-3">{{ product.name }}</h6>
            <h5 class="text-primary mb-0">KES: {{ product.price }}</h5>
            <h5 class="text-primary mb-0">In-Stock: {{ product.stock }}</h5>
            <div class="btn-action d-flex justify-content-center">
              <button class="btn bg-success py-2 px-3">
                <i class="bi bi-cart text-white"> Buy</i>
              </button>
              <button
                @click="() => deleteProduct(product.id)"
                class="btn bg-danger py-2 px-3 mx-2"
              >
                <i class="bi bi-cart text-white"> Delete</i>
              </button>
              <RouterLink
                @click="() => updateProductToEdit(product)"
                to="/modify/product"
                class="btn bg-info py-2 px-3"
              >
                <i class="bi bi-eye text-white">Edit</i>
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
      <div class="owl-carousel product-carousel px-5"></div>
    </div>
  </div>
  <!-- Products End -->

  <!-- Features Start -->
  <div
    class="container-fluid bg-primary feature py-5 pb-lg-0 mt-5"
    style="margin-bottom: 135px"
  >
    <div class="container py-5 pb-lg-0">
      <div class="mx-auto text-center mb-3 pb-2" style="max-width: 500px">
        <h6 class="text-uppercase text-secondary">Features</h6>
        <h1 class="display-5 text-white">Why Choose Us!!!</h1>
      </div>
      <div class="row g-5">
        <div class="col-lg-3">
          <div class="text-white mb-5">
            <div
              class="bg-secondary rounded-pill d-flex align-items-center justify-content-center mb-3"
              style="width: 60px; height: 60px"
            >
              <i class="fa fa-seedling fs-4 text-white"></i>
            </div>
            <h4 class="text-white">100% Organic</h4>
            <p class="mb-0">
              Labore justo vero ipsum sit clita erat lorem magna clita
            </p>
          </div>
          <div class="text-white">
            <div
              class="bg-secondary rounded-pill d-flex align-items-center justify-content-center mb-3"
              style="width: 60px; height: 60px"
            >
              <i class="fa fa-award fs-4 text-white"></i>
            </div>
            <h4 class="text-white">Award Winning</h4>
            <p class="mb-0">
              Labore justo vero ipsum sit clita erat lorem magna clita
            </p>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="d-block bg-white h-100 text-center p-5 pb-lg-0">
            <p>
              At et justo elitr amet sea at. Magna et sit vero at ipsum sit et
              dolores rebum. Magna sea eos sit dolor, ipsum amet no tempor ipsum
              eirmod lorem eirmod diam tempor dolor eos diam et et diam dolor
              ea. Clita est rebum amet dolore sit. Dolor stet dolor duo clita,
              vero dolor ipsum amet dolore magna lorem erat stet sed vero dolor
            </p>
            <img class="img-fluid" src="img/feature.png" alt="" />
          </div>
        </div>
        <div class="col-lg-3">
          <div class="text-white mb-5">
            <div
              class="bg-secondary rounded-pill d-flex align-items-center justify-content-center mb-3"
              style="width: 60px; height: 60px"
            >
              <i class="fa fa-tractor fs-4 text-white"></i>
            </div>
            <h4 class="text-white">Modern Farming</h4>
            <p class="mb-0">
              Labore justo vero ipsum sit clita erat lorem magna clita
            </p>
          </div>
          <div class="text-white">
            <div
              class="bg-secondary rounded-pill d-flex align-items-center justify-content-center mb-3"
              style="width: 60px; height: 60px"
            >
              <i class="fa fa-phone-alt fs-4 text-white"></i>
            </div>
            <h4 class="text-white">24/7 Support</h4>
            <p class="mb-0">
              Labore justo vero ipsum sit clita erat lorem magna clita
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Features Start -->
</template>
