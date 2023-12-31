//La diferencia entre un tipo primitivo y un objeto, es que el objeto tiene propiedades y métodos asociados.

let persona = {
    nombre: 'Laura',
    apellido: 'Ortega',
    edad: 24,
    sexo: 'Femenino',
    colorFavorito: 'Morado',

    nombreCompleto: function(){
        return this.nombre + ' ' + this.apellido;
    }
}

console.log(persona.colorFavorito);
console.log(persona['colorFavorito']);
console.log(persona['sexo']);
console.log(persona);

console.log(persona.nombreCompleto());

//Creando un objeto

let persona2 = new Object();

persona2.nombre = 'Laura';
persona2.apellido = 'Ortega';
persona2.edad = 24;
persona2.sexo = 'Femenino';
persona2.colorFavorito = 'Morado';
persona2.nombreCompleto = function(){
    return this.nombre + ' ' + this.apellido;
}

console.log(persona2.colorFavorito);
console.log(persona2['colorFavorito']);
console.log(persona2['sexo']);
console.log(persona2);

console.log(persona2.nombreCompleto());

for(nombrePropiedad  in persona2){
    console.log(nombrePropiedad);
    console.log(persona2[nombrePropiedad]);
}

persona.telefono = '123456';

console.log(persona);

delete persona.telefono;

console.log(persona);


//Imprimiendo objeto
console.log(persona.nombre + ' ' + persona.apellido + ', ' + persona.edad);

for (nombrePropiedad in persona){
    console.log(persona[nombrePropiedad]);
}

let personaArray = Object.values(persona);
console.log(personaArray);

let personaString = JSON.stringify(persona);
console.log(personaString);

//Set y Get

let persona3 = {
    nombre: 'Laura',
    apellido: 'Ortega',
    edad: 24,
    sexo: 'Femenino',
    colorFavorito: 'Morado',
    idioma: 'es',
    get nombreCompleto(){
        return this.nombre + ' ' + this.apellido;
    },

    get lang(){
        return this.idioma.toUpperCase();
    },

    set lang(lang){
        this.idioma = lang.toUpperCase();
    }
}

console.log(persona3.nombreCompleto);

console.log(persona3.lang);
persona3.lang = 'en'
console.log(persona3.lang);
console.log(persona3.idioma);


//Constructor de Objetos
function Persona(nombre, apellido, email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto = function(){
        return this.nombre + ' ' + this.apellido;
    }
}

persona = new Persona('Laura', 'Ortega', 'laura@me.com');
persona2 = new Persona('Arthuro', 'Dugarte', 'arthuro@me.com');

console.log(persona);
console.log(persona2);

persona2.email = 'arthurod@me.com';

console.log(persona2);

console.log(persona.nombreCompleto() + ' y ' + persona2.nombreCompleto());

//Formas de crear objetos

let miObjeto = new Object();
miObjeto = {};

miObjeto = new Number(1);
miObjeto = 1;
miObjeto = new String('hola');
miObjeto = 'hola';
miObjeto = new Boolean(true);
miObjeto = true;
miObjeto = new Array();
miObjeto = [];
miObjeto = new Function();
miObjeto = function(){};

//Agregando nuevas propiedades a las Funciones

persona.tel = '123456';

console.log(persona.tel);
console.log(persona2.tel); //Es undefined debido a que la propiedad no existe en persona2, solo en persona

delete persona.tel;

Persona.prototype.tel = '123456';
persona.tel = '654321';

console.log(persona.tel + ' y ' + persona2.tel);

//Metodo Call

let persona1 = {
    nombre: 'Laura',
    apellido: 'Ortega',
    nombreCompleto: function(){
        return this.nombre + ' ' + this.apellido;
    }
}

persona2 = {
    nombre: 'Arthuro',
    apellido: 'Dugarte',
}

console.log(persona1.nombreCompleto());
console.log(persona1.nombreCompleto.call(persona2)); //Llamando a la funcion de persona1 a persona2 por medio del metodo call sin necesidad de definirlo en persona1

//Paso de Argumentos por el Metodo Call - Paso de Argumentos por medio de Argumentos

persona1 = {
    nombre: 'Laura',
    apellido: 'Ortega',
    nombreCompleto: function(titulo, sobrenombre){
        return titulo + ' ' + this.nombre + ' ' + this.apellido + ', mejor conocido como ' + sobrenombre;
    }
}

console.log(persona1.nombreCompleto('Ing.', 'Pancratzia'));
console.log(persona1.nombreCompleto.call(persona2, 'Ing. en Computación', 'Pancro'));

//Metodo Apply - Paso de Argumentos por el Metodo Apply (Arreglos)

const arrayApply = ['Ing.', 'Pancratzia'];
console.log(persona1.nombreCompleto.apply(persona2, arrayApply));
