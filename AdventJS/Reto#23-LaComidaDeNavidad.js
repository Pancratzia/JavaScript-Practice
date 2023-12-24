/*

¡Santa 🎅 está organizando una gran cena navideña 🫓 y quiere asegurarse de que todos los platos sean únicos y variados!

Te da una lista de platos navideños donde cada elemento consiste en una lista de strings que comienza con el nombre del plato, seguido de todos los ingredientes utilizados para su preparación.

Tienes que escribir una función que agrupe los platos por ingredientes siempre que haya al menos 2 platos que los contengan.

Así que devolvemos un array de arrays donde la primera posición es el nombre del ingrediente y el resto los nombres de los platos.

Tanto la lista de ingredientes como los platos deben estar ordenados alfabéticamente.

const dishes = [
  ["christmas turkey", "turkey", "sauce", "herbs"],
  ["cake", "flour", "sugar", "egg"],
  ["hot chocolate", "chocolate", "milk", "sugar"],
  ["pizza", "sauce", "tomato", "cheese", "ham"],
]

organizeChristmasDinner(dishes)

/*

"sauce" está en 2 platos: "christmas turkey" y "pizza".
"sugar" está en 2 platos: "cake" y "hot chocolate".
El resto de ingredientes solo aparecen en un plato, por lo que no los mostramos.

Enseñamos primero "sauce" porque alfabéticamente está antes que "sugar".
Y los platos de cada ingrediente también están ordenados alfabéticamente.

[
  ["sauce", "christmas turkey", "pizza"],
  ["sugar", "cake", "hot chocolate"]
]
*/
/*Ten en cuenta que:

Todos los nombres de los platos son diferentes.
Los nombres de los ingredientes para un plato dado son distintos entre sí.
Si no hay ingredientes repetidos, devolvemos un array vacío.

*/

function organizeChristmasDinner(dishes) {
  const ingredients = {}

  for (let dish of dishes)
    for (let ingredient of dish.slice(1))
      ingredients[ingredient] ?
        ingredients[ingredient].push(dish[0]) :
        ingredients[ingredient] = [dish[0]]

  let output = []
  for (let key of Object.keys(ingredients).sort())
    if (ingredients[key].length > 1)
      output.push([key, ...ingredients[key].sort()])

  return output
}