class Pelicula {
  constructor(name) {
    this.name = name  
  }
}

class Largometraje extends Pelicula {
  constructor(name, runTime) {
    super(name)
    this.runTime = runTime
  }
}

class Cortometraje extends Pelicula {
  constructor(name, runTime) {
    super(name)
    this.runTime = runTime
  }
}

class ExperimentalIndiJapo1979 extends Pelicula {
  constructor(name, runTime) {
    super(name)
    this.runTime = runTime
  }
}

class MyApp {
  constructor(multimedia) {
    this.multimedia  = multimedia
  }

  playMovie () {
    return `La película ${this.multimedia.name} se está reproduciendo, tiene una duración de ${this.multimedia.runTime}`
  }
}

let interstellar = new Largometraje('Interstellar', 200)
let secretoCaracoles = new Cortometraje('El secreto de los caracoles', 25)
let peliculaQueNoConozco = new ExperimentalIndiJapo1979('Mi pelicula super under', 500)

const reproductor = new MyApp(secretoCaracoles)

console.log(reproductor.playMovie())

reproductor.multimedia = interstellar

console.log(reproductor.playMovie())

reproductor.multimedia = peliculaQueNoConozco

console.log(reproductor.playMovie())