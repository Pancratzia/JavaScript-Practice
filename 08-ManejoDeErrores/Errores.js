'use strict'

try{
  x = 10;   
}catch(e){
  console.log(e);
}finally{ //OPCIONAL
    console.log("Se ejecuta siempre al finalizar la revisión del try-catch");
}

console.log("Gracias al try-catch el programa no termina su ejecución y se continua con la ejecución del programa, además de que se muestra el error en la consola");