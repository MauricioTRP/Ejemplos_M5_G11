/**
 * Se creará una clase Poligono general
 * con propiedad pública this.lado
 * 
 * y se creará una clase hija PoligonoRegular
 * con propiedad pública this.lado, heredada
 * y un método para calcular su área
 */
class PresentadorPoligonos {
  constructor(poligono) {
    this.poligono = poligono
  }

  presentarPoligono() {
    return `
    Soy un poligono de ${this.poligono.cantidad_lados}
    Y mi área es ${this.poligono.calcularArea()}
    `
  }
}

class Poligono {
  constructor(cantidad_lados) {
    this.cantidad_lados = cantidad_lados
  }

  calcularArea() {
    return '¿Cómo voy a calcular el área de éste bicho?, ayuda Pitágoras 💀'
  }
}

class PoligonoRegular extends Poligono {
  constructor(cantidad_lados, lado) {
    super(cantidad_lados)
    this.lado = lado
  }

  /** Comenta y descomenta éste método para revisar la diferencia de comportamiento del objeto creado */
  calcularArea() {
    return this.cantidad_lados * Math.pow(this.lado, 2) * (1 / Math.tan(Math.PI / this.cantidad_lados)) / 4
  }
}

class Cuadrado extends PoligonoRegular {
  constructor(lado) {
    super(4, lado)
  }

  calcularArea() {
    console.log("Nueva y más rápida manera de calcular área para un cuadrado")
    return Math.pow(this.lado, 2)
  }
}

let algoRaro = new Poligono(25)
let pentagono = new PoligonoRegular(5, 5)
let triangulo = new PoligonoRegular(3, 4)
let cuadradoCuadrado = new Cuadrado(4)

const presentador = new PresentadorPoligonos(algoRaro)

console.log(presentador.presentarPoligono())

presentador.poligono = pentagono

console.log(presentador.presentarPoligono())

presentador.poligono = cuadradoCuadrado
console.log(presentador.presentarPoligono())