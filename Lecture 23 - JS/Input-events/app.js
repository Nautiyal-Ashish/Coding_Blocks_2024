// let inputEl = document.querySelector("input");

// inputEl.addEventListener("change", function () {});//❌
// inputEl.addEventListener('onchange',function(){})//❌

// inputEl.addEventListener('input',function(){
//     console.log('I am input');
// })

// ---------------------
// e -> object -> whenever a event is triggered
// value -> only for input to take text from input -> getter or setter

let inputEl = document.querySelector("input");

inputEl.addEventListener("input", function (e) {
  //   console.log(e);
  //   console.log(e.target);
  console.log(e.target.value);
});

// --------------
