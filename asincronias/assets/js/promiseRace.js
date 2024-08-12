let counter = 0

function increment(message) {
  message = message || new Date()
  return new Promise( (resolve, reject) => {
    const current = counter;
    setTimeout(() => {
      counter = current + 1; // aumenta en uno el contador
      resolve(`counter: ${counter}, ${message}`) //caso de éxito, cuando actualiza el contador
    }, Math.random() * 5000);
  })
}

let arregloPromesas = [
  increment('Promesa n° 1'),
  increment('Promesa n° 2'),
  increment('Promesa n° 3'),
  increment('Promesa n° 4'),
  increment('Promesa n° 5'),
  increment('Promesa n° 6')
]

Promise.race(arregloPromesas)
  .then(muestraConsola)


function muestraConsola(arg) {
  console.log(arg)
}