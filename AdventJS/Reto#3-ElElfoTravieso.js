/*En el taller de Santa, un elfo travieso ha estado jugando en la cadena de fabricación de regalos, añadiendo o eliminando un paso no planificado.

Tienes la secuencia original de pasos en la fabricación original y la secuencia modificada modified que puede incluir un paso extra o faltar un paso.

Tu tarea es escribir una función que identifique y devuelva el primer paso extra que se ha añadido o eliminado en la cadena de fabricación. Si no hay ninguna diferencia entre las secuencias, devuelve una cadena vacía.

const original = 'abcd'
const modified = 'abcde'
findNaughtyStep(original, modified) // 'e'

const original = 'stepfor'
const modified = 'stepor'
findNaughtyStep(original, modified) // 'f'

const original = 'abcde'
const modified = 'abcde'
findNaughtyStep(original, modified) // ''
A tener en cuenta:

Siempre habrá un paso de diferencia o ninguno.
La modificación puede ocurrir en cualquier lugar de la cadena.
La secuencia original puede estar vacía */

function findNaughtyStep(original, modified) {

  if (original.localeCompare(modified)) return "";
  const length = Math.max(original.length, modified.length);

  for (let i = 0; i < length; i++) {
    if (original[i] !== modified[i]) {
      return original[i] === undefined || modified[i + 1] === original[i]
        ? modified[i]
        : original[i];
    }
  }
}

let original = "abcd";
let modified = "abcde";
console.log(findNaughtyStep(original, modified));

original = "stepfor";
modified = "stepor";
console.log(findNaughtyStep(original, modified));

original = "abcde";
modified = "abcde";
console.log(findNaughtyStep(original, modified));

console.log(findNaughtyStep("xxxx", "xxoxx"));
