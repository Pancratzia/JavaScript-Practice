const personas = [ 
    new Persona('Laura', 'Ortega'),
    new Persona('Arthuro', 'Dugarte'),
];



function mostrarPersonas(){
    let html = '';
    for(let persona of personas){
        html += `<li>${persona.nombre} ${persona.apellido}</li>`;
    }
    document.getElementById('personas').innerHTML = html;
}