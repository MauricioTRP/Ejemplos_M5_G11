import { CustomError } from "./Error.mjs"

const monthByNumber = (mes) => {
  const meses = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic']
  

  if(meses[mes -1 ] != null) {
    return meses[mes - 1]
  } else {
    throw new CustomError('Numero de mes no válido')
  }
}

let init = () => {
  const numMes = prompt('Ingrese número mes')

  try {
    const mes = monthByNumber(numMes)
    console.log("El mes solicitado es: " + mes)
  } catch (exception) {
    console.log(exception.name, exception.message)
    console.log('Status: ', exception.status)
    console.log('Stack: ', exception.stack)
    console.group(exception.stack)
  }
}

init()