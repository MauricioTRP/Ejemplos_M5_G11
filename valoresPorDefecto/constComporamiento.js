let a = {
  foo: { i: 4, x: 5 },
  bar: 'Valor cambiable'
}

const b = a;

a = 'Cambiamos objeto por texto'
console.log(a)
console.log(b)

console.log(b.bar)

b.bar = 'Otro texto modificado'

console.log(b)