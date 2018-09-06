let cicloCorto = 1;
let cicloLargo = 1;

function calcTiempo(tiempo) {
  let deadline = Date.parse(new Date()) + tiempo * 60 * 1000;
  let tiempoRestante;
  let minutes, seconds;
  /* let reloj = (document.getElementById("clock").innerHTML = "clock"); */
  let timeInterval = setInterval(function() {
    tiempoRestante = deadline - Date.parse(new Date());
    minutes = Math.floor((tiempoRestante / 1000 / 60) % 60);
    seconds = Math.floor((tiempoRestante / 1000) % 60);
    document.getElementById("clock").innerHTML = `${minutes}:${seconds}`;
    if (tiempoRestante === 0) {
      clearInterval(timeInterval);
      calcTiempo(cicloCorto);
    }
  }, 1000);
}

calcTiempo(cicloLargo);
