// everything inside js is an Object
// this always points to the object ❌

// -------------
// how many type of this -> 5
// -------------

// ----------Important -----------------
// this depends on how it is being called upon
// -------------------------------------

// 1. Function invocation
// 2. Method invocation
// 3. Constructor invocation
// 4. Indirect calling (call,bind,apply)
// 5. arrow function

// -------------------------------------
// Window is a global object which is created everytime js code is run

// ------------------
// 1. Direct functional invocation -> Always point to the window object

// function sam() {
//   console.log(this);
// }
// sam(); //window

// -------------------

// 2. Method Invocation

// let obj = {
//   a: 10,
//   b: 30,
//   fn: function () {
//     console.log(this);
//   },
// };

// obj.fn();

// Example 1
// let obj = {
//     a: 10,
//     b: 30,
//     fn: function () {
//       console.log(this);
//     },
//   };

//   obj.fn();

// Example 2
// let obj = {
//   a: 10,
//   b: 30,
//   fn: function () {
//     console.log(this); // object
//     let a = function () {
//       console.log(this); // window
//     };
//     a(); //direct
//   },
// };

// obj.fn(); //in object

// Example 3

// let obj = {
//   naam: "Ashish",
//   umar: 25,
//   fn: function () {
//     console.log(this);
//   },
// };

// let ans = obj.fn;
// ans(); //window

// -------------------

// 3. Constructor Invocation -> Always points to the newly created object

function Sam(dog, umar) {
  this.naam = dog;
  this.naam = umar;
}

let person1 = new Sam("mavrick", 2);
let person2 = new Sam("bruno", 2);
console.log(person1);
console.log(person2);
