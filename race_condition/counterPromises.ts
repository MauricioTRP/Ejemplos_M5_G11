let counter: number = 0;

function increment(): Promise<void> {
  return new Promise((resolve) => {
    const current: number = counter;
    setTimeout((): void => {
      counter = current + 1;
      console.log(`Counter: ${counter}`);
      resolve();
    }, Math.random() * 1000);
  });
}

async function runIncrements() {
  await increment();
  await increment();
  await increment();
}

runIncrements();
