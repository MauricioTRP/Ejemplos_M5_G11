/**
 * getUsers
 * Promise<Array<user>>
 * user: {
 *  email: string
 *  cell: string
 *  name: { title: string, first: string, last: string }
 *  picture: { large: string, medium: string, thumbnail: string }
 * }
 * 
 */
const getUsers = async () => {
  try {
    let headersList = {
      "Accept": "application/json", // Aceptamos sólo respuestas JSON
    }
  
    let response = await fetch(
      "https://randomuser.me/api/?results=10",
      { 
        method: "GET",
        headers: headersList
      }
    );

    if (!response.ok) {
      throw new Error(`Error status: ${response.status}`)
    }

    let data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Error al consultar API", error)
  }
}

const nombreCualquiera = ( () => {
  function cardsUser (users, id) {
    let htmlCartas = users.map(user => {
      return `
        <div>
          <img src="${user.picture.thumbnail}" alt="User Thumbnail" />
          <p>${user.name.title} ${user.name.first} ${user.name.last}</p>
          <p>${user.email}</p>
          <p>${user.phone}</p>
        </div>
      `
    }).join('')

    document.getElementById(id).innerHTML = htmlCartas
  }


  return { cardsUser }
})()

/**
 * Uso de promesas
 * Promesa
 *    .then()     // hacer uso del resultado
 *    .catch()    // manejo de errores
 *    .finally()  // ejecución de bloque "incondicional"
 */
getUsers()
  .then((users) => { return nombreCualquiera.cardsUser(users, 'user-data')}) 
  .catch(error => alert(error))
  .finally(alert('Proceso finalizado'))
