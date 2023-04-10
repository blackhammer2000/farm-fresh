import { defineStore } from "pinia";

export const useProductsStore = defineStore("PRODUCTS", {
  state: () => {
    return [
      { id: 1, name: "Maize" },
      { id: 2, name: "Beans" },
      { id: 3, name: "Peas" },
      { id: 4, name: "Rice" },
      { id: 5, name: "Njahi" },
      { id: 6, name: "Millet" },
      { id: 7, name: "Wheat" },
      { id: 8, name: "Potatoes" },
      { id: 9, name: "Tomatoes" },
      { id: 10, name: "Onions" },
    ];
  },
});
