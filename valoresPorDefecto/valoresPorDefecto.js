function suma3(a, b, c) {
  a = a || 0;
  b = b || 0;
  c = c || 0;

  return a + b + c
}

console.log(suma3(1, 4))

function sumaEs6(a = 0, b = 0, c = 0) {
  return a + b + c
}

console.log(sumaEs6(2, 5))