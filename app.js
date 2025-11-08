const playButton = document.getElementById("play-button");
const stopButton = document.getElementById("stop-button");
const resetButton = document.getElementById("reset-button");
const safeTimer = document.getElementById("timer");

let seconds = 0;
let minutes = 0;
let hours = 0;
let isRunning = false;
let timer;
const TARGET_HOURS = 10000;
const TARGET_SECONDS = TARGET_HOURS * 3600;

playButton.addEventListener("click", () => {
  console.log("playbuttonclicked");
  startTimer();
});

stopButton.addEventListener("click", () => {
  console.log("stopbuttonclicked");
  stopTimer();
});

resetButton.addEventListener("click", () => {
  console.log("resetbuttonclicked");
  resetTimer();
});

function startTimer() {
  if (!isRunning) {
    console.log(isRunning);
    timer = setInterval(() => {
      if (seconds >= 10) {
        safeTimer.innerHTML = "00000:00:" + seconds;
      } else {
        safeTimer.innerHTML = "00000:00:0" + seconds;
      }
      seconds++;
    }, 1000);
    isRunning = true;
  }
}

function stopTimer() {
  clearInterval(timer);
  isRunning = false;
}

function resetTimer() {
  clearInterval(timer);
  isRunning = false;
  safeTimer.innerHTML = "0000:00:00";
}
