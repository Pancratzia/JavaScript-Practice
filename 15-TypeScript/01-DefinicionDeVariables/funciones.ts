let saludo = "Hola Mundo desde Typescript";
// saludo = 10; Typescript es más estricto que JavaScript en cuanto a tipos de datos
saludo = "Hola Mundo!";

let numero: number = 10;
//numero = 'Hola Mundo!';

//let comida;

let cualquiera: any; //Puede ser cualquier tipo de dato
cualquiera = "Soy un string";
cualquiera = 10;
cualquiera = [10, 20, 30];

/* Se debe tener cuidado con el uso de any */

const PI = 3.1416;

const LETRAS = ["a", "b", "c"];
LETRAS[0] = "d";

const NUMEROS = [1, 2, 3] as const;
//NUMEROS[0] = 10; No se puede reasignar el valor de una constante. Es como si se hiciera constante tanto la variable como el valor

function saludar() {
  alert(`Saludo: ${saludo}. Número: ${numero}. PI: ${PI}`);
  // console.log(comida); - Para poder usar la variable 'comida', debe ser inicializada
  LETRAS.forEach((letra) => {
    document.write(`<p>${letra}</p>`);
  });

  NUMEROS.forEach((numero) => {
    document.write(`<p>${numero}</p>`);
  })
}

saludar();
