/**
 * Ejercicio 2.
 * Dada una cadena de texto, comprobar si es palindromo o no.
 */

// Solución final:

const isPalindrome = (word) => {
  // Normalizar
  const normalizedWord = word.toLowerCase().replaceAll(" ","")

  // Separar, invertir y unir
  const reverseLetters = normalizedWord.split("").reverse().join("")

  // Comparar
  return normalizedWord === reverseLetters;
}

console.log(isPalindrome("Anita lava la tina"));


// Intento 1 (todo por separado)
// let word = "ana"
// let separate= word.split("")
// console.log({separate});


// let reverseWord = []
// for (let index = separate.length -1; index >= 0 ; index--) {
//   reverseWord.push(separate[index]) ;
//   // console.log(separate[index]);

// }
// console.log({reverseWord});

// let comparate = reverseWord.join("");
// console.log({comparate});
// console.log(word === comparate);


// Intento 2 (invirtiendo manualmente)
  // const reversedLetters = [];
  // for (let i = letters.length-1; i >=0 ; i--) {
  //   reversedLetters.push(letters[i]);
  // }
  // const reversedWord = reversedLetters.join("")
