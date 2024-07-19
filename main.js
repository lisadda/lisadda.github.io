// Global variables
let text = "Developpeuse Web Junior";
let index = 0;

// Typewriting effect
const typeWriter = setInterval(() => {
  document.querySelector("h3").textContent += text[index];

  index += 1;

  if (index > text.length - 1) {
    clearInterval(typeWriter);
  }
}, 140);

// Cursor tracker //
document.addEventListener("mousemove", function (e) {
  const tracker = document.getElementById("cursor-tracker");
  const trackerSize = tracker.offsetWidth / 2;
  tracker.style.transform = `translate(${e.clientX - trackerSize}px, ${
    e.clientY - trackerSize
  }px)`;
});
// Cursor tracker //

// $(".cards").on("click", function () {
//   $(".card1").toggleClass("flipped");
// });

//openmenu et dark mode//
// var element = document.getElementById("navlink");
// var darky = document.getElementById("container");

// element.addEventListener('click',openmenu) je ne le mets pas car j'ai deja mon onclick sur html

// function openmenu() {
//   element.classList.toggle("open");
// }

// function opendark() {
//   darky.classList.toggle("darkmode");
// }
//openmenu et dark mode//
