/*

En Rovaniemi, Finlandia 🇫🇮, los trineos 🛷 se alquilan por intervalos de tiempo. Cada intervalo se representa como un array de dos elementos, donde el primer elemento es el inicio del alquiler y el segundo es el final.

Por ejemplo, el array [2, 7] representa un alquiler que comienza en la hora 2 y termina en la hora 7. El problema es que a veces los intervalos se superponen entre sí, haciendo que sea un lío entender de qué hora a qué hora se alquiló el trineo.

Nos piden que, para simplificar la tarea de calcular el tiempo total de alquiler, escribamos una función que fusione todos los intervalos superpuestos y devolver un array de intervalos ordenados:

optimizeIntervals([
  [5, 8],
  [2, 7],
  [3, 4]
]) // [[2, 8]]

optimizeIntervals([
  [1, 3],
  [8, 10],
  [2, 6]
]) // [[1, 6], [8, 10]]

optimizeIntervals([
  [3, 4],
  [1, 2],
  [5, 6]
]) // [[1, 2], [3, 4], [5, 6]]
Puedes asumir que el primer elemento de cada intervalo siempre es menor o igual que el segundo elemento. Pero los intervalos no están necesariamente ordenados.

Los números de horas pueden llegar hasta la cifra 9999.

*/

function optimizeIntervals(intervals) {
  intervals.sort((a, b) => a[0] - b[0]); // Ordenamos los intervalos por hora de inicio

  const result = [intervals[0]]; // Agregamos el primer intervalo

  for (const interval of intervals) {
    const lastInterval = result[result.length - 1]; // Obtenemos el intervalo anterior. En el primer caso, el intervalo anterior es el primer intervalo (0)

    if (interval[0] <= lastInterval[1]) {
      // Si la hora de inicio del intervalo actual es menor o igual que la hora de inicio del intervalo anterior
      lastInterval[1] = Math.max(lastInterval[1], interval[1]);
    } else {
      // Si la hora de inicio del intervalo actual es mayor que la hora de inicio del intervalo anterior
      result.push(interval);
    }
  }

  return result;
}

console.log(
  optimizeIntervals([
    [5, 8],
    [2, 7],
    [3, 4],
  ])
); // [[2, 8]]

/*console.log(
  optimizeIntervals([
    [1, 3],
    [8, 10],
    [2, 6],
  ])
); // [[1, 6], [8, 10]]

console.log(
  optimizeIntervals([
    [3, 4],
    [1, 2],
    [5, 6],
  ])
); // [[1, 2], [3, 4], [5, 6]]*/
