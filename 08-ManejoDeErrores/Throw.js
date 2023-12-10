'use strict'

try{
  let x = -19; 
  
  if(isNaN(x)){
    throw "No es un numero";
  }else if(x < 0 && x%2!==0){
      throw "Si el número es negativo, debe ser impar";
  }
}catch(e){
  console.log(e);

  //console.log(e.name);
  //console.log(e.message);
}finally{ //OPCIONAL
    console.log("Se ejecuta siempre al finalizar la revisión del try-catch");
}

console.log("Gracias al try-catch el programa no termina su ejecución y se continua con la ejecución del programa, además de que se muestra el error en la consola");