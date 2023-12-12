let miPromesa = new Promise((resolver, rechazar) => {
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
