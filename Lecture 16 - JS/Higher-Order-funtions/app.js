// Higher Order function

// 1. HOF is a function which accepts some other function as an argument.

// function a(x) {
//   console.log(x);
//   x();
//   console.log("i am inside the a func");
// }

// function b() {
//   console.log("i am inside the a func");
// }

// a(10);
// a("sam");
// a(true);

// a(b); //this is HOF

// or (if one statement is there it is HOF)

// 2. HOF which can return the entire function as a returned value.

// function a() {
//   console.log("A");

// ------------
//   function b() {
//     console.log("B");
//   }
// ------------
//   return b; //this is HOF
// }

// let ret = a(); //this is HOF
// console.log(ret);
// ret();

// -----------------------------

// What are callback function ?
// Calling a function as argument but also  mandatory to call the function inside the other function is known as callback function.

// Jab b function ko argument ki tarah a function main dala to callback nhi banta.

// Jab b function ko a ke andar hi call bhi kare tab callback function hoga.

// function a(x) {
//   console.log(x);
//   x(); // Mandatory call // this is callback function
//   console.log("i am inside the a func");
// }

// function b() {
//   console.log("i am inside the a func");
// }

// a(b);

//
