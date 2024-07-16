const express = require('express');
const Product = require('../models/Product');
// we cannot use app here as app is a global instance and it can only be used once in the main app.js file , we also can't export app from app.js it is not allowed but we can use mini instance or a part of app ehich is router
const router = express.Router(); //mini instance 




router.get('/products', async (req, res) => {
    let products = await Product.find({})
    res.render('products/index', { products });
})




module.exports = router;