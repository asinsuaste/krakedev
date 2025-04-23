saludar=function(){
//Recuperar el valor de la caja de texto Nombre
let nombre=recuperarTexto("txtNombre");
//Recuperar el valor de la caja de texto Apellido
let apellido=recuperarTexto("txtApellido");
//Recuperar el valor de la caja de texto Edad
let Edad=recuperarTexto("txtEdad");
//Recuperar el valor de la caja de texto Estatura
let Estatura=recuperarTexto("txtEstatura"); 
//Mostrar menjaje en pantalla
let mensajeBienvenida= "Bienvenido "+nombre+" "+apellido;

mostrarTexto("lblResultado", mensajeBienvenida);

mostrarImagen("imgSaludo","./imagenes/homero.gif");

mostrarTextoEnCaja("txtNombre","");
mostrarTextoEnCaja("txtApellido","");
mostrarTextoEnCaja("txtEdad","");
mostrarTextoEnCaja("txtEstatura","");
}

mostrarImagen=function(idComponente,rutaImagen){
    let componente=document.getElementById(idComponente);
    componente.src=rutaImagen;
    return rutaImagen;
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

mostrarTexto=function(idComponente,mensaje){
    let componente=document.getElementById(idComponente);
    componente.innerText=mensaje;
    return mensaje;
}

mostrarTextoEnCaja=function(idComponente,mensaje){
    let componente=document.getElementById(idComponente);
    componente.value=mensaje;
    return mensaje;
}
