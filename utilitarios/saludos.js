saludo=function(){
    //recuperar el valor de la caja de texto nombre
    let nombre;
    nombre=recuperarTexto("txtNombre");
    //recuperar el valor de la caja de texto apellido
    let apellido;
    apellido=recuperarTexto("txtApellido");
    //recuperar el valor de la caja de texto edad
    let edad;
    edad=recuperarInt("txtEdad");
    //recuperar el valor de la caja de texto estatura
    let estatura;
     estatura=recuperarFloat("txtEstatura");
    //mostrar mensaje en pantalla
    let mensajeBienvenido="Bienvenido "+nombre+" "+apellido;
    mostrarTexto("ldlResultado", mensajeBienvenido);
    //mostrar imagen en pantalla
    mostrarImagen("imgSaludo","./imagenes/homero.gif");
    // limpiar caja de texto nombre
    mostrarTextoEnCaja("txtNombre","");
}
