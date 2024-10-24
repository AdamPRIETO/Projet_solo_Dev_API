const Product = require("./ProductModel");

const createProduct = async (req, res) => {
    try {
        const product = new Product({
            ...req.body,
        });
  
        await product.save();
  
        res.status(201).send(product);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
};

const getProduct = async (req, res) => {
    try {
        const product = await Product.find().populate(
            "nom marque prix description quantite"
        );
  
        res.status(200).send(product);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
};

const updateProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
            }
        );
        if (!product) {
            return res.status(404).send({ error: "produit introuvable" });
        }
        res.status(200).send(product);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
};

const deleteProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        if (!product) {
            return res.status(404).send({ error: "produit introuvable" });
        }
        res.status(200).send("produit supprimée avec succès");
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
};

module.exports = { createProduct, getProduct, updateProduct, deleteProduct };


