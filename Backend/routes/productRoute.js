const express = require("express");
const { getAllProducts } = require("../controllers/productController");
const router = express.Router();


// first route
router.route("/products").get(getAllProducts);

module.exports = router;