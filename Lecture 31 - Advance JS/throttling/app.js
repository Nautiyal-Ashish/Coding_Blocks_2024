// let inpEl = document.querySelector('input');
// let spanEl = document.querySelector('span');

// let callApi = function (e) {
//      console.log("Api Called", e.target.value);
// }

// inpEl.addEventListener('input', callApi)

// --------------------
// Part -2 

let inpEl = document.querySelector('input');
let spanEl = document.querySelector('span');

let callApi = function (e) {
     console.log("Api Called", e.target.value);
}

inpEl.addEventListener('input', throttling(callApi, 1000))

// throttling -> 2 arguments -> return function
// let throttling = (fn, wait = 2000)=> { //error intisilization
function throttling(fn, wait = 2000) {
     let idd = null;
     return (e) => {
          clearTimeout(idd)
          idd = setTimeout(() => { fn(e) }, wait)
     }
}

let updateNumber = throttling(() => {
     spanEl.innerText = ++spanEl.innerText
}, 1000)

document.addEventListener('mousemove', updateNumber)


// Extras - curring Function , event delegation