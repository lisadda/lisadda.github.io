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
  if (tracker) {
    const trackerSize = tracker.offsetWidth / 2;
    tracker.style.transform = `translate(${e.clientX - trackerSize}px, ${e.clientY - trackerSize}px)`;
  }
});


// Menu Burger //
const burgerMenu = document.getElementById('burgerMenu');
const closeBtn = document.getElementById('closeBtn');
const navMenu = document.getElementById('navMenu');
const body = document.body;

burgerMenu.addEventListener('click', () => {
  navMenu.classList.add('open');
  body.classList.add('menu-open'); // Désactiver le scrolling du body
});

closeBtn.addEventListener('click', () => {
  navMenu.classList.remove('open');
  body.classList.remove('menu-open'); // Réactiver le scrolling du body
});









