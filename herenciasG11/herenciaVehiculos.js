class Vehiculo {
  constructor(marca, color, matricula) {
    this.marca = marca
    this.color = color
    this.matricula = matricula
  }
}

class Coche extends Vehiculo {
  constructor(marca, color, matricula) {
    super(marca, color, matricula)
  }
}

class Moto extends Vehiculo {
  constructor(marca, color, matricula) {
    super(marca, color, matricula)
  }
}

class Bus extends Vehiculo {
  constructor(marca, color, matricula, asientos){
    super(marca, color, matricula)
    this.tipo = 'Bus',
    this.asientos = asientos
  }
}

let tsuruTuneado = new Coche('Nissan V-16', 'Azul', 'AABB-15')
let combi = new Bus('Mercedes Benz', 'Amarilla', 'AB-11-12', 30)
console.log(tsuruTuneado)
console.log(combi)