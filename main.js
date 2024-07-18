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
}, 90);

/* Cursor tracker */
document.addEventListener("mousemove", function (e) {
  const tracker = document.getElementById("cursor-tracker");
  const trackerSize = tracker.offsetWidth / 2;
  tracker.style.transform = `translate(${e.clientX - trackerSize}px, ${
    e.clientY - trackerSize
  }px)`;
});
/* Cursor tracker */

/* menu burger et dark mode */
// var element = document.getElementById("navlink");
// var darky = document.getElementById("container");

// function openmenu() {
//   element.classList.toggle("open");
// }

// function opendark() {
//   darky.classList.toggle("darkmode");
// }

// Typewriting effect

// hoverbutton effect
// let btn = document.querySelector(".mouse-cursor-gradient-tracking");
// btn.addEventListener("mousemove", (e) => {
//   let rect = e.target.getBoundingClientRect();
//   let x = e.clientX - rect.left;
//   let y = e.clientY - rect.top;
//   btn.style.setProperty("--x", x + "px");
//   btn.style.setProperty("--y", y + "px");
// });
// hoverbutton effect
