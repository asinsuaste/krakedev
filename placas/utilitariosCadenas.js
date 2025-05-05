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



esMayuscula = function(caracter) {
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

esNumero = function (idComponente,mensaje) {
    if (idComponente >= 48 && idComponente <= 57) {
        return true;
    } else {
        return false;
    }
    return true,false;
}