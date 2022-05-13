// timer functionsallity for buttons
// fetch Api from spotify
const message = document.getElementById("message");
let clock = document.getElementById("stopwatch");

const startBtn = document
  .getElementById("start-btn")
  .addEventListener("click", () => {
    decrement();
  });

const resetBtn = document
  .getElementById("reset-btn")
  .addEventListener("click", () => {
    reset();
  });

const decrement = function () {
  let min = 24;
  let sec = 59;

  if (sec > 0 && sec < 60) {
    setInterval(() => {
      sec--;
      if (sec == 0) {
        min--;
        sec = 59;
      }
      if (sec == 0 && min == 0) {
        message.innerHTML = `TAKE A BREAK!!`;
      }

      console.log(min, sec);
      clock.innerHTML = `${min}:${sec}`;
    }, 1000);
  }
};

const testName = function () {
  console.log("test");
};

const reset = function () {
  clearInterval();
  let min = 25;
  let sec = 00;
  clock.innerHTML = `${min}:${sec}`;
};

//reset the clock when rest button is clicked
//"alarm when time reaches 0:00"

//set the clock for 25mins pomodoro
//set the clock for 5mins short
//set the clock for 15mins long
//get the single number to show as 2 digits
