function uno() {
  console.trace('Pila de llamados')
  dos()
}

function dos() {
  console.trace('Pila de llamados')
  tres()
}

function tres() {
  console.trace('Pila de llamados')
}