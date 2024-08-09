class Cuadrado {
  constructor(lado) {
    this.lado = lado
  }

  calcularArea() {
    return this.lado * this.lado
  }
}

class Circulo {
  constructor(r) {
    this.r = r
  }

  calcularArea() {
    return 2 * Math.PI  * Math.pow(this.r, 2)
  }

  calcularPerimetro () {
    return 2 * Math.PI * this.r
  }
}

class Rectangulo {
  constructor(x, y) {
    this.x = x
    this.y = y
  }

  calcularArea() {
    return this.x * this.y
  }
  calcularPerimetro() {
    return (this.x * 2) + (this.y * 2)
  }
}

let rectangulo = new Rectangulo(4, 2)
let cuadradoPequeno = new Cuadrado(2)
let circulo = new Circulo(3)

console.log(rectangulo)
console.log(`Area rectángulo ${rectangulo.calcularArea()}`)
console.log(`Perimetro rectángulo ${rectangulo.calcularPerimetro()}`)
console.log(circulo)
console.log(`Área circulo ${circulo.calcularArea()}`)
console.log(`Perimetro circulo ${circulo.calcularPerimetro()}`)
console.log(cuadradoPequeno)
console.log(`Area cuadrado ${cuadradoPequeno.calcularArea()}`)
