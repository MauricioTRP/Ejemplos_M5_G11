const consultarDatos = () => {
  const url = 'https://jsonplaceholder.typicode.com/users';

  fetch(url)
    .then(response => {
      console.log(response)

      // pasar la barra
      return response.text()
    })
    .then(data => {
      console.log(data)
    })
    .catch(error=>{
      console.log(error)
    })
}

consultarDatos()

const consultar2 = async () => {
  const url = 'https://jsonplaceholder.typicode.com/users'

  const response = await fetch(url)
  const data = await response.text()
  console.log(data)
}

consultar2()