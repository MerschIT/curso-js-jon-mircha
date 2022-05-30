/*
1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.
2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.

*/

// 1 - Longitud de una cadena de texto
// Resolucion del video con Arrow Function

const contadorTexto = (texto = "") =>
  !texto
    ? console.warn("No ingresaste un texto")
    : console.log(`El texto tiene ${texto.length} caracteres`);

contadorTexto(); // Probamos que funcione la validacion
contadorTexto("Hola mundo");
console.log("************* FIN EJ. N° 1 *************");

// MI SOLUCION

// function miFuncion(texto = "") {
//   if (!texto) {
//     console.warn("No ingresaste un texto");
//   } else {
//     console.log(`El texto que ingresaste tiene ${texto.length} caracteres`);
//   }
//}
//miFuncion("Hola Mundo");

////////////////////////////////// 2 - Texto recortado //////////////////////////////////
// SOLUCION CON OPERADOR TERNARIO
const recortarTexto = (texto = "", fin) =>
  !texto
    ? console.warn("No ingresaste un texto")
    : console.log(texto.slice(0, fin));

recortarTexto("Hola mundo", 7);
console.log("************* FIN EJ. N° 2 *************");

// SOLUCION SIN ARROW FUNCTION
// function recortarTexto(texto, fin) {
//   let resultado = texto.slice(0, fin);
//   return resultado;
// }
// console.log(recortarTexto("Hola mi combre es Jose", 7));

//////////////////// 3 - Convertir cada palabra de un array en un indice ////////////////////

const stringToArray = (texto = "", separador) =>
  !texto
    ? console.warn("No ingresaste un texto")
    : console.log(texto.split(separador));

stringToArray("Este es el texto", " ");
console.log("************* FIN EJ. N° 3 *************");

// SOLUCION SIN OPERADOR TERNARIO
// function stringToArray(texto, separador) {
//   let nuevoArray = texto.split(" ");
//   return nuevoArray;
// }
// console.log(stringToArray("Hola mundo soy un texto"));

//////////////////////////////// 4 - Repetir un texto X veces ////////////////////////////////
// NO SE PUEDE USAR OPERADOR TERNARIO PORQUE NO ES UNA SOLA LINEA DE CODIGO

const repetidor = (texto = "", cantidad = undefined) => {
  if (texto === "") {
    console.warn("No ingresaste un texto");
  } else if (cantidad === undefined) {
    console.warn("No ingreaste la cantidad de veces");
  } else {
    let textoFinal = "";
    for (x = 0; x < cantidad; x++) {
      textoFinal += texto + " ";
    }
    console.log(textoFinal);
  }
};

repetidor("Hola mundo", 5);

// SIN ARROW FUNCTION
// function repetidor(texto, cantidad) {
//   let textoFinal = "";
//   for (x = 0; x < cantidad; x++) {
//     textoFinal += texto + " ";
//   }
//   return textoFinal;
// }

// console.log(repetidor("Hola mundo", 3));
