/**
 * Ejercicio 4.
 * Dada una cadena de texto, comprobar si es palindromo o no.
 */

// Solución 1:
const isPalindrome = (str) => {
  // Normalizar
  const normalizedString = str.toLowerCase().replaceAll(" ", "");

  // Separar, invertir y unir
  const reverseLetters = normalizedString.split("").reverse().join("");

  // Comparar
  return normalizedString === reverseLetters;
};

console.log(isPalindrome("Anita lava la tina"));

// Solución 2 (invirtiendo manualmente):
function isPalindromeText(text) {
  const normalizedText = text.toLowerCase().replaceAll(" ", "");

  let reversedText = "";
  for (let i = normalizedText.length - 1; i >= 0; i--) {
    reversedText += normalizedText[i];
  }
  return normalizedText === reversedText;
}

console.log(isPalindromeText("oso"));
