// Very Very Important

// let arr = [10, 20, 30, 40, 50];

// 1. For Each -> forEach() -> Hof Method -> accepts a callback funtion -> 2 arguments (item , index) -> it does not return anything
// let ans = arr.forEach(function (item, index) {
//   console.log(item, index);
// });

// console.log(ans); //undefined because forEach does not return anything

// ---------------------------------
// 2. map() -> Array Method -> accepts a callback funtion -> 2 arguments (item , index) -> it returns a new array (with the same length as initial array)
// arr.map();

// let arr = [10, 20, 30, 40, 50];

// let newArray = arr.map(function (item, index) {
//   return item + item;
// });

// console.log(arr);
// console.log(newArray);

// 3. filter() => arr.filter() =>  accepts a callback funtion -> 2 arguments (item , index) -> it returns a new array (with no length restriction) -> Only return truthy values

// let arr = [10, 20, 30, 40, 50];

// let newFilterArray = arr.filter(function (item, index) {
//   if (item > 10) {
//     return true;
//   }
// });

// console.log(arr);
// console.log(newFilterArray);

// -------------------------
// 4. find() -> returns item in the first time only
let arr = [10, 20, 30, 40, 30, 50];

let retItem = arr.find(function (item, index) {
  if (item === 30) {
    return item;
  }
});

console.log(retItem);

// Reduce Homework
