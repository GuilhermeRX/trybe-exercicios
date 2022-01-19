const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:

function authorBornIn1947() {
  // escreva aqui o seu código
 return books.find((element) => element.author.birthYear === 1947).author.name

}

function smallerName() {
  let nameBook;
  // escreva aqui o seu código

  books.forEach((element) => {
    if(!nameBook || element.name.length < nameBook.length) {
      nameBook = element.name
    }
  })
  // Variável nameBook que receberá o valor do menor nome;
  return nameBook;
}


const expectedResult = {
  author: {
    birthYear: 1948,
    name: 'George R. R. Martin',
  },
  genre: 'Fantasia',
  id: 1,
  name: 'As Crônicas de Gelo e Fogo',
  releaseYear: 1991,
};

function getNamedBook() {
  // escreva seu código aqui
  return books.find((item) => item.name.length === 26)
}

function booksOrderedByReleaseYearDesc() {
  // escreva aqui seu código
  return books.sort((bookA,bookB) => bookB.releaseYear - bookA.releaseYear);
}

//const expectedResult = false;

function everyoneWasBornOnSecXX() {
  // escreva seu código aqui
  return books.every((item) => item.author.birthYear >= 1901 && item.author.birthYear <= 2000)
}

function someBookWasReleaseOnThe80s() {
  // escreva seu código aqui
  return books.some((item) => item.releaseYear >= 1980 && item.releaseYear <= 1989)
}


//const expectedResult = false;

function authorUnique() {
  // escreva seu código aqui
  const expectedResult = false;

function authorUnique() {
  return books.every((book) =>
    !books.some((bookSome) =>
      (bookSome.author.birthYear === book.author.birthYear)
      && (bookSome.author.name !== book.author.name)));
}
}