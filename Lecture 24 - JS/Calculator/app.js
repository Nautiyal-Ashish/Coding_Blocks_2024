let btns = document.querySelectorAll("button");
let inputElement = document.querySelector("input");

for (let item of btns) {
  item.addEventListener("click", function (e) {
    let btnText = e.target.innerText;
    if (btnText === "AC") {
      inputElement.value = "";
    } else if (btnText === "=") {
      try {
        inputElement.value = eval(inputElement.value);
      } catch (error) {
        inputElement.value = "Invalid Input";
      }
    } else {
      inputElement.value += btnText;
    }
  });
}

// ----------------------
// KeyUp | Key Down | Which Value

// let inputElement = document.querySelector("input");

// inputElement.addEventListener("keydown", function (e) {
//   console.log(e);
// });

// inputElement.addEventListener("keyup", function (e) {
//   console.log(e);
// });
