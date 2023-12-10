//En JS las llamadas son secuenciales. O sea, primero llamamos la función 1, y luego la función 2 en este caso
miFuncion1();
miFuncion2();

function miFuncion1() {
    console.log("Esto es una función - 1");
}

function miFuncion2() {
    console.log("Esto es una función - 2");
}


//Función de tipo callback

function imprimir(mensaje){ //Una función de tipo callback es una función que se le pasa como argumento a otra función
    console.log(mensaje);
}

function sumar (x, y, functionCallback){
    let res = x + y;
    functionCallback(`La suma es: ${res}`);
}

sumar(2, 3, imprimir);