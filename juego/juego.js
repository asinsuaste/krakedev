let puntosUsuario=0;
let puntosComputador=0;

modificarPuntosUsuario=function(){
    puntosUsuario=puntosUsuario+1;
    cambiarTexto("lblMensajeJugador", puntosUsuario);
    if(puntosUsuario == 5){
        cambiarTexto("lblMensajeJugador","HAS GANADO EL JUEGO");
       
    }
}

modificarPuntosComputador=function(){
    puntosComputador=puntosComputador+1;
    cambiarTexto("lblMensajeComputador", puntosComputador);
    if(puntosComputador == 5){
        cambiarTexto("lblMensajeComputador","EL COMPUTADOR TE HA VENCIDO");
       
    }
}

limpiar = function(){
    puntosUsuario = 0;
    puntosComputador = 0;

    cambiarTexto("lblMensajeJugador", puntosUsuario);
    cambiarTexto("lblMensajeComputador", puntosComputador);
    mostrarTexto("lblResultado","JUGEMOS");
   
}

jugar = function(seleccionado) {
    let computador = generarElemento();
  
    if (seleccionado == "Piedra") {
      mostrarImagen("imgJugador", "./imagenes/piedra.png");
    } else if (seleccionado == "Papel") {
      mostrarImagen("imgJugador", "./imagenes/papel.png");
    } else if (seleccionado == "Tijera") {
      mostrarImagen("imgJugador", "./imagenes/tijera.png");
    }
  
    
    if (computador == "Piedra") {
      mostrarImagen("imgComputador", "./imagenes/piedra.png");
    } else if (computador == "Papel") {
      mostrarImagen("imgComputador", "./imagenes/papel.png");
    } else if (computador == "Tijera") {
      mostrarImagen("imgComputador", "./imagenes/tijera.png");
    }
  
    let resultado = determinarGanador(seleccionado, computador);

    if (resultado == 0) {
      mostrarTexto("lblResultado", "EMPATE");

    } else if (resultado == 1) {
      mostrarTexto("lblResultado", "GANASTE LA PARTIDA");
      modificarPuntosUsuario();

    } else {
      mostrarTexto("lblResultado", "PERDISTE LA PARTIDA");
      modificarPuntosComputador();
    }
  }
  