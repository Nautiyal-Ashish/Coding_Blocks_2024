// let arr1 = [10, 20, 30, 40];
// let arr2 = [50, 60, 70];

// // Older Way
// let ans = arr1.concat(arr2);
// console.log(ans);

// ---------------
// New Syntax ->  Spread Operator -> ... -> objects,array

// [10, 20, 30, 40] => 10 20 30 40
// {l,m,n} => l m n

// ----------
// Array
let arr1 = [10, 20, 30, 40];
let arr2 = [50, 60, 70];
let ans = [...arr1, ...arr2]; //spread an array
console.log(ans);

// -------------
// Object

let obj1 = {
  a: 10,
  b: 20,
  c: 30,
};

let obj2 = {
  ...obj1, //spread an object
  d: 40,
};

console.log(obj2);
