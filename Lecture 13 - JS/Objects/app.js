// Objects

// Everything inside javascript is an Object.
// Objects -> 1. Data structre
//            2. Non Linear

// Objects are combination of properties
// Properties -> Collection of key and value pair.

// Syntax
// let object_name = {
//  Key : value,
//  Key : value
// }

// -------------------------------

// let person = {
//   name: "Ashish",
//   age: 18,
//   favColor: "Orange",
//   salary: 1000000,
//   isMarried: "No",
// };

// console.log(person);

// -------------------------------
// Accessing a property -> By dot(.) operator

// console.log(person.name);

// -------------------------------
// Accessing by index on the basis of array

// console.log(person[name]); //❌wrong

// First typecasted into string and then printed

// console.log(person["name"]);

// --------------------------------------------
// --------------------------------------------
// Change the property value
let person = {
  name: "Ashish",
  age: 18,
  favColor: "Orange",
  salary: 1000000,
};

console.log(person); // Not changed

person.age = 20;

// console.log(person); // Changed

// ----------------------------------

// Adding New Property

person.isMarried = false;

// console.log(person);

// ---------------------------------

// Delete a Property
delete person.isMarried;
// console.log(person);

// ---------------------------------
// Freezing the objects to never allow to change anything in it

Object.freeze(person); //method

// ------------------------------------------------
// ------------------------------------------------
