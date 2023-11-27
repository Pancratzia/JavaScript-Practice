//Una clase es una Plantilla que permite crear instancias de la clase, es decir, un objeto.

class Persona{
    constructor (nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
    nombreCompleto(){
        return this.nombre + ' ' + this.apellido;
    }
}

let persona1 = new Persona('Laura', 'Ortega');
console.log(persona1);
let persona2 = new Persona('Arthuro', 'Dugarte');
console.log(persona2);