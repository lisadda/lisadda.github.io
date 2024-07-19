var compteur = document.getElementById("compteur");
var bouton = document.getElementById("btn");
var bouton2 = document.getElementById("btn2");
var element = document.getElementById("compteur");
var nombre = 0;

bouton.addEventListener('click',ajouter);

function ajouter(){
    nombre = nombre +1;
    compteur.innerText = nombre;
    console.log(nombre);
    if (nombre == 10) {
        compteur.style.color = "red";
        compteur.style.fontSize = "50px";
        
    }
}

bouton2.addEventListener('click',enlever);

function enlever(){
    nombre = nombre -1;
    compteur.innerText = nombre;
    console.log(nombre);
    if (nombre == -10) {
        compteur.style.color = "green";
        compteur.style.fontSize = "50px";
    }
}

element.addEventListener('click',myFunction)

function myFunction() {
    element.classList.toggle("dark");
  }