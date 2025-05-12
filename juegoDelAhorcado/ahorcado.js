let palabraSecreta="";
let intentos=0;
let coincidencias=0;
let errores=0;

esMayuscula = function(caracter) {
    for (let i = 0; i < caracter.length; i++) {
        if (validarMayuscula(caracter.charCodeAt(i))) {
            return true;
        } else {
            return false;
     }
    }
}

guardarPalabra=function(){
    let palabra=recuperarTexto("txtSecreta");
    let condicional = false; 

    if(palabra.length == 5 && esMayuscula(palabra)){
        palabraSecreta=palabra
        console.log(palabraSecreta);
        condicional = true;
    }else{
        alert("LA PALABRA DEBE TENER 5 LETRAS MAYUSCULAS");
    }
}

mostrarLetra = function(letra, posicion) {
    let idDiv = "div" + posicion;
    mostrarTexto(idDiv, letra);
}

validar = function(letra) {
    let letrasEncontradas;
    let existeLetra = false;

    for (let i = 0; i < palabraSecreta.length; i++) {
            letrasEncontradas=palabraSecreta.charAt(i);
        if (letrasEncontradas == letra) {
            mostrarLetra(letra, i);
            existeLetra = true;
            coincidencias=coincidencias+1;
        }
    }
    if (!existeLetra) {
        alert("LA LETRA NO ES PARTE DE LA PALABRA");
        intentos=intentos+1;
        errores=errores+1;
        mostrarAhorcado();
    }
      if(coincidencias == 5){
            alert("HA GANADO");
            mostrarImagen("ahorcadoImagen","./ganador.gif");

        }else if(intentos == 10){
            alert("HA PERDIDO");
            mostrarImagen("ahorcadoImagen","./gameOver.gif");
        }
}

ingresarLetra=function(){
    let palabra;
    palabra=recuperarTexto("txtLetra");
    
    

    if(esMayuscula(palabra)){
        validar(palabra);
       
    }else{
        alert("SOLO SE ACEPTAN MAYUSCULAS");
        validar("");
        
    }
}

mostrarAhorcado=function(){
    if(errores == 1){
        mostrarImagen("ahorcadoImagen","./Ahorcado_01.png");
    }else if(errores == 2){
        mostrarImagen("ahorcadoImagen","./Ahorcado_02.png");
    }else if(errores == 3){
        mostrarImagen("ahorcadoImagen","./Ahorcado_03.png");
    }else if(errores == 4){
        mostrarImagen("ahorcadoImagen","./Ahorcado_04.png");
    }else if(errores == 5){
        mostrarImagen("ahorcadoImagen","./Ahorcado_05.png");
    }else if(errores == 6){
        mostrarImagen("ahorcadoImagen","./Ahorcado_06.png");
    }else if(errores == 7){
        mostrarImagen("ahorcadoImagen","./Ahorcado_07.png");
    }else if(errores == 8){
        mostrarImagen("ahorcadoImagen","./Ahorcado_08.png");
    }else if(errores == 9){
        mostrarImagen("ahorcadoImagen","./Ahorcado_09.png");
    }
}
