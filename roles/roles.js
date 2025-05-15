let empleados = [
    {cedula:"1714616123",nombre:"John",apellido:"Cena",sueldo:500.0},
    {cedula:"0914632123",nombre:"Luisa",apellido:"Gonzalez",sueldo:900.0},
    {cedula:"1725621393",nombre:"Anthony",apellido:"Insuaste",sueldo:500.0},
    {cedula:"1714225107",nombre:"Lourdes",apellido:"Campo",sueldo:900.0}
];

let esNuevo = false;

guardar = function () {
    let valorCedula = recuperarInt("txtCedula");
    let valorNombre = recuperarTexto("txtNombre");
    let valorApellido = recuperarTexto("txtApellido");
    let valorSueldo = recuperarFloat("txtSueldo");

    let error = false;

    if (valorCedula.toString().length != 10 || isNaN(valorCedula)) {
        mostrarTexto("lblErrorCedula", "La cedula debe tener 10 digitos");
        error = true;
    } else {
        mostrarTexto("lblErrorCedula", " ");
    }

    if (valorNombre.length < 3 || !todosMayusculas(valorNombre)) {
        mostrarTexto("lblErrorNombre", "El nombre debe tener al menos 3 caracteres en mayusculas");
        error = true;
    } else {
        mostrarTexto("lblErrorNombre", " ");
    }

    if (valorApellido.length < 3 || !todosMayusculas(valorApellido)) {
        mostrarTexto("lblErrorApellido", "El apellido debe tener al menos 3 caracteres en mayusculas");
        error = true;
    } else {
        mostrarTexto("lblErrorApellido", " ");
    }

    if (isNaN(valorSueldo) || valorSueldo < 400 || valorSueldo > 5000) {
        mostrarTexto("lblErrorSueldo", "El sueldo debe ser un numero entre 400 y 5000");
        error = true;
    } else {
        mostrarTexto("lblErrorSueldo", " ");
    }

    if (error) {
        return; 
    }

    let empleado = {
        cedula: valorCedula,
        nombre: valorNombre,
        apellido: valorApellido,
        sueldo: valorSueldo
    };

    if (!esNuevo) {
        let agregado = agregarEmpleado(empleado);
        if (agregado) {
            alert("EMPLEADO GUARDADO CORRECTAMENTE");
            mostrasEmpleados();
            modificadorDeId();
        } else {
            alert("YA EXISTE UN EMPLEADO CON LA CEDULA " + valorCedula);
        }
    }
}
modificadorDeId=function(){
        deshabilitarComponente("txtCedula");
        deshabilitarComponente("txtNombre");
        deshabilitarComponente("txtApellido");
        deshabilitarComponente("txtSueldo");
        deshabilitarComponente("btnGuardar");
}

agregarEmpleado = function(empleado) {
    let resultado = buscarEmpleado(empleado.cedula);
    
    if (resultado == null) {
        empleados.push(empleado); 
        return true;
    } else {
        alert("Ya existe ese Empleado con la Cedula " + empleado.cedula);
        return false;
    }
}



buscarEmpleado=function(cedula){
    let elementoEmpleado;
    let empleadoEncontrado = null;
    for ( let i=0; i < empleados.length ; i++ ){
        elementoEmpleado=empleados[i];
        if (elementoEmpleado.cedula == cedula){
            empleadoEncontrado=elementoEmpleado;
            break;
        }
    }
        return empleadoEncontrado;
}

ejecutarNuevo=function(){
    let cedula = "txtCedula";
    let nombre = "txtNombre";
    let apellido = "txtApellido";
    let saldo = "txtSueldo";
    let guardar = "btnGuardar";
    let esNuevo= "btnNuevo";

    if ( mostrarComponente(esNuevo) == mostrarComponente(esNuevo) ){
        habilitarComponente(cedula);
        habilitarComponente(nombre);
        habilitarComponente(apellido);
        habilitarComponente(saldo);
        habilitarComponente(guardar);
        mostrasEmpleados();
    } else {
        mostrarOpcionEmpleado();
    } return esNuevo = true;

}

mostrarOpcionEmpleado=function(){
    let empleado = "divEmpleado";
    let rol = "divRol";
    let resumen = "divResumen";
    let cedula = "txtCedula";
    let nombre = "txtNombre";
    let apellido = "txtApellido";
    let saldo = "txtSueldo";
    let guardar = "btnGuardar";

    if ( mostrarComponente(empleado) == mostrarComponente(empleado) ){
        ocultarComponente(rol);
        ocultarComponente(resumen);
        modificadorDeId();
        mostrasEmpleados();
    }
    
}

mostrasEmpleados=function(){
    let cmpTabla=document.getElementById("tablaEmpleados");
    let contenidoTabla="<table><tr>"+
    "<th>CEDULA</th>"+
    "<th>NOMBRE</th>"+
    "<th>APELLIDO</th>"+
    "<th>SUELDO</th>"+
    "</tr>";
    let elementoEmpleados;
    for(let i=0; i<empleados.length;i++){
        elementoEmpleados=empleados[i];
        contenidoTabla+=
        "<tr><td>"+elementoEmpleados.cedula+"</td>"+
        "<td>"+elementoEmpleados.nombre+"</td>"+
        "<td>"+elementoEmpleados.apellido+"</td>"+
        "<td>"+elementoEmpleados.sueldo+"</td>"
        +"</tr>";
    }
    contenidoTabla+="</table>";
    cmpTabla.innerHTML=contenidoTabla;

}


mostrarOpcionRol=function(){
    let empleado = "divEmpleado";
    let rol = "divRol";
    let resumen = "divResumen";

    if ( mostrarComponente(rol) == mostrarComponente(rol) ){
        ocultarComponente(empleado);
        ocultarComponente(resumen);
    }
}

mostrarOpcionResumen=function(){
    let empleado = "divEmpleado";
    let rol = "divRol";
    let resumen = "divResumen";

    if ( mostrarComponente(resumen) == mostrarComponente(resumen) ){
        ocultarComponente(empleado);
        ocultarComponente(rol);
    }
}


