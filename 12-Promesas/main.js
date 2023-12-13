/*let miPromesa = new Promise((resolver, rechazar) => {
  let expresion = false;
  if (expresion) {
    resolver("La promesa se ha resuelto correctamente");
  } else {
    rechazar("Se produjo un error");
  }
});

miPromesa.then(
  (valor) => console.log(valor), //Resolver
  (error) => console.log(error) //Rechazar
);

miPromesa
  .then((valor) => console.log(valor))
  .catch((error) => console.log(error));
*/

let promesa = new Promise((resolver) => {
  //console.log("Se crea la promesa");
  setTimeout(() => resolver("Se resolvio la promesa"), 3000);
  //console.log("Se termina la promesa");
});

//promesa.then((valor) => console.log(valor));

async function miFuncionConPromesa(){
  return 'Saludos con promesa y async';
}

miFuncionConPromesa().then((valor) => console.log(valor));