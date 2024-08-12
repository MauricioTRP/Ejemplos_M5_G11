/**
 * 1- Llamar Pizza
 * 2- Hacer pedido -> Quiero una piksa triple queso
 * 3- Cocinar pedido
 * 4- Enviar delivery
 * 5- Recibimos Piksa
 */

function llamarPizeria(callback) {
  /** Tareas internas */
  console.log('Hola, pikseria los tres quesitos?')

  
  /** llamamos a la siguiente serie de instrucciones */
  callback('Quiero pedir una triple queso', cocina)
}

function hacerPedido(pedido, siguienteTarea) {
  console.log(pedido)
  
  /**
   * tareas alternativas
   */
  console.log('Poner una carga en lavadora 🚀')

  siguienteTarea('Cocinar pedido')
}

function cocina(tarea) {
  console.log(tarea)
}

/**
 * Comienza el proceso de pedir pizza🍴
 */

// 1- llamarPizeria( 2.- hacerPedido)
llamarPizeria(hacerPedido)