calcularValorDescuento=function(monto,porcentajeDescuento){
let valorDescuento=(monto*porcentajeDescuento)/100;
return valorDescuento;
}

calcularDescuentoPorVolumen=function(subTotal,cantidad){
    let valorDescuento;
    if(cantidad<3){
        valorDescuento=subTotal
    }if(cantidad >=3 && cantidad <=5){
        valorDescuento=(subTotal*3)/100;
    }if(cantidad >=6 && cantidad <=11){
        valorDescuento=(subTotal*4)/100;
    }if(cantidad >=12){
        valorDescuento=(subTotal*5)/100;
    }

    return valorDescuento;
}

calcularIVA=function(monto){
let valorIva=(monto*12)/100;
return valorIva;
}

calcularSubtotal=function(precio,cantidad){
let totalComprado=precio*cantidad;
return totalComprado;
}

calcularTotal=function(subTotal,iva){
let valorTotal=subTotal+iva;
return valorTotal;
}
