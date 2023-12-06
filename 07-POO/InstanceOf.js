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
    if(tipo instanceof Gerente){
        console.log("IMPRIMIENDO UN GERENTE");
        console.log(tipo.obtenerDetalles());
    }else if(tipo instanceof Empleado){
        console.log("IMPRIMIENDO UN EMPLEADO");
        console.log(tipo.obtenerDetalles());
    }else if(tipo instanceof Object){
        console.log("IMPRIMIENDO UN TIPO DE OBJETO");
    }else{
        console.log(tipo);
    }
}

let empleado = new Empleado('Juan', 2000);

let gerente = new Gerente('Carlos', 3000, 'Sistemas');

imprimir(empleado);
imprimir(gerente);
imprimir('OTRO TIPO DE DATO');