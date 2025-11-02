const playButton = document.getElementById("play-button");
const stopButton = document.getElementById("stop-button");
const resetButton = document.getElementById("reset-button");
const safeTimer = document.getElementById("timer");

let seconds = 0;
let minutes = 0;
let hours = 0;

playButton.addEventListener("click", () => {
  console.log("playbuttonclicked");
  startTimer();
});

stopButton.addEventListener("click", () => {
  console.log("playbuttonclicked");
  stopTimer();
});

function startTimer() {
  var timer = setInterval(() => {
    safeTimer.innerHTML = "00:00:" + seconds;
    seconds++;
  }, 1000);
}

function stopTimer() {}
