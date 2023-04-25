const { Schema, model } = require("mongoose");

const ProductSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  date_registered: {
    type: String,
    required: true,
  },
  password: {
    type: Object,
    required: true,
  },
});

const Product = model("product", ProductSchema);

module.exports = { Product };
