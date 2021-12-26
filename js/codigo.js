if(document.addEventListener) {
   document.addEventListener("DOMContentLoaded", inicio);
} else {
   alert("Por favor, actualice el navegador");
}

function inicio() {
   //aquí se empezaría a ejecutar nuestro código al cargar el DOM
}

function obtenerNombres() {
   //limpiamos todo lo que haya en el contenedor de anteriores sorteos
   inicializarContenedorResultados();

   var nombres = document.querySelector("#nombres").value;
   var arrayNombres = nombres.split(",");
   
   //recorremos el array para quitarle los espacios blancos si los hay
   for (var i=0; i<= arrayNombres.length-1; i++) {
      arrayNombres[i] = arrayNombres[i].trim();
   }

   //hago una copia del array de nombres para no tocar el original
   var arrayNombresCopia = arrayNombres.slice();
   //desordeno el array de forma aleatoria
   var arrayNombresDesorden = desordenar(arrayNombresCopia);

   //hago una copia del array de nombres desordenados
   var arrayRegaladores = arrayNombresDesorden.slice();

   //descuadro los arrays
   //añado el primer elemento al final
   arrayRegaladores.push(arrayRegaladores[0]);
   //borro el primer elemento
   arrayRegaladores.shift();

   //mostramos en una columna el array de nombres y en otra los regaladores
   mostrarResultadoSorteo(arrayNombresDesorden, arrayRegaladores);


   console.log("FINAL: " );
   console.log(arrayNombres);
   console.log(arrayNombresDesorden);
}


/**
 * Desordena de forma aleatoria un array
 * @param {*} array 
 * @returns 
 */
function desordenar(array) {
   for (var i = array.length - 1; i > 0; i--) {
     var j = Math.floor(Math.random() * (i + 1)); // índice aleatorio entre 0 e i
 
     // intercambia elementos array[i] y array[j]
     // usamos la sintáxis "asignación de desestructuración" para lograr eso
     // encontrarás más información acerca de esa sintaxis en los capítulos siguientes
     // lo mismo puede ser escrito como:
     // let t = array[i]; array[i] = array[j]; array[j] = t
     //[array[i], array[j]] = [array[j], array[i]];

     var t = array[i]; 
     array[i] = array[j]; 
     array[j] = t;
   }
   return array;
 }
 
/**
 * Limpia todo lo que haya en el contenedor de anteriores sorteos
 * @param {*} array 
 * @returns 
 */
function inicializarContenedorResultados() {
   var colRegalado = document.querySelector("#colRegalado");
   var colRegalador = document.querySelector("#colRegalador");

   colRegalado.innerHTML = "";
   colRegalador.innerHTML = "";
}

/**
 * Muestra los resultados del sorteo en los input
 * @param {*} array 
 * @returns 
 */
function mostrarResultadoSorteo(array1, array2) {
   var divResultado = document.querySelector("#resultadoSorteo");
   divResultado.setAttribute('style', 'display:block'); //muestro el div de los resultados que inicialmente estaba oculto

   //muestro los inputs para cada pareja
   for (var i=0; i<=array1.length-1; i++) {
      anadirParejaInput(array1[i] , array2[i]);
   }
}

/**
 * Añade los input con los resultados a un div que estaba inicialmente oculto
 * @param {*} array 
 * @returns 
 */
function anadirParejaInput(regalado, regalador) {
   var inputRegalado = document.createElement("input");
   var inputRegalador = document.createElement("input");
   inputRegalado.setAttribute('type', 'text');
   inputRegalador.setAttribute('type', 'text');
   inputRegalado.setAttribute('readonly', 'readonly');
   inputRegalador.setAttribute('readonly', 'readonly');
   inputRegalado.className = "form-control col-sm mb-2"; // asigno una clase CSS al input
   inputRegalador.className = "form-control col-sm mb-2"; // asigno una clase CSS al input
   //asignamos los valores
   inputRegalado.value = regalado;
   inputRegalador.value = regalador;

   var parent = document.querySelector("#colRegalado");
   var parent2 = document.querySelector("#colRegalador");
   //añadimos los input al div (cada uno a su columna)
   parent.appendChild(inputRegalado);
   parent2.appendChild(inputRegalador);
}