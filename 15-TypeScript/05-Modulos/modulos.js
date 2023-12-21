"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const persona_1 = require("./persona");
//Los modulos no pueden empaquetarse por sí solos, y necesitan de webpack
const persona = new persona_1.Persona("Pancratzia");
alert(`Hola ${persona.getNombre()}`);
