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

function displayTimer() {
  clock.innerText = `${Math.floor(seconds / 60)} : ${seconds % 60}`;
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
    seconds == 0;
    displayTimer();
  });

// set state by initializing and adjusting variable eg pom, short, or long

// COUNTDOWN
// const decrement = function () {
//   setInterval(() => {
//     seconds--;
//   }, 1000);
//   if (seconds == 0) {
//     clock.innerText = "TAKE A BREAK";
//   }
// };

// NEW REST FUNCTION
// AMMEND ALL THE BUTTONS
// MUSIC PLAYER FUNCTIONALITY
