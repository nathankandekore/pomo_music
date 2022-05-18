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

// CURRENT PROBLEMS:

// buttons interupt timer if clicked during sequence

// music player to do
// write api request for fetch folder
//play function to play music from api data

// let musicObject = {
//   1: "https://www.learningcontainer.com/wp-content/uploads/2020/02/Kalimba.mp3"
// }
