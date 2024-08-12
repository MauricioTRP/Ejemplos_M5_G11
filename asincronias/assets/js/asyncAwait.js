let callback1 = resultado => {
  // Convertimos el resultado en algo legible
  return resultado.json()
}

let callback2 = legible => {
  console.log(legible)
}

async function buscarUsuarios() {
  let headersList = {
    "Accept": "*/*",
  }
  
  /**
   * await -> esperar
   */
  let response = await fetch("https://reqres.in/api/users", { 
    method: "GET",
    headers: headersList
  });

  return response
}

let respuesta = buscarUsuarios()

console.log(respuesta)
/**
 * Podemos analizar la respuesta con .then
 */
respuesta
  .then(callback1)
  .then(callback2)

