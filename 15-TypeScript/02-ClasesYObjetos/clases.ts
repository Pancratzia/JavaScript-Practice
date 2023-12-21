class Persona{
    private nombre:string;

    constructor(nombre: string){
        this.nombre = nombre;
    }

    public getNombre(){
        return this.nombre;
    }

    static metodoEstatico():number{
        return 8;
    }
}

let persona = new Persona("Laura");

alert(`Hola, ${persona.getNombre()!}... Un número: ${Persona.metodoEstatico()}`);