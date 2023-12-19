let numberA;
let numberB;
const divResultado = document.getElementById("resultado");
const form = document.getElementById("form");

function obtenerOperandos() {
  if (
    form.numberA.value === "" ||
    form.numberB.value === "" ||
    isNaN(form.numberA.value) ||
    isNaN(form.numberB.value)
  ) {
    alert("Debe ingresar dos números");
    return false;
  }
  numberA = parseInt(form.numberA.value);
  numberB = parseInt(form.numberB.value);
  return true;
}

function sumar() {
  if(!obtenerOperandos()) return;
  divResultado.innerHTML = `${numberA} + ${numberB} = ${numberA + numberB}`;
  form.reset();
}
