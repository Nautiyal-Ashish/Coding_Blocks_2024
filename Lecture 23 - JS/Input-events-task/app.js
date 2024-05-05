let inputElement = document.querySelector("input");
let heading = document.querySelector("h1");

inputElement.addEventListener("input", function (e) {
  let element = e.target.value;
  console.log(element);
  heading.innerHTML = element;
});

// --------------------