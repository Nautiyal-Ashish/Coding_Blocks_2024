const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const seedDB = require('./seed');
const productRoutes = require('./routes/product')


// mongoose connection 
mongoose.connect('mongodb://127.0.0.1:27017/shopping-app')
    .then(() => { console.log('DB connected successfully') })
    .catch((err) => {
        console.log("DB Error");
        console.log(err);
    })




app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, 'views'));// views folder
app.use(express.static(path.join(__dirname, 'public')));// public folder 




// seeding database 
// seedDB() //do not comment again because data will duplicate (This is to run only once to add data in db)


app.use(productRoutes); // So that run after every incoming request 


// Server Connection 
app.listen(8080, () => {
    console.log("Server Connected at port 8080");
})
