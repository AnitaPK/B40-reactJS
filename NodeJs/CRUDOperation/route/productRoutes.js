const express = require("express");
const router = express.Router();
const productController = require('../controllers/productControllers')

data = [
  {
    ID: 1,
    productName: "Apple15",
    productCategory: "Electronic",
    price: 20000,
    Stock: 10,
  },
  {
    ID: 2,
    productName: "Apple15Pro",
    productCategory: "Electronic",
    price: 20000,
    Stock: 10,
  },
];
router.post("/", productController.addNewProduct);

router.get("/", productController.getAllProducts);

router.put("/:id", productController.updateProduct);

router.delete("/:id", productController.deleteProduct);

router.get('/searProd',productController.searchProduct)

module.exports = router;


