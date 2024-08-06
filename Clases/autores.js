class Libro {
  constructor(titulo, anio) {
    this.titulo = titulo
    this.anio = anio
  }
}
  
  
class Autor {
  // definir propiedades privadas
  #publicaciones
  constructor(nombre, libro) {
    this.nombre = nombre
    this.#publicaciones = [ libro ]
  }

  get publicaciones() {
    return this.#publicaciones
  }

  set publicaciones(nuevoLibro) {
    this.#publicaciones.push(nuevoLibro)
  }
}

const libro1 = new Libro('Manual de Carreño', 1501)
const libro2 = new Libro('Eloquent JS', 2018)

const autor = new Autor('Pepito', libro1)

console.log("Primera publicación")
console.log(autor)
console.log(autor.publicaciones)

autor.publicaciones = libro2

console.log("Segunda publicación")
console.log(autor)
console.log(autor.publicaciones)
