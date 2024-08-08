function FiguraGeometrica(lado) {
  this.lado = lado
}

FiguraGeometrica.prototype.calcularPerimetro = function() {
  return 'Tampoco tengo idea de cómo calcular ésto 🤡💀'
}


/**
 * Constructor del hijo
 */
function Poligono(lado) {
  FiguraGeometrica.call(this, lado)
}

// 1.- Definimos manual del padre
Poligono.prototype = Object.create(FiguraGeometrica.prototype)

// 2.- Creamos métodos (Metodo calcular área Poligonos)
Poligono.prototype.calcularArea = function () {
  return Math.pow(this.lado, 2)
}

let cuadradoES5 = new Poligono(4)
