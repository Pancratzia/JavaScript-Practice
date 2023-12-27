/*

a ha entregado Santa Claus 🎅 todos los regalos a los niños pero quieren revisar si pueden mejorar de cara al año que viene.

Los elfos quieren saber cuántos movimientos ha hecho Santa Claus 🛷 para entregar todos los regalos. Para ello, te dan un mapa de la ciudad con la ubicación de cada niño y de Santa.

El mapa es una cadena de texto multi línea donde cada caracter representa una casilla. Los niños se representan por números del 1 al 9 y Santa Claus por la letra S. El resto de casillas son .

Santa Claus sólo puede moverse hacia arriba, abajo, izquierda o derecha, y cada movimiento cuenta como 1 km. Además, siempre empieza en la posición S y debe entregar los regalos en orden, del 1 al 9.

const map = `.....1....
..S.......
..........
....3.....
......2...`

const result = travelDistance(map)
console.log(result) // -> 12 km
/*
De la S al niño 1: 4 movimientos
Del niño 1 al 2: 5 movimientos
Del niño 2 al 3: 3 movimientos
Total: 12 movimientos
*/
/*
const result2 = travelDistance(`..S.1...`)
console.log(result2) // -> 2
Escribe una función travelDistance que reciba un mapa y devuelva la distancia total que ha recorrido Santa Claus según la posición de los niños.

Ten en cuenta que:

El mapa no tiene por qué ser cuadrado.
El mapa siempre tendrá al menos un niño.
El mapa siempre tendrá una posición inicial para Santa Claus.
Los números de los niños nunca se repiten.

*/

/**
 * Calculates the total distance traveled on a map.
 *
 * @param {string} map - The map representing the path.
 * @returns {number} - The total distance traveled.
 */
function travelDistance(map) {
  // Find the length of each row
  let len = map.indexOf("\n") + 1;

  // If there is no newline character, set the length as the total length of the map
  len ||= map.length;

  // Find all the characters in the map that are either a number or the letter 'S'
  const chars = [...map.matchAll(/[1-9S]/g)];

  // Sort the characters in ascending order
  chars.sort();

  // Initialize the total number of moves to 0
  let moves = 0;

  // Get the starting position of the last character
  let i = (chars.at(-1).index / len) | 0;
  let j = chars.at(-1).index % len;

  // Iterate through each character, except the last one
  for (const c of chars.slice(0, chars.length - 1)) {
    // Get the current position of the character
    let mi = (c.index / len) | 0;
    let mj = c.index % len;

    // Calculate the distance traveled between the current position and the previous position
    moves += Math.abs(mi - i) + Math.abs(mj - j);

    // Update the previous position to the current position
    i = mi;
    j = mj;
  }

  // Return the total number of moves
  return moves;
}
