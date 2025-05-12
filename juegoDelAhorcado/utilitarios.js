
mostrarImagen=function(idComponente,rutaImagen){
    let componente;
    componente=document.getElementById(idComponente);
    componente.src =  rutaImagen;
}
mostrarTexto=function(idComponente,mensaje){
    let componente;
    componente=document.getElementById(idComponente);
    componente.innerText = mensaje;
}
mostrarTextoEnCaja = function(idComponente,mensaje){
    let componente;
    componente=document.getElementById(idComponente);
    componente.value = mensaje;
}

recuperarTexto=function(idComponente){
    let componente;
    let valorIngresado;
    componente=document.getElementById(idComponente);
    valorIngresado=componente.value;
    return valorIngresado;
}

recuperarInt = function(idComponente){
   let valorCaja= recuperarTexto(idComponente);
   let valorEntero = parseInt(valorCaja);
   return valorEntero;
}

recuperarFloat = function(idComponente){
    let valorCaja= recuperarTexto(idComponente);
    let valorFlotante = parseFloat(valorCaja);
    return valorFlotante;
 }

validarMayuscula = function(caracter) {
    if (caracter >= 65 && caracter <= 90) {
        return true;
    } else {
        return false;
    }
    return true,false;
}

esGion = function (idComponente) {
    if (idComponente == 45 || idComponente == 95) {
        return true;
    } else {
        return false;
    }
    return true,false;
}

esNumero = function (idComponente,) {
    if (idComponente >= 48 && idComponente <= 57) {
        return true;
    } else {
        return false;
    }
    return true,false;
}

esCaracterEspecial = function (idComponente) {
    if (idComponente == 42 || idComponente == 45 || idComponente == 95) {
        return true;
    } else {
        return false;
    }
    return true,false;
}

