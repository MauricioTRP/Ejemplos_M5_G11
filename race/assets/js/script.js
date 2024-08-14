let counter = 0;

function increment() {
  const current = counter;
  debugger
  setTimeout(() => {
    counter = current + 1;
    debugger
    console.log(`Counter: ${counter}`);
  }, Math.random() * 3000);
}

increment();
increment();
increment();
