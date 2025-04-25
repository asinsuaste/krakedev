calcularPromedioNotas=function(){
    let valorFloat1=recuperarFlotante("txt1");
    let valorFloat2=recuperarFlotante("txt2");
    let valorFloat3=recuperarFlotante("txt3");

    let promedio=calcularPromedio(valorFloat1,valorFloat2,valorFloat3);
    let resultadoFormateado=promedio.toFixed(2);
    let mensaje=mostrarTexto("lblResultado",resultadoFormateado);
    
    if(resultadoFormateado<5 && resultadoFormateado>0){
        mostrarImagen("imgFelicitaciones","./8hy.gif");
        mostrarTexto("lblResultado","SU PROMEDIO ES "+resultadoFormateado+" "+"ENTONCES ESTA REPROBADO");
    }else if(resultadoFormateado>=5 && resultadoFormateado<=8){
        mostrarImagen("imgFelicitaciones","./kakashi.gif");
        mostrarTexto("lblResultado","SU PROMEDIO ES "+resultadoFormateado+" "+"BUEN TRABAJO");
    }else if(resultadoFormateado>8 && resultadoFormateado<=10){
        mostrarImagen("imgFelicitaciones","./GOKU.gif");
        mostrarTexto("lblResultado","SU PROMEDIO ES "+resultadoFormateado+" "+"EXCELENTE");
    }else{
        mostrarImagen("imgFelicitaciones","");
        mostrarTexto("lblResultado","DATOS INCORRECTOS");

    }
}   

