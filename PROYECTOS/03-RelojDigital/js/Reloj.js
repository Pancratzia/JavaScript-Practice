const MESES = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];
const DIAS = [
  "Domingo",
  "Lunes",
  "Martes",
  "Miércoles",
  "Jueves",
  "Viernes",
  "Sabado",
];

const mostratReloj = () => {
  const fecha = new Date();

  let horas = formatoHora(fecha.getHours());
  let minutos = formatoHora(fecha.getMinutes());
  let segundos = formatoHora(fecha.getSeconds());

  document.getElementById("hora").innerHTML = `${horas}:${minutos}:${segundos}`;

  const diaSemana = DIAS[fecha.getDay()];
  const dia = fecha.getDate();
  const mes = MESES[fecha.getMonth()];
  const years = fecha.getFullYear();

  const fechaTexto = `${diaSemana}, ${dia} de ${mes} de ${years}`;

  document.getElementById("fecha").innerHTML = fechaTexto;
};

const formatoHora = (hora) => {
  return hora < 10 ? `0${hora}` : hora;
};

setInterval(mostratReloj, 1000);
