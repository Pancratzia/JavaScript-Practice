const personas = [
  new Persona("Laura", "Ortega"),
  new Persona("Arthuro", "Dugarte"),
];

const forma = document.getElementById("forma");

function mostrarPersonas() {
  let html = "";
  for (let persona of personas) {
    html += `<li>${persona.nombre.toUpperCase()} ${persona.apellido.toUpperCase()}</li>`;
  }
  document.getElementById("personas").innerHTML = html;
}

function limpiar() {
  forma.reset();
}

function agregarPersona() {
  const [nombre, apellido] = forma.elements;
  if (!nombre.value || !apellido.value) {
    alert("Llene todos los campos");
    return;
  }

  const persona = new Persona(nombre.value, apellido.value);
  personas.push(persona);
  limpiar();
  mostrarPersonas();
}
