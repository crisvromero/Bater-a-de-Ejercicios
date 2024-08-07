/*Dado el siguiente javascript usa forof y forin para hacer la media del 
volumen de todos los sonidos favoritos que tienen los usuarios.*/

const users = [
  {
    name: 'Alberto',
    favoritesSounds: {
      waves: { format: 'mp3', volume: 50 },
      rain: { format: 'ogg', volume: 60 },
      firecamp: { format: 'mp3', volume: 80 }
    }
  },
  {
    name: 'Antonio',
    favoritesSounds: {
      waves: { format: 'mp3', volume: 30 },
      shower: { format: 'ogg', volume: 55 },
      train: { format: 'mp3', volume: 60 }
    }
  },
  {
    name: 'Pedro',
    favoritesSounds: {
      shower: { format: 'mp3', volume: 50 },
      train: { format: 'ogg', volume: 60 },
      firecamp: { format: 'mp3', volume: 80 }
    }
  },
  {
    name: 'Cristina',
    favoritesSounds: {
      waves: { format: 'mp3', volume: 67 },
      wind: { format: 'ogg', volume: 35 },
      firecamp: { format: 'mp3', volume: 60 }
    }
  }
]
// Usando for...of para calcular la media de los volúmenes de los sonidos
let totalVolume = 0
let count = 0

for (const user of users) {
  for (const sound in user.favoritesSounds) {
    totalVolume += user.favoritesSounds[sound].volume
    count++ / users.length
  }
}

console.log(totalVolume / users.length)

// Usando for...in para calcular la media de los volúmenes de los sonidos
let totalVolume2 = 0
let count2 = 0
for (const user in users) {
  for (const sound in users[user].favoritesSounds) {
    totalVolume2 += users[user].favoritesSounds[sound].volume
    count2++
  }
}

console.log(totalVolume2 / users.length)
