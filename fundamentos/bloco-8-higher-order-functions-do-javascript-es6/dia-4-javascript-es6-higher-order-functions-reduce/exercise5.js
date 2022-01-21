const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

 function containsA() {
  // escreva seu código aqui
  return names.reduce((acc, name) => {
    return acc + name.split('')
    
  })
}

console.log(containsA())