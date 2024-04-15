// Loops

// for loop -> 1-5 number print

let n = 5;
// for (let i = 1; i < n; i++) {
//   console.log(i);
// }

// While loop -> same example
// let i = 1;
// while (i <= n) {
//   console.log(i);
//   i++;
// }

// for of loop -> alterable items (array)

// array
let arr = [10, 20, 30, 40, 50];
// i will point to each element one by one
for (let i of arr) {
  console.log(i);
}

// for in loop -> objects
// item points to the index of each element
let obj = {
  a: 100,
  b: 200,
  c: 300,
  d: 400,
};

for (let item in obj) {
  //   console.log(item);
    console.log(obj[item]); //keys accesed by array
}
