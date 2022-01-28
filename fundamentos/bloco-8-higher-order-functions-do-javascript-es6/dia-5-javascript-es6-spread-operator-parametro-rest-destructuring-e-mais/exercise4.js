const people = [
  {
    name: 'Nicole',
    bornIn: 1992,
    nationality: 'Australian',
  },
  {
    name: 'Harry',
    bornIn: 2008,
    nationality: 'Australian',
  },
  {
    name: 'Toby',
    bornIn: 1901,
    nationality: 'Australian',
  },
  {
    name: 'Frida',
    bornIn: 1960,
    nationality: 'Dannish',
  },
  {
    name: 'Fernando',
    bornIn: 2001,
    nationality: 'Brazilian',
  },
];

// escreva filterPeople abaixo

const filterPeople = (arr) => arr.filter(({nationality, bornIn}) => {
  return nationality === 'Australian' && bornIn >= 1901 && bornIn <= 2000;
})



const myList = [1, 2, 3];

// escreva swap abaixo

const swap = ([a,b,c]) => [c, b, a] 



const palio = ['Palio', 'Fiat', 2019];
const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
const chiron = ['Chiron', 'Bugatti', 2016];

// escreva toObject abaixo

const toObject = ([name, brand, year]) => ({ name, brand, year });


console.log(toObject(chiron))