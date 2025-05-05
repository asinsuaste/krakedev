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
   let hayError = false;

   placa=recuperarTexto("txtPlaca");
   cmpProvincia=placa.charCodeAt(0);
   if(cmpProvincia == 65){
       mostrarTexto("lblProvincia","PERTENECE A LA PROVINCIA DEL AZUAY");
      
   } if(cmpProvincia == 66){
       mostrarTexto("lblProvincia","PERTENECE A LA PROVINCIA DE BOLIVAR");
       
   }else if(cmpProvincia == 85){
       mostrarTexto("lblProvincia","PERTENECE A LA PROVINCIA DE CAÑAR");
      
   }else if(cmpProvincia == 67){
       mostrarTexto("lblProvincia","PERTENECE A LA PROVINCIA DE CARCHI");
     
   }else if(cmpProvincia == 88){
       mostrarTexto("lblProvincia","PERTENECE A LA PROVINCIA DE COTOPAXI");
       
   }else if(cmpProvincia == 72){
       mostrarTexto("lblProvincia","PERTENECE A LA PROVINCIA DE CHIMBORAZO");
         
   }
   if(cmpProvincia == 79){
       mostrarTexto("lblProvincia","PERTENECE A LA PROVINCIA DEL ORO ");
      
   }else if(cmpProvincia == 69){
       mostrarTexto("lblProvincia","PERTENECE A LA PROVINCIA DE ESMERALDAS");
      
   }else if(cmpProvincia == 87){
       mostrarTexto("lblProvincia","PERTENECE A LA PROVINCIA DE GALAPAGOS");
       
   }else if(cmpProvincia == 71){
       mostrarTexto("lblProvincia","PERTENECE A LA PROVINCIA DE GUAYAS");
      
   }else if(cmpProvincia == 73){
       mostrarTexto("lblProvincia","PERTENECE A LA PROVINCIA DE IBARRA");
      
   }else if(cmpProvincia == 76){
       mostrarTexto("lblProvincia","PERTENECE A LA PROVINCIA DE LOJA");
       
   }else if(cmpProvincia == 82){
       mostrarTexto("lblProvincia","PERTENECE A LA PROVINCIA DE LOS RIOS");
      
   }else if(cmpProvincia == 77){
       mostrarTexto("lblProvincia","PERTENECE A LA PROVINCIA DE MANABI");
       
   }else if(cmpProvincia == 86){
       mostrarTexto("lblProvincia","PERTENECE A LA PROVINCIA DE MORONA SANTIAGO");
       
   }else if(cmpProvincia == 78){
       mostrarTexto("lblProvincia","PERTENECE A LA PROVINCIA DE NAPO");
      
   }else if(cmpProvincia == 83){
       mostrarTexto("lblProvincia","PERTENECE A LA PROVINCIA DE PASTAZA");
       
   }else if(cmpProvincia == 80){
       mostrarTexto("lblProvincia","PERTENECE A LA PROVINCIA DE PICHINCHA");
      
   }else if(cmpProvincia == 75){
       mostrarTexto("lblProvincia","PERTENECE A LA PROVINCIA DE SUCUMBIOS");
       
   }else if(cmpProvincia == 81){
       mostrarTexto("lblProvincia","PERTENECE A LA PROVINCIA DE ORELLANA");
       
   }
   if(cmpProvincia == 84){
       mostrarTexto("lblProvincia","PERTENECE A LA PROVINCIA DE TUNGURAHUA");
       
   }else if(cmpProvincia == 90){
       mostrarTexto("lblProvincia","PERTENECE A LA PROVINCIA DE ZAMORA CHINCHIPE");
       
   }else if(cmpProvincia == 89){
       mostrarTexto("lblProvincia","PERTENECE A LA PROVINCIA DE SANTA HELENA");
      
   }else if(cmpProvincia == 74){
       mostrarTexto("lblProvincia","PERTENECE A LA PROVINCIA DE SANTO DOMINGO DE LOS TSACHILAS");
      
   }else {
       mostrarTexto("lblProvincia", "PROVINCIA INCORRECTA");
   } 
}