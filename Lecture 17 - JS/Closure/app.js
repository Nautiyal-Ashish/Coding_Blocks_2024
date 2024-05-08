// Closure
// -> A function is never returned alone , a function always returned with its lexical scope.

//outer fn made
// function outer() {
//   let a = 10;
//inner fn made
//   function inner() {
//     console.log("I am the inner function");
//     console.log(a); //here should be a error but because of closure it prints 10
//   }
//   return inner; // higher order function
// }

// let d = outer(); // outer function is in d variable
// d(); // d variable is called as function

// ------------------------------

// function outer() {
//   let a = 10;
//   let b = 20; //will not go to closure because dependent variable is not present in inner function like a.
//   function inner() {
//     console.log("I am inner function");
//     console.log(a);
//   }
//   return inner;
// }

// let d = outer();
// d();

// -----------------------------

// let a = 10;
// function outer() {
//   let b = 20;
//   function inner() {
//     console.log("I am inner function");
//     console.log(a); //will print 10 because of lexical scoping and closure
//     console.log(b); //will print 10 because of lexical scoping and closure
//   }
//   return inner;
// }

// let d = outer();
// d();

// ---------------------------
// use of closure -> privatisation of methods

// function counter() {
//   let count = 0;
//   return {
//     getCount: function () {
//       console.log(count);
//     },
//     increment: function () {
//       count++;
//     },
//     decrement: function () {
//       count--;
//     },
//     reset: function () {
//       count = 0;
//     },
//   };
// }

// let out = counter();
// console.log(out); // Prints the whole function counter

// // ---------------
// // Incrementing and grtting Output
// out.increment(); // Increament to  1
// out.increment(); // Increament to  2
// out.increment(); // Increament to  3
// out.getCount(); // function made for print

// // ---------------
// // Decrementing and getting Output
// out.decrement(); // Decrement from 3 to 2
// out.getCount(); // function made for print
// // ---------------
// // Resetting all the values
// out.reset(); //all value reset to 0
// out.getCount(); // function made for print
// // ---------------
// // console.log(count) //error
