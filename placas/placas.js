validarPlaca=function(){
    placa=recuperarTexto("txtPlaca");
    let erroresEstructura;
    erroresEstructura=validarEstructura();


    if(erroresEstructura === null){
        mostrarTexto("lblEstructura","ESTRUCTURA VALIDA");
        if(provincia === null){
            obtenerProvincia();
        }else{
            mostrarTexto("lblEstructura","PROVINCIA INCORRECTA");
        }
    }else{
        mostrarTexto("lblEstructura","ESTRUCTURA INCORRECTA");
    }
}