let palabraSecreta="";

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
        }
    }
    if (!existeLetra) {
        console.log("Letra incorrecta");
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