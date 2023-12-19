let numberA;
let numberB;
const divResultado = document.getElementById('resultado');

function obtenerOperandos () {
    const form = document.getElementById('form');
    numberA = parseInt(form.numberA.value);
    numberB = parseInt(form.numberB.value);
}

function sumar() {
  obtenerOperandos();

  divResultado.innerHTML = `${numberA} + ${numberB} = ${numberA + numberB}`;
}
