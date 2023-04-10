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
    setProp(prop, e) {
      this.newProduct[prop] = e.target.value;
    },

    addProduct(e, newProduct) {
      e.preventDefault();

      if (!newProduct) return;

      this.products.push(newProduct);
    },

    updateProduct(e, newProduct) {
      e.preventDefault();

      if (!newProduct) {
        alert("Invalid product");
        return;
      }

      this.products = this.products.map((product) => {
        if (product.id === newProduct.id) return newProduct;
        return product;
      });

      this.newProduct = {};
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
    <form action="" class="form container">
      <div class="form-group">
        <input
          :onChange="(e) => setProp(name, e)"
          :value="productToEdit ? productToEdit.name : ''"
          type="text"
          class="form-control"
          placeholder="Enter Product Name"
        />
      </div>
      <div class="form-group mt-2">
        <input
          :onChange="(e) => setProp(price, e)"
          :value="productToEdit ? productToEdit.price : ''"
          type="number"
          class="form-control"
          placeholder="Enter Product Price"
        />
      </div>
      <div class="form-group mt-2">
        <input
          :onChange="(e) => setProp(stock, e)"
          :value="productToEdit ? productToEdit.stock : ''"
          type="number"
          class="form-control"
          placeholder="Enter Amount In Stock"
        />
      </div>
      <div class="form-group mt-2 text-center w-100">
        <button
          :onClick="(e) => addProduct(e, newProduct)"
          :disabled="productToEdit"
          type="submit"
          class="btn btn-primary w-100"
        >
          Add Product
        </button>
      </div>
      <div class="form-group mt-2 text-center w-100">
        <button
          :onClick="(e) => updateProduct(e, newProduct)"
          :disabled="!productToEdit"
          type="submit"
          class="btn btn-primary w-100"
        >
          Update Product
        </button>
      </div>
    </form>
  </fieldset>
</template>
