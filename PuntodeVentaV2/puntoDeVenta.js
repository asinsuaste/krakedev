calcularValorTotal = function () {
    let nombreProducto;
    let precioProducto;
    let cantidad;
    let valorSubtotal;
    let valorDescuento;
    let valorIVA;
    let valorTotal;

    nombreProducto=recuperarTexto("txtProducto");
    esProductoValido(nombreProducto,"lblError1");
    precioProducto=recuperarFloat("txtPrecio");
    esPrecioValido(precioProducto,"lblError3");
    cantidad=recuperarInt("txtCantidad");
    esCantidadValida(cantidad,"lblError2");
    
    if (esProductoValido(nombreProducto, "lblError1") && esPrecioValido(precioProducto, "lblError3") && esCantidadValida(cantidad, "lblError2")) {
        valorSubtotal=calcularSubtotal(precioProducto,cantidad);
        let mensajeSubtotal=mostrarTexto("lblSubtotal",valorSubtotal);
    
        valorDescuento=calcularDescuentoPorVolumen(valorSubtotal,cantidad);
        let mensajeDescuento=mostrarTexto("lblDescuento",valorDescuento);
    
        let valorDiferencia=valorSubtotal-valorDescuento;
        let valorIvaFlotante=calcularIVA(valorDiferencia);
        valorIVA=valorIvaFlotante.toFixed(2);
       
        let mensajeIva=mostrarTexto("lblValorIVA",valorIVA);
    
        let valorTotalFlotante;
        valorTotalFlotante=calcularTotal(valorSubtotal,valorDescuento,valorIVA);
        valorTotal=valorTotalFlotante.toFixed(2);
        let mensajeTotal=mostrarTexto("lblTotal",valorTotal);
    } else {
        mostrarTexto("lblSubtotal", "0.0");
        mostrarTexto("lblDescuento", "0.0");
        mostrarTexto("lblValorIVA", "0.0");
        mostrarTexto("lblTotal", "0.0");
    }
    

}


esProductoValido = function (producto, idComponenteError) {
    let numeroLetras=producto.length;

    if (producto == "") {
        mostrarTexto(idComponenteError, "CAMPO OBLIGATORIO");
        return false;
    }

    if (!isNaN(producto)) {
        mostrarTexto(idComponenteError, "EL NOMBRE NO PUEDE SER UN NUMERO");
        return false;
    }

    if (numeroLetras > 10) {
        mostrarTexto(idComponenteError, "EL NOMBRE DEL PRODUCTO NO PUEDE TENER MÁS DE 10 CARACTERES");
        return false;
    }

        mostrarTexto(idComponenteError, "");
        return true;
}

esCantidadValida = function (cantidad, idComponenteError) {
    if (isNaN(cantidad)) {
        mostrarTexto(idComponenteError, "CAMPO OBLIGATORIO");
        return false;
    }
    if (cantidad < 0 || cantidad > 100) {
        mostrarTexto(idComponenteError, "LA CANTIDAD DEBE SER UN NUMERO ENTRE 0 Y 100");
        return false;
    }
    mostrarTexto(idComponenteError, "");
    return true;
}

esPrecioValido = function (precio, idComponenteError) {
    if (isNaN(precio)) {
        mostrarTexto(idComponenteError, "CAMPO OBLIGATORIO");
        return false;
    }
    if (precio < 0 || precio > 50) {
        mostrarTexto(idComponenteError, "EL PRECIO DEBE SER UN NUMERO ENTRE 0 Y 50");
        return false;
    }
    mostrarTexto(idComponenteError, "");
    return true;
}





limpiar = function () {
    /*
        Dejar todas las cajas de texto con el valor cadena vacía, 0 ó 0.0 según el tipo de dato
     */
    let caja1=reiniciarCaja("txtProducto",);
    let caja2=reiniciarCaja("txtCantidad",);
    let caja3=reiniciarCaja("txtPrecio",);
    /*
        Dejar todos los textos de los montos con el valor 0.0
        Si funciona, hacer un commit
     */
    let resultado1=reiniciarResultado("lblSubtotal");
    let resultado2=reiniciarResultado("lblDescuento");
    let resultado3=reiniciarResultado("lblValorIVA");
    let resultado4=reiniciarResultado("lblTotal");
    let resultado5=reiniciarResultado("lblResumen");
    
}
/* SI TODO FUNCIONA, HACER UN PUSH */