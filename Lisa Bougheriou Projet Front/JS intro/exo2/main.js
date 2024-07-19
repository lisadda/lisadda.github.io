var element = document.getElementById("navlink");
var darky = document.getElementById("container");

// element.addEventListener('click',openmenu) je ne le mets pas car j'ai deja mon onclick sur html

function openmenu() {
    element.classList.toggle("open");
  }


function opendark() {
    darky.classList.toggle("darkmode");
  }