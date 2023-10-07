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
  D6.classList.add("shake");
  setTimeout(function () {
    D6.classList.remove("shake");
    let D6Value = Math.floor(Math.random() * 6);
    document.querySelector("#D6").setAttribute("src", D6Faces[D6Value]);
  }, 1000);
}

// Tracks clicks of the D6 rolling button and calls rollD6()
const rollButton = document.querySelector("#D6Button");
rollButton.addEventListener("click", rollD6);

// Function to navigate to Mad Lib Answers
function navigateToAnswers() {
  window.location.href = "madlibsans.html";
}
