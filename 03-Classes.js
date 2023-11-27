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

//Con clases no existe el hoisting o el prototipo. Por ello, primero debe definirse la clase persona y posteriormente se instancian los objetos.

//HERENCIA

class Empleado extends Persona{
    constructor (nombre, apellido, departamento){
        super (nombre, apellido);
        this._departamento = departamento;
    }

    get departamento(){
        return this._departamento;
    }

    set departamento(departamento){
        this._departamento = departamento;
    }
}

let empleado1 = new Empleado('Laura', 'Ortega', 'Sistemas');

console.log(empleado1);
console.log(empleado1.departamento);