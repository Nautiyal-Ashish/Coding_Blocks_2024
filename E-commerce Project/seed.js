const mongoose = require('mongoose');
const Product = require('./models/Product');



const products = [
    {
        name: "Iphone 14Pro",
        img: "https://images.unsplash.com/photo-1663408466313-2d4e7edaf172?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGlwaG9uZSUyMDE0JTIwcHJvfGVufDB8fDB8fHww",
        price: 130000,
        desc: "Very Costly , aukaat se bhaar"
    },
    {
        name: "Macbook M2 Pro",
        img: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8TWFjYm9va3xlbnwwfHwwfHx8MA%3D%3D",
        price: 250000,
        desc: "Bilkul Aukkat se Bhar"
    },
    {
        name: "Apple Watch",
        img: "https://images.unsplash.com/photo-1551816230-ef5deaed4a26?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8QXBwbGUlMjBXYXRjaHxlbnwwfHwwfHx8MA%3D%3D",
        price: 34000,
        desc: "ye sasta hai lelo"
    },
    {
        name: "Ipad Pro",
        img: "https://images.unsplash.com/photo-1628591459313-a64214c5bfac?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGlwYWQlMjBwcm98ZW58MHx8MHx8fDA%3D",
        price: 80000,
        desc: "Ye show off ka item hai"
    },
    {
        name: "Airpods",
        img: "https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGFpcnBvZHN8ZW58MHx8MHx8fDA%3D",
        price: 25000,
        desc: "Badhiya hai kamao kamao"
    }
]


async function seedDB() {
    await Product.insertMany(products);
    console.log("Data Seeded Successfully");
}

module.exports = seedDB;