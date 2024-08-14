const showError = async () => {
  try {
    let result = await promesaExtrana()

    /**
     * if(respuesta == 'email inválido') throw new Error('Email inválido')
     */

    console.log(result)
  } catch (error) {
    console.error(error)
    /**
     * Manejo de email inválido
     */
  } finally {
    console.info('Este es el bloque finally 🚗💨')
  }
}

function promesaExtrana() {
  const aleatorio = Math.floor(Math.random() * 10)

  return new Promise((res, rej) => {
    if (aleatorio < 5) {
      res(`Exito, el número fue ${aleatorio}`)
    } else {
      rej(new Error(`Falló 🤡, el numero fue ${aleatorio}`))
    }
  })
}

showError()