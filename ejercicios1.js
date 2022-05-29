/*
1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.
2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.

*/

// 1 - Longitud de una cadena de texto

function miFuncion(parametro) {
  return parametro.length;
}

console.log(miFuncion("Hola Mundo"));

// 2 - Texto recortado

function recortarTexto(texto, fin) {
  let resultado = texto.slice(0, fin);
  return resultado;
}
console.log(recortarTexto("Hola mi combre es Jose", 7));

// 3 - Convertir cada palabra de un array en un indice
function stringToArray(texto, separador) {
  let nuevoArray = texto.split(" ");
  return nuevoArray;
}
console.log(stringToArray("Hola mundo soy un texto"));

// 4 - Repetir un texto X veces

function repetidor(texto, cantidad) {
  let textoFinal = "";
  for (x = 0; x < cantidad; x++) {
    textoFinal += texto + " ";
  }
  return textoFinal;
}

console.log(repetidor("Hola mundo", 3));
