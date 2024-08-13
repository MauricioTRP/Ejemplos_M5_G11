const traerHero = async (id) => {
  try {
    let baseUrl = 'https://superheroapi.com/api.php/d59f6df04aed61f2486c787636a91b96/'
  
    let response = await fetch(baseUrl + id)
    let data = await response.json()
    return data
  } catch (error) {
    return `error: ${error}`
  }
}

export {traerHero}