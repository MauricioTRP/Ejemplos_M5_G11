let counter = 0;

function increment(message) {
  const current = counter;
  setTimeout(() => {
    counter = current + 1; // aumenta en uno el contador
    console.log(`Counter: ${counter}, message: ${message}`); // muestra el contador por consola
  }, Math.random() * 5000); // ocurre entre 0 y 3 segundos
}

// Todos parten al mismo tiempo
increment('llamado 1'); // el contador en línea 1 era 0
increment('llamado 2'); // el contador en línea 1 era 0
increment('llamado 3'); // el contador en línea 1 era 0
increment('llamado 4'); // el contador en línea 1 era 0