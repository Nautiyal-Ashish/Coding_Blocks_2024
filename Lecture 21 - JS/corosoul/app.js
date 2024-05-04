// Ques : Create a corosoul ->  assuming 5 pics
// 1st photo -> after 2sec image change -> repeat for all pics -> at last to 1st step
// if above is done then add after 30 sec automatically process should stop
// Use only JS and DOM

// Get all slide images
const slides = document.querySelectorAll(".slide");

let currentIndex = 0;
const intervalTime = 2000; // Change image every 2 seconds
const totalSlides = slides.length;
let timer = setInterval(nextSlide, intervalTime);
let totalTime = 0;
const totalTimeLimit = 30000; // Stop after 30 seconds

function nextSlide() {
  slides[currentIndex].style.display = "none";
  currentIndex = (currentIndex + 1) % totalSlides;
  slides[currentIndex].style.display = "block";
  totalTime += intervalTime;
  if (totalTime >= totalTimeLimit) {
    clearInterval(timer);
  }
}
