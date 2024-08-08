let a = 1;

function global () {
  console.log("Dentro de global")
  console.log(a)

  function interno() {
    console.log("Dentro de interno")
    console.log(a)
  }

  interno()
}

global()
function local() {
  let b = 2
  console.log("Dentro de local")
  console.log(b)
}

local()
console.log(b)
