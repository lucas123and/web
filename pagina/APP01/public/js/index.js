"use strict";
let timeoutId;
let randomNumber;
let botones = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35"];
let botonesObjetivo = "";
let palabras = ["espejito", "elefante", "escalera", "limonada", "mariposa", "sandwich", "galletas", "hermanos", "pantalla", "vestidor", "monedero", "alfombra", "cascabel", "marinero", "edificio", "vendedor", "patineta", "gimnasio", "lavadora", "escalada", "universo", "creativo", "discutir", "diplomas", "navegaba", "alcaldia", "almohada", "languido", "artesano", "pianista", "arbolito", "montañas", "camarero", "donacion", "cocinero", "literato", "estudios", "buceador", "pastores", "tecnicos", "emprende", "practico", "hormigas", "moldeado", "laminero", "esmerada", "acertijo", "carpista", "anulador", "reptiles", "escapada", "cercano",];
let palabraObjetivo = "";
let suma = 1;
let interval = 200000;
let cero = "";
let uno = "";
let dos = "";
let tres = "";
let cuatro = "";
let cinco = "";
let facile = "";
let pilas = 0;
let time;
showContent("Template");
function teclado() {
    showContent("nivelTemplate");
}
function historia() {
    showContent("historia");
    facil();
}
function facilm() {
    showContent("mouse");
    cero = "";
    uno = "1";
    dos = "2";
    tres = "3";
    cuatro = "4";
    cinco = "5";
    const facil = document.getElementById("facil");
    if (facil) {
        facile = facil.innerText = "VOLVER";
        facil.addEventListener('click', () => {
            showContent("Nivelmouse");
        });
    }
    clearTimeout(time);
    time = window.setTimeout(() => FIN(), 10000);
}
function facil() {
    showContent("numero");
    interval = 5000;
    cero = "";
    uno = "1";
    dos = "2";
    tres = "3";
    cuatro = "4";
    cinco = "5";
    clearTimeout(timeoutId);
    timeoutId = window.setTimeout(() => mainTimer("numero"), interval);
    const facil = document.getElementById("facil");
    if (facil) {
        facile = facil.innerText = "FACIL";
        facil.addEventListener('click', () => {
            showContent("nivelTemplate");
        });
    }
}
function medio() {
    showContent("numero");
    interval = 3000;
    cero = "";
    uno = "";
    dos = "";
    tres = "1";
    cuatro = "2";
    cinco = "3";
    clearTimeout(timeoutId);
    timeoutId = window.setTimeout(() => mainTimer("numero"), interval);
    const facil = document.getElementById("facil");
    if (facil) {
        facile = facil.innerText = "MEDIO";
        facil.addEventListener('click', () => {
            showContent("nivelTemplate");
        });
    }
}
function dificil() {
    showContent("numero");
    interval = 2000;
    cero = "";
    uno = "";
    dos = "";
    tres = "";
    cuatro = "1";
    cinco = "2";
    clearTimeout(timeoutId);
    timeoutId = window.setTimeout(() => mainTimer("numero"), interval);
    const facil = document.getElementById("facil");
    if (facil) {
        facile = facil.innerText = "DIFICIL";
        facil.addEventListener('click', () => {
            showContent("nivelTemplate");
        });
    }
}
function facil1() {
    showContent("palabra");
    interval = 5000;
    cero = "";
    uno = "1";
    dos = "2";
    tres = "3";
    cuatro = "4";
    cinco = "5";
    clearTimeout(timeoutId);
    timeoutId = window.setTimeout(() => mainTimer("palabra"), interval);
    const facil = document.getElementById("facil");
    if (facil) {
        facile = facil.innerText = "FACIL";
        facil.addEventListener('click', () => {
            showContent("nivelTemplate");
        });
    }
}
function medio2() {
    showContent("palabra");
    interval = 3000;
    cero = "";
    uno = "";
    dos = "";
    tres = "1";
    cuatro = "2";
    cinco = "3";
    clearTimeout(timeoutId);
    timeoutId = window.setTimeout(() => mainTimer("palabra"), interval);
    const facil = document.getElementById("facil");
    if (facil) {
        facile = facil.innerText = "MEDIO";
        facil.addEventListener('click', () => {
            showContent("nivelTemplate");
        });
    }
}
function dificil3() {
    showContent("palabra");
    interval = 2000;
    cero = "";
    uno = "";
    dos = "";
    tres = "";
    cuatro = "1";
    cinco = "2";
    clearTimeout(timeoutId);
    timeoutId = window.setTimeout(() => mainTimer("palabra"), interval);
    const facil = document.getElementById("facil");
    if (facil) {
        facile = facil.innerText = "DIFICIL";
        facil.addEventListener('click', () => {
            showContent("nivelTemplate");
        });
    }
}
function volver() {
    clearTimeout(time);
    showContent("Template");
    pilas = 0;
}
function confirm() {
    showContent("mouse");
    const resultado = document.getElementById("resultados");
    const facil = document.getElementById("facil");
    resultado.innerText = "Intentos:" + pilas;
    if (facil) {
        facil.innerText = facile;
        facil.addEventListener('click', () => {
            showContent("Template");
        });
    }
}
function cambiarBoton() {
    botonesObjetivo = botones[Math.floor(Math.random() * botones.length)];
    const botonElegido = document.getElementById(botonesObjetivo);
    if (botonElegido) {
        botonElegido.innerText = "AQUI";
        botonElegido.addEventListener('click', () => {
            pilas++;
            confirm();
        });
    }
}
function FIN() {
    showContent("FIN");
    const resultado = document.getElementById("resultados");
    const facil = document.getElementById("facil");
    resultado.innerText = "Intentos:" + pilas;
    if (facil) {
        facil.innerText = facile;
        facil.addEventListener('click', () => {
            showContent("Template");
        });
    }
}
function cambiarNumero() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    const gatoElement = document.getElementById("gato");
    if (gatoElement) {
        gatoElement.innerText = randomNumber.toString();
    }
}
function cambiarPalabra() {
    palabraObjetivo = palabras[Math.floor(Math.random() * palabras.length)];
    const gatoElement = document.getElementById("gato");
    if (gatoElement) {
        gatoElement.innerText = palabraObjetivo;
    }
}
function reset2() {
    showContent("mouse");
    clearTimeout(time);
    facilm();
    const facil = document.getElementById("facil");
    pilas = 0;
    if (facil) {
        facil.innerText = facile;
        facil.addEventListener('click', () => {
            showContent("Nivelmouse");
        });
    }
}
function resett() {
    showContent("numero");
    const facil = document.getElementById("facil");
    if (facil) {
        facil.innerText = facile;
        facil.addEventListener('click', () => {
            showContent("nivelTemplate");
        });
    }
}
function reset() {
    showContent("palabra");
    const facil = document.getElementById("facil");
    if (facil) {
        facil.innerText = facile;
        facil.addEventListener('click', () => {
            showContent("nivelTemplate");
        });
    }
}
function resetGame(contenido) {
    const resultadoElement = document.getElementById("resultados");
    const userInputElement = document.getElementById("userInput");
    if (resultadoElement)
        resultadoElement.innerText = "";
    if (userInputElement)
        userInputElement.value = "";
    clearTimeout(timeoutId);
    switch (contenido) {
        case "numero":
            cambiarNumero();
            timeoutId = window.setTimeout(() => mainTimer("numero"), interval);
            const tempo = document.getElementById("tempo");
            setTimeout(() => tempo.innerText = cero, 5000);
            setTimeout(() => tempo.innerText = uno, 4000);
            setTimeout(() => tempo.innerText = dos, 3000);
            setTimeout(() => tempo.innerText = tres, 2000);
            setTimeout(() => tempo.innerText = cuatro, 1000);
            setTimeout(() => tempo.innerText = cinco, 0);
            break;
        case "palabra":
            cambiarPalabra();
            timeoutId = window.setTimeout(() => mainTimer("palabra"), interval);
            const tempos = document.getElementById("tempo");
            setTimeout(() => tempos.innerText = cero, 5000);
            setTimeout(() => tempos.innerText = uno, 4000);
            setTimeout(() => tempos.innerText = dos, 3000);
            setTimeout(() => tempos.innerText = tres, 2000);
            setTimeout(() => tempos.innerText = cuatro, 1000);
            setTimeout(() => tempos.innerText = cinco, 0);
            break;
        case "mouse":
            cambiarBoton();
            break;
    }
}
function mainTimer(contenido) {
    const userInputElement = document.getElementById("userInput");
    const resultadosElement = document.getElementById("resultados");
    const inputNumbers = userInputElement.value;
    const inputNumber = parseInt(userInputElement.value);
    switch (contenido) {
        case "numero":
            if (inputNumber == randomNumber) {
                resetGame(contenido);
                resultadosElement.innerText = "¡Bien hecho! Intentos: " + suma++;
                ;
            }
            else {
                suma--;
                resultadosElement.innerText = "¡Mal hecho! Intentos: " + suma + "     ¡RESET para volver a intentar!";
            }
            break;
        case "palabra":
            if (inputNumbers === palabraObjetivo) {
                resetGame(contenido);
                resultadosElement.innerText = "¡Bien hecho! Intentos: " + suma++;
            }
            else {
                suma--;
                resultadosElement.innerText = "¡Mal hecho! Intentos: " + suma + "     ¡RESET para volver a intentar!";
            }
            break;
    }
}
function showContent(contenido) {
    let temp = null;
    switch (contenido) {
        case "FIN":
            temp = document.getElementById("FIN");
            suma = 1;
            break;
        case "historia":
            temp = document.getElementById("historia");
            suma = 1;
            break;
        case "mouse":
            temp = document.getElementById("mouse");
            suma = 1;
            suma++;
            break;
        case "Resultado":
            temp = document.getElementById("Resultado");
            suma = 1;
            break;
        case "Template":
            temp = document.getElementById("Template");
            suma = 1;
            break;
        case "nivelTemplate":
            temp = document.getElementById("nivelTemplate");
            suma = 1;
            break;
        case "numero":
            temp = document.getElementById("numeroTemplate");
            suma = 1;
            break;
        case "palabra":
            temp = document.getElementById("palabraTemplate");
            suma = 1;
            break;
    }
    if (temp) {
        const clon = temp.content.cloneNode(true);
        const contenedor = document.getElementById("contenedor");
        if (contenedor) {
            contenedor.replaceChildren(clon);
            resetGame(contenido);
            const userInputElement = document.getElementById("userInput");
            if (userInputElement)
                userInputElement.focus();
        }
    }
}
