/*Usando la función anterior beneficiate de poder conocer el indice del array 
para crear una función llamada removeItem que pasandole un array y un texto 
como parametros (los mismos parametros que en el anterior ejercicio) llame a 
la función anteriormente creada findArrayIndex y obten el indice para 
posteriormente usar la función de javascript .splice() para eliminar el 
elemento del array.

Finalmente retorna el array.

De nuevo haz varios ejemplos para practicar y comprueba que funcionan 
correctamente.*/

const books = [
  'Alice in wonderland',
  'Sleeping beauty',
  'Puss in boots',
  'Pinocchio'
]

function findArrayIndex(array, text) {
  return array.indexOf(text)
}

const removeItem = (array, text) => {
  const index = findArrayIndex(array, text)
  if (index !== -1) {
    array.splice(index, 1)
  }
  return array
}

const remove = 'Puss in boots'
const result = removeItem(books, remove)
console.log(result)

const songs = [
  'Yesterday',
  'Unchained Melody',
  'Always',
  'Like a Virgin',
  'My Girl'
]
const removeSong = 'Always'
const result2 = removeItem(songs, removeSong)
console.log(result2)

const films = ['Ghost', 'Grease', 'Dracula', 'Spiderman']
const removeFilm = 'Grease'
const result3 = removeItem(films, removeFilm)
console.log(result3)
