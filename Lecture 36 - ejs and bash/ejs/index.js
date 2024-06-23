const express = require('express');
const app = express()
const path = require('path');

app.set('view engine', 'ejs')

// app.set(process.cwd(), '/views') ❌
// app.set(path.join(__dirname, 'views') ,'views') //✅
app.use(express.static(path.join(__dirname, 'public')));

// console.log(__dirname, '/views');
// middleware 
app.use('/admin', (req, res, next) => {
    console.log('I am the admin middleware');
    next();
})

//admin path
app.get('/admin', (req, res) => {
    // res.send('hi')
    // res.send('<h1>Hello admin </h1>')
    // res.status(200).render('admin')
    res.render('adminFolder/admin')
})

// admin/ash path
app.get('/admin/ash', (req, res) => {
    // res.send('hi')
    res.send('<h1>Hello admin/ash</h1>')
})

// Universal Route / path
app.get('*', (req, res) => {
    res.send('<h1>404 Not Found</h1>')
})

// listen on port
let PORT = 8080;
app.listen(PORT, () => {
    console.log(`Server connected at post : ${PORT}`);
})