validarEstructura = function (placa) {
    placa = recuperarTexto("txtPlaca");

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

   let hayError = false;

   caracter = numeroCaracteres(placa);

   if (caracter >= 7 && caracter <= 8) {
       mostrarTexto("lblCaracteres", "");
   } else {
       mostrarTexto("lblCaracteres", "LA PLACA DEBE TENER 7 U 8 CARACTERES");
       hayError = true;
   }

   // LETRAS
   letra1 = placa;
   posicionLetra1 = letra1.charCodeAt(0);
   letra2 = placa;
   posicionLetra2 = letra2.charCodeAt(1);
   letra3 = placa;
   posicionLetra3 = letra3.charCodeAt(2);
   

   if(esMayuscula(posicionLetra1) && esMayuscula(posicionLetra2) && esMayuscula(posicionLetra3)){
       mostrarTexto("lblMayuscula1", "");
       mostrarTexto("lblMayuscula2", "");
       mostrarTexto("lblMayuscula3", "");
   } else {
       mostrarTexto("lblMayuscula1", "EL PRIMER CARACTER DEBE SER UNA MAYUSCULA");
       mostrarTexto("lblMayuscula2", "EL SEGUNDO CARACTER DEBE SER UNA MAYUSCULA");
       mostrarTexto("lblMayuscula3", "EL TERCER CARACTER DEBE SER UNA MAYUSCULA");
       hayError = true;
   }

   // GUION
   gion4 = placa;
   posicionCaracter = gion4.charCodeAt(3);
   if (esGion(posicionCaracter)) {
       mostrarTexto("lblGion", "");
   } else {
       mostrarTexto("lblGion", "EL CUARTO CARACTER DEBE SER UN GUION");
       hayError = true;
   }

   // DIGITOS
   digito1 = placa;
   posicionDigito1 = digito1.charCodeAt(4);
   digito2 = placa;
   posicionDigito2 = digito2.charCodeAt(5);
   digito3 = placa;
   posicionDigito3 = digito3.charCodeAt(6);
  

   if(esNumero(posicionDigito1) && esNumero(posicionDigito2) && esNumero(posicionDigito3)){
       mostrarTexto("lblDigito1", "");
       mostrarTexto("lblDigito2", "");
       mostrarTexto("lblDigito3", "");
   } else {
       mostrarTexto("lblDigito1", "EL QUINTO DIGITO DEBE SER UN NUMERO");
       mostrarTexto("lblDigito2", "EL SEXTO DIGITO DEBE SER UN NUMERO");
       mostrarTexto("lblDigito3", "EL SEPTIMO DIGITO DEBE SER UN NUMERO");
       hayError = true;
   }

   // VALIDAR OCTAVO SOLO SI EXISTE
   if (caracter === 8) {
       digito4 = placa;
       posicionDigito4 = digito4.charCodeAt(7);
       if (esNumero(posicionDigito4)) {
           mostrarTexto("lblDigito4", "");
       } else {
           mostrarTexto("lblDigito4", "EL OCTAVO CARACTER DEBE SER UN NUMERO");
           hayError = true;
       }
   } else {
       mostrarTexto("lblDigito4", ""); 
   }
   if (!hayError) {
       return null;
   }
}

obtenerProvincia=function(placa){
   let cmpProvincia;

   placa=recuperarTexto("txtPlaca");
   cmpProvincia=placa.charCodeAt(0);
   if(cmpProvincia == 65){
       mostrarTexto("lblProvincia","PERTENECE A LA PROVINCIA DEL AZUAY");
      return;
   }else if(cmpProvincia == 66){
       mostrarTexto("lblProvincia","PERTENECE A LA PROVINCIA DE BOLIVAR");
       return;
   }else if(cmpProvincia == 85){
       mostrarTexto("lblProvincia","PERTENECE A LA PROVINCIA DE CAÑAR");
       return;
   }else if(cmpProvincia == 67){
       mostrarTexto("lblProvincia","PERTENECE A LA PROVINCIA DE CARCHI");
       return;
   }else if(cmpProvincia == 88){
       mostrarTexto("lblProvincia","PERTENECE A LA PROVINCIA DE COTOPAXI");
       return;
   }else if(cmpProvincia == 72){
       mostrarTexto("lblProvincia","PERTENECE A LA PROVINCIA DE CHIMBORAZO");
       return;
   }else if(cmpProvincia == 79){
       mostrarTexto("lblProvincia","PERTENECE A LA PROVINCIA DEL ORO ");
       return;
   }else if(cmpProvincia == 69){
       mostrarTexto("lblProvincia","PERTENECE A LA PROVINCIA DE ESMERALDAS");
       return;
   }else if(cmpProvincia == 87){
       mostrarTexto("lblProvincia","PERTENECE A LA PROVINCIA DE GALAPAGOS");
       return;
   }else if(cmpProvincia == 71){
       mostrarTexto("lblProvincia","PERTENECE A LA PROVINCIA DE GUAYAS");
       return;
   }else if(cmpProvincia == 73){
       mostrarTexto("lblProvincia","PERTENECE A LA PROVINCIA DE IBARRA");
       return;
   }else if(cmpProvincia == 76){
       mostrarTexto("lblProvincia","PERTENECE A LA PROVINCIA DE LOJA");
       return;
   }else if(cmpProvincia == 82){
       mostrarTexto("lblProvincia","PERTENECE A LA PROVINCIA DE LOS RIOS");
       return;
   }else if(cmpProvincia == 77){
       mostrarTexto("lblProvincia","PERTENECE A LA PROVINCIA DE MANABI");
       return;
   }else if(cmpProvincia == 86){
       mostrarTexto("lblProvincia","PERTENECE A LA PROVINCIA DE MORONA SANTIAGO");
       return;
   }else if(cmpProvincia == 78){
       mostrarTexto("lblProvincia","PERTENECE A LA PROVINCIA DE NAPO");
       return;
   }else if(cmpProvincia == 83){
       mostrarTexto("lblProvincia","PERTENECE A LA PROVINCIA DE PASTAZA");
       return;
   }else if(cmpProvincia == 80){
       mostrarTexto("lblProvincia","PERTENECE A LA PROVINCIA DE PICHINCHA");
       return;
   }else if(cmpProvincia == 75){
       mostrarTexto("lblProvincia","PERTENECE A LA PROVINCIA DE SUCUMBIOS");
       return;
   }else if(cmpProvincia == 81){
       mostrarTexto("lblProvincia","PERTENECE A LA PROVINCIA DE ORELLANA");
       return;
   }else if(cmpProvincia == 84){
       mostrarTexto("lblProvincia","PERTENECE A LA PROVINCIA DE TUNGURAHUA");
       return;
   }else if(cmpProvincia == 90){
       mostrarTexto("lblProvincia","PERTENECE A LA PROVINCIA DE ZAMORA CHINCHIPE");
       return;
   }else if(cmpProvincia == 89){
       mostrarTexto("lblProvincia","PERTENECE A LA PROVINCIA DE SANTA HELENA");
       return;
   }else if(cmpProvincia == 74){
       mostrarTexto("lblProvincia","PERTENECE A LA PROVINCIA DE SANTO DOMINGO DE LOS TSACHILAS");
       return;
   }else {
       mostrarTexto("lblProvincia", "PROVINCIA INCORRECTA");
   } 
}

obtenerVehiculo=function(placa){
    let cmpVehiculo;

   placa=recuperarTexto("txtPlaca");
   cmpVehiculo=placa.charCodeAt(1);

   if(cmpVehiculo == 65 || cmpVehiculo == 90){
        mostrarTexto("lblVehiculo","LA PLACA PERTENECE A VEHICULOS COMERCIALES COMO TAXIS O AUTOBUSES");
        return;
    }else if(cmpVehiculo == 88){
        mostrarTexto("lblVehiculo","LA PLACA PERTENECE A UN VEHICULO DE USO OFICIAL");
        return;
    }else if(cmpVehiculo == 69 ){
        mostrarTexto("lblVehiculo","LA PLACA PERTENECE A VEHICULOS GUBERNAMENTALES");
        return;
    }else if(cmpVehiculo == 83 ){
        mostrarTexto("lblVehiculo","LA PLACA PERTENECE A VEHICULOS DEL GOBIERNO PROVINCIAL");
        return;
    }else if(cmpVehiculo == 77 ){
        mostrarTexto("lblVehiculo","LA PLACA PERTENECE A VEHICULOS MUNICIPALES");
        return;
    }else if(cmpVehiculo >=66 && cmpVehiculo <= 68 && cmpVehiculo >= 70 && cmpVehiculo <= 76 && cmpVehiculo >= 78 && cmpVehiculo <= 89){
        mostrarTexto("lblVehiculo","LA PLACA PERTENECE A UN VEHICULO PARTICULAR(PRIVADO)");
        return;
    }else{
        mostrarTexto("lblVehiculo", "VEHICULO INCORRECTO");
    }

}

obtenerDia=function(placa){
    let cmpPicoYPlaca;

    placa=recuperarTexto("txtPlaca");
    cmpPicoYPlaca=placa.charCodeAt(7);

    if(cmpPicoYPlaca == 49 || cmpPicoYPlaca == 50){
        mostrarTexto("lblPicoYP","EL VEHICULO NO PUEDE CIRCULAR LOS DIAS LUNES");
        return;
    }else if(cmpPicoYPlaca == 51 || cmpPicoYPlaca == 52){
        mostrarTexto("lblPicoYP","EL VEHICULO NO PUEDE CIRCULAR LOS DIAS MARTES");
        return;
    }else if(cmpPicoYPlaca == 53 || cmpPicoYPlaca == 54){
        mostrarTexto("lblPicoYP","EL VEHICULO NO PUEDE CIRCULAR LOS DIAS MIERCOLES");
        return;
    }else if(cmpPicoYPlaca == 55 || cmpPicoYPlaca == 56){
        mostrarTexto("lblPicoYP","EL VEHICULO NO PUEDE CIRCULAR LOS DIAS JUEVES");
        return;
    }else if(cmpPicoYPlaca == 57 || cmpPicoYPlaca == 48){
        mostrarTexto("lblPicoYP","EL VEHICULO NO PUEDE CIRCULAR LOS DIAS VIERNES");
        return;
        }else{
            mostrarTexto("lblPicoYP","");
        }
    }

    limpiar=function(){

       let caja1=mostrarTexto("lblProvincia","");
       let caja2=mostrarTexto("lblVehiculo","");
       let caja3=mostrarTexto("lblEstructura","");
       let caja4=mostrarTexto("lblCaracteres","");
       let caja5=mostrarTexto("lblMayuscula1","");
       let caja6=mostrarTexto("lblMayuscula2","");
       let caja7=mostrarTexto("lblMayuscula3","");
       let caja8=mostrarTexto("lblGion","");
       let caja9=mostrarTexto("lblDigito1","");
       let caja10=mostrarTexto("lblDigito2","");
       let caja11=mostrarTexto("lblDigito3","");
       let caja12=mostrarTexto("lblDigito4","");
       let caja13=mostrarTexto("lblPicoYP","");

        let valorInicial;
        let componente;
        componente=document.getElementById("txtPlaca");
        valorInicial=componente.value="";
        return valorInicial;
    }