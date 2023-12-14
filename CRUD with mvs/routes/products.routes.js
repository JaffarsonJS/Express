const express = require('express');

const {
    addProducts,
    getProducts,
    getSingleProduct,
    updateProduct,
    deleteProduct
} = require('../controller/products.controller')

let router = express.Router()

router.post("/addproduct",addProducts)
router.get("/getproducts",getProducts)
router.get("/getsingleproduct/:id",getSingleProduct)
router.put("/updateproduct",updateProduct)
router.delete("/deleteproduct",deleteProduct)