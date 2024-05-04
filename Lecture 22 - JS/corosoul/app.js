// Ques : Create a corosoul ->  assuming 5 pics
// 1st photo -> after 2sec image change -> repeat for all pics -> at last to 1st step
// if above is done then add after 30 sec automatically process should stop
// Use only JS and DOM

// Get all slide images
// const slides = document.querySelectorAll(".slide");

// let currentIndex = 0;
// const intervalTime = 2000; // Change image every 2 seconds
// const totalSlides = slides.length;
// let timer = setInterval(nextSlide, intervalTime);
// let totalTime = 0;
// const totalTimeLimit = 30000; // Stop after 30 seconds

// function nextSlide() {
//   slides[currentIndex].style.display = "none";
//   currentIndex = (currentIndex + 1) % totalSlides;
//   slides[currentIndex].style.display = "block";
//   totalTime += intervalTime;
//   if (totalTime >= totalTimeLimit) {
//     clearInterval(timer);
//   }
// }

let arr = [
  "https://images.pexels.com/photos/1938123/pexels-photo-1938123.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/1612551/pexels-photo-1612551.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/50577/hedgehog-animal-baby-cute-50577.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/1093126/pexels-photo-1093126.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/692071/pexels-photo-692071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
];

let num = 0;
let image = document.querySelector("img");

let id = setInterval(function () {
  image.setAttribute("src", arr[num]);
  num = [num + 1] % arr.length;
}, 2000);

setTimeout(function () {
  clearInterval(id);
}, 30000);

