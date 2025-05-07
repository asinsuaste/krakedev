prueba=function(){
    generarElemento();
}

obtenerAleatorio = function() {
    let aleatorio = Math.random();
    let aleatorioMultiplicado = aleatorio * 3;
    let aleatorioEntero = parseInt(aleatorioMultiplicado);
    let valorJuego = aleatorioEntero + 1;
    return valorJuego;
}

generarElemento = function() {
    let piedra = 1;
    let papel = 2;
    let tijera = 3;
    let resultado = obtenerAleatorio();
    
    if (resultado == piedra) {
        console.log("Piedra");
        return "Piedra";
    } else if (resultado == papel) {
        console.log("Papel");
        return "Papel";
    } else if (resultado == tijera) {
        console.log("Tijera");
        return "Tijera";
    }
}

determinarGanador = function(eleccionJugador1, eleccionJugador2) {
    if (eleccionJugador1 == eleccionJugador2) {
        console.log("0");
        return 0;
    } else if (
        (eleccionJugador1 == "Piedra" && eleccionJugador2 == "Tijera") ||
        (eleccionJugador1 == "Papel" && eleccionJugador2 == "Piedra") ||
        (eleccionJugador1 == "Tijera" && eleccionJugador2 == "Papel")
    ) {
        console.log("1");
        return 1;
    } else {
        console.log("2");
        return 2;
    }
}

generarRuta = function(nombre, idJugador, idComputador) {
    if (nombre == "Piedra") {
        mostrarImagen(idJugador, "./imagenes/piedra.png");
        mostrarImagen(idComputador, "./imagenes/piedra.png");
        return "./imagenes/piedra.png";
    } else if (nombre == "Papel") {
        mostrarImagen(idJugador, "./imagenes/papel.png");
        mostrarImagen(idComputador, "./imagenes/papel.png");
        return "./imagenes/papel.png";
    } else if (nombre == "Tijera") {
        mostrarImagen(idJugador, "./imagenes/tijera.png");
        mostrarImagen(idComputador, "./imagenes/tijera.png");
        return "./imagenes/tijera.png";
    }
}