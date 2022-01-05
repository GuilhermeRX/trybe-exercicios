let estado = document.querySelector("#estado")
let data = document.querySelector('#data')
let btnSubmit = document.querySelector('#submit')
let inputName = document.querySelector('#name')
let inputEmail = document.querySelector('#email')
let inputCpf = document.querySelector('#cpf')
let inputEndereco = document.querySelector('#endereco')
let inputCidade = document.querySelector('#cidade')
let viewCurriculo = document.querySelector('#curriculo')
let tipoCasa = document.querySelector('#casa')
let tipoApart = document.querySelector('#apartamento')
let resumocv = document.querySelector('#resumocv')
let cargo = document.querySelector('#cargo')
let descricaoCargo = document.querySelector('#descricaoCargo')
let form = document.querySelector('#form')
let gerateCv = document.querySelector('#gerateCv')
let btnLimpar = document.querySelector('#btn-limpar')


let arrayDeEstados = ["Acre", "Alagoas", "Amapá", "Amazonas", "Bahia", "Ceará", "Espírito Santo", "Goiás", "Maranhão", "Mato Grosso", "Mato Grosso do Sul", "Minas Gerais", "Pará", "Paraíba", "Paraná", "Pernambuco", "Piauí", "Rio de Janeiro", "Rio Grande do Norte", "Rio Grande do Sul", "Rondônia", "Roraima", "Santa Catarina", "São Paulo", "Sergipe", "Tocantis"]


function createEstados() {
  for (let index of arrayDeEstados) {
    let criaEstado = document.createElement('option')
    criaEstado.innerHTML = index
    criaEstado.value = index

    estado.appendChild(criaEstado)
  }
}

createEstados()

function verifyDate() {

  btnSubmit.addEventListener('click', function (event) {

    let inputDate = data.value
    let formateDate = inputDate.split("/")

    let day = formateDate[0]
    let month = formateDate[1]
    let year = formateDate[2]

    if (data.value[2] == '/' & data.value[5] == '/') {
      console.log('Formato de Data Inserido Corretamente')

    } else {
      alert('Formato de Data Inválido')

    }

    if (day > 0 & day <= 31) {
      console.log('Dia OK')


    } else {
      alert('Dia Incorreto')

    }

    if (month > 0 & month <= 12) {
      console.log('Mês OK')

    } else {
      alert('Mês Incorreto')

    }

    if (year > 0) {
      console.log('Ano OK')


    } else {
      alert('Ano Incorreto')

    }
  });
}

verifyDate()


function preventDefaultForm() {
  btnSubmit.addEventListener('click', function (event) {
    event.preventDefault()
  })
}

preventDefaultForm()


function verifyDados() {

  btnSubmit.addEventListener('click', function (event) {
    let name = inputName.value
    let email = inputEmail.value
    let cpf = inputCpf.value
    let endereco = inputEndereco.value
    let cidade = inputCidade.value

    if (viewCurriculo.firstChild) {
      let child = viewCurriculo.firstChild
      child.remove()
    }

    if (name.length == 0 || email.length == 0 || cpf.length == 0 || endereco.length == 0 || cidade.length == 0 || estado.value == '') {
      let div = document.createElement('div')
      let tagP = document.createElement('p')
      tagP.id = 'msgError'
      tagP.innerText = 'Error ! Preencha Corretamento o Formulário'
      div.appendChild(tagP)

      viewCurriculo.appendChild(div)
    }

    if (tipoCasa.checked == false && tipoApart.checked == false) {
      let div = document.createElement('div')
      let tagP = document.createElement('p')
      tagP.id = 'msgError'
      tagP.innerText = 'Error ! Preencha Corretamento o Formulário'
      div.appendChild(tagP)

      viewCurriculo.appendChild(div)
    }

    if (resumocv.value == '' || cargo.value == '' || descricaoCargo.value == '') {
      let div = document.createElement('div')
      let tagP = document.createElement('p')
      tagP.id = 'msgError'
      tagP.innerText = 'Error ! Preencha Corretamento o Formulário'
      div.appendChild(tagP)

      viewCurriculo.appendChild(div)
    }
  })
}

verifyDados()


function createCv() {
  btnSubmit.addEventListener('click', function () {
    gerateCv.innerHTML = ''
    if (viewCurriculo.firstChild == null) {
      console.log('Dados OK')

      // Criando Tag P para os Dados Pessoais
      let createDiv = document.createElement('div')
      let createName = document.createElement('p')
      let createEmail = document.createElement('p')
      let createCpf = document.createElement('p')
      let createEndereco = document.createElement('p')
      let createCidade = document.createElement('p')
      let createEstado = document.createElement('p')

      // Criando Tag P para Dados do Ultimo Emprego
      let createResumo = document.createElement('p')
      let createCargo = document.createElement('p')
      let createDescricao = document.createElement('p')
      let createDataInicio = document.createElement('p')


      // Atribuindo o input.value para cada Tag P criada | Dados Pessoais
      createName.innerText = inputName.value
      createEmail.innerText = inputEmail.value
      createCpf.innerText = inputCpf.value
      createEndereco.innerText = inputEndereco.value
      createCidade.innerText = inputCidade.value
      createEstado.innerText = estado.value

      // Atribuindo o input.value para cada Tag P criada | Dados do Ultimo Emprego
      createResumo.innerText = resumocv.value
      createCargo.innerText = cargo.value
      createDescricao.innerText = descricaoCargo.value
      createDataInicio.innerText = data.value

      // Alocando cada tag P como filhos de uma Div(createDiv) - Dados Pessoais
      createDiv.appendChild(createName)
      createDiv.appendChild(createEmail)
      createDiv.appendChild(createCpf)
      createDiv.appendChild(createEndereco)
      createDiv.appendChild(createCidade)
      createDiv.appendChild(createEstado)

      if (tipoCasa.checked == true) {
        let createTipo = document.createElement('p')
        createTipo.innerText = 'Casa'
        createDiv.appendChild(createTipo)

      } else if (tipoApart.checked == true) {
        let createTipo = document.createElement('p')
        createTipo.innerText = 'Apartamento'
        createDiv.appendChild(createTipo)
      }

      // Alocando cada tag P como filhos de uma Div(createDiv) - Dados do Ultimo Emprego
      createDiv.appendChild(createResumo)
      createDiv.appendChild(createCargo)
      createDiv.appendChild(createDescricao)
      createDiv.appendChild(createDataInicio)


      // Alocando a Div(createDiv) como filha da Div(gerateCv)
      gerateCv.appendChild(createDiv)
    }
  })
}

createCv()


function limparFormulario() {
  btnLimpar.addEventListener('click', function (event) {
    gerateCv.innerHTML = ''
  })
}

limparFormulario()