miFuncion(); //Por hoisting, se puede llamar antes de su declaración
//miFuncionFlecha(); Debido a que la función flecha está dentro de una variable, no puede ser llamada antes de su creación. Al menos usando Let y Const

function miFuncion(){
    console.log("Esto es una función génerica");
}

let miFuncionFlecha = () => {
    console.log("Esto es una función flecha");
}

miFuncionFlecha = ()=> console.log("Esto es una función flecha"); //Función flecha de una sola línea


const saludar = () => {
    return "Hola";
}

const despedirse = () => "Adios";

const regresarObjeto = () => ({
    nombre: "Juan",
    apellido: "Perez"
});

const funcionConParametros = msj => console.log(msj); 
const funcionConDosParametros = (a, b) => a+b;
const funcionConDosParametrosYMensaje = (a, b) => {
    const suma = a+b;
    return `${a} + ${b} = ${suma}`
}


miFuncionFlecha();
console.log(saludar());
console.log(despedirse());
console.log(regresarObjeto().nombre + " " + regresarObjeto().apellido);
funcionConParametros("Hola mundo");
console.log(funcionConDosParametros(2, 3));
console.log(funcionConDosParametrosYMensaje(2, 3));