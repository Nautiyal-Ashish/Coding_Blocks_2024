// Object Methods

// ------------------------------------------------------

// When a function is inside a object it is called a method and we cannot access the method/function without the persmission of the object.

// If we want to access and run the function/method we have to run the function name given in the object.

// ------------------------------------------------------

// Creating a object and a method
let person = {
  naam: "Salman Khan",
  umar: 55,
  dance: function sallu() {
    console.log("Main hun dancer");
  },
};

// console.log(person.naam);
// console.log(person.umar);
// Different Output -> will not run the function  and output the defination
// console.log(person.dance);

// Running the function -> will work -> correct
// console.log(person.dance());

// will not work -> wrong
// console.log(person.sallu());

// will not work -> wrong
// console.log(sallu());

// -------------------------------------
// -------------------------------------

// Creating a object and a method

// let marks = {
//   web: 100, //Property
//   dsa: 19, //Property
//   python: 50, //Property

//   total: function () {
//     //method
//     console.log(marks.web + marks.dsa + marks.python);
//     return marks.web + marks.dsa + marks.python;
//   },
// };
// // Output by method/function
// let output = marks.total();
// console.log(output);

// // Output by property
// let out = marks.web + marks.dsa + marks.python;
// console.log(out);

// ------------------------------------
// This keyword -> Only for understading

// this keyword points the object , inside which the function/method 
let marks = {
  web: 100,
  dsa: 19,
  python: 50,

  total: function () {
    console.log(this);
    return marks.web + marks.dsa + marks.python;
  },
};

let output = marks.total();
console.log(output);
