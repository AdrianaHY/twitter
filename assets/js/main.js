var contadorCaracteres = document.getElementById("limite");
var cajaTexto = document.getElementById("comentarioAEscribir");
var contadorsito = 0;
var tweetsPublicados = document.getElementById("comentariosPublicados");
var botonEnviar = document.getElementById("enviar");
var seccionComentariosPublicados = document.getElementById("comentariosPublicados");
var usuario = document.getElementById("nombre");

cajaTexto.addEventListener("keypress",contador);
botonEnviar.addEventListener("click",agregarTweet);

function contador(){

  if(contadorsito < 140){
    contadorsito +=1;
    var contadorCaracteres = document.getElementById("limite");
    contadorCaracteres.innerText= contadorsito;
  }else{
    alert("No puedes pasar el límite de caracteres")
  }
}

function agregarTweet(){
  //Todo se hace con DOM, se crean elementos que contienen los datos escritos
  //en el área de texto y el input
  var nuevaSeccion = document.createElement("p");
  nuevaSeccion.innerText = cajaTexto.value;
  seccionComentariosPublicados.appendChild(nuevaSeccion);
  var espacio = document.createElement("br");
  nuevaSeccion.appendChild(espacio);
  var etiqueta = document.createElement("span");
  etiqueta.innerText = "De:";
  nuevaSeccion.appendChild(etiqueta);
  var nombreUsuario = document.createElement("span");
  nombreUsuario.innerText = usuario.value;
  nuevaSeccion.appendChild(nombreUsuario);
  var lineaSeparadora = document.createElement("hr");
  nuevaSeccion.appendChild(lineaSeparadora);
  //Para borrar el texto del textarea, el input y reiniciar el contador
  cajaTexto.value = "";
  usuario.value = "";
  contadorsito = 0;
  contadorCaracteres.innerText = 0;
}
