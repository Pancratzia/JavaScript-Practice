//Una clase es una Plantilla que permite crear instancias de la clase, es decir, un objeto.

class Persona{
    constructor (nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
    }
    //Metodos Get y Set

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

    get apellido(){
        return this._apellido;
    }

    set apellido(apellido){
        this._apellido = apellido;
    }
}

let persona1 = new Persona('Laura', 'Ortega');
console.log(persona1);
let persona2 = new Persona('Arthuro', 'Dugarte');
console.log(persona2);

persona1.nombre = 'Laura Estefanía';
console.log(persona1.nombre);