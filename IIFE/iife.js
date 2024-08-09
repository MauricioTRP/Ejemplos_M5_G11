
/**
 * IIFE
 * Immediately invoked function expression
 * 
 * scope bloque que le pertenece ("único")
 */
(() => {
  var carrito = 'Me encantan estas polémicas';

  console.log(`El carrito actual es: ${carrito}`)
  return carrito
})()

const contadorModulo = (() => {
  let contador = 0; // variable que muestra el dígito actual

  let aumentar = () => {
    contador++
    return contador
  }

  let disminuir = () => {
    contador--
    return contador
  }

  let resetear = () => {
    contador = 0
    return contador
  }

  return {
    aumentar,
    disminuir,
    resetear
  }
})()

const carritoFlaite = (()=> {
  let carrito = []

  let agregarProducto = (nuevoProducto) => {
    carrito.push(nuevoProducto)
  }

  let eliminarProducto = () => {
    carrito.shift()
  }

  return {
    agregarProducto,
    eliminarProducto,
    carrito // 👁️👁️
  }
})()