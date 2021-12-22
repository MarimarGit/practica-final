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
   
   var arrayRegaladores = arrayNombres;

   for (var j=0; j<= arrayNombres.length-1; j++) {
      var nombreRegalado = arrayNombres[j];
      
      //busco un regalador aleatorio que no se repita
      var nombreRegalador;
      do {
         nombreRegalador = nombreAleatorio(arrayRegaladores);
      } while (nombreRegalado==nombreRegalador);
      
      console.log("Regalado: " + nombreRegalado + " - " + " Regalador: " + nombreRegalador);

      

    /*   //eliminamos al que ya ha regalado
      var indice = arrayRegaladores.indexOf(nombreRegalador);
      console.log("Indice: " + indice);

      if (indice > -1) {
         arrayRegaladores.splice(indice, 1);
       }

      
      console.log("Los regaladores que quedan: ");
      recorrerArray(arrayRegaladores);  */
 

   }

  
}



function nombreAleatorio(array) {
   var numAleatorio = Math.floor(Math.random() * array.length);
  // console.log(numAleatorio);
   var nombreAleatorio = array[numAleatorio];
   return nombreAleatorio;
}




function recorrerArray(array) {
   for (var i=0; i<= array.length-1; i++) {
      console.log(array[i]);
   }
}

/* 
Adrian, Rafa , hector, Mar

Adrian, Rafa , , Mar


Adrian -->  2 --> hector
Rafa --> 1 --> */