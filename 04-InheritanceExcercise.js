class Persona {

    static contadorPersonas = 0;

    constructor (nombre, apellido, edad){
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
        this.idPersona = ++Persona.contadorPersonas;
    }

    getIdPersona(){
        return this.idPersona;
    }

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

    get edad(){
        return this._edad;
    }

    set edad(edad){
        this._edad = edad;
    }

    toString(){
        return `Esta persona se llama ${this._nombre} ${this._apellido} y tiene ${this._edad} años.`
    }
}

class Empleado extends Persona {

    static contadorEmpleados = 0;

    constructor (nombre, apellido, edad, sueldo){
        super (nombre, apellido, edad);
        this._sueldo = sueldo;
        this._idEmpleado = ++Empleado.contadorEmpleados;
    }

    getIdEmpleado(){
        return this._idEmpleado;
    }

    get sueldo(){
        return this._sueldo;
    }

    set sueldo(sueldo){
        this._sueldo = sueldo;
    }

    toString(){
        return `${super.toString()} Su sueldo es de ${this._sueldo}$.`
    }
}

class Cliente extends Persona {
    static contadorClientes = 0;

    constructor (nombre, apellido, edad){
        super (nombre, apellido, edad);
        this._fechaRegistro = new Date().toLocaleDateString();
        this._idCliente = ++Cliente.contadorClientes;
    }

    getIdCliente(){
        return this._idCliente;
    }

    get fechaRegistro(){
        return this._fechaRegistro;
    }

    set fechaRegistro(fecha){
        this._fechaRegistro = fecha;
    }

    toString(){
        return `${super.toString()} Fue registrado el ${this._fechaRegistro}.`
    }
}



let persona = new Persona('Juan', 'Perez', 28);
console.log(persona.toString());

console.log(persona.getIdPersona());

let empleado = new Empleado('Carlos', 'Lara', 35, 2000);
console.log(empleado.toString());
console.log(empleado.getIdPersona());
console.log(empleado.getIdEmpleado());

let cliente = new Cliente('Karla', 'Gomez', 25);
console.log(cliente.toString());
console.log(cliente.getIdPersona());
console.log(cliente.getIdCliente());