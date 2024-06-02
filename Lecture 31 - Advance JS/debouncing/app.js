// Part 1

// let input = document.querySelector('input')

// let callApi = function (e) {
//      console.log('API Called', e.target.value);
// }

// input.addEventListener('input', callApi)

// -----------------------------
// Part 2 

// let input = document.querySelector('input')

// let callApi = function (e) {
//      console.log('API Called', e.target.value);
// }

// // debounce -> 2 arguments (function,time)-> return a function
// let debounce = function (fn, wait) {
//      return (e) => {
//           console.log(e);
//           fn(e)
//      }
// }

// let debouncedValue = debounce(callApi, 2000);
// console.log(debouncedValue); //the arrow fn


// input.addEventListener('input', debouncedValue)

// ---------------
// Part-4 

let input = document.querySelector('input')

let callApi = function (e) {
     console.log('API Called', e.target.value);
}

// debounce -> 2 arguments (function,time)-> return a function
let debounce = function (fn, wait) {
     let idd = null;
     return (e) => {
          clearTimeout(idd)
          idd = setTimeout(() => {
               fn(e)
          }, wait)
     }
}

let debouncedValue = debounce(callApi, 2000);
console.log(debouncedValue); //the arrow fn

input.addEventListener('input', debouncedValue)