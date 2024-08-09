class Perro {
  constructor(raza) {
    this._raza = raza
  }

  get raza() {
    return this._raza
  }
  set raza(nueva_raza) {
    this._raza = nueva_raza.toUpperCase()
  }
}

const amigo = new Perro('Kiltro 💕')
console.log(amigo.raza)

// Cambiar Raza
amigo.raza = 'Quilterrier 🐶'
console.log(amigo.raza)