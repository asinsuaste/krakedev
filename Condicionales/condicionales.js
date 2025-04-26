calcularTasaInteres=function(ingresoAnual){
    ingresoAnual=recuperarFlotante("txtIngresoEmpresa" );
    let tasaInteres;
    
    if(ingresoAnual>=0 && ingresoAnual<300000){
        tasaInteres=16;
        mostrarTexto("lbltasaInteres","SU TASA DE INTERES ES DEL "+tasaInteres+" "+"%");
    }else  if(ingresoAnual>=300000 && ingresoAnual<500000){
        tasaInteres=15;
        mostrarTexto("lbltasaInteres","SU TASA DE INTERES ES DEL "+tasaInteres+" "+"%");
    }else if(ingresoAnual>=500000 && ingresoAnual<1000000){
        tasaInteres=14;
        mostrarTexto("lbltasaInteres","SU TASA DE INTERES ES DEL "+tasaInteres+" "+"%");
    }else if(ingresoAnual>=1000000 && ingresoAnual<2000000){
        tasaInteres=13;
        mostrarTexto("lbltasaInteres","SU TASA DE INTERES ES DEL "+tasaInteres+" "+"%");
    }else if(ingresoAnual<=2000000){
        tasaInteres=12;
        mostrarTexto("lbltasaInteres","SU TASA DE INTERES ES DEL "+tasaInteres+" "+"%");
    }
    return tasaInteres; 
}


calcularCapacidadPago=function(edad,ingresos,egresos){
    let cuotaMensual;

    edad=recuperarEntero("txtEdad");
    ingresos=recuperarFlotante("txtIngreso");
    egresos=recuperarFlotante("txtEgreso");

    if(edad >= 0 && edad > 50){
        cuotaMensual=((ingresos-egresos)*30)/100;
        mostrarTexto("lblCuotaMensual","SU CUOTA MENSUAL ES DE "+cuotaMensual);
    }else if(edad <= 50){
        cuotaMensual=((ingresos-egresos)*40)/100;
        mostrarTexto("lblCuotaMensual","SU CUOTA MENSUAL ES DE "+cuotaMensual);
    }
    return cuotaMensual;
}


calcularDescuento=function(precio,cantidad){
    let descuento;
    let total;

    precio=recuperarFlotante("txtPrecio");
    cantidad=recuperarEntero("txtCantidad");

    if(cantidad>=1 && cantidad < 3){
        let subTotal=(precio*cantidad);

        total=(subTotal);
        mostrarTexto("lblTotal","SU TOTAL A PAGAR ES DE " +total);

    }else if(cantidad >= 3 && cantidad < 6){
        let subTotal=(precio*cantidad);

        descuento=((subTotal)*2)/100;
        total=subTotal-descuento;
        mostrarTexto("lblTotal","TIENE UN DESCUENTO DEL 2% POR LO QUE SU TOTAL A PAGAR ES DE " +total);

    }else if(cantidad >= 6 && cantidad < 12){
        let subTotal=(precio*cantidad);
        
        descuento=((subTotal)*3)/100;
        total=subTotal-descuento;
        mostrarTexto("lblTotal","TIENE UN DESCUENTO DEL 3% POR LO QUE SU TOTAL A PAGAR ES DE " +total);

    }else if(cantidad >= 12 ){
        let subTotal=(precio*cantidad);
        
        descuento=((subTotal)*4)/100;
        total=subTotal-descuento;
        mostrarTexto("lblTotal","TIENE UN DESCUENTO DEL 4% POR LO QUE SU TOTAL A PAGAR ES DE " +total);
    }
    return total;
}

determinarColesterolLDL=function(nivelColesterol){
    let edad=recuperarEntero("txtEdadColesterol");

    if(edad >=0 && edad <=19){
        nivelColesterol=mostrarTexto("lblColesterol","Su LDL es Menos de 110 mg/dL");
    }else if(edad >=20){
        nivelColesterol=mostrarTexto("lblColesterol","Su LDL es Menos de 100 mg/dL");
    }
    return nivelColesterol;

}

validarClave=function(clave){
    let numerosClave;
    clave=recuperarTexto("txtClave");
    numerosClave=clave.length;

    if(numerosClave >= 8 && numerosClave <=16){
        mostrarTexto("lblClave",true);
    }else {
        mostrarTexto("lblClave",false)
    }
    return true,false;
}

esMayuscula=function(caracter){
    let codigoCaracter;

    caracter=recuperarTexto("txtMayuscula");
    codigoCaracter=caracter.charCodeAt(0);

    if(codigoCaracter >= 65 && codigoCaracter <= 90 ){
        mostrarTexto("lblMayuscula",true);
    }else {
        mostrarTexto("lblMayuscula",false);
    }
    return true,false;
}

esMinuscula=function(caracter){
    let codigoCaracter;

    caracter=recuperarTexto("txtMinuscula");
    codigoCaracter=caracter.charCodeAt(0);

    if(codigoCaracter >= 97 && codigoCaracter <= 122){
        mostrarTexto("lblMinuscula",true);
    }else {
        mostrarTexto("lblMinuscula",false);
    }
    return true,false;
}

esDigito=function(){
    let codigoCaracter;

    caracter=recuperarTexto("txtDigito");
    codigoCaracter=caracter.charCodeAt(0);

    if(codigoCaracter >= 33 && codigoCaracter <= 47 ){
        mostrarTexto("lblDigito",true);

    }else if(codigoCaracter >= 58 && codigoCaracter <= 64 ){
        mostrarTexto("lblDigito",true);

    }else if(codigoCaracter >= 91 && codigoCaracter <= 96 ){
        mostrarTexto("lblDigito",true);

    }else if(codigoCaracter >= 123 && codigoCaracter <= 255){
        mostrarTexto("lblDigito",true);
        
    }else {
        mostrarTexto("lblDigito",false);

    }
    return true,false;
}

darPermiso=function(notaMatematicas,notaFisica,notaGeometria){
    notaMatematicas=recuperarFlotante("txtMatematicas");
    notaFisica=recuperarFlotante("txtFisica");
    notaGeometria=recuperarFlotante("txtGeometria");

    if(notaMatematicas > 90 || notaFisica > 90 || notaGeometria > 90 ){
        mostrarTexto("lblDarPermiso",true);
    }else{
        mostrarTexto("lblDarPermiso",false);
    }
    return true,false;
}

otorgarPermiso=function(notaMatematicas,notaFisica,notaGeometria){
    notaMatematicas=recuperarFlotante("txtMate");
    notaFisica=recuperarFlotante("txtFisi");
    notaGeometria=recuperarFlotante("txtGeo");
    

    if((notaMatematicas > 90 || notaFisica > 90) && notaGeometria > 80){
        mostrarTexto("lblOtorgarPermiso",true);
    }else{
        mostrarTexto("lblOtorgarPermiso",false);
    }
    return true,false;
}

dejarSalir=function(notaMatematicas,notaFisica,notaGeometria){
    notaMatematicas=recuperarFlotante("txtMatematicas1");
    notaFisica=recuperarFlotante("txtFisica2");
    notaGeometria=recuperarFlotante("txtGeometria3");

    if((notaMatematicas > 90 && notaFisica > 90 && notaGeometria > 90 ) && (notaFisica > notaMatematicas)){
        mostrarTexto("lblDejarSalir",true);
    }else{
        mostrarTexto("lblDejarSalir",false);
    }
    return true,false;
}










