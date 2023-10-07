// Defining array of images for each D6 face
let D6Faces = [
  "D6R1.svg",
  "D6R2.svg",
  "D6R3.svg",
  "D6R4.svg",
  "D6R5.svg",
  "D6R6.svg",
];

// Function that animates and calculates D6 rolls
function rollD6() {
  const D6Button = document.getElementById("D6Button");
  const isD6Disabled = D6Button.disabled;

  if (!isD6Disabled) {
    D6Button.disabled = true;
  }

  D6Button.classList.add("fade-out");
  D6.classList.add("shake");

  setTimeout(function () {
    D6.classList.remove("shake");
    let D6Value = Math.floor(Math.random() * 6);
    document.querySelector("#D6").setAttribute("src", D6Faces[D6Value]);
  }, 1000);
}

let D20Faces = [
  "D20R01.png",
  "D20R02.png",
  "D20R03.png",
  "D20R04.png",
  "D20R05.png",
  "D20R06.png",
  "D20R07.png",
  "D20R08.png",
  "D20R09.png",
  "D20R10.png",
  "D20R11.png",
  "D20R12.png",
  "D20R13.png",
  "D20R14.png",
  "D20R15.png",
  "D20R16.png",
  "D20R17.png",
  "D20R18.png",
  "D20R19.png",
  "D20R20.png",
];

function rollD20() {
  const D20Button = document.getElementById("D20Button");
  const isD20Disabled = D20Button.disabled;

  if (!isD20Disabled) {
    D20Button.disabled = true;
  }

  D20Button.classList.add("fade-out");
  D20.classList.add("shake");

  setTimeout(function () {
    D20.classList.remove("shake");
    let D20Value = Math.floor(Math.random() * 20);
    document.querySelector("#D20").setAttribute("src", D20Faces[D20Value]);
  }, 1000);
}

// Function to navigate to Mad Lib Answers
function navigateToAnswers() {
  window.location.href = "madlibsans.html";
}
