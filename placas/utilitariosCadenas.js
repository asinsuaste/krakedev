mostrarTexto = function (idComponente, mensaje) {
    let componente;
    componente = document.getElementById(idComponente);
    componente.innerText = mensaje;
}
recuperarTexto=function(idComponente){
    let cmpTexto;
    let valor;
    cmpTexto=document.getElementById(idComponente);
    valor=cmpTexto.value;
    return valor;
}

numeroCaracteres=function(idComponente){
    let cmpLetra;
    cmpLetra=idComponente.length;
    return cmpLetra;
}



esMayuscula = function(caracter, mensaje) {
    if (caracter >= 65 && caracter <= 90) {
        mostrarTexto(mensaje,true);
    } else {
        mostrarTexto(mensaje,false);
    }
    return true,false;
}

esGion = function (idComponente) {
    if (idComponente == 45 || idComponente == 95) {
        mostrarTexto("lblGion", true);
    } else {
        mostrarTexto("lblGion", false);
    }
    return true, false;
}

esNumero = function (idComponente,mensaje) {
    if (idComponente >= 48 && idComponente <= 57) {
        mostrarTexto(mensaje, true);
    } else {
        mostrarTexto(mensaje, false);
    }
    return true, false;
}


