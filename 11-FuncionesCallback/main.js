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

const imprimirFlecha = (mensaje) => {
    console.log(mensaje);
}

function sumar (x, y, functionCallback){
    let res = x + y;
    functionCallback(`La suma es: ${res}`);
}

sumar(2, 3, imprimirFlecha); //Pueden usarse funciones flecha y genericas


//Llamadas asincronas con uso del setTimeout

function miFuncionCallback() {
    console.log("Esto es una función callback que se va a ejecutar luego de 3 segundos");
}

setTimeout(miFuncionCallback, 3000);