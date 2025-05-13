//Funcion general para mostar texto en pantalla
mostrarTexto=function(idComponente,mensaje){
    let componente;
    componente=document.getElementById(idComponente);
    componente.innerText=mensaje;
}
//Funcion general para recuperar texto 
recuperarTexto=function(idComponente){
    let componente;
    let valorIngresado;
    componente=document.getElementById(idComponente);
    valorIngresado=componente.value;
    return valorIngresado;
}


mostrarTextoEnCaja=function(idComponente,mensaje){
    let componente;
    componente=document.getElementById(idComponente);
    componente.value=mensaje;
}

//Funcion general para mostar imagen en pantalla
mostrarImagen=function(idComponente,rutaImagen){
    let componente;
    componente=document.getElementById(idComponente);
    componente.src= rutaImagen;
}

//Funcion general para transformar un string en valor entero
recuperarInt=function(idComponente){
    let valorCaja= recuperarTexto(idComponente);
    let valorEntero= parseInt(valorCaja);
    return valorEntero;
}

//Funcion general para transformar un string en valor Float o decimal
recuperarFloat=function(idComponente){
    let valorCaja= recuperarTexto(idComponente);
    let valorFlotante= parseFloat(valorCaja);
    return valorFlotante;
}

