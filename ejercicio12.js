/*Crea una función llamada findArrayIndex que reciba como parametros un array de textos y un texto y devuelve la posición del array cuando el valor del array sea igual al valor del texto que enviaste como parametro.

Haz varios ejemplos y compruebalos.

Sugerencia de función:
function findArrayIndex(array, text) {}

Ej array: */
const mainCharacters = [
  'Luke',
  'Leia',
  'Han Solo',
  'Chewbacca',
  'Rey',
  'Anakin',
  'Obi-Wan'
]

function findArrayIndex(array, text) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === text) {
      return i
    }
  }
}

const textoBuscado = 'Chewbacca'
const index = findArrayIndex(mainCharacters, textoBuscado)
console.log(index)

const books = [
  'Alice in wonderland',
  'Sleeping beauty',
  'Puss in boots',
  'Pinocchio'
]

function findArrayIndex2(array, text) {
  return array.indexOf(text)
}

const textFinded = 'Sleeping beauty'
const index2 = findArrayIndex2(books, textFinded)
console.log(index2)
