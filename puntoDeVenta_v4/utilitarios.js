
mostrarImagen = function (idComponente, rutaImagen) {
    let componente;
    componente = document.getElementById(idComponente);
    componente.src = rutaImagen;
}
mostrarTexto = function (idComponente, mensaje) {
    let componente;
    componente = document.getElementById(idComponente);
    componente.innerText = mensaje;
}
mostrarTextoEnCaja = function (idComponente, mensaje) {
    let componente;
    componente = document.getElementById(idComponente);
    componente.value = mensaje;
}

recuperarTexto = function (idComponente) {
    let componente;
    let valorIngresado;
    componente = document.getElementById(idComponente);
    valorIngresado = componente.value;
    return valorIngresado;
}

recuperarInt = function (idComponente) {
    let valorCaja = recuperarTexto(idComponente);
    let valorEntero = parseInt(valorCaja);
    return valorEntero;
}

recuperarFloat = function (idComponente) {
    let valorCaja = recuperarTexto(idComponente);
    let valorFlotante = parseFloat(valorCaja);
    return valorFlotante;
}

reiniciarCaja=function(idComponente){
    let valorInicial;
    let componente;
    //dejar la caja de texto vacia
    componente=document.getElementById(idComponente);
    valorInicial=componente.value="";
    return valorInicial
}


reiniciarResultado=function(mensaje){
    let resultadoInicial;
    let resultado;
     //dejar el texto y resultado vacio 
    resultado=document.getElementById(mensaje);
    resultado.innerHTML=resultadoInicial=0;
    return resultadoInicial
}

