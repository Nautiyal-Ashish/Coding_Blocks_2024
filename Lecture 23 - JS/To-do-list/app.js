// selection
let ul = document.querySelector("ul");
let btn = document.querySelector("button");
let inputEl = document.querySelector("input");

// create

btn.addEventListener("click", function (e) {
  // adding li
  let li = document.createElement("li");
  li.innerText = inputEl.value;
  ul.appendChild(li);
  inputEl.value = "";
  //   removing li
  li.addEventListener("click", function () {
    li.remove();
  });
});
