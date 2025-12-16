const { model } = require("mongoose");
const Product = require("../models/Product");



module.exports.createProduct = async (req, res) => {
  try {
    const { title, price, description } = req.body;

    const newProduct = new Product({
      title,
      price,
      description,
    });

    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);

  } catch (error) {
    console.error(error);
    res.status(400).json({
      message: "Failed to create product",
      error: error.message,
    });
  }
};


module.exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    console.error(error); // 👈 see full error in terminal
    res.status(500).json({
      message: "Server Error",
      error: error.message, // 👈 THIS
    });
  }
};
