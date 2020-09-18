let teamoneShootButton = document.querySelector("#teamone-shoot-button");
let teamoneNumShots = document.querySelector("#teamone-numshots");
let teamoneNumGoals = document.querySelector("#teamone-numgoals");
teamoneShootButton.addEventListener("click", function () {
  teamoneNumShots.innerHTML++;
  if (Math.random() * 100 < 20) {
    teamoneNumGoals.innerHTML++;
  }
});

let teamtwoShootButton = document.querySelector("#teamtwo-shoot-button");
let teamtwoNumShots = document.querySelector("#teamtwo-numshots");
let teamtwoNumGoals = document.querySelector("#teamtwo-numgoals");
teamtwoShootButton.addEventListener("click", function () {
  teamtwoNumShots.innerHTML++;
  if (Math.random() * 100 < 20) {
    teamtwoNumGoals.innerHTML++;
  }
});

let reset = document.querySelector("#reset-button");
let numResets = document.querySelector("#num-resets");
let resetcontainer = document.querySelector("#reset-container");
let clear = document.querySelector(".clear");
reset.addEventListener("click", function () {
  numResets.innerHTML++;
  teamoneNumShots.innerHTML = 0;
  teamoneNumGoals.innerHTML = 0;
  teamtwoNumShots.innerHTML = 0;
  teamtwoNumGoals.innerHTML = 0;
});
