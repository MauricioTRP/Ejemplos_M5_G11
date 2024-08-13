let counter = 0;

function increment() {
  const current = counter;
  debugger
  setTimeout(() => {
    debugger
    counter = current + 1;
    console.log(`Counter: ${counter}`);
  }, Math.random() * 1000);
}

increment();
increment();
increment();
