saludar=function(){
//Recuperar el valor de la caja de texto Nombre
let nombre=recuperarTexto("txtNombre");
//Recuperar el valor de la caja de texto Apellido
let apellido=recuperarTexto("txtApellido");   
}

recuperarTexto=function(idComponente){
    let componente;
    let valorIngresado;
    componente=document.getElementById(idComponente);
    valorIngresado=componente.value;
    return valorIngresado;
}