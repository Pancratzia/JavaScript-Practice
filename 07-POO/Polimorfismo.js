class Empleado{
    constructor(nombre, sueldo){
        this._nombre = nombre;
        this._sueldo = sueldo;
    }

    get nombre(){
        return this._nombre;
    }

    get sueldo(){
        return this._sueldo;
    }

    set sueldo(sueldo){
        this._suelda = sueldo;
    }

    obtenerDetalles(){
        return `Empleado: ${this._nombre} - Su sueldo es de ${this._sueldo}`;
    }
}

class Gerente extends Empleado{
    constructor(nombre, sueldo, departamento){
        super (nombre, sueldo);
        this._departamento = departamento;
    }

    obtenerDetalles(){
        return `Gerente:\n${super.obtenerDetalles()}\nDepartamento: ${this._departamento}`;
    }

}

function imprimir(tipo){
    console.log(tipo.obtenerDetalles());
}

let empleado = new Empleado('Juan', 2000);

let gerente = new Gerente('Carlos', 3000, 'Sistemas');

imprimir(empleado);
imprimir(gerente);