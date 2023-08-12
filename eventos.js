function manejarClick(event) {
    event.stopPropagation(); // Detener la propagación del evento
    alert("Hola! Soy el botón.");
}

const div = document.getElementById("div_container");

function clickDiv() {
    alert("Hola! Soy el div.");
}

div.addEventListener('click', clickDiv);