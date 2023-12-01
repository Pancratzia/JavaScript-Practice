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



let persona = new Persona('Juan', 'Perez', 28);
console.log(persona.toString());