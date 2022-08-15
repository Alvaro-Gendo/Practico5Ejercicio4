function obtenerHora() {
  let fechaActual = new Date();
    
  let diaSemanas = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sábado",
  ];

  let meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  let fecha = document.querySelector("#fecha");

  fecha.innerHTML = `${diaSemanas[fechaActual.getDay()]} 
  ${fechaActual.getDate()} de ${ meses[fechaActual.getMonth()]} del ${fechaActual.getFullYear()}`;

  let parrafoHora = document.querySelector("#hora");

  let segundos = fechaActual.getSeconds();
  if (segundos < 10) {
    segundos = "0" + segundos;
  }

  let minutos = fechaActual.getMinutes()
  if (minutos < 10 ){
    minutos = "0" + minutos;
  }
  let hora = fechaActual.getHours()
  if (hora < 10 ){
    hora = "0" + hora;
  }
 let horaDia = ""
 if (horaDia < 12){
    horaDia = "am"
 }else{
    horaDia = "pm"
 }
  parrafoHora.innerHTML = `${hora}:${minutos}:${segundos} ${horaDia}`;
}


setInterval(obtenerHora, 1000)