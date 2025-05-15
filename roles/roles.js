let empleados = [
    {cedula:"1714616123",nombre:"John",apellido:"Cena",sueldo:500.0},
    {cedula:"0914632123",nombre:"Luisa",apellido:"Gonzalez",sueldo:900.0},
    {cedula:"1725621393",nombre:"Anthony",apellido:"Insuaste",sueldo:500.0},
    {cedula:"1714225107",nombre:"Lourdes",apellido:"Campo",sueldo:900.0}
]

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

mostrarOpcionEmpleado=function(){
    let empleado = "divEmpleado";
    let rol = "divRol";
    let resumen = "divResumen";

    if ( mostrarComponente(empleado) == mostrarComponente(empleado) ){
        ocultarComponente(rol);
        ocultarComponente(resumen);
        mostrasEmpleados();
    }
    
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


