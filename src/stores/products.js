import { defineStore } from "pinia";

export const useProductsStore = defineStore("PRODUCTS", {
  state: () => {
    return {
      products: [
        { id: 1, name: "Maize", price: 100, stock: 200 },
        { id: 2, name: "Beans", price: 100, stock: 200 },
        { id: 3, name: "Peas", price: 100, stock: 200 },
        { id: 4, name: "Rice", price: 100, stock: 200 },
        { id: 5, name: "Njahi", price: 100, stock: 200 },
        { id: 6, name: "Millet", price: 100, stock: 200 },
        { id: 7, name: "Wheat", price: 100, stock: 200 },
        { id: 8, name: "Potatoes", price: 100, stock: 200 },
        { id: 9, name: "Tomatoes", price: 100, stock: 200 },
        { id: 10, name: "Onions", price: 100, stock: 200 },
      ],

      productToEdit: {},
    };
  },
});
