class Motores {
  constructor(serial, fabricante) {
    this.serial = serial
    this.fabricante = fabricante
  }

  datosMotor(){
    return `El motor es del fabricante ${this.fabricante}, con serial ${this.serial}`
  }
}

const fueraDeBorda = new Motores(123, 'Yamaha')

class Electricos extends Motores {
  constructor(serial, fabricante, potencia, corriente) {
    super(serial, fabricante)
    this.potencia = potencia
    this.corriente = corriente
  }
}

class CC extends Electricos {
  constructor(serial, fabricante, potencia, corriente, voltaje, tipo) {
    super(serial, fabricante, potencia, corriente)
    this.voltaje = voltaje
    this.tipo = tipo
  }
}

class CA extends Electricos {
  constructor(serial, fabricante, potencia, corriente, fases, frecuencia) {
    super(serial, fabricante, potencia, corriente)
    this.fases = fases
    this.frecuencia = frecuencia
  }

  decirTipo() {
    return `Soy del fabricante ${this.fabricante}`
  }
}

let motorCC = new CC('ab123456', 'Arigato', '20W', 'CC', '220V', 'Motores cepillados')
let motorCA = new CA('ab123321', 'Mercuri', '5HP', 'CA', 'mono', '60hz')

console.log(motorCC)
console.log(motorCA.decirTipo())