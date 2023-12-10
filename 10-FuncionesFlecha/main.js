miFuncion(); //Por hoisting, se puede llamar antes de su declaración
//miFuncionFlecha(); Debido a que la función flecha está dentro de una variable, no puede ser llamada antes de su creación. Al menos usando Let y Const

function miFuncion(){
    console.log("Esto es una función génerica");
}

const miFuncionFlecha = () => {
    console.log("Esto es una función flecha");
}

miFuncionFlecha();