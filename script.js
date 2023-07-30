var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function ownGradient() {
  body.style.background =
    "linear-gradient(to right," + color1.value + "," + color2.value + ")";
  css.textContent = body.style.background + ";";
}

color1.addEventListener("input", ownGradient);
color2.addEventListener("input", ownGradient);

function passwordVerify(pass) {
  console.log("This is", pass ? "your account" : "not your account");
}
function chooseCorrect(correct) {
  switch (correct) {
    case "forward":
      console.log("Go to looshi home");
      break;
    case "backward":
      console.log("go to college");
      break;
    case "right":
      console.log("go to dharampuri");
      break;
    case "left":
      console.log("go to harur");
      break;
    default:
      console.log("enter valid option");
      break;
  }
}
const obj = {
  player: "bobby",
  experience: 100,
  wizardLevel: false,
};
const { player, experience } = obj;
