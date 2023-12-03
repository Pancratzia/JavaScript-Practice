/*
En la fábrica de juguetes del Polo Norte, cada juguete tiene un número de identificación único.

Sin embargo, debido a un error en la máquina de juguetes, algunos números se han asignado a más de un juguete.

¡Encuentra el primer número de identificación que se ha repetido, donde la segunda ocurrencia tenga el índice más pequeño!

En otras palabras, si hay más de un número repetido, debes devolver el número cuya segunda ocurrencia aparezca primero en la lista. Si no hay números repetidos, devuelve -1.

const giftIds = [2, 1, 3, 5, 3, 2]
const firstRepeatedId = findFirstRepeated(giftIds)
console.log(firstRepeatedId) // 3
// Aunque el 2 y el 3 se repiten
// el 3 aparece primero por segunda vez

const giftIds2 = [1, 2, 3, 4]
const firstRepeatedId2 = findFirstRepeated(giftIds2)
console.log(firstRepeatedId2) // -1
// Es -1 ya que no se repite ningún número

const giftIds3 = [5, 1, 5, 1]
const firstRepeatedId3 = findFirstRepeated(giftIds3)
console.log(firstRepeatedId3) // 5
¡Ojo! Los elfos dicen que esto es una prueba técnica de Google.
*/

const giftIds = [2, 1, 3, 5, 3, 2]
const giftIds2 = [1, 2, 3, 4]
const giftIds3 = [5, 1, 5, 1]


// 2, 3

function findFirstRepeated(gifts) {
  let repeatedNumber = -1; //Asigning -1 as default value

  //If there are repeated numbers
  let position = -1; //Asigning -1 as default value because that indicates that there are no repeated numbers yet

  for (let i = 0; i < gifts.length; i++) {
    for (let j = i + 1; j < gifts.length; j++) {
      if (gifts[i] === gifts[j]) { //If there are repeated numbers
        if(position===-1 || j<position){ // And the position of the first concurrency of the repeated number is less than the current position for a repeated number in the list
          repeatedNumber = gifts[i]; //We assign the repeated number
          position = j; //And the position of the first concurrency of the repeated number contains the current position
        }
      }
    }
  }

  //If there are no repeated numbers
  return repeatedNumber;
}


console.log(findFirstRepeated(giftIds));
console.log(findFirstRepeated(giftIds2));
console.log(findFirstRepeated(giftIds3));