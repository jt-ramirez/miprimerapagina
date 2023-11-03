//alert("Hola este es mi Javascript");

//let nombre="Julian"

//console.log(nombre)


//let contenidoTitulo = "Julian";

//let Titulo = document.querySelector(".Titulo");
//Titulo.innerHTML = contenidoTitulo;

//let textoTitulo = Titulo.innerText;
//console.log(textoTitulo)

//if (textoTitulo == "nombre") {
//    Titulo.innerHTML = "otro";
//}else {
//    console.log("No se cumple")
//}

//let nombre = "Jose";

//let descripcion = document.querySelector(".descripcion");

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