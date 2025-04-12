"use strict";

function convertMillisecondsToPercentage(givenMilliseconds, totalMilliseconds) {
  if (totalMilliseconds === 0) {
    throw new Error("Total milliseconds cannot be zero.");
  }

  return (givenMilliseconds / totalMilliseconds) * 100;
}

let startTime;
let endTime;

function startTimer() {
  startTime = new Date();
}

function stopTimer() {
  endTime = new Date();
  const duration = endTime - startTime;

  const givenMilliseconds = duration;
  const totalMilliseconds = 3000;

  const percentage = convertMillisecondsToPercentage(
    givenMilliseconds,
    totalMilliseconds
  );
  const punchMeBtn = document.getElementById("punchBtn");
  punchMeBtn.innerHTML = `Pressure ${percentage.toFixed(2)}%`;
  punchMeBtn.style.setProperty("--progress-width", `${percentage}%`);
  switch (true) {
    case percentage >= 0 && percentage < 25:
      punchMeBtn.style.background = `linear-gradient(to right, green ${percentage}%,white 0)`;
      break;
    case percentage >= 25 && percentage < 50:
      punchMeBtn.style.background = `linear-gradient(to right, yello ${percentage}%, white 0)`;
      break;
    case percentage >= 50 && percentage < 75:
      punchMeBtn.style.background = `linear-gradient(to right, orange ${percentage}%, white 0)`;
      break;
    case percentage >= 75 && percentage <= 100:
      punchMeBtn.style.background = `linear-gradient(to right, red ${percentage}%, white 0)`;
      break;
    default:
      punchMeBtn.style.background = `linear-gradient(to right, red ${percentage}%, white 0)`;
  }
}

document.addEventListener("mousedown", startTimer);
document.addEventListener("mouseup", stopTimer);
