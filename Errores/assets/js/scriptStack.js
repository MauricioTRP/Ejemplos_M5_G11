function traza () {
  try {
    throw new Error('Error personalizado')
  } catch (error) {
    console.error(error.stack)
  }
}

function b() {
  traza()
}

function a() {
  b(1, 'texto', undefined, {})
}

a()