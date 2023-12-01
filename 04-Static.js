class Persona{

    //static contadorDeObjetosPersona = 0; //Atributo que pertenece a la clase pero no al objeto

    static contadorPersonas = 0;

    email = 'correo@correo.com'; //Este es un atributo del objeto, mientras que static es un atributo de la clase

    constructor (nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
        this.idPersona = parseInt(++Persona.contadorPersonas);
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
        return this.idPersona + '- ' + this._nombre + ' ' + this._apellido;
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
let empleado1 = new Empleado('Arthuro', 'Dugarte', 'Sistemas');

console.log(persona1.toString());
console.log(empleado1.toString());

console.log(Persona.contadorPersonas);

let persona2 = new Persona('Juan', 'Perez');

console.log(persona2.toString());

console.log(Persona.contadorPersonas);


/*

console.log(persona1.toString());
console.log(empleado1.toString());

// persona1.saludar(); - No se puede acceder al método static debido a que se asocia a la clase Persona y no a los objetos. 

console.log(Persona.saludar()); // Se puede acceder al método static de la clase Persona

console.log(Persona.saludarPersona(persona1));

console.log(Empleado.saludar());

console.log(Empleado.saludarPersona(empleado1));

//Utilizando la variable estatica

console.log(persona1.contadorDeObjetosPersona); //Dirá undefined porque es static y no pertenece al objeto

console.log(Persona.contadorDeObjetosPersona); //Dirá 0 porque es static y pertenece a la clase

console.log(Empleado.contadorDeObjetosPersona); //También se heredan los atributos de la clase persona.

console.log(persona1.email); //Se muestra el atributo de la clase Persona
console.log(empleado1.email); //Se muestra el atributo de la clase Persona

console.log(Persona.email); //Se muestra undefined debido a que se asocial al objeto, no con la clase

*/