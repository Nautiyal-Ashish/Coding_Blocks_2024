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

app.get('/blogs', async (req, res) => {
    let allBlogs = await Blog.find();
    res.send(allBlogs);
})

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Server Connected at Port :${PORT}`);
})
