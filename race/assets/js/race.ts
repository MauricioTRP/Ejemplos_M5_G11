let variableValue: number = 0;

function add1(): Promise<number> {
  return new Promise((resolve, _reject) => {
    let current: number = variableValue;
    setTimeout(():void => {
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