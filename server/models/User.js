const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
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
