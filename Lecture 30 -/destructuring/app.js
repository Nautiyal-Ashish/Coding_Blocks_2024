let fruits = ["apple", "mango", "papaya", "orange"];

// Older way
// console.log(fruits[1]);

// Newer Way -> destructre

// ---------------------------
// destructure array

// let [a, b, c, d] = fruits;
// console.log(a, b, c, d);

// more parameters
// let [a, b, c, d, e] = fruits;
// console.log(a, b, c, d, e);

// less parameters
// let [a, b, c] = fruits;
// console.log(a, b, c);

// Default Parameter
// let [a, b, c = "grapes", d] = fruits;
// console.log(a, b, c, d);

// ---------------------------
// destructure object

let car = {
  name: "grapes",
  price: 150,
  taste: "sweet",
};

// Older way
// console.log(car.name);

// newer -> destructure -> same name of key required

// let { name, price } = car;
// console.log(name);
// console.log(price);

// let { name: Naam, price } = car;
// console.log(Naam);
// console.log(price);

// Default parameter
let { name: Naam, price, taste = "sour" } = car;
console.log(Naam);
console.log(price);
console.log(taste);
