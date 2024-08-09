function generadorClousures () {
  let indice = 0;
  let persona = { nombre: 'Juanito', edad: 15 }

  return function clousure () {
      indice++
      persona.edad = persona.edad + 1
      return { indice, persona }
  }
}
function geradorClousure () {
  let contador = 0

  return function clausura() {
      contador++
      return contador
  }
}
let contador = geradorClousure()
let espacioCerrado = generadorClousures()