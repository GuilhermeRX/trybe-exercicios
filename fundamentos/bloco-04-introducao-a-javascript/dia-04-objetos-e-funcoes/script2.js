let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge' 
  };

  for (let key in names) {
    console.log('Ola ' + names[key])
  }

  let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
  };

  for (let key in car) {
      console.log(key, car[key])
  }