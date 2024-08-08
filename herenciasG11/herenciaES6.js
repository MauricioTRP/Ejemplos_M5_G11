class FiguraGeometrica {
  constructor(lado) {
    this.lado = lado
  }

  calcularPerimetro() {
    return "No tengo idea cómo calcular esto 🤡"
  }
}

class Poligono extends FiguraGeometrica {
  constructor(lado) {
    super(lado)
  }

  calcularArea() {
    return Math.pow(this.lado, 2)
  }
}

let cuadradoES6 = new Poligono(4)