
const verifyNumber = (number1, number2) => {
  if(isNaN(number1) || isNaN(number2) ) {
    throw new Error('Por favor insira apenas números!')
  }

  if(number2 === 0 || number1 === 0) {
    throw new Error('Não é possível dividir por 0.')
  }
}

const division = (number1, number2) => {
  verifyNumber(number1,number2)
  
  return number1 / number2
} 



const compareArray = (a, arr2) => {
  const arr = [1, 2 ,3];
  const obj = { a: 1, b: 2, c: 3};
}


module.exports = division;