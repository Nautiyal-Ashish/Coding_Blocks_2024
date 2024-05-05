let form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault(); //reload hone se rok dia
  // console.log(e.target);
//   console.log(e.target.elements);

  //   this is also correct
  //   console.log(e.target.children[0].value);
  //   console.log(e.target.children[1].value);

  //   we generally use elements in form
  console.log(e.target.elements[0].value);
  console.log(e.target.elements[1].value);
});

