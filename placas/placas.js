validarPlaca=function(){
    placa=recuperarTexto("txtPlaca");
    let erroresEstructura;
    erroresEstructura=validarEstructura();


    if(erroresEstructura == null){
        mostrarTexto("lblEstructura","ESTRUCTURA VALIDA");
        if(obtenerProvincia(placa) == null){
            
        }else{
            mostrarTexto("lblProvincia","PROVINCIA INCORRECTA");
        }
    }else{
        mostrarTexto("lblEstructura","ESTRUCTURA INCORRECTA");
    }
}