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
   
   //hago una copia del array de nombres
   var arrayRegaladores = arrayNombres.slice();
   //preparo el array que contendrá el regalador definitivo
   var arrayAsignado = [];

   //vamos uno por uno asignando regalador
   for (var j=0; j<= arrayNombres.length-1; j++) {
      var nombreRegalado = arrayNombres[j];
      
      //busco un regalador aleatorio que no se repita
      var nombreRegalador;
      do {
         nombreRegalador = nombreAleatorio(arrayRegaladores);
      } while (nombreRegalado==nombreRegalador);
      
      //console.log("Regalado: " + nombreRegalado + " - " + " Regalador: " + nombreRegalador);
      arrayAsignado[j] = nombreRegalador;
      eliminarRegalador(arrayRegaladores, nombreRegalador);
   }



      for (i=0; i<=arrayNombres.length-1; i++) {
         console.log(arrayNombres[i] + " - "  + arrayAsignado[i]);
      }

      mostrarResultadoSorteo(arrayNombres, arrayAsignado);


}



/**
 * Me da un nombre aleatorio de un array de nombres
 * @param {*} array 
 * @returns 
 */
function nombreAleatorio(array) {
   var numAleatorio = Math.floor(Math.random() * array.length);
  // console.log(numAleatorio);
   var nombreAleatorio = array[numAleatorio];
   return nombreAleatorio;
}

/**
 * Elimina un nombre de la lista de regaladores para que no se repitan
 * @param {*} array 
 * @returns 
 */
function eliminarRegalador(array, nombreRegalador) {
   var indice = array.indexOf(nombreRegalador);
   if (indice > -1) {
      array.splice(indice, 1);
   }
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
 * Muestra los resultados del sorteo
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