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
  tracker.style.transform = `translate(${e.clientX - trackerSize}px, ${e.clientY - trackerSize
    }px)`;
});

// Dark Mode //
document.getElementById('burgerMenu').addEventListener('click', function () {
  document.getElementById('navMenu').classList.add('open');
});

document.getElementById('closeBtn').addEventListener('click', function () {
  document.getElementById('navMenu').classList.remove('open');
});


