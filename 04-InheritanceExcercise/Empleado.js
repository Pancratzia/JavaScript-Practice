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