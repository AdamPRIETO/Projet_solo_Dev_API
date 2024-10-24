const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  nom: {
    type: String,
    required: true,
  },
  marque: {
    type: String,
    required: true,
  },
  prix: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
  },
  quantite: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Produit", productSchema);