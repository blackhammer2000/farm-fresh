<script>
import { useProductsStore } from "../stores/products";
import { RouterLink } from "vue-router";
import { post, patch } from "axios";

export default {
  setup() {
    let productsStore = useProductsStore();
    return productsStore.products;
  },
  data() {
    return {
      products: useProductsStore()?.products,
      productToEdit: useProductsStore()?.productToEdit,
      newProduct: {},
    };
  },
  methods: {
    // setProp(prop, e) {
    //   this[prop] = e.target.value;
    // },

    addProduct(e, newProduct) {
      e.preventDefault();

      if (!newProduct) return;

      (async function () {
        const requestConfigs = {
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            product: newProduct,
          }),
        };
        const res = await post(
          "http://localhost:8082/api/farmfresh/create/product",
          requestConfigs
        );
        const { product } = await res.json();

        this.products.push(product);
      })();

      // this.products.push(newProduct);

      console.log(this.products);
      this.newProduct = {};
    },

    updateProduct(e, newProduct) {
      e.preventDefault();

      if (!newProduct) {
        alert("Invalid product");
        return;
      }

      (async function () {
        const requestConfigs = {
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            product: newProduct,
          }),
        };
        const res = await patch(
          "http://localhost:8082/api/farmfresh/update/product",
          requestConfigs
        );
        const data = await res.json();

        this.products = data.products;
      })();

      // this.products = this.products.map((product) => {
      //   if (product.id === this.productToEdit.id) {
      //     newProduct.id = product?.id;
      //     return newProduct;
      //   }
      //   return product;
      // });

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
    <legend class="container-fluid text-center">
      {{ productToEdit ? "UPDATE PRODUCT" : "ADD PRODUCT" }}
    </legend>
    <form action="" class="form container">
      <div class="form-group">
        <input
          v-model="newProduct.name"
          type="text"
          class="form-control"
          placeholder="Enter Product Name"
        />
      </div>
      <div class="form-group mt-2">
        <input
          v-model="newProduct.price"
          type="number"
          class="form-control"
          placeholder="Enter Product Price"
        />
      </div>
      <div class="form-group mt-2">
        <input
          v-model="newProduct.stock"
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
