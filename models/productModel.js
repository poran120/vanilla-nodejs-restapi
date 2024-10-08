const products = require("../data/products");
const { v4: uuidv4 } = require("uuid");
const { writeDataToFile } = require("../utils/utils");

// @desc Get All Products
function findAll() {
  return new Promise((resovle, reject) => {
    resovle(products);
  });
}

// @desc Get Product by Id
function findById(id) {
  return new Promise((resovle, reject) => {
    const product = products.find((p) => p.id === id);
    resovle(product);
  });
}

// @desc Get Product filter by Name
function filterByName(name) {
  return new Promise((resovle, reject) => {
    const filteredProducts = products.filter((product) => {
      return product.name.toLowerCase().includes(name.toLowerCase());
    });
    resovle(filteredProducts);
  });
}

// @desc Create Product
function create(product) {
  return new Promise((resovle, reject) => {
    const newProduct = { id: uuidv4(), ...product };
    products.push(newProduct);
    writeDataToFile("./data/products.json", products);
    resovle(newProduct);
  });
}

// @desc Update Product
function update(id, product) {
  return new Promise((resolve, reject) => {
    const index = products.findIndex((p) => p.id === id);
    products[index] = { id, ...product };
    writeDataToFile("./data/products.json", products);
    resolve(products[index]);
  });
}

module.exports = {
  findAll,
  findById,
  create,
  update,
  filterByName,
};
