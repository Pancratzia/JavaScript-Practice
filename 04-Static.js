class Persona{
    constructor (nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
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

    nombreCompleto(){
        return this._nombre + ' ' + this._apellido;
    }

    toString(){
        return this.nombreCompleto();
    }

    static saludar(){
        return ('Saludos desde método static');
    }

    static saludarPersona(persona){
        return (`Hola, ${persona.nombre} ${persona.apellido}!`);
    }

}

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
        return super.nombreCompleto() + ', ' + this._departamento;
    }

}

let persona1 = new Persona('Laura', 'Ortega');
console.log(persona1.toString());

let empleado1 = new Empleado('Arthuro', 'Dugarte', 'Sistemas');
console.log(empleado1.toString());

// persona1.saludar(); - No se puede acceder al método static debido a que se asocia a la clase Persona y no a los objetos. 

console.log(Persona.saludar()); // Se puede acceder al método static de la clase Persona

console.log(Persona.saludarPersona(persona1));