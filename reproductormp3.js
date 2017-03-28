
function misCanciones() {
  document.getElementById("miAudio").play();
}

function parar() {
  document.getElementById("miAudio").load();
}

function espera() {
  document.getElementById("miAudio").pause();
}

function subirvolumen() {
  document.getElementById("miAudio").volume +=.1;
}

function bajarvolumen() {
  document.getElementById("miAudio").volume -=.1;
}

function duracion() {
  document.getElementById("miAudio").duration = document.getElementById("tiempo").max;
  document.getElementById("miAudio").currentTime = document.getElementById("tiempo").value;
}
