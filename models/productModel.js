const products = require("../data/products");

function findAll() {
  return new Promise((resovle, reject) => {
    resovle(products);
  });
}
function findById(id) {
  return new Promise((resovle, reject) => {
    const product = products.find((p) => p.id === id);
    resovle(product);
  });
}

module.exports = {
  findAll,
  findById,
};
