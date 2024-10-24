const express = require("express");
const router = express.Router();
const { createProduct, getProduct, updateProduct, deleteProduct } = require("./controllers");

router.post("/product/create", createProduct);
router.get("/product/getproduct", getProduct);
router.put("/product/update/:id", updateProduct);
router.delete("/product/delete/:id", deleteProduct);

module.exports = router;

