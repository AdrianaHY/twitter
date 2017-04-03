var contadorCaracteres = document.getElementById("limite");
var cajaTexto = document.getElementById("comentarioAEscribir");
var contadorsito = 0;
cajaTexto.addEventListener("keypress",contador)

function contador(){

  if(contadorsito < 140){
    contadorsito +=1;
    var contadorCaracteres = document.getElementById("limite");
    contadorCaracteres.innerText= contadorsito;
}else{
  alert("No puedes pasar el límite de caracteres")
}
}
