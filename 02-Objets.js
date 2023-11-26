//La diferencia entre un tipo primitivo y un objeto, es que el objeto tiene propiedades y métodos asociados.

let persona = {
    nombre: 'Laura',
    edad: 24,
    sexo: 'Femenino',
    colorFavorito: 'Morado',
}

console.log(persona.colorFavorito);
console.log(persona['colorFavorito']);
console.log(persona['sexo']);
console.log(persona);