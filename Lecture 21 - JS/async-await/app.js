// -------------
// async function helloBhaiya() {
//   return 10;
// }

// console.log(helloBhaiya);
// // ----------
// helloBhaiya().then(function (d) {
//     console.log(d);
// });
// -------------

// async function sam(a) {
//   console.log(10);
//   let ans = await a; //-> await= wait untill the job gets done | cannot use without async

//   console.log(20);
//   console.log(ans);
// }

// sam(10, 20, 30);

// ------------------

// async function a() {
//   let out = await fetch("https://api.tvmaze.com/search/shows?q=girls");
//   console.log("start");
//   console.log(out);
//   console.log("end");
// }

// function b() {
//   console.log(10);
//   console.log(20);
// }

// a();
// b();

// ------------------

// async function a() {
//   console.log("start");
//   console.log(out); //uncaught error
//   let out = await fetch("https://api.tvmaze.com/search/shows?q=girls");
//   console.log("end");
// }

// function b() {
//   console.log(10);
//   console.log(20);
// }

// a();
// b();

// ------------------
// async function a() {
//   console.log("start");
//   console.log(out);
//   let out = await fetch("https://api.tvmaze.com/search/shows?q=girls");
//   console.log(out);
//   console.log("end");
// }

// function b() {
//   console.log(10);
//   console.log(20);
// }

// a();
// b();

// ---------------
// async function a() {
//   console.log("start");
//   console.log(out);
//   let out = await fetch("https://api.tvmaze.com/search/shows?q=girls");
//   console.log(out);
//   console.log("end");
// }

// async function b() {
//   console.log(10);
//   console.log(20);
// }

// a();
// b();
// -------------------

// async function a() {
//   console.log("start"); //1st
//   let out = await fetch("https://api.tvmaze.com/search/shows?q=girls");
//   console.log(out); //5th
//   console.log("end"); //6th
// }

// async function b() {
//   console.log(10); //3rd
//   await fetch("https://api.tvmaze.com/search/shows?q=girls");
//   console.log(20); //7th
// }

// a();
// console.log(1000); //2nd
// b();
// console.log(2000); //4th

// ---------------------

async function a() {
  console.log("start"); //1st
  let out = await fetch("https://api.tvmaze.com/search/shows?q=girls");
  console.log(out); //6th
  console.log("end"); //7th
}

async function b() {
  console.log(10); //3rd
  fetch("https://api.tvmaze.com/search/shows?q=girls");
  console.log(20); //4th
}

a();
console.log(1000); //2nd
b();
console.log(2000); //5th

// -----------------------