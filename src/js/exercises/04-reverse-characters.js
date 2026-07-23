/**
 * Ejercicio 4.
 * Dada una cadena de texto, darle la vuelta e invertir el orden de sus caracteres, sin usar métodos propios del lenguaje, solo estructuras de control.
 */

// Solución 1:

const reverseCharacters = (str) => {
  let reverseString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reverseString += str[i];
  }
  return reverseString;
};

console.log(reverseCharacters("Hola"));
