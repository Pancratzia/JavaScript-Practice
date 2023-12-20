const ingresos = [
  new Ingreso("Salario", 2100),
  new Ingreso("Venta de un auto", 15000),
];

const egresos = [
  new Egreso("Alquiler", 900),
  new Egreso("Comida", 300),
  new Egreso("Deudas", 1720),
  new Egreso("Moto Nueva", 5000),
];

let ingresosTotales = 0;
let egresosTotales = 0;

const cargarApp = () => {
  cargarCabecero();
  cargarIngresos();
  cargarEgresos();
};

const totalizar = (array) => {
  let total = 0;
  for (let element of array) {
    total += element.valor;
  }

  return total;
};

const cargarCabecero = () => {
  ingresosTotales = totalizar(ingresos);
  egresosTotales = totalizar(egresos);

  const presupuesto = ingresosTotales - egresosTotales;
  const porcentajeEgreso = egresosTotales / ingresosTotales;

  document.getElementById("presupuesto").innerHTML = formatoMoneda(presupuesto);
  document.getElementById("porcentaje").innerHTML =
    formatoPorcentaje(porcentajeEgreso);
  document.getElementById("ingresos").innerHTML =
    formatoMoneda(ingresosTotales);
  document.getElementById("egresos").innerHTML = formatoMoneda(egresosTotales);
};

const formatoMoneda = (valor) => {
  return valor.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  });
};

const formatoPorcentaje = (valor) => {
  return valor.toLocaleString("en-US", {
    style: "percent",
    minimumFractionDigits: 2,
  });
};

const cargarIngresos = () => {
  let ingresosHTML = "";
  for (let ingreso of ingresos) {
    ingresosHTML += crearIngresoHTML(ingreso);
  }
  document.getElementById("lista-ingresos").innerHTML = ingresosHTML;
};

const crearIngresoHTML = (ingreso) => {
  let ingresoHTML = `
    <div id='lista-ingresos'>
        <div class="elemento limpiarEstilos">
            <div class="elemento_descripcion">${ingreso.descripcion}</div>
                <div class="derecha limpiarEstilos">
                    <div class="elemento_valor">+ ${formatoMoneda(
                      ingreso.valor
                    )}</div>
                    <div class="elemento_eliminar">
                        <button onclick='eliminarIngreso(${ingreso.id})' class='elemento_eliminar--btn'>
                            <ion-icon name="close-circle-outline"></ion-icon>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>`;

  return ingresoHTML;
};

const cargarEgresos = () => {
  let egresosHTML = "";
  for (let egreso of egresos) {
    egresosHTML += crearEgresoHTML(egreso);
  }
  document.getElementById("lista-egresos").innerHTML = egresosHTML;
};

const crearEgresoHTML = (egreso) => {
  let egresoHTML = `
    <div id='lista-egresos'>
        <div class="elemento limpiarEstilos">
            <div class="elemento_descripcion">${egreso.descripcion}</div>
                <div class="derecha limpiarEstilos">
                    <div class="elemento_valor">- ${formatoMoneda(
                      egreso.valor
                    )}</div>
                    <div class="elemento_porcentaje">${formatoPorcentaje(egreso.valor/egresosTotales)}</div>
                    <div class="elemento_eliminar">
                        <button onclick='eliminarEgreso(${egreso.id})' class='elemento_eliminar--btn'>
                            <ion-icon name="close-circle-outline"></ion-icon>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>`;

  return egresoHTML;
};

const eliminarIngreso = (id) => {
  const ingreso = ingresos.findIndex((ingreso) => {
    return ingreso.id === id;
  });

  ingresos.splice(ingreso, 1);
  cargarCabecero();
  cargarIngresos();
}

const eliminarEgreso = (id) => {
  const egreso = egresos.findIndex((egreso) => {
    return egreso.id === id;
  });

  egresos.splice(egreso, 1);
  cargarCabecero();
  cargarEgresos();
}

