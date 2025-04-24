let puntos;
puntos=0;
let lanzamientos;
lanzamientos=5;

jugar=function(){
    let resultado;
    resultado=lanzarDado();
    console.log(resultado);
   mostrarCara(resultado);
   modificarPuntos(resultado);
   modificarLanzamientos();


}

modificarPuntos=function(numero){
    puntos=puntos+numero;
    cambiarTexto("lblPuntos", puntos);
    //si el jugador obtiene + de 20 puntos, mostrar un mensaje GANASTE
    if(puntos > 20){
        cambiarTexto("lblMensaje","GANASTE");
        //Invocar a limpiar
        limpiar("");
       
    }
}

//no recibe parametros
// resta 1 a la vareable lanzamiento y guarda el resultado en la misma vareable
//muestra en pantalla
modificarLanzamientos=function(){
     lanzamientos=lanzamientos-1;   
    cambiarTexto("lblLanzamientos",lanzamientos);
    //si el jugador obtiene 0 lanzamientos, mostrar un mensaje GAME OVER
    if(lanzamientos == 0 ){
        cambiarTexto("lblMensaje","GAME OVER");
        //Invocar a limpiar 
        limpiar();
    }
}
  
limpiar = function(){
    puntos = 0;
    lanzamientos = 5;

    cambiarTexto("lblPuntos", puntos);
    cambiarTexto("lblLanzamientos", lanzamientos);
    cambiarTexto("lblMensaje", "");
    cambiarImagen("imgDado","");
   
}



//Funcion recibe parametro el numero que quiere mostrar
//muetra la imagen correspondiente al numero que recibe
//no retorna nada

mostrarCara=function(numero){
if(numero == 1){ //con == se compara mientras que con = solo se asigna
    cambiarImagen("imgDado","dados1.png");
}else if(numero == 2){
    cambiarImagen("imgDado","dados2.png");
}else if(numero == 3){
    cambiarImagen("imgDado","dados3.png");
}else if(numero == 4){
    cambiarImagen("imgDado","dados4.png");
}else if(numero ==5 ){
    cambiarImagen("imgDado","dados5.png");
}else if(numero == 6){
    cambiarImagen("imgDado","dados6.png");
}
}

lanzarDado=function(){
    let aleatorio;
    let aleatorioMultiplicado;
    let aleatorioEntero;
    let valorDado;
    aleatorio=Math.random();
    aleatorioMultiplicado=aleatorio*6;
    aleatorioEntero=parseInt(aleatorioMultiplicado);
    valorDado=aleatorioEntero+1;
    return valorDado;
}
