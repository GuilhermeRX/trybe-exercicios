const student1 = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkills: 'Ótimo',
};

const student2 = {
  Html: 'Bom',
  Css: 'Ótimo',
  JavaScript: 'Ruim',
  SoftSkills: 'Ótimo',
  Git: 'Bom', // chave adicionada
}

const listskills = (student) => {
  let keys = Object.keys(student)
  let values = Object.values(student)

  for(const index in keys){
    console.log(`${keys[index]}, Nível: ${values[index]}`)
  }

}


listskills(student2)