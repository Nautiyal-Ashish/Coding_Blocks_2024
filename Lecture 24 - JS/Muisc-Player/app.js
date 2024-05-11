let playSection = document.querySelector("#play-section");
let playBtn = document.querySelector("#play-btn");
let songList = document.querySelector("#song-list");
let progressBar = document.querySelector("#progress");

let songs = [
  {
    name: "song1",
    id: 0,
  },
  {
    name: "song2",
    id: 1,
  },
  {
    name: "song3",
    id: 2,
  },
  {
    name: "song4",
    id: 3,
  },
];

let audio = new Audio("./media/song1.mp3");

// display songs

for (let song of songs) {
  let li = document.createElement("li");
  li.innerText = song.name;
  li.setAttribute("id", song.id);
  songList.append(li);
}

// play pause

playBtn.addEventListener("click", function () {
  audio.paused ? audio.play() : audio.pause();
  if (playBtn.children[0].classList.contains("fa-play")) {
    playBtn.children[0].classList.remove("fa-play");
    playBtn.children[0].classList.add("fa-pause");
  } else {
    playBtn.children[0].classList.remove("fa-pause");
    playBtn.children[0].classList.add("fa-play");
  }
});

// time
// time update event
//  Range By Default - 1 to 100

audio.addEventListener("timeupdate", function () {
  let currentProgress = (audio.currentTime * 100) / audio.duration;
  progressBar.value = currentProgress;
});

// Input

progressBar.addEventListener("input", function () {
  let updateTime = (audio.duration * progressBar.value) / 100;
  audio.currentTime = updateTime;
});

// Choosing Song <-|->

songList.addEventListener("click", function (e) {
  let idd = e.target.getAttribute("id");
  audio.src = `./media/song${idd}.mp3`;
  audio.currentTime = 0;
  audio.play();
  playBtn.children[0].classList.remove("fa-play");
  playBtn.children[0].classList.add("fa-pause");
});
