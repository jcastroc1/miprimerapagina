// alert("Hola este es mi javascript"); 

// let nombre = "Jose";
// var nombre1 = "Hernando";
// const nombre2 = "Castro";

// console.log(nombre);
// console.log(nombre1);
// console.log(nombre2);

// SELECCIONAR ELEMENTOS

let contenidoTitulo = "Nombre";
let titulo = document.querySelector(".logo .fuente-acento");
titulo.innerHTML = contenidoTitulo;

// CONDICIONALES
let textoTitulo = titulo.innerText;
console.log(textoTitulo);

if (textoTitulo == "Nombre") {
  titulo.innerHTML = "Mi pagina Web";
  } 
  else {
    console.log("no se cumple");
  }

// FUNCIONES


// FUNCIONES MOBILE 

let menu_responsive = document.querySelector(".checkbtn");

menu_responsive.onclick = function () {
  navBar = document.querySelector(".navbar");
  navBar.classList.toggle("active");
};

