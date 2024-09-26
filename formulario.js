var formulario = document.querySelector("#form")

formulario.onsubmit = function(e) {

  e.preventDefault(); // Corrige la prevención del comportamiento por defecto
  
  var n = formulario.elements["name"]; // Uso de nombre en vez de índice
  var e = formulario.elements["age"];
  var na = formulario.elements["nationality"];

  var nombre = n.value
  var edad = e.value

  var i = na.selectedIndex
  var nacionalidad = na.options[i].value
  console.log(nombre, edad)
  console.log(nacionalidad)

  if (nombre.length === 0) {
    n.classList.add("error")
  }
  if (edad < 18 || edad > 120) {
    e.classList.add("error")
  }

if (nombre.length > 0 
  && (edad > 18 
    && edad < 120) ) {
  agregarInvitado(nombre, edad, nacionalidad)
  }
}

// var botonBorrar = document.createElement("button")
// botonBorrar.textContent = "Eliminar invitado"
// botonBorrar.id = "boton-borrar"
// var corteLinea = document.createElement("br")
// document.body.appendChild(corteLinea)
// document.body.appendChild(botonBorrar);

function agregarInvitado(nombre, edad, nacionalidad) {

  var nacionalidades = {
    "ar": "Argentina",
    "mx": "Mexicana",
    "vnzl": "Venezolana",
    "per": "Peruana"
  } // Se crea objeto nacionalidades

nacionalidad = nacionalidades[nacionalidad] //Se utiliza el objeto para seleccionar la nacionalidad

var lista = document.getElementById("lista-de-invitados")

var elementoLista = document.createElement("div")
elementoLista.classList.add("elemento-lista") // Corrección de added por add

function crearElemento(descripcion, valor) {
var spanNombre = document.createElement("span")
var inputNombre = document.createElement("input")
var espacio = document.createElement("br")
spanNombre.textContent = descripcion + ": ";
inputNombre.value = valor 
elementoLista.appendChild(spanNombre)
elementoLista.appendChild(inputNombre)
elementoLista.appendChild(espacio)
}

crearElemento("Nombre", nombre)
crearElemento("Edad", edad)
crearElemento("Nacionalidad", nacionalidad)


var botonBorrar = document.createElement("button")
botonBorrar.textContent = "Eliminar invitado"
botonBorrar.id = "boton-borrar"
var corteLinea = document.createElement("br")
elementoLista.appendChild(botonBorrar);

botonBorrar.onclick = function() {
  elementoLista.remove(); // Uso de remove para eliminar el nodo
};

lista.appendChild(elementoLista); // Se añade a la lista
}