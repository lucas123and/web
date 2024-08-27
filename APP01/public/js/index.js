"use strict";
var timeoutId;
var randomNumber;
var botones = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35"];
var botonesObjetivo = "";
var palabras = ["casa", "mesa", "tasa", "mano", "pelo", "saco", "ruben", "tomas", "luz", "plomo", "carro", "sol", "cielo", "jugar", "perro", "gato", "amarillo", "verde", "azul", "rojo", "naranja", "plata", "oro", "agua", "fuego", "aire", "tierra", "hola", "adios", "amigo", "familia", "calle", "ciudad", "pueblo", "montaña", "playa", "rio", "lago", "bosque", "arbol", "flor", "fruta", "verdura", "animal", "planta", "libro", "papel", "lapiz", "escuela", "maestro", "alumno", "clase", "estudiar", "aprender", "conocer", "saber", "hablar", "escuchar", "ver", "mirar", "jugar", "ganar", "perder", "correr", "caminar", "saltar", "nadar", "volar", "comer", "beber", "dormir", "despertar", "trabajar", "descansar", "divertirse", "reir", "llorar", "gritar", "susurrar", "cantar", "bailar", "tocar", "instrumento", "musica", "arte", "pintar", "dibujar", "crear", "imaginar", "soñar", "realidad", "fantasia", "historia", "mito", "leyenda", "cultura", "tradicion", "costumbre", "religion", "creencia", "filosofia", "ciencia", "tecnologia", "fisica", "quimica", "biologia", "matematicas", "geografia", "historia", "literatura", "poesia", "novela", "cuento", "ensayo", "periodismo", "noticia", "medio", "comunicacion", "internet", "redes", "sociales", "videojuego", "pelicula", "teatro", "obra", "actor", "actriz", "director", "escenario", "publico", "espectaculo", "deporte", "futbol", "baloncesto", "tenis", "natacion", "atletismo", "ciclismo", "automovilismo", "ajedrez", "videojuego", "carta", "juego", "azar", "suerte", "azaroso", "azarada", "suertudo", "desafortunado", "adivinar", "acertar", "fallar", "equivocar", "error", "correcto", "incorrecto", "verdad", "mentira", "falso", "verdadero", "real", "irreal", "imaginario", "existir", "realidad", "fantasia", "sueño", "pesadilla", "dormido", "despierto", "conciencia", "inconsciencia", "pensar", "razonar", "entender", "comprension", "inteligencia", "sabiduria", "genio", "idiota", "tonto", "listo", "astuto", "ingenuo", "credulo", "desconfiado", "seguro", "inseguro", "valiente", "cobarde", "fuerte", "debil", "resistente", "fragil", "duro", "blando", "caliente", "frio", "templado", "seco", "humedo", "mojado", "limpio", "sucio", "ordenado", "desordenado", "nuevo", "viejo", "joven", "viejo", "nacer", "crecer", "vivir", "morir", "muerte", "vida", "vivo", "muerto", "enterrar", "cementerio", "tumba", "sepultura", "ritual", "ceremonia", "costumbre", "tradicion", "religioso", "creencia", "espiritual", "alma", "espiritu", "fantasma", "aparicion", "misterio", "enigma", "secreto", "oculto", "revelado", "descubierto", "conocido", "desconocido", "descubrir", "explorar", "viajar", "aventura", "viajero", "explorador", "descubridor", "conquistar", "colonizar", "imperio", "reino", "pais", "nacion", "estado", "gobierno", "politica", "politico", "democracia", "dictadura", "monarquia", "republica", "constitucion", "ley", "legal", "ilegal", "justicia", "injusticia", "derecho", "derechos", "humanos", "civil", "criminal", "abogado", "juez", "fiscal", "prision", "carcel", "delito", "culpa", "inocencia", "culpable", "inocente", "condenar", "condena", "condicional", "libertad", "libre", "esclavo", "esclavitud", "trabajo", "trabajador", "empleo", "desempleo", "riqueza", "pobreza"];
var palabraObjetivo = "";
var suma = 1;
var interval = 200000;
var cero = "";
var uno = "";
var dos = "";
var tres = "";
var cuatro = "";
var cinco = "";
var facile = "";
var pilas = 0;
var time;
showContent("Template");
function teclado() {
    showContent("nivelTemplate");
}
function facilm() {
    showContent("mouse");
    cero = "";
    uno = "1";
    dos = "2";
    tres = "3";
    cuatro = "4";
    cinco = "5";
    var facil = document.getElementById("facil");
    if (facil) {
        facile = facil.innerText = "VOLVER";
        facil.addEventListener('click', function () {
            showContent("Nivelmouse");
        });
    }
    clearTimeout(time);
    time = window.setTimeout(function () { return FIN(); }, 10000);
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
    timeoutId = window.setTimeout(function () { return mainTimer("numero"); }, interval);
    var facil = document.getElementById("facil");
    if (facil) {
        facile = facil.innerText = "FACIL";
        facil.addEventListener('click', function () {
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
    timeoutId = window.setTimeout(function () { return mainTimer("numero"); }, interval);
    var facil = document.getElementById("facil");
    if (facil) {
        facile = facil.innerText = "MEDIO";
        facil.addEventListener('click', function () {
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
    timeoutId = window.setTimeout(function () { return mainTimer("numero"); }, interval);
    var facil = document.getElementById("facil");
    if (facil) {
        facile = facil.innerText = "DIFICIL";
        facil.addEventListener('click', function () {
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
    timeoutId = window.setTimeout(function () { return mainTimer("palabra"); }, interval);
    var facil = document.getElementById("facil");
    if (facil) {
        facile = facil.innerText = "FACIL";
        facil.addEventListener('click', function () {
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
    timeoutId = window.setTimeout(function () { return mainTimer("palabra"); }, interval);
    var facil = document.getElementById("facil");
    if (facil) {
        facile = facil.innerText = "MEDIO";
        facil.addEventListener('click', function () {
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
    timeoutId = window.setTimeout(function () { return mainTimer("palabra"); }, interval);
    var facil = document.getElementById("facil");
    if (facil) {
        facile = facil.innerText = "DIFICIL";
        facil.addEventListener('click', function () {
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
    var resultado = document.getElementById("resultados");
    var facil = document.getElementById("facil");
    resultado.innerText = "Intentos:" + pilas;
    if (facil) {
        facil.innerText = facile;
        facil.addEventListener('click', function () {
            showContent("Template");
        });
    }
}
function cambiarBoton() {
    botonesObjetivo = botones[Math.floor(Math.random() * botones.length)];
    var botonElegido = document.getElementById(botonesObjetivo);
    if (botonElegido) {
        botonElegido.innerText = "AQUI";
        botonElegido.addEventListener('click', function () {
            pilas++;
            confirm();
        });
    }
}
function FIN() {
    showContent("FIN");
    var resultado = document.getElementById("resultados");
    var facil = document.getElementById("facil");
    resultado.innerText = "Intentos:" + pilas;
    if (facil) {
        facil.innerText = facile;
        facil.addEventListener('click', function () {
            showContent("Template");
        });
    }
}
function cambiarNumero() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    var gatoElement = document.getElementById("gato");
    if (gatoElement) {
        gatoElement.innerText = randomNumber.toString();
    }
}
function cambiarPalabra() {
    palabraObjetivo = palabras[Math.floor(Math.random() * palabras.length)];
    var gatoElement = document.getElementById("gato");
    if (gatoElement) {
        gatoElement.innerText = palabraObjetivo;
    }
}
function reset2() {
    showContent("mouse");
    clearTimeout(time);
    facilm();
    var facil = document.getElementById("facil");
    pilas = 0;
    if (facil) {
        facil.innerText = facile;
        facil.addEventListener('click', function () {
            showContent("Nivelmouse");
        });
    }
}
function resett() {
    showContent("numero");
    var facil = document.getElementById("facil");
    if (facil) {
        facil.innerText = facile;
        facil.addEventListener('click', function () {
            showContent("nivelTemplate");
        });
    }
}
function reset() {
    showContent("palabra");
    var facil = document.getElementById("facil");
    if (facil) {
        facil.innerText = facile;
        facil.addEventListener('click', function () {
            showContent("nivelTemplate");
        });
    }
}
function resetGame(contenido) {
    var resultadoElement = document.getElementById("resultados");
    var userInputElement = document.getElementById("userInput");
    if (resultadoElement)
        resultadoElement.innerText = "";
    if (userInputElement)
        userInputElement.value = "";
    clearTimeout(timeoutId);
    switch (contenido) {
        case "mouse":
            cambiarBoton();
            break;
        case "numero":
            cambiarNumero();
            timeoutId = window.setTimeout(function () { return mainTimer("numero"); }, interval);
            var tempo_1 = document.getElementById("tempo");
            setTimeout(function () { return tempo_1.innerText = cero; }, 5000);
            setTimeout(function () { return tempo_1.innerText = uno; }, 4000);
            setTimeout(function () { return tempo_1.innerText = dos; }, 3000);
            setTimeout(function () { return tempo_1.innerText = tres; }, 2000);
            setTimeout(function () { return tempo_1.innerText = cuatro; }, 1000);
            setTimeout(function () { return tempo_1.innerText = cinco; }, 0);
            break;
        case "palabra":
            cambiarPalabra();
            timeoutId = window.setTimeout(function () { return mainTimer("palabra"); }, interval);
            var tempos_1 = document.getElementById("tempo");
            setTimeout(function () { return tempos_1.innerText = cero; }, 5000);
            setTimeout(function () { return tempos_1.innerText = uno; }, 4000);
            setTimeout(function () { return tempos_1.innerText = dos; }, 3000);
            setTimeout(function () { return tempos_1.innerText = tres; }, 2000);
            setTimeout(function () { return tempos_1.innerText = cuatro; }, 1000);
            setTimeout(function () { return tempos_1.innerText = cinco; }, 0);
            break;
    }
}
function mainTimer(contenido) {
    var userInputElement = document.getElementById("userInput");
    var resultadosElement = document.getElementById("resultados");
    var inputNumbers = userInputElement.value;
    var inputNumber = parseInt(userInputElement.value);
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
    var temp = null;
    switch (contenido) {
        case "FIN":
            temp = document.getElementById("FIN");
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
        var clon = temp.content.cloneNode(true);
        var contenedor = document.getElementById("contenedor");
        if (contenedor) {
            contenedor.replaceChildren(clon);
            resetGame(contenido);
            var userInputElement = document.getElementById("userInput");
            if (userInputElement)
                userInputElement.focus();
        }
    }
}
