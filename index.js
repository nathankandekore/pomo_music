// VARIABLES

const message = document.getElementById("message");
let clock = document.getElementById("stopwatch");
let seconds = 1500;
let timeout;

// START/STOP TIMER

function startTimer() {
  timeout = setInterval(() => {
    seconds--;
    console.log(seconds);
    displayTimer();
  }, 1000);
}

// DISPLAY

function displayTimer() {
  let min = Math.floor(seconds / 60);
  let sec = seconds % 60;
  clock.innerText = `${min.toString().padStart(2, "0")} : ${sec
    .toString()
    .padStart(2, "0")}`;
}

// BUTTONS

const shortBtn = document
  .getElementById("short-break-btn")
  .addEventListener("click", () => {
    seconds = 300;
    displayTimer();
  });

const longBtn = document
  .getElementById("long-break-btn")
  .addEventListener("click", () => {
    seconds = 900;
    displayTimer();
  });

const pomodoroBtn = document
  .getElementById("pomodoro-break-btn")
  .addEventListener("click", () => {
    seconds = 1500;
    displayTimer();
  });

const startBtn = document.getElementById("start-btn");
startBtn.addEventListener("click", () => {
  console.log("start clicked");
  startTimer();
});

const stopBtn = document.getElementById("stop-btn");
stopBtn.addEventListener("click", () => {
  clearInterval(timeout);
  console.log("timer paused");
});

fetch(
  "https://api.spotify.com/v1/tracks/6LBpGdlukUARutol7VgWIS?si=89f38a74c82246c6",
  {
    method: "GET",
    headers: {
      Authorization:
        "Bearer BQCtrOaCT4tkVq2dJi-CN0VDmLqMzf0vByzo_HwqZU31HZaJeh7HBis16l1Jg02j3Ol_oX4l7bR2ix97RVcmbRYk9KS_omEG1xOLzHeIO9cHpDGmVhpqI-sPzYLC76kQ30OwUuNCDF5Y6r4cYdohpmMb58Xc",
    },
  }
)
  .then((response) => response.json())
  .then((data) => console.log(data));

// CURRENT PROBLEMS:

// buttons interupt timer if clicked during sequence

// music player to do
// write api request for fetch folder
//play function to play music from api data
