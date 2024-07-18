const mongoose = require('mongoose');
const Review = require('./Review');
// const product = require('../routes/product')
// making product schema 
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    img: {
        type: String,
        trim: true,
        // default: 
    },
    price: {
        type: Number,
        min: 0,
        required: true
    },
    desc: {
        type: String,
        trim: true
    },
    reviews: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Review'
        }
    ]
})

// middleware behind the scene mongodb operations karawane par use hota hai and iske andar pre and post middleware hote hai which are used over the schema and before the model is js class
productSchema.post('findOneAndDelete', async (product) => {
    if (product.reviews.length > 0) {
        await Review.deleteMany({ _id: { $in: product.reviews } })
    }
})



// making model
let Product = mongoose.model('Product', productSchema);


// exporting this model to use it in another pages 
module.exports = Product;