//No se olvide de respirar, mantenga la calma y demuestre lo que sabe
prueba=function(){
    guardarPalabra();

}

esMayuscula = function(caracter) {
    for (let i = 0; i < caracter.length; i++) {
        if (validarMayuscula(caracter.charCodeAt(i))) {
            return true;
        }else{
            return false;
        }
    }
    
}

guardarPalabra=function(){
    let palabra=recuperarTexto("txtLetra");
    let condicional = false; 

    if(palabra.length == 5 && esMayuscula(palabra)){
        console.log(palabra);
        condicional = true;
    }else{
        alert("LA PALABRA DEBE TENER 5 LETRAS MAYUSCULAS");
    }
}

