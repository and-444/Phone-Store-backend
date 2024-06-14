const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const productSchema = new Schema({
  id: {
    type: Number,
    unique: true,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  mainImage: {
    type: String,
    required: true,
  },
  gallery: {
    type: [String],
    required: true,
  },
  color: {
    type: [String],
    required: true,
  },
  memory: {
    type: [Number],
    required: true,
  },
  chars: {
    screen: { type: String, required: true },
    cameras: { type: String, required: true },
    processor: { type: String, required: true },
    communication: { type: String, required: true },
    charging: { type: String, required: true },
  },
});

module.exports = model("Product", productSchema);
