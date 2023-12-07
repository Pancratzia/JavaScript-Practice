/*

Santa está experimentando con nuevos diseños de regalos y necesita tu ayuda para visualizarlos en 3D.

Tu tarea es escribir una función que, dado un tamaño n (entero), genere un dibujo de un regalo en 3D utilizando caracteres ASCII.

Las líneas de los regalos se dibujan con # y las caras con el símbolo que nos pasan como parámetro:

drawGift(4, '+')

/*
   ####
  #++##
 #++#+#
####++#
#++#+#
#++##
####
*/

// drawGift(5, '*')
/*
    #####
   #***##
  #***#*#
 #***#**#
#####***#
#***#**#
#***#*#
#***##
#####
*/

// drawGift(1, '^')
/*
#
*/

//Importante: Nos han dicho que siempre hay que dejar un salto de línea al final del dibujo.

//Nota: Ten en cuenta que, en los tests, la primera línea se ve empujada por el caracter ".

function drawGift(size, symbol) {
  let box = "";
  if (size === 1) return "#\n";
  if (size >= 2) {
    const repeatedSymbol = symbol.repeat(size - 2);
    const spaces = " ".repeat(size - 1);
    box += `${spaces}${"#".repeat(size)}\n`;
    for (let i = 0; i < size - 2; i++) {
      const count = size - 2 - i;
      box += `${" ".repeat(count)}#${repeatedSymbol}#${symbol.repeat(i)}#\n`;
    }
    box += `${"#".repeat(size)}${repeatedSymbol}#\n`;
    for (let i = size - 3; i >= 0; i--) {
      box += `#${repeatedSymbol}#${symbol.repeat(i)}#\n`;
    }
  }
  box += `${"#".repeat(size)}\n`;
  return box;
}

drawGift(4, '+')

/*
   ####
  #++##
 #++#+#
####++#
#++#+#
#++##
####
*/

drawGift(5, '*')
/*
    #####
   #***##
  #***#*#
 #***#**#
#####***#
#***#**#
#***#*#
#***##
#####
*/

drawGift(1, '^')
/*
#
*/
