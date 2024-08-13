const promise1 = new Promise((res, rej) => {
  setTimeout(() => {
    res('Primera promesa')
  }, 3000)
})

const promise2 = Promise.resolve('Promesa 2')

const promise3 = 3

const promesas = [promise3, promise1, promise2]

Promise.all(promesas)
  .then(miCallback)

function miCallback(arg) {
  console.log(arg)
}
// promesas.forEach(miCallback)

