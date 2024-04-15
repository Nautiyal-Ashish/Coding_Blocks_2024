// Arrays are data structure which are linear are hetrogeneous in case of JS.

// let arr = [10, 20, 30, true, false, "sam", undefined, null];
// console.log(arr);

// 1-d array
// console.log(arr[3]);
// console.log(arr[5]);

// 2-d array

// let arr2 = [
//   10,
//   20,
//   [100, 200, [20001, 20002, 20003], 300],
//   null,
//   "sam",
//   "hello",
// ];
// Accessing 20002
// console.log(arr2[2][2][1]);

// Arrays Methods

let arr3 = [10, 20, 30, 40, 50];

// Push()

// let returnValue = arr3.push(80);
// console.log(arr3);
// console.log(returnValue);

// Multiple values push
// let returnValue = arr3.push(80,90);

// Pop() -> pop the last value always

// let returnValue = arr3.pop(80);
// let returnValue = arr3.pop();
// console.log(arr3);
// console.log(returnValue); //return the pop value

// shift() -> removing element from beginning
// let returnValue = arr3.shift();
// console.log(arr3);
// console.log(returnValue);

// unshift() -> multiple values can be added
let returnValue = arr3.unshift(100, 200);
console.log(arr3);
console.log(returnValue);
