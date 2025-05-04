validarEstructura=function(placa){
    placa=recuperarTexto("txtPlaca");
    let caracter;
    let letra1;
    let posicionLetra1;
    let letra2;
    let posicionLetra2;
    let letra3;
    let posicionLetra3;
    let gion4;
    let posicionCaracter;
    let digito1;
    let posicionDigito1;
    let digito2;
    let posicionDigito2;
    let digito3;
    let posicionDigito3;
    let digito4;
    let posicionDigito4;

    caracter=numeroCaracteres(placa);
    if(caracter >= 1 && caracter <= 8){
        mostrarTexto("lblCaracteres", true);
    }else{
        mostrarTexto("lblCaracteres", false);
    }
    
    letra1 = placa;
    posicionLetra1 = letra1.charCodeAt(0);
    letra2 = placa;
    posicionLetra2 = letra2.charCodeAt(1);
    letra3 = placa;
    posicionLetra3 = letra3.charCodeAt(2);
    esMayuscula(posicionLetra1, "lblMayuscula1");
    esMayuscula(posicionLetra2, "lblMayuscula2");
    esMayuscula(posicionLetra3, "lblMayuscula3");

    gion4=placa;
    posicionCaracter=gion4.charCodeAt(3);
    esGion(posicionCaracter);

    digito1=placa;
    posicionDigito1=digito1.charCodeAt(4);
    digito2=placa;
    posicionDigito2=digito2.charCodeAt(5);
    digito3=placa;
    posicionDigito3=digito3.charCodeAt(6);
    digito4=placa;
    posicionDigito4=digito4.charCodeAt(6);
    esNumero(posicionDigito1,"lblDigito4");
    esNumero(posicionDigito2,"lblDigito1");
    esNumero(posicionDigito3,"lblDigito2");
    esNumero(posicionDigito4,"lblDigito3");


    
}