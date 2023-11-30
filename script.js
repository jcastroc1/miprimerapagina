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

let nombre1 = "JOSE HERNANDO CASTRO";
let ciudad = "BOYACA";
let gusto = "EL CICLISMO";

let parrafo1 = document.querySelector(".parrafo2");
function cambiarTexto(nombre1, ciudad, gusto) {
  let contenido =`Soy ${nombre1}, profesional en ingeniería de sistemas, presto mis servicios de asesoría y consultoría con mucha experiencia en administración de proyectos de tecnologia. Naci en ${ciudad}, la tierra mas hermosa de Colombia. Me apasiona mucho programar, viajar y ${gusto}`;
  return contenido;
}

parrafo1.innerText = cambiarTexto (nombre1, ciudad, gusto);

// FUNCIONES MOBILE 

let menu_responsive = document.querySelector(".checkbtn");

menu_responsive.onclick = function () {
  navBar = document.querySelector(".navbar");
  navBar.classList.toggle("active");
};


// FUNCIONES PARA EL FORMULARIO
const form = document.getElementById("form");
const nombre = document.getElementById("nombre");
const parrafo = document.getElementById("alertas");

function validarFormulario() {
  let warnings = "";
  let valido = true;
  parrafo.innerHTML = "";

  if (nombre.value.length < 4) {
    warnings += `El nombre debe contener más de 4 carcateres`;
    valido = false;
  }

  if (!valido) {
    parrafo.innerHTML = warnings;
  } else {
    parrafo.innerHTML = "Enviado";
  }
  return valido;
}

form.addEventListener("submit", (e) => {
  if (validarFormulario()) {
    // Si la validación es exitosa, puedes enviar el formulario
    formulario.submit();
  } else {
    e.preventDefault(); // Evita que el formulario se envíe automáticamente
  }
});

