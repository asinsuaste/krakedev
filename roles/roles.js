let empleados = [
    {cedula:"1714616123",nombre:"John",apellido:"Cena",sueldo:500.0},
    {cedula:"0914632123",nombre:"Luisa",apellido:"Gonzalez",sueldo:900.0},
    {cedula:"1725621393",nombre:"Anthony",apellido:"Insuaste",sueldo:500.0},
    {cedula:"1714225107",nombre:"Lourdes",apellido:"Campo",sueldo:900.0}
];

let esNuevo = false;

limpiar=function(){
    mostrarTextoEnCaja("txtCedula"," ");
    mostrarTextoEnCaja("txtNombre"," ");
    mostrarTextoEnCaja("txtApellido"," ");
    mostrarTextoEnCaja("txtSueldo"," ");
    deshabilitarComponente("txtCedula");
    deshabilitarComponente("txtNombre");
    deshabilitarComponente("txtApellido");
    deshabilitarComponente( "txtSueldo");
    deshabilitarComponente("btnGuardar");
    esNuevo=false;

}

ejecutarBusqueda = function () {
    let valorCedula = recuperarTexto("txtBusquedaCedula");

    if (valorCedula == " ") {
        alert("Por favor ingrese una cédula antes de buscar");
        return;
    }

    let empleado = buscarEmpleado(valorCedula);

    if (empleado == null) {
        alert("Empleado No Existe");
    } else {
        mostrarTextoEnCaja("txtCedula", empleado.cedula);
        mostrarTextoEnCaja("txtNombre", empleado.nombre);
        mostrarTextoEnCaja("txtApellido", empleado.apellido);
        mostrarTextoEnCaja("txtSueldo", empleado.sueldo);
        habilitarComponente("txtNombre");
        habilitarComponente("txtApellido");
        habilitarComponente("txtSueldo");
        deshabilitarComponente("btnGuardar");
    }
}

buscarEmpleado = function (cedula) {
    let elementoEmpleado;
    let empleadoEncontrado = null;
    for (let i = 0; i < empleados.length; i++) {
        elementoEmpleado = empleados[i];
        if (elementoEmpleado.cedula == cedula) {
            empleadoEncontrado = elementoEmpleado;
            break;
        }
    }
    return empleadoEncontrado;
}

function guardar() {
    let valorCedula = recuperarInt("txtCedula");
    let valorNombre = recuperarTexto("txtNombre");
    let valorApellido = recuperarTexto("txtApellido");
    let valorSueldo = recuperarFloat("txtSueldo");

    let hayErrores = false;

    // Validaciones
    if (valorCedula.toString().length !== 10 || isNaN(valorCedula)) {
        mostrarTexto("lblErrorCedula", "La cedula debe tener 10 dígitos");
        hayErrores = true;
    } else {
        mostrarTexto("lblErrorCedula", " ");
    }

    if (valorNombre.length < 3 || !todosMayusculas(valorNombre)) {
        mostrarTexto("lblErrorNombre", "El nombre debe tener al menos 3 caracteres en mayúsculas");
        hayErrores = true;
    } else {
        mostrarTexto("lblErrorNombre", " ");
    }

    if (valorApellido.length < 3 || !todosMayusculas(valorApellido)) {
        mostrarTexto("lblErrorApellido", "El apellido debe tener al menos 3 caracteres en mayúsculas");
        hayErrores = true;
    } else {
        mostrarTexto("lblErrorApellido", " ");
    }

    if (isNaN(valorSueldo) || valorSueldo < 400 || valorSueldo > 5000) {
        mostrarTexto("lblErrorSueldo", "El sueldo debe ser un número entre 400 y 5000");
        hayErrores = true;
    } else {
        mostrarTexto("lblErrorSueldo", " ");
    }

    if (hayErrores) {
        return; // Salir si hay errores
    }

    let empleado = {
        cedula: valorCedula,
        nombre: valorNombre,
        apellido: valorApellido,
        sueldo: valorSueldo
    };

    let empleadoExistente = buscarEmpleado(valorCedula);

    if (empleadoExistente == null) {
        let agregado = agregarEmpleado(empleado);
        if (agregado) {
            alert("Empleado guardado correctamente");
            mostrasEmpleados();
            modificadorDeId();
        } else {
            alert("No se pudo guardar el empleado");
        }
    } else {
        // Modificar empleado existente
        empleadoExistente.nombre = valorNombre;
        empleadoExistente.apellido = valorApellido;
        empleadoExistente.sueldo = valorSueldo;

        alert("Empleado modificado exitosamente");
        mostrasEmpleados();
        modificadorDeId();

        deshabilitarComponente("txtCedula");
        deshabilitarComponente("txtNombre");
        deshabilitarComponente("txtApellido");
        deshabilitarComponente("txtSueldo");
        deshabilitarComponente("btnGuardar");
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
        return false;
    }
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

buscarPorRol = function() {
    let cedulaBuscada = recuperarTexto("txtBusquedaCedulaRol");
    if (cedulaBuscada == "") {
        alert("Por favor ingrese una cedula");
        return;
    }

    let empleado = buscarEmpleado(cedulaBuscada);

    if (empleado == null) {
        alert("Empleado no existe");
    } else {
        mostrarTexto("infoCedula", empleado.cedula);
        mostrarTexto("infoNombre", empleado.nombre + " " + empleado.apellido);
        mostrarTexto("infoSueldo", empleado.sueldo);
    }
}

calcularAporteEmpleado = function(sueldo) {
    return sueldo * 0.0945;
}

calcularValorAPagar = function(sueldo, aporteIESS, descuento) {
    let valorAPagar = sueldo - aporteIESS - descuento;
    return valorAPagar;
}

calcularRol = function() {
    let sueldo = recuperarFloatDiv("infoSueldo");
    let descuento = recuperarFloat("txtDescuentos");

    if (isNaN(descuento) || (descuento < 0 || descuento > sueldo)) {
        alert("El descuento debe ser un numero valido entre 0 y el sueldo del empleado");
        return;
    }

    let aporte = calcularAporteEmpleado(sueldo);
    let valorPagar = calcularValorAPagar(sueldo, aporte, descuento);

    mostrarTexto("infoIESS", aporte.toFixed(2));
    mostrarTexto("infoPago", valorPagar.toFixed(2));
}