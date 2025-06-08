let timeoutId: number;
let randomNumber: number;
let botones: string[] = ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31","32","33","34","35"]
let botonesObjetivo: string = ""
;let palabraObjetivo: string = "";
let suma: number = 1;
let interval: number = 200000;
let cero: string = ""
let uno: string = ""
let dos: string = ""
let tres: string = ""
let cuatro: string = ""
let cinco: string = ""
let facile:string =""
let pilas:number = 0
let time:number
showContent("Template");
function teclado():void {
  showContent("nivelTemplate");
}
function historia(){
  showContent("historia")
  facil()
}
function facilm(): void {
  showContent("mouse")
  cero = ""
  uno = "1";
  dos = "2";
  tres = "3";
  cuatro = "4";
  cinco = "5";
 const facil = document.getElementById("facil") as HTMLButtonElement;
 if (facil) { 
    facile = facil.innerText = "VOLVER"
    facil.addEventListener('click', () => {
      showContent("Nivelmouse")
     })
 }
 clearTimeout(time)
 time = window.setTimeout(() => FIN(),10000);
}

function facil(): void {
   showContent("numero")
  interval = 5000;
  cero = ""
  uno = "1";
  dos = "2";
  tres = "3";
  cuatro = "4";
  cinco = "5";
  clearTimeout(timeoutId);
  timeoutId = window.setTimeout(() => mainTimer("numero"), interval);
  const facil = document.getElementById("facil") as HTMLButtonElement;
  if (facil) { 
     facile = facil.innerText = "FACIL"
      facil.addEventListener('click', () => {
        showContent("nivelTemplate")
      })
  }
  
}

function medio(): void {
  showContent("numero")
 interval = 3000;
 cero = ""
 uno = ""
 dos = ""
 tres = "1"
 cuatro = "2";
 cinco = "3";
 clearTimeout(timeoutId);
 timeoutId = window.setTimeout(() => mainTimer("numero"), interval);
 const facil = document.getElementById("facil") as HTMLButtonElement;
 if (facil) {
     facile = facil.innerText = "MEDIO"
     facil.addEventListener('click', () => {
       showContent("nivelTemplate")
     })
 }
}

function dificil(): void {
  showContent("numero")
 interval = 2000;
 cero = ""
 uno = ""
 dos = ""
 tres = ""
 cuatro = "1";
 cinco = "2";
 clearTimeout(timeoutId);
 timeoutId = window.setTimeout(() => mainTimer("numero"), interval);
 const facil = document.getElementById("facil") as HTMLButtonElement;
 if (facil) {
     facile = facil.innerText = "DIFICIL"
     facil.addEventListener('click', () => {
       showContent("nivelTemplate")
     })
 }
}

function facil1(): void {
  showContent("palabra")
 interval = 5000;
 cero = ""
 uno = "1"
 dos = "2"
 tres = "3"
 cuatro = "4";
 cinco = "5";
 clearTimeout(timeoutId);
 timeoutId = window.setTimeout(() => mainTimer("palabra"), interval);
 const facil = document.getElementById("facil") as HTMLButtonElement;
 if (facil) {
     facile = facil.innerText = "FACIL"
     facil.addEventListener('click', () => {
       showContent("nivelTemplate")
     })
 }
}

function medio2(): void {
  showContent("palabra")
 interval = 3000;
 cero = ""
 uno = ""
 dos = ""
 tres = "1"
 cuatro = "2";
 cinco = "3";
 clearTimeout(timeoutId);
 timeoutId = window.setTimeout(() => mainTimer("palabra"), interval);
 const facil = document.getElementById("facil") as HTMLButtonElement;
 if (facil) {
     facile = facil.innerText = "MEDIO"
     facil.addEventListener('click', () => {
       showContent("nivelTemplate")
     })
 }
}

function dificil3(): void {
  showContent("palabra")
 interval = 2000;
 cero = ""
 uno = ""
 dos = ""
 tres = ""
 cuatro = "1";
 cinco = "2";
 clearTimeout(timeoutId);
 timeoutId = window.setTimeout(() => mainTimer("palabra"), interval);
 const facil = document.getElementById("facil") as HTMLButtonElement;
 if (facil) {
   facile = facil.innerText = "DIFICIL"
     facil.addEventListener('click', () => {
       showContent("nivelTemplate")
      })
    }
}

function volver() {
  clearTimeout(time)
  showContent("Template")
  pilas = 0 
}

function confirm() {
  showContent("mouse")
  const resultado = document.getElementById("resultados") as HTMLElement
  const facil = document.getElementById("facil") as HTMLButtonElement;
  resultado.innerText = "Intentos:" + pilas
  if (facil) {
    facil.innerText = facile
    facil.addEventListener('click', () => {
      showContent("Template")
    })
}
}

function cambiarBoton(): void {
  botonesObjetivo = botones[Math.floor(Math.random() * botones.length)];
  const botonElegido = document.getElementById(botonesObjetivo) as HTMLButtonElement;
  if (botonElegido) {
    botonElegido.innerText = "AQUI";
    botonElegido.addEventListener('click', () => {
      pilas++
      confirm()
  }) 
}}
  function FIN() {
    showContent("FIN")
     const resultado = document.getElementById("resultados") as HTMLElement
    const facil = document.getElementById("facil") as HTMLButtonElement;
    resultado.innerText = "Intentos:" + pilas
    if (facil) {
      facil.innerText = facile
      facil.addEventListener('click', () => {
        showContent("Template")
      })
  }
  }

  function cambiarNumero(): void {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    const gatoElement = document.getElementById("gato");
  if (gatoElement) {
    gatoElement.innerText = randomNumber.toString();
  }
}



function reset2(): void {
  showContent("mouse")
  clearTimeout(time)
  facilm()
  const facil = document.getElementById("facil") as HTMLButtonElement;
  pilas = 0
  if (facil) {
    facil.innerText = facile
    facil.addEventListener('click', () => {
      showContent("Nivelmouse")
    })
}}

function resett(): void {
  showContent("numero");
  const facil = document.getElementById("facil") as HTMLButtonElement;
  if (facil) {
    facil.innerText = facile
    facil.addEventListener('click', () => {
      showContent("nivelTemplate")
    })
}}
function reset(): void {
  showContent("palabra");
  const facil = document.getElementById("facil") as HTMLButtonElement;
 if (facil) {
     facil.innerText = facile
     facil.addEventListener('click', () => {
       showContent("nivelTemplate")
     })
 }}

function resetGame(contenido: string): void {
  const resultadoElement = document.getElementById("resultados");
  const userInputElement = document.getElementById("userInput") as HTMLInputElement;
  
  
  if (resultadoElement) resultadoElement.innerText = "";
  if (userInputElement) userInputElement.value = "";
  clearTimeout(timeoutId);
  switch (contenido) {
        case "numero":
        cambiarNumero();
        timeoutId = window.setTimeout(() => mainTimer("numero"), interval);
        const tempo = document.getElementById("tempo") as HTMLElement;
        setTimeout(() => tempo.innerText = cero,5000)
        setTimeout(() => tempo.innerText = uno,4000)
        setTimeout(() => tempo.innerText = dos,3000)
        setTimeout(() => tempo.innerText = tres,2000)
        setTimeout(() => tempo.innerText = cuatro,1000)
        setTimeout(() => tempo.innerText = cinco,0)
        break;
        case "palabra":
       
        case "mouse":
          cambiarBoton()
        break;
      }
    }
    function mainTimer(contenido: string): void {
      const userInputElement = document.getElementById("userInput") as HTMLInputElement;
      const resultadosElement = document.getElementById("resultados") as HTMLElement
  const inputNumbers = userInputElement.value;
  const inputNumber = parseInt(userInputElement.value);
  
  switch (contenido) {
    case "numero":
      if (inputNumber == randomNumber) {
       resetGame(contenido)  
       resultadosElement.innerText = "¡Bien hecho! Intentos: " + suma++;;
      } else {
        suma--;
        resultadosElement.innerText = "¡Mal hecho! Intentos: " + suma + "     ¡RESET para volver a intentar!";
      }
      break;
      case "palabra":
        if (inputNumbers === palabraObjetivo) {
          resetGame(contenido);
          resultadosElement.innerText = "¡Bien hecho! Intentos: " + suma++;
        } else {
          suma--;
        resultadosElement.innerText = "¡Mal hecho! Intentos: " + suma + "     ¡RESET para volver a intentar!";
      }
      break;
  }
}

function showContent(contenido: string): void {
  let temp: HTMLTemplateElement | null = null;

  switch (contenido) {
    case "FIN":
      temp = document.getElementById("FIN") as HTMLTemplateElement;
      suma = 1;
      break;
      case "historia":
      temp = document.getElementById("historia") as HTMLTemplateElement;
      suma = 1;
      break;
    case "mouse":
      temp = document.getElementById("mouse") as HTMLTemplateElement;
      suma = 1;
      suma++
      break;
      case "Resultado":
      temp = document.getElementById("Resultado") as HTMLTemplateElement;
      suma = 1;
      break;
    case "Template":
      temp = document.getElementById("Template") as HTMLTemplateElement;
      suma = 1;
      break;
    case "nivelTemplate":
      temp = document.getElementById("nivelTemplate") as HTMLTemplateElement;
      suma = 1;
      break;
    case "numero":
      temp = document.getElementById("numeroTemplate") as HTMLTemplateElement;
      suma = 1;
      break;
    case "palabra":
      temp = document.getElementById("palabraTemplate") as HTMLTemplateElement;
      suma = 1;
      break;
  }

  if (temp) {
    const clon = temp.content.cloneNode(true);
    const contenedor = document.getElementById("contenedor");
    if (contenedor) {
      contenedor.replaceChildren(clon);
      resetGame(contenido);
      const userInputElement = document.getElementById("userInput") as HTMLInputElement;
      if (userInputElement) userInputElement.focus();
    }
  }
}