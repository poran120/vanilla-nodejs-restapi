const http = require("http");
const { URL } = require("url");

const {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  getProductByName,
  deleteProduct,
} = require("./controllers/productController");
const PORT = 5000;

const server = http.createServer((req, res) => {
  if (req.url === "/api/products" && req.method === "GET") {
    getProducts(req, res);
  } else if (
    req.url.match(/\/api\/products\/([0-9]+)/) &&
    req.method === "GET"
  ) {
    const id = parseInt(req.url.split("/")[3]);
    getProduct(req, res, id);
  } else if (req.url.startsWith("/api/products?") && req.method === "GET") {
    const parsedUrl = new URL(req.url, `http://${req.headers.host}`);
    const productName = parsedUrl.searchParams.get("name");
    if (productName) {
      getProductByName(req, res, productName);
    } else {
      res.writeHead(400, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "Product's Not Found." }));
    }
  } else if (req.url === "/api/products" && req.method === "POST") {
    createProduct(req, res);
  } else if (
    req.url.match(/\/api\/products\/([0-9]+)/) &&
    req.method === "PUT"
  ) {
    const id = parseInt(req.url.split("/")[3]);
    updateProduct(req, res, id);
  } else if (
    req.url.match(/\/api\/products\/([0-9]+)/) &&
    req.method === "DELETE"
  ) {
    const id = parseInt(req.url.split("/")[3]);
    deleteProduct(req, res, id);
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Route Doesn't Exits!!" }));
  }
});

server.listen(PORT, () => {
  console.log(`Server running on ${PORT}...`);
});
