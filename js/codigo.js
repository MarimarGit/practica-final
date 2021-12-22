if(document.addEventListener) {
   document.addEventListener("DOMContentLoaded", inicio);
} else {
   alert("Por favor, actualice el navegador");
}

function inicio() {
   //aquí se empezaría a ejecutar nuestro código al cargar el DOM
}



function obtenerNombres() {
   var nombres = document.querySelector("#nombres").value;
   var arrayNombres = nombres.split(",");
   
   //recorremos el array para quitarle los espacios blancos si los hay
   for (var i=0; i<= arrayNombres.length-1; i++) {
      arrayNombres[i] = arrayNombres[i].trim();
   }
   
   //hago una copia del array de nombres
   var arrayRegaladores = arrayNombres.slice();

   //vamos uno por uno asignando regalador
   for (var j=0; j<= arrayNombres.length-1; j++) {
      var nombreRegalado = arrayNombres[j];
      
      //busco un regalador aleatorio que no se repita
      var nombreRegalador;
      do {
         nombreRegalador = nombreAleatorio(arrayRegaladores);
      } while (nombreRegalado==nombreRegalador);
      
      console.log("Regalado: " + nombreRegalado + " - " + " Regalador: " + nombreRegalador);
      eliminarRegalador(arrayRegaladores, nombreRegalador);
   }
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
   console.log(array); 
}

/**
 * Me da un nombre aleatorio de un array de nombres
 * @param {*} array 
 * @returns 
 */
function mostrarResultadoSorteo(array) {
   var divResultado = document.querySelector("#resultadoSorteo");
   divResultado.setAttribute('style', 'display:block'); //muestro el div de los resultados que inicialmente estaba oculto
   divResultado.innerHTML = "aqui los resultados" + array[0];
}