calcularValorDescuento=function(monto,porcentajeDescuento){
let valorDescuento=(monto*porcentajeDescuento)/100;
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

calcularTotal=function(subTotal,descuento,iva){
let valorTotal=subTotal-descuento+iva;
return valorTotal;
}
