const express = require('express');
const Product = require('../models/Product');
const Review = require('../models/Review');
// we cannot use app here as app is a global instance and it can only be used once in the main app.js file , we also can't export app from app.js it is not allowed but we can use mini instance or a part of app ehich is router
const router = express.Router(); //mini instance 


// to show all the products 
router.get('/products', async (req, res) => {
    let products = await Product.find({})
    res.render('products/index', { products });
})

// to show the form for new product 
router.get('/product/new', (req, res) => {
    res.render('products/new');
})

// to actually add the product in the products page
router.post('/products', async (req, res) => {
    let { name, img, price, desc } = req.body;
    await Product.create({ name, img, price, desc })
    res.redirect('/products')
})

// to show a particular product 
router.get('/products/:id', async (req, res) => {
    let { id } = req.params;
    let foundProduct = await Product.findById(id).populate('reviews')
    res.render('products/show', { foundProduct })
})

// form to edit the product 
router.get('/products/:id/edit', async (req, res) => {
    let { id } = req.params;
    let foundProduct = await Product.findById(id);
    res.render('products/edit', { foundProduct })
})

// to actually edit the data in the db 
router.patch('/products/:id', async (req, res) => {
    let { id } = req.params;
    let { name, img, price, desc } = req.body;
    await Product.findByIdAndUpdate(id, { name, img, price, desc });
    res.redirect(`/products/${id}`);
})

// to delete a product 
router.delete('/products/:id', async (req, res) => {
    let { id } = req.params;
    let { name, img, price, desc } = req.body;

    // this code is for when deleting the product we have to delete the reviews of that product also.
    // Note review pehle delte karna hai
    const product = await Product.findById(id);
    // this below can also written in schema (check)
    // for (let id of product.reviews) {
    //     await Review.findByIdAndDelete(id);
    // }

    await Product.findByIdAndDelete(id);
    res.redirect(`/products`);
})

module.exports = router;