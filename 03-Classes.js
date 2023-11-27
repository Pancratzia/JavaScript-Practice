//Una clase es una Plantilla que permite crear instancias de la clase, es decir, un objeto.

class Persona{ //La clase Objet es la clase padre de todos los objetos que se creen en JS.
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

    nombreCompleto(){
        return this._nombre + ' ' + this._apellido;
    }

    toString(){
        return this.nombreCompleto();
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

    nombreCompleto(){
        return super.nombreCompleto() + ', miembro del departamento de ' + this._departamento;
    }
}

let empleado1 = new Empleado('Laura', 'Ortega', 'Desarrollo JS');

console.log(empleado1);
console.log(empleado1.departamento);
console.log(empleado1.apellido);

console.log(empleado1.nombreCompleto());
console.log(empleado1.toString()); //Se ejecuta el método de la clase hija