numeroAleatorio=function(){
    let aleatorio;
    let numeroMultiplicado;
    let numeroEntero;
    let valorAleatorio;
    aleatorio=Math.random(); 
    numeroMultiplicado=aleatorio*100;
    numeroEntero=parseInt(numeroMultiplicado); 
    valorAleatorio=numeroEntero+1; 

    return valorAleatorio;
}

generarAleatorios = function() {
    aleatorios = []; 
    let numero = recuperarInt("txtNumero"); 

    if (numero < 5 || numero > 20) {
        return aleatorios; 
    }
    for (let i = 0; i < numero; i++) {
        let valorAleatorio = numeroAleatorio();
        aleatorios.push(valorAleatorio); 
        console.log(i, valorAleatorio);
    }mostrarResultados(aleatorios);
    return aleatorios; 
}

mostrarResultados = function(arregloNumeros) {
    let cmpTabla = document.getElementById("divTabla");
    let contenidoTabla = "<table><tr><th>NOTA</th></tr>";
    for (let i = 0; i < arregloNumeros.length; i++) {
        contenidoTabla+="<tr><td>"+
        arregloNumeros[i]+"</td></tr>";
    }

    contenidoTabla+="</table>";
    cmpTabla.innerHTML=contenidoTabla; 
}
