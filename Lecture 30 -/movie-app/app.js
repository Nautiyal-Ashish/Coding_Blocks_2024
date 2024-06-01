// https://api.tvmaze.com/search/shows?q=superman

let inpEl = document.querySelector("input");
let btn = document.querySelector("button");
let list = document.querySelector("#list");

btn.addEventListener("click", function () {
  let searchText = inpEl.value;
  let data = fetchData(searchText);
  input.value = "";
});

// By using fetch

// function fetchData(searchText) {
//   // api call
//   fetch(`https://api.tvmaze.com/search/shows?q=${searchText}`)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (finalData) {
//       //   console.log(finalData, "final");
//     });
// }

// // By using axios

function fetchData(searchText) {
  // api call
  axios
    .get(`https://api.tvmaze.com/search/shows?q=${searchText}`)
    .then(function (response) {
      //   console.log(response, "Searched Text");
      manipulateDom(response.data);
    });
}

function manipulateDom(datas) {
  while (list.firstChild) {
    list.firstChild.remove();
  }
  for (let item of datas) {
    let figure = document.createElement("figure");
    figure.innerHTML = `
    <img src="${item.show.image.medium}" alt="">
    <br>
    <h2>Name : ${item.show.name}</h2>
    <p>Language : ${item.show.language}</p>

    `;
    list.append(figure);
  }
}
