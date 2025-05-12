ejecutarValidacion = function() {
    let mensaje = recuperarTexto("txtPassword");

    if (mensaje == "") {
        mostrarTexto("lblError1", "INGRESE SU CLAVE POR FAVOR");
        return;
    } else {
        mostrarTexto("lblError1", "");
        validarPassword(mensaje);
        hayMayuscula(mensaje);
        hayDigito(mensaje);
        hayCaracterEspecial(mensaje);
    }
}

validarPassword = function(password) {
    let longitud = password.length;

    if (longitud < 8) {
        mostrarTexto("lblError2", "LA CLAVE DEBE TENER MINIMO 8 CARACTERES");
    } else {
        mostrarTexto("lblError2", "");
    }

    if (longitud > 16) {
        mostrarTexto("lblError3", "LA CLAVE DEBE TENER MAXIMO 16 CARACTERES");
    } else {
        mostrarTexto("lblError3", "");
    }
}

hayMayuscula = function(cadena) {
    let tieneMayuscula = false;

    for (let i = 0; i < cadena.length; i++) {
        if (esMayuscula(cadena.charCodeAt(i))) {
            tieneMayuscula = true;
        }
    }

    if (!tieneMayuscula) {
        mostrarTexto("lblError4", "LA CLAVE DEBE TENER POR LO MENOS UNA LETRA MAYUSCULA");
    } else {
        mostrarTexto("lblError4", "");
    }
}

hayDigito = function(cadena) {
    let tieneDigito = false;

    for (let i = 0; i < cadena.length; i++) {
        if (esNumero(cadena.charCodeAt(i))) {
            tieneDigito = true;
        }
    }

    if (!tieneDigito) {
        mostrarTexto("lblError5", "LA CLAVE DEBE TENER POR LO MENOS UN NUMERO");
    } else {
        mostrarTexto("lblError5", "");
    }
}

hayCaracterEspecial = function(cadena) {
    let tieneCaracterEspecial = false;

    for (let i = 0; i < cadena.length; i++) {
        if (esCaracterEspecial(cadena.charCodeAt(i))) {
            tieneCaracterEspecial = true;
        }
    }

    if (!tieneCaracterEspecial) {
        mostrarTexto("lblError6", "LA CLAVE DEBE TENER POR LO MENOS UN CARACTER ESPECIAL (-,_,*)");
    } else {
        mostrarTexto("lblError6", "");
    }
}
