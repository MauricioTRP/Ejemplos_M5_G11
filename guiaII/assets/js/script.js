/**
 * Callback que siempre aplica el argumento 'John Doe'
 */
const applyJohn = (callback) => {
  const name = 'John Doe'
  callback(name)
}

function applyJohnES5(callback) {
  const name = 'John Doe'
  callback(name)
}

function consoleLogAbacano(argumento) {
  console.log(argumento)
  console.log(`Este es un console log modificado 🚀 ${argumento}`)
  alert(argumento)
}

// applyJohn(consoleLogAbacano)

/**
 * Callback que toma como argumento el cuadrado de algo
 */
const applySquare = (digit, callback) => callback(Math.pow(digit, 2))

// applySquare(50, consoleLogAbacano)

/**
 * Operaciones matemáticas secuenciales
 */

const apply25Percent = (digit, callback) => callback(digit * 0.25) 


const initiator = (digit) => {
  const double = digit * 2
  applySquare(double, result => {
    apply25Percent(result, console.log)
  })
}

// initiator(5)

/**
 * Simulando inicio de sesión con promises y setTimeout
 * + manipulación DOM
 * 
 * 1.- Enviamos credenciales -> success, authorized 🚀
 * 2.- Pedimos info, pero ahora autorizados
 * 3.- Rendizar información en UI
 * 
 * 1.- Manipula DOM
 * 2.- Event Listener
 */

function enviarCredencial() {
  return new Promise((res, rej) => {
    pintarDom('resultado', 'Enviando credenciales')
    setTimeout(
      () => {
        res({success: true})
      },
      3500
    )
  })
}

function solicitarInfo(credenciales) {
  return new Promise((res, rej) => {
    if(credenciales.success) {
      pintarDom('resultado', 'Solicitando info')
      setTimeout(
        () => {
          res({name: 'Juanito'})
        },
        3500
      )
    } else {
      rej('No se puede solicitar info')
    }
  })
}

function presentarDatosDelServer(datos) {
  return new Promise((res, rej) => {
    if(datos) {
      pintarDom('resultado', `Usuario ${datos.name} loggeado`)
      res(true)
    } else {
      rej('No se pudo conseguir data')
    }
  })
}

function pintarDom(id, text) {
  document.getElementById(id).innerText = text
}

document.getElementById('iniciar').addEventListener('click', () => {
  enviarCredencial()
    .then(credenciales => solicitarInfo(credenciales))
    .then(datos => presentarDatosDelServer(datos))
    .catch(console.error)
})


























// const sendData = () => {
//   return new Promise((res, rej) => {
//     setTimeout(
//       () => {
//         res({state: true})
//       }
//     ),
//     3500
//   })
// }

// const getUserData = () => {
//   return new Promise((res, rej) => {
//     setTimeout(
//       () => {
//         setTexto('resultado', 'Waiting info')
//         res({name: 'Juan'})
//       },
//       3500
//     )
//   })
// }

// const presentDataWhenArrive = (data) => {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       if (data) {
//         setTexto('resultado', JSON.stringify(data))
//         res('Success')
//       }
//     }, 2500)
//   }) 
// }

// const setTexto = (id, text) => {
//   document.getElementById(id).innerText = text
// }

// /** Manejo de evento */
// document.getElementById('iniciar').addEventListener('click', () => {
//   setTexto('resultado', 'Enviando credenciales')
//   sendData()
//     .then(res => {
//       if(res.state) {
//         return getUserData()
//       }
//     })
//     .then(presentDataWhenArrive)
// })