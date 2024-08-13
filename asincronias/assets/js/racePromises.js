let counter = 0

function increment(message) {
  return new Promise( (resolve, reject) => {
    const current = counter;
    setTimeout(() => {
      counter = current + 1;
      resolve(`Counter: ${counter}, ${message}`)
    }, 3000);
  })
}

async function ejecutarContadorAsincrono() {
  await increment('llamado 1') // se ejecutan de forma ordenada, esperando el término de la anterior
  await increment('llamado 2')
  await increment('llamado 3')
  await increment('llamado 4')
  await increment('llamado 5')
}

ejecutarContadorAsincrono()