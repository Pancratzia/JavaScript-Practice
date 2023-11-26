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