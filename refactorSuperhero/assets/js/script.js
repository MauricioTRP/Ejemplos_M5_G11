import { traerHero } from "./request.mjs";
import { crearGrafico } from "./canvas.mjs";
import { heroCard } from "./cardRender.mjs";

const cartaHero = document.getElementById('hero')

// #formulario
document.getElementById('formulario').addEventListener("submit", async (event) => {
  event.preventDefault()
  // numHeroe
  let id = document.getElementById('numHeroe').value

  // traerHero(id)
  //   .then(data => {
  //     let grafico = crearGrafico(data)
  //     heroCard(cartaHero, data)
  
  //     return grafico
  //   }) // tengo disponible el heroe
  //   .then(grafico => grafico.render())
  //   .catch(error => {
  //      alert('Error al conseguir heroe')
  //   })
    
    try {
      let data = await traerHero(id)
      
      let grafico = crearGrafico(data)
      heroCard(cartaHero, data)
      grafico.render()
      
    } catch (error) {
        alert('Error al conseguir heroe')
  }
})
