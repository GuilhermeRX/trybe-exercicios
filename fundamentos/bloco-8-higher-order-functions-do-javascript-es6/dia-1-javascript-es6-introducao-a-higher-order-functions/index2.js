
const verify = (myNumber, number) => myNumber === number;

const sorteio = (myNumber, callback) => {
  const number = Math.floor((Math.random() * 5) + 1);
  

  return callback(myNumber, number) ? 'Lucky day, you won!' : 'Try Again!';
}

console.log(sorteio(2, verify));