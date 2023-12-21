import { Persona } from "./persona";
//Los modulos no pueden empaquetarse por sí solos, y necesitan de webpack

const persona = new Persona("Pancratzia");

alert(`Hola ${persona.getNombre()}`);