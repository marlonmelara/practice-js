/**
 * Ejercicio 1.
 * Dado un número, devuelve su tabla de multiplicar completa.
 */

// Solución 1:
const generateTables = (number) => {
  console.log(`Tabla del ${number}`);
  for (let i = 1; i <= 10; i++) {
    console.log(`${number} x ${i} = ${number * i}`);
  }
};

generateTables(2);

// Solución 2 (Responsabilidad única):
const getMultiplicationTable = (n) => {
  const result = [];
  for (let i = 1; i <= 10; i++) {
    result.push(`${n} x ${i} = ${n * i}`);
  }
  return result.join("\n");
};

const number = 5;
console.log(`Tabla del ${number}`);
console.log(getMultiplicationTable(number));
