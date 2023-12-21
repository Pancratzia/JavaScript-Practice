"use strict";
class Persona {
    constructor(nombre) {
        this.nombre = nombre;
    }
    getNombre() {
        return this.nombre;
    }
    static metodoEstatico() {
        return 8;
    }
}
let persona = new Persona("Laura");
alert(`Hola, ${persona.getNombre()}... Un número: ${Persona.metodoEstatico()}`);
