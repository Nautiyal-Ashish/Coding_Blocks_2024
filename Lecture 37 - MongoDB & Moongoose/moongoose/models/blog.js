const mongoose = require("mongoose");

// instead of destructuring {Schema} using moongoose.Schema
// schema always accepts an object
let blogSchema = new mongoose.Schema({
    title: {
        type: String,
        trim: true,
        required: true
    },
    author: {
        type: String,
        trim: true,
        required: true
    },
    comment: {
        type: String,
        trim: true,
    },
});

// Creating a model
const Blog = mongoose.model('Blog', blogSchema)
module.exports = Blog;