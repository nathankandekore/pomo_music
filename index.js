// timer functionsallity for buttons
// fetch Api from spotify
const message = document.getElementById("message");
const shortBtn = document
  .getElementById("short-break-btn")
  .addEventListener("click", () => {
    seconds = 300;
    clock.innerText = `${Math.floor(seconds / 60)} : ${seconds % 60}`;
  });
const longBtn = document
  .getElementById("long-break-btn")
  .addEventListener("click", () => {
    seconds = 900;
    seconds = 900;
    clock.innerText = `${Math.floor(seconds / 60)} : ${seconds % 60}`;
  });
const pomodoroBtn = document
  .getElementById("pomodoro-break-btn")
  .addEventListener("click", () => {
    seconds = 1500;
    clock.innerText = `${Math.floor(seconds / 60)} : ${seconds % 60}`;
  });
const startBtn = document
  .getElementById("start-btn")
  .addEventListener("click", () => {
    console.log("start clicked");
  });
const resetBtn = document
  .getElementById("reset-btn")
  .addEventListener("click", () => {
    console.log("reset clicked");
    seconds = 1500;
    testFunc();
  });
let clock = document.getElementById("stopwatch");

let seconds = 2400;

// DISPLAY
const testFunc = function () {
  clock.innerText = `${Math.floor(seconds / 60)} : ${seconds % 60}`;
};

// testFunc();

// COUNTDOWN
// const decrement = function () {
//   setInterval(() => {
//     seconds--;
//   }, 1000);
//   if (seconds == 0) {
//     clock.innerText = "TAKE A BREAK";
//   }
// };

// BREAKS FUNCTIONS

// BUTTONS FUNCTIONS

// const startBtn = document
//   .getElementById("start-btn")
//   .addEventListener("click", () => {
//     decrement();
//   });

// const resetBtn = document
//   .getElementById("reset-btn")
//   .addEventListener("click", () => {
//     // reset();
//   });

// NEW REST FUNCTION
// AMMEND ALL THE BUTTONS
// MUSIC PLAYER FUNCTIONALITY

// const reset = function () {
//   clearInterval();
//   let min = 25;
//   let sec = 00;
//   clock.innerHTML = `${min}:${sec}`;
// };
