const div = document.getElementById("div_container");

function clickDiv() {
    alert("Hola! Soy el div.");
}

div.addEventListener('click', clickDiv);