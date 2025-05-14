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

