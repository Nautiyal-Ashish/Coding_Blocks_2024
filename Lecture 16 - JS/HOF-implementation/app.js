// eg : Let arr = [10,20,true,30,"ashish",40,false,50]. Write some function and biffercate (alag karna ) numbers , boolean and string.

// Simple way
// function checkString(arr) {
//   let result = [];
//   for (let item of arr) {
//     if (typeof item === "string") {
//       result.push(item);
//     }
//   }

//   return result;
// }

// function checkNumber(arr) {
//   let result = [];
//   for (let item of arr) {
//     if (typeof item === "number") {
//       result.push(item);
//     }
//   }

//   return result;
// }

// function checkBoolean(arr) {
//   let result = [];
//   for (let item of arr) {
//     if (typeof item === "boolean") {
//       result.push(item);
//     }
//   }

//   return result;
// }

// let arr = [10, 20, true, "sam", "ashish", 40, false, 50, "adi", true];
// console.log(checkString(arr));
// console.log(checkNumber(arr));
// console.log(checkBoolean(arr));

// --------------------------------------
// Same Solution using hof

// checking function for string,number and boolean
function checkString(item) {
  //passed item in function argument
  return typeof item === "string";
}

function checkNumber(item) {
  return typeof item === "number";
}

function checkBoolean(item) {
  return typeof item === "boolean";
}

function check(arr, fn) {
  // passed arr and fn a function in check function
  let result = []; // taken a result empty array to store result
  for (let item of arr) {
    //for of loop
    if (fn(item)) {
      //In if condition passed fn and given argumnet item
      result.push(item); // pushed the item to result
    }
  }
  return result;
}

let arr = [10, 20, true, "sam", "ashish", 40, false, 50, "adi", true];

console.log(check(arr, checkString));
console.log(check(arr, checkNumber));
console.log(check(arr, checkBoolean));
