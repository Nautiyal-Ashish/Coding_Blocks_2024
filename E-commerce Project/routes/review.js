const express = require('express');
const router = express.Router();
const Product = require('../models/Product');
const Review = require('../models/Review');



router.post('/products/:id/review', async (req, res) => {
    let { id } = req.params;
    let { rating, comment } = req.body;
    const product = await Product.findById(id);//finding product 
    const review = new Review({ rating, comment });

    product.reviews.push(review); //pushing review in the array reviews
    await review.save(); //db review saving
    await product.save(); //db product saving 
    res.redirect(`/products/${id}`)
})



module.exports = router;
