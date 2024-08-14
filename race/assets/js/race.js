let variableValue = 0;

function add1() {
  return new Promise((resolve, _reject) => {
    let current = variableValue;
    setTimeout(() => {
      variableValue++;
      console.log(`Counter: ${variableValue}`)
      resolve(variableValue)
    }, Math.random() * 3000)
  })
}

async function runIncrements() {
  await add1()
  await add1()
  await add1()
  await add1()
}

runIncrements()

// let promesa = add1()