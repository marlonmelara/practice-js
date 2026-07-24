/**
 * Ejercicio 3.
 * Dado una palabra, buscarla en una frase y devolver cuantas veces aparece.
 * La frase y la palabra deben ser los parámetros de la función.
 */

// Solución 1:
const normalizeString = (text) => {
  return text.toLowerCase().replace(/[.,!?]/g, "");
};

const wordFinder = (phrase, word) => {
  // Limpiamos el texto
  const normalizedPhrase = normalizeString(phrase);
  const normalizedWord = normalizeString(word);

  // Guardamos las palabras en un array
  const words = normalizedPhrase.split(" ");

  // Creamos un array con la palabra objetivo y contamos
  const matchCount = words.filter((element) => element === normalizedWord).length;

  return matchCount;
};

const result = wordFinder("Hola Mundo mundo mundo mundoloco world world!", "world");

console.log(`Número de veces que aparece la palabra: ${result}`);

// Solución 2:

// Helper function: Se usa el retorno implícito de las arrow functions
// const normalizeString = (text) => text.toLowerCase().replace(/[.,!?]/g, "");

// const wordFinder = (phrase, word) => {
//   const normalizedPhrase = normalizeString(phrase);
//   const normalizedWord = normalizeString(word);

// Method chaining: Dividimos, filtramos y contamos en un solo flujo continuo
//   const matchCount = normalizedPhrase
//     .split(" ")
//     .filter(currentWord => currentWord === normalizedWord)
//     .length;

//   return matchCount;
// };

// Ejemplo de uso
// const result = wordFinder("Hola Mundo mundo mundo mundoloco world world!", "world");
// console.log(`Número de veces que aparece la palabra: ${result}`); // 2
