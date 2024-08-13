const url =  'https://midas.minsal.cl/farmacia_v2/WS/getLocalesTurnos.php'

/**
 * Usaremos FETCH API para obtener farmacias de turno
 * 
 * Async/Await
 * 
 * try/catch
 */
const consumoAPI = async () => {
  try {
    /** Caso de éxito */
    let response = await fetch(url)
    console.log(response)
    const data = await response.json()
    console.log(data)
    
  } catch (error) {
    /** Posibles errores */
    console.log("Error en Fetch")
    console.error(error)
  }
}

// async function esperarMensaje(params) {
  
// }

function esperarMensaje() {
  return new Promise((res, rej) => {
    /**
     * setTimeout
     * res('Mensaje a enviar')
     */
  })
}

consumoAPI()