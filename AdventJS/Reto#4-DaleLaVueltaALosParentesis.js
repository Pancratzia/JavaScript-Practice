/*
const a = decode('hola (odnum)')
console.log(a) // hola mundo

const b = decode('(olleh) (dlrow)!')
console.log(b) // hello world!

const c = decode('sa(u(cla)atn)s')
console.log(c) // santaclaus

// Paso a paso:
// 1. Invertimos el anidado -> sa(ualcatn)s
// 2. Invertimos el que queda -> santaclaus
*/

function decode(message) {
  const regExp = /\(([^()]+)\)/g;
  const replacer = (_, group) => [...group].reverse().join("");

  return message.replace(regExp, replacer).replace(regExp, replacer);
}

const a = decode("hola (odnum)");
console.log(a); // hola mundo

const b = decode("(olleh) (dlrow)!");
console.log(b); // hello world!

const c = decode("sa(u(cla)atn)s");
console.log(c); // santaclaus

const d = decode("hola mundo");
console.log(d);
