const http = require("http");
const { getProducts, getProduct } = require("./controllers/productController");
const PORT = 5000;

const server = http.createServer((req, res) => {
  if (req.url === "/api/products" && req.method === "GET") {
    getProducts(req, res);
  } else if (req.url.match(/\/api\/products\/([0-9]+)/)) {
    const id = parseInt(req.url.split("/")[3]);
    getProduct(req, res, id);
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Route Doesn't Exits!!" }));
  }
});

server.listen(PORT, () => {
  console.log(`Server running on ${PORT}...`);
});
