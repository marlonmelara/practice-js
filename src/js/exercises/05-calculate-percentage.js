/**
 * Ejercicio 5.
 * Dado dos enteros (un número y un porcentaje), calcular la porción porcentual.
 */

// Solución 1:

const percentageCalculator = (number, percentage) => {
  return (number * percentage) / 100;
};

const number = 10;
const percentage = 20;

const result = percentageCalculator(number, percentage);

console.log(`El ${percentage}% de ${number} es ${result}`);
