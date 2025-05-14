let empleados = [
    {cedula:"1714616123",nombre:"John",apellido:"Cena",sueldo:500.0},
    {cedula:"0914632123",nombre:"Luisa",apellido:"Gonzalez",sueldo:900.0}
]

mostrarOpcionEmpleado=function(){
    let empleado = "divEmpleado";
    let rol = "divRol";
    let resumen = "divResumen";

    if ( mostrarComponente(empleado) == mostrarComponente(empleado) ){
        ocultarComponente(rol);
        ocultarComponente(resumen);
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


