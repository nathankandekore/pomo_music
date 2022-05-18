// timer functionsallity for buttons
// fetch Api from spotify
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

function resetTimer() {
  seconds == 0;
}

// DISPLAY

// const displayMins = Math.floor(seconds / 60);
// const displaySecs = seconds % 60;

// what if you stingified the value of this calculation??

// function displayTimer() {
//   clock.innerText = `${Math.floor(seconds / 60)} : ${seconds % 60}`;
// }

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
    seconds = 900;
    displayTimer();
  });

const pomodoroBtn = document
  .getElementById("pomodoro-break-btn")
  .addEventListener("click", () => {
    seconds = 1500;
    displayTimer();
  });

const startBtn = document
  .getElementById("start-btn")
  .addEventListener("click", () => {
    console.log("start clicked");
    startTimer();
  });

const resetBtn = document
  .getElementById("reset-btn")
  .addEventListener("click", () => {
    console.log("reset clicked");
    // how do you go back to last timer?
    clearInterval(timeout);
    resetTimer();
    displayTimer();
  });

// CURRENT PROBLEMS:
// reset button wont work
// buttons interupt timer if clicked during sequence
// single digit numbers not padded

// possible solutions:
// have one button 2 classes for reset and start
// different functionality for different classes

// music player to do
// write api request for fetch folder
//play function to play music from api data

console.log(seconds.toString());
