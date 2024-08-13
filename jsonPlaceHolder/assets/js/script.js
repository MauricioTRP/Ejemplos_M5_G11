
async function getUsers(id = '') {
  const url = 'https://jsonplaceholder.typicode.com/users/' + id
  try {
    let response = await fetch(url)
    const data = await response.json()

    console.log(data)
    return data
  } catch (error) {
    console.error(error)
  }
}


/**
 * posts =  Array<{
 *  "userId": number,
 *  "id": number,
 *  "title": string,
 *  "body": string
 *  }>
 */
async function getPosts() {
  try {
    const postsUrl = 'https://jsonplaceholder.typicode.com/posts'

    const response = await fetch(postsUrl)
    const data = await response.json()

    return data
  } catch (error) {
    
  }

}

// getUsers(5)
getPosts()
  .then(data => {
    let idUsuarios = []
    data.slice(0, 30).forEach(post => {
      idUsuarios.push(post.userId)
    });

    const usersSet = new Set(idUsuarios)
    const usersArray = [...usersSet]

    let promises = usersArray.map(id => getUsers(id))

    let promesasResueltas = Promise.all(promises)
    console.log(promesasResueltas)
  })