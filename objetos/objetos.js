probarAtributos=function(){
let persona={
    nombre : "Juan", //String
    apellido: "Morales", //String
    edad : 24,  //int
    estadoVivo : true //bolean
    }
    console.log(persona.nombre);
    console.log(persona.edad);

    if(persona.estadoVivo==false){
        console.log("no esta vivo");
    }else{
        console.log("si esta vivo");
    }
}

crearProducto=function(){
let producto1={
    nombre : "helado" ,
    precio: 1.75 , //float
    stock: 10 ,
    }

let producto2={
    nombre : "Chocolate" ,
    precio: 1.85 ,
    stock: 10 ,
    }

    console.log(producto1.nombre);
    console.log(producto2.precio);
    if(producto1.stock > producto2.stock){
        console.log("Producto 1 tiene mayor stock");
    }else if(producto1.stock < producto2.stock){
        console.log("Producto 2 tiene mayor stock");
    }else{
        console.log("Ambos productos tienen el mismo stock");
    }
}

modificarAtributos=function(){
    let cuenta={
        numero: "465384",
        saldo: 0.0 ,
    }
    cuenta.saldo=100;
    cuenta.saldo+=10
    console.log(cuenta.saldo);
}

crearClientes=function(){
    let clientes={
        cedula: "1725621393",
        nombre: "Juan"
    }
    clientes.nombre="Juanito";
    clientes.nombre="xxxx";

    let cliente1={}
    cliente1.nombre="Piero";
    cliente1.cedula="01234567";
}

probarDeterminarMayor=function(){
    let per1={nombre:"Mario",edad:"26"}
    let per2={nombre:"Luisa",edad:"22"}
    let mayor;

    mayor=determinarMayor(per1,per2);

    if(mayor != null){
        console.log("El Mayor es: "+mayor.nombre);
    }
}

probarIncrementoSaldo=function(){
    let cta = {numero:"1234",saldo :56.98}

    incrementarSaldo(cta,100);
    console.log(cta.saldo);
}

incrementarSaldo=function(cuenta,monto){
    cuenta.saldo+=monto;
}

determinarMayor=function(persona1,persona2){
    if(persona1.edad > persona2.edad){
        return persona1;
    }else if(persona2.edad >persona1.edad ){
        return persona2
    }else{
        return null;
    }
}
