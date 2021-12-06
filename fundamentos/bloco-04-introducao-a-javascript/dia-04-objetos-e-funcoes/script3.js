let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim',
  };

  //console.log('Bem vinda,' + " " + info.personagem)

  //for (let key in info) {
  //    console.log(key)
  //}

 // for (let index in info) {
  //    console.log(info[index])
  //}

  let info2 = {
    personagem: 'Tio Patinhas',
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: "O último MacPatinhas",
    recorrente: 'Sim'
  };

  for (let index in info) {
      if (index === 'recorrente'){
          console.log('Ambos recorrentes')
      } else{
          console.log(info[index] + ' e ' + info2[index])
      }
  }
     

  