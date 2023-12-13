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

//miFuncionConPromesa().then((valor) => console.log(valor));

async function funcionConPromesaYAwait(){
  let miPromesa = new Promise((resolver) => {
    resolver("Se resolvió la promesa con await");
  })

  console.log(await miPromesa);
}

//funcionConPromesaYAwait();


async function funcionConPromesaYAwaitYTimeout(){
  console.log("inicio de la función");
  let miPromesa = new Promise((resolver) => {
    setTimeout(() => resolver("Se resolvió la promesa con await y timeout luego de 3 segundos"), 3000);
  });
  console.log(await miPromesa);
  console.log("fin de la función");
}

funcionConPromesaYAwaitYTimeout();