const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const Blog = require('./models/blog');


// Returns a promise 
mongoose.connect('mongodb://127.0.0.1:27017/badmos')
    .then(() => { console.log(`mongoose server Connected`); })
    .catch((err) => { console.log(`Error`, err); })


app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true })) //body parsing middleware

// Query = ? req.query

// Infinite Routing (params) req.params
// app.get('/ashish/:anything',()=>{})

// read
app.get('/blogs', async (req, res) => {
    let allBlogs = await Blog.find({});
    res.render('index', { allBlogs })
})

// form
app.get('/blog/new', (req, res) => {
    res.render('new')
})

// actually adding to db
app.post('/blogs', (req, res) => {
    console.log(req.body);
    res.send(req.body)
})

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Server Connected at Port : ${PORT}`);
})
