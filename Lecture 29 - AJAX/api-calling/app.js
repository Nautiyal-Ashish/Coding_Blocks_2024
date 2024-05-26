// 1st way to call api - Oldest Way

// const request = new XMLHttpRequest();
// // console.log(request);

// // GET - Retrive the data
// // POST - Sending the data
// request.open("GET", "https://api.tvmaze.com/search/shows?q=batman");
// request.send();

// // console.log(request);

// request.onload = function (response) {
//   console.log(this, "load");
// };
// request.onerror = function (response) {
//   console.log(this, "error");
// };

// ------------------------------
// 2nd Way - fetch -> web api -> returns promise

// By Default - GET

// fetch when call the api a chunk of data is returned but not all the data

// .json also returns a promise - kaam hai data ko json main convert karna aur saare ke saare data ke ane ka intezaar karega

// this is a interview ques

// let response = fetch("https://api.tvmaze.com/search/shows?q=batman");

// response.then(function (data) {
//   console.log(data); //not full data
//   console.log(data.json()); //full data
// });

// console.log(response);

// ----------------------

// let response = fetch("https://api.tvmaze.com/search/shows?q=batman")
//   .then(function (data) {
//     return data.json(); //return a promise
//   })
//   .then(function (finaldata) {
//     console.log(finaldata);
//   })
//   .catch(function (err) {
//     console.log("Error :", err);
//   });

// -----------------------------------------
// 3rd Method - Axios - Third Party Library
// This also return promise

let axiosRequest = axios
  .get("https://api.tvmaze.com/search/shows?q=batman")
  .then(function (response) {
    console.log(response.data); //ek baari me sara data
  })
  .cathc(function (err) {
    console.log("Error", err);
  });
