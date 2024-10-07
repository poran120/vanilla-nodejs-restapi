const Product = require("../models/productModel");
// @desc Get All Products
// Route: GET /api/products
async function getProducts(req, res) {
  try {
    const products = await Product.findAll();
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(products));
  } catch (error) {
    console.log(error);
  }
}

// @ desc Get Product
// Route: GET /api/products/id
async function getProduct(req, res, id) {
  try {
    const product = await Product.findById(id);
    if (!product) {
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "Product Not Found!!" }));
    } else {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(product));
    }
  } catch (error) {
    console.log(error);
    res.writeHead(500, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({ message: "Server Error!!", error: error.message })
    );
  }
}

// @ desc Create Product
// Route: POST /api/products
async function createProduct(req, res) {
  try {
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  getProducts,
  getProduct,
};
