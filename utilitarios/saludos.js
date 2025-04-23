saludar=function(){
//Recuperar el valor de la caja de texto Nombre
let nombre=recuperarTexto("txtNombre");
//Recuperar el valor de la caja de texto Apellido
let apellido=recuperarTexto("txtApellido");
//Recuperar el valor de la caja de texto Edad
let Edad=recuperarTexto("txtEdad");
//Recuperar el valor de la caja de texto Estatura
let aEstatura=recuperarTexto("txtEstatura");  
}

recuperarTexto=function(idComponente){
    let componente;
    let valorIngresado;
    componente=document.getElementById(idComponente);
    valorIngresado=componente.value;
    return valorIngresado;
}

recuperarInt=function(idComponente){
    let valorCaja=recuperarTexto(idComponente);
    let valorEntero=parseInt(valorCaja);
    return valorEntero;
}

recuperarInt=function(idComponente){
    let valorCaja=recuperarTexto(idComponente);
    let valorDecimal=parseFloat(valorCaja);
    return valorDecimal;
}