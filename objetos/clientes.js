let clientes=[
    {cedula:"12345", nombre:"Juan", edad:"24"},
    {cedula:"45654", nombre:"Mario", edad:"34"},
    {cedula:"56456", nombre:"Lucho", edad:"23"}
];

guardarCambios=function(){
    let valorCedula=recuperarTexto("txtCedula");
    let valorNombre=recuperarTexto("txtNombre");
    let valorEdad=recuperarFloat("txtEdad");

    let datosCliente={};
    datosCliente.cedula=valorCedula;
    datosCliente.nombre=valorNombre;
    datosCliente.edad=valorEdad;
    
    modificarCliente(datosCliente);

    mostrasClientes();

}

modificarCliente=function(cliente){
    let clienteEncontrado=buscarCliente(cliente.cedula);
    if(clienteEncontrado != null){
        clienteEncontrado.nombre=cliente.nombre;
        clienteEncontrado.edad=cliente.edad;
    }
}

ejecutarBusqueda=function(){
    let valorCedula=recuperarTexto("txtCedulaBusqueda");
    let cliente=buscarCliente(valorCedula)
    if(cliente == null){
        alert("Cliente no Encontrado");
    }else{
        mostrarTextoEnCaja("txtCedula",cliente.cedula);
        mostrarTextoEnCaja("txtNombre",cliente.nombre);
        mostrarTextoEnCaja("txtEdad",cliente.edad);
    }
}

crearCliente=function(){
    let valorCedula=recuperarTexto("txtCedula");
    let valorNombre=recuperarTexto("txtNombre");
    let valorEdad=recuperarFloat("txtEdad");

    let nuevoCliente={};
    nuevoCliente.cedula=valorCedula;
    nuevoCliente.nombre=valorNombre;
    nuevoCliente.edad=valorEdad;

    agregarCliente(nuevoCliente);
}

agregarCliente=function(cliente){
    let resultado=buscarCliente(cliente.cedula);
    
    if(resultado == null){
        clientes.push(cliente);
    }else{
        alert("Ya existe ese cliente con la Cedula"+cliente.cedula);
    }
        
}

buscarCliente=function(cedula){
    let elementoCliente;
    let clienteEncontrado = null;
    for ( let i=0; i < clientes.length ; i++ ){
        elementoCliente=clientes[i];
        if(elementoCliente.cedula == cedula){
            clienteEncontrado=elementoCliente;
            break;
        }
    }
        return clienteEncontrado;
}

mostrasClientes=function(){
    let cmpTabla=document.getElementById("tablaClientes");
    let contenidoTabla="<table><tr>"+
    "<th>CEDULA</th>"+
    "<th>NOMBRE</th>"+
    "<th>EDAD</th>"+
    "</tr>";
    let elementoCliente;
    for(let i=0; i<clientes.length;i++){
        elementoCliente=clientes[i];
        contenidoTabla+=
        "<tr><td>"+elementoCliente.cedula+"</td>"+
        "<td>"+elementoCliente.nombre+"</td>"+
        "<td>"+elementoCliente.edad+"</td>"
        +"</tr>";
    }
    contenidoTabla+="</table>";
    cmpTabla.innerHTML=contenidoTabla;

}