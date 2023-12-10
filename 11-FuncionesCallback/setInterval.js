//Set Interval llama a la función callback cada cierto intervalo de tiempo (milisegundos)

let reloj = () => {
    let fecha = new Date();
    console.log(`${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`);
}

setInterval(reloj, 1000);


console.log("Hola. Yo me ejecuto una sola vez al inicio del programa");