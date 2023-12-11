/*

En el taller de Santa, los elfos aman los acertijos 🧠. Este año, han creado uno especial: un desafío para formar un palíndromo navideño.

Un palíndromo es una palabra que se lee igual hacia adelante y hacia atrás. Los elfos quieren saber si es posible formar un palíndromo haciendo, como mucho, un intercambio de letras.

Crea una función getIndexsForPalindrome que reciba una cadena de caracteres y devolverá:

Si ya es un palíndromo, un array vacío.
Si no es posible, null.
Si se puede formar un palíndromo con un cambio, un array con las dos posiciones (índices) que se deben intercambiar para poder crearlo.
Por ejemplo:

getIndexsForPalindrome('anna') // []
getIndexsForPalindrome('abab') // [0, 1]
getIndexsForPalindrome('abac') // null
getIndexsForPalindrome('aaaaaaaa') // []
getIndexsForPalindrome('aaababa') // [1, 3]
getIndexsForPalindrome('caababa') // null
Si se puede formar el palíndromo con diferentes intercambios, siempre se debe devolver el primero que se encuentre.

*/

function getIndexsForPalindrome(word) {
  const reverseWord = (word) => word.split("").reverse().join("");

  const switchCharacters = (word, indexs) => {
    const newWord = [...word];
    newWord[indexs[0]] = word[indexs[1]];
    newWord[indexs[1]] = word[indexs[0]];
    return newWord.join("");
  };

  if (word === reverseWord(word)) return [];

  let indexs = null;

  for (let i = 0; i < word.length - 1; i++) {
    for (let j = i + 1; j < word.length; j++) {
      const newWord = switchCharacters(word, [i, j]);

      if (newWord === reverseWord(newWord)) {
        indexs = [i, j];
      }
    }

    if (indexs !== null) break;
  }

  return indexs;
}

console.log(getIndexsForPalindrome("anna"));
console.log(getIndexsForPalindrome("abab"));
console.log(getIndexsForPalindrome("abac"));
console.log(getIndexsForPalindrome("aaaaaaaa"));
console.log(getIndexsForPalindrome("aaababa"));
console.log(getIndexsForPalindrome("caababa"));
