<script>
import { useProductsStore } from "../stores/products";
import { RouterLink } from "vue-router";

export default {
  setup() {
    let productsStore = useProductsStore();
    return productsStore.products;
  },
  data() {
    return {
      products: useProductsStore().products,
      productToEdit: useProductsStore().productToEdit,
      newProduct: {},
    };
  },
  methods: {
    updateProduct(newProduct) {
      this.products = this.products.map((product) => {
        if (product.id === newProduct.id) return newProduct;
        return product;
      });
    },
  },
  components: { RouterLink },
};
</script>

<template>
  {{ productToEdit }}

  <fieldset
    class="container-fluid d-flex flex-column justify-content-center align-items-center"
    style="height: 300px"
  >
    <legend class="container-fluid text-center">ADD PRODUCT</legend>
    <form
      action=""
      class="form container"
      @submit="
        () => {
          e.preventDefault();
          updateProduct(newProduct);
        }
      "
    >
      <div class="form-group">
        <input
          @change="
            (e) =>
              Object.keys(productToEdit)
                ? (newProduct.name = e.target.value)
                : null
          "
          value="() => {{productToEdit.name}}"
          type="text"
          class="form-control"
          placeholder="Enter Product Name"
        />
      </div>
      <div class="form-group mt-2">
        <input
          @change="
            (e) =>
              Object.keys(productToEdit)
                ? (newProduct.price = e.target.value)
                : null
          "
          value="() => {{productToEdit.price}}"
          type="number"
          class="form-control"
          placeholder="Enter Product Price"
        />
      </div>
      <div class="form-group mt-2">
        <input
          @change="
            (e) =>
              Object.keys(productToEdit)
                ? (newProduct.stock = e.target.value)
                : null
          "
          value="() => {{productToEdit.stock}}"
          type="number"
          class="form-control"
          placeholder="Enter Amount In Stock"
        />
      </div>
      <div class="form-group mt-2 text-center w-100">
        <button
          @disabled="() => productToEdit.hasOwnProperty"
          type="submit"
          class="btn btn-success w-100"
        >
          Add Product
        </button>
      </div>
      <div class="form-group mt-2 text-center w-100">
        <button
          @disabled="() => !productToEdit.hasOwnProperty"
          type="submit"
          class="btn btn-info w-100"
        >
          Update Product
        </button>
      </div>
    </form>
  </fieldset>
</template>
