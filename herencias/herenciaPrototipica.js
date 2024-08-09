/**
 * Se creará una clase Poligono general
 * con propiedad pública this.lado
 * 
 * y se creará una clase hija PoligonoRegular
 * con propiedad pública this.lado, heredada
 * y un método para calcular su área
 */
function Poligono(cantidad_lados) {
  this.cantidad_lados = cantidad_lados
}

// Método de superclass (afecta a toda la familia)
Poligono.prototype.calcularArea = function() {
  return '¿Cómo voy a calcular el área de éste bicho?, ayuda Zenón 💀'
}

function PoligonoRegular(lado, cantidad_lados) {
  Poligono.call(this, cantidad_lados)
  this.lado = lado
}


// Se define que PoligonoRegular hereda de Poligono, indicando que tienen sistemas prototípicos encadenados familiares
PoligonoRegular.prototype = Object.create(Poligono.prototype)
// Se define quien es el constructor del Polígono regular, ya que
// En el paso anterior, se sobreescribió la propiedad
PoligonoRegular.prototype.constructor = PoligonoRegular

// Método de superclass PoligonoRegular

// Comenta y descomenta este método, y analiza en el navegador cómo cambia el comportamiento del hexágono
PoligonoRegular.prototype.calcularArea = function() {
  return this.cantidad_lados * Math.pow(this.lado, 2) * (1 / Math.tan(Math.PI / this.cantidad_lados)) / 4
}

let pentagono = new PoligonoRegular(5, 5)

