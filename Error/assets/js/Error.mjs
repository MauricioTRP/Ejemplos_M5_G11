class CustomError extends Error {
  constructor(message, status = '') {
    super(message),
    this.name = 'Custom Error',
    this.status = status
  }
}

export { CustomError }