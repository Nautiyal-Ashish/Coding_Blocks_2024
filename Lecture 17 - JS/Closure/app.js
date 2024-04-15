// Closure
// -> A function is never returned alone , a function always returned with its lexical scope.

// function outer() {
//   //outer fn made

//   let a = 10;
//   function inner() {
//     //inner fn made

//     console.log("main hun gian");
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
//     console.log("main hun gian");
//     console.log(a);
//   }
//   return inner;
// }

// let d = outer();
// d();

// -----------------------------

// let a = 10;
// function outer() {
//   let b = 10;
//   function inner() {
//     console.log("main hun gian");
//     console.log(a); //will print 10 because of lexical scoping and closure
//     console.log(b); //will print 10 because of lexical scoping and closure
//   }
//   return inner;
// }

// let d = outer();
// d();

// ---------------------------
// use of closure -> privatisation of methods

function counter() {
  let count = 0;
  return {
    getCount: function () {
      console.log(count);
    },
    increment: function () {
      count++;
    },
    decrement: function () {
      count--;
    },
    reset: function () {
      count = 0;
    },
  };
}

let out = counter();
console.log(out);
out.increment();
out.increment();
out.increment();
out.getCount(); // function made for print
out.decrement();
out.getCount(); // function made for print
out.reset();
out.getCount(); // function made for print
// console.log(count) //error
