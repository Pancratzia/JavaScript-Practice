/*

En la fábrica de juguetes, los elfos están programando un reloj digital para mantenerse en horario con la producción de regalos. Sin embargo, se han encontrado con un desafío de programación interesante. Necesitan una función que, dada una hora en formato 'HH:MM', cree una representación visual de esta hora en un reloj digital devolviendo un array de arrays de caracteres.

La pantalla del reloj tiene 7 filas y 17 columnas, y cada dígito de la hora ocupa 7 filas y 3 columnas. Los dígitos están compuestos por asteriscos (*) y espacios en blanco (). Entre cada dígito hay una columna vacía.

Los dos puntos para separar horas y minutos se dibujan usando dos asteríscos (*) y siempre se colocan en la misma posición, en las filas 2 y 4, en la columna 9, respectivamente (nota: la indexación de filas y columnas comienza en 0).

Por ejemplo, si la función recibe 01:30 debe devolver:

drawClock('01:30') // ⬇️

[
  ['*', '*', '*', ' ', ' ', ' ', '*', ' ', ' ', ' ', '*', '*', '*', ' ', '*', '*', '*'],
  ['*', ' ', '*', ' ', ' ', ' ', '*', ' ', ' ', ' ', ' ', ' ', '*', ' ', '*', ' ', '*'],
  ['*', ' ', '*', ' ', ' ', ' ', '*', ' ', '*', ' ', ' ', ' ', '*', ' ', '*', ' ', '*'],
  ['*', ' ', '*', ' ', ' ', ' ', '*', ' ', ' ', ' ', '*', '*', '*', ' ', '*', ' ', '*'],
  ['*', ' ', '*', ' ', ' ', ' ', '*', ' ', '*', ' ', ' ', ' ', '*', ' ', '*', ' ', '*'],
  ['*', ' ', '*', ' ', ' ', ' ', '*', ' ', ' ', ' ', ' ', ' ', '*', ' ', '*', ' ', '*'],
  ['*', '*', '*', ' ', ' ', ' ', '*', ' ', ' ', ' ', '*', '*', '*', ' ', '*', '*', '*']
]
Para saber cómo dibujar cada dígito, nos han pasado la siguiente imagen. Como ves, cada dígito está compuesto por 7 filas y 3 columnas. Los píxeles en rojo, nosotros lo representaremos con un asterisco (*), y los píxeles en blanco, con un espacio ():

Representación de los dígitos para el reloj digital

*/

function drawClock(time) {
  const clock = [[], [], [], [], [], [], []];

  const full = ["*", "*", "*"];
  const open = ["*", " ", "*"];
  const start = ["*", " ", " "];
  const end = [" ", " ", "*"];
  const spaces = [" ", " ", " "];
  const middle = [" ", "*", " "];

  const numbers = {
    0: [full, open, open, open, open, open, full],
    1: [end, end, end, end, end, end, end],
    2: [full, end, end, full, start, start, full],
    3: [full, end, end, full, end, end, full],
    4: [open, open, open, full, end, end, end],
    5: [full, start, start, full, end, end, full],
    6: [full, start, start, full, open, open, full],
    7: [full, end, end, end, end, end, end],
    8: [full, open, open, full, open, open, full],
    9: [full, open, open, full, end, end, full],
  };

  const hour1 = numbers[time[0]];
  const hour2 = numbers[time[1]];
  const colon = [spaces, spaces, middle, spaces, middle, spaces, spaces];
  const minute1 = numbers[time[3]];
  const minute2 = numbers[time[4]];

  let index = 0;

  for (const item of clock) {
    item.push(
      ...hour1[index],
      " ",
      ...hour2[index],
      ...colon[index],
      ...minute1[index],
      " ",
      ...minute2[index]
    );

    index++;
  }

  return clock;
}

console.log(drawClock("01:30"));
