const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};


const addTurno = (obj, key, value) => {
  obj[key] = value
}

addTurno(lesson2, 'turno', 'noite')

//console.log(lesson2)

const listKeys = (obj) => Object.keys(obj);

//console.log(listKeys(lesson1))

const checkLength = (obj) => Object.keys(obj).length

//console.log(checkLength(lesson3))

const listValue = (obj) => Object.values(obj)

//console.log(listValue(lesson3))


const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 })


//console.log(allLessons)

const somaEstudantes = (obj) => {

  let valueobj1 = Object.values(obj.lesson1)[1]
  let valueobj2 = Object.values(obj.lesson2)[1]
  let valueobj3 = Object.values(obj.lesson3)[1]

  return ` O número total de estudantes é de ${valueobj1 + valueobj2 + valueobj3}`
}

//console.log(somaEstudantes(allLessons))




const valueKey = (obj, position) => Object.values(obj)[position];


//console.log(valueKey(lesson1,0))


const verifyPair = (obj, key, value) => {
  if (obj[key] == value) {
    return true
  } else {
    return false
  }
}

console.log(verifyPair(lesson3, 'materia', 'Maria Clara'))

