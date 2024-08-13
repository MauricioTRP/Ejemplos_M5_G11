let miClase = document.getElementsByClassName('miClase')

// miClase.forEach no funciona en HTMLCollection

// Este si funciona
// for...of iterador genérico
for(let element of miClase) {
  // console.log(element)
  element.addEventListener("click", (event) => {
    console.log("Hiciste clic en", event.target)
  })
}