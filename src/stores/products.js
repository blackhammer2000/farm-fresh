import { defineStore } from "pinia";
import { get } from "axios";

export const useProductsStore = defineStore("PRODUCTS", {
  state: () => {
    (async function () {
      const res = await get(
        "http://localhost:8082/api/farmfresh/read/products",
        { mode: "no-cors" }
      );
      const { products } = await res.json();

      return {
        products: products,
        productToEdit: true,
      };
    })();
    // return {
    //   products: [
    //     { id: 1, name: "Maize", price: 100, stock: 200 },
    //     { id: 2, name: "Beans", price: 300, stock: 500 },
    //     { id: 3, name: "Peas", price: 140, stock: 130 },
    //     { id: 4, name: "Rice", price: 150, stock: 700 },
    //     { id: 5, name: "Njahi", price: 350, stock: 250 },
    //     { id: 6, name: "Millet", price: 230, stock: 450 },
    //     { id: 7, name: "Wheat", price: 120, stock: 120 },
    //     { id: 8, name: "Potatoes", price: 100, stock: 110 },
    //     { id: 9, name: "Tomatoes", price: 110, stock: 170 },
    //     { id: 10, name: "Onions", price: 170, stock: 340 },
    //     { id: 11, name: "Avocado", price: 450, stock: 101 },
    //     { id: 12, name: "Mangoes", price: 90, stock: 900 },
    //   ],

    //   productToEdit: true,
    // };
  },
});
