/*Crea una función llamada rollDice() que reciba como parametro el numero de caras 
que queramos que tenga el dado que deberá simular el codigo dentro de la función. 
Como hemos dicho, que la función use el parametro para simular una tirada de dado 
y retornar el resultado. Si no se te ocurre como hacer un numero aleatorio no te 
preocupes! Busca información sobre la función de javascript Math.random()*/

function rollDice(faces) {
  return Math.floor(Math.random() * faces) + 1
}

// Llamamos a la función con 6 caras
console.log(rollDice(6))
// Llamamos a la función con 20 caras
console.log(rollDice(20))
