let counter: number = 0

function increment(): void {
  const current: number = counter
  setTimeout(():void => {
    counter = current + 1
    console.log(`Counter: ${counter}`)
  }, Math.random() * 3000)
}

increment()
increment()
increment()
increment()
increment()