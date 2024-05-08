// let obj = {
//   a: 10,
//   b: function () {
//     console.log("Hello Bhai");
//   },
// };

// // obj.d(); // wrong
// obj.b();
// console.log(obj.a); //a
// console.log(obj.c); //undefined -> property
// console.log(obj.c()); // error -> methods/functions

// --------------------------

// let person = {
//   naam: 10,
//   petDialogue: function () {
//     console.log("chapri chai wala");
//   },
// };

// console.log(person.naam); //10
// console.log(person.kaam); //undefined
// person.hello(); //error
// person.string(); //will not work because of upper error beacause js run line by line

// console.log(person.toString()); //no error

// console.log(person);

// ------------------------------

// What are prototypes?
// -> fallback source

// let person = {
//   naam: 10,
//   petDialogue: function () {
//     console.log("aaj kal ke nalle berozgaar cbhappri");
//   },
// };

// console.log(person.naam); //10
// console.log(person.kaam); //undefined
// person.hello(); //error
// person.string(); //error
// // ------
// console.log(person.toString()); //[object object]

// console.log(person); // will run perfectly

// ------------

// let person = {
//   naam: 10,
//   petDialogue: function () {
//     console.log("aaj kal ke nalle berozgaar cbhappri");
//   },
// };
// let peeps = {
//   naam: 100,
//   petDialogue: function () {
//     console.log("hehehe aj kal ke nalle berozgaar cbhappri");
//   },
// };

// // dender proto -> pitaji value batane ke liye
// console.log(person); // will run the person function
// console.log(peeps); // will run the peeps function
// console.log(person.__proto__);
// console.log(peeps.__proto__);

// ------------

let arr = [10, 20, 40, 50];

// -------

let str = "samarth";
