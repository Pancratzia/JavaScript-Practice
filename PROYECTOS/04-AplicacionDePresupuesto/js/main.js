const ingresos = [
    new Ingreso('Salario', 2100.00),
    new Ingreso('Venta de un auto', 15000.00)
];

const egresos = [
    new Egreso('Alquiler', 900.00),
    new Egreso('Comida', 300.00),
    new Egreso('Deudas', 1720.00)
]

const cargarApp = () => {
    cargarCabecero();
}

const totalizar = (array) => {
    let total = 0;
    for (let element of array) {
        total += element.valor;
    }

    return total;
}   


const cargarCabecero = () => {
    const ingresosTotales = totalizar(ingresos);
    const egresosTotales = totalizar(egresos);

    const presupuesto = ingresosTotales - egresosTotales;
    const porcentajeEgreso = (egresosTotales / ingresosTotales);

    document.getElementById('presupuesto').innerHTML = formatoMoneda(presupuesto);;
    document.getElementById('porcentaje').innerHTML = formatoPorcentaje(porcentajeEgreso);
    document.getElementById('ingresos').innerHTML = formatoMoneda(ingresosTotales);
    document.getElementById('egresos').innerHTML = formatoMoneda(egresosTotales);
}

const formatoMoneda = (valor) => {
    return valor.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2
    });
}

const formatoPorcentaje = (valor) => {
    return valor.toLocaleString('en-US', {
        style: 'percent',
        minimumFractionDigits: 2
    });
}