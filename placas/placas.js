validarPlaca=function(){
    placa=recuperarTexto("txtPlaca");
    let erroresEstructura;
    erroresEstructura=validarEstructura(placa);


    if(erroresEstructura == null){
        mostrarTexto("lblEstructura","ESTRUCTURA VALIDA");
        obtenerProvincia(placa);
        obtenerVehiculo(placa);
        obtenerDia(placa);
    }else{
        mostrarTexto("lblEstructura","ESTRUCTURA INCORRECTA");
    }
}