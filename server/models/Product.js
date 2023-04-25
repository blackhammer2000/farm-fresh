const { Schema, model } = require("mongoose");

const ProductSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  date_registered: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const Product = model("product", ProductSchema);

module.exports = { Product };
