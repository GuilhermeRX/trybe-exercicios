import JustValidate from './node_modules/just-validate/dist/just-validate.es.js'

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




document.getElementById('data').DatePickerX.init({
  format: 'dd/mm/yyyy',
  singleMonthLabels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
  weekDayLabels: ['S', 'T', 'Q', 'Q', 'S', 'S', 'D'],
  mondayFirst: false,
  todayButtonLabel: 'Hoje',
  clearButtonLabel: 'Limpar'
});


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

function preventDefaultForm() {
  btnSubmit.addEventListener('click', function (event) {
    event.preventDefault()
  })
}


const validation = new JustValidate('form', {
  errorFielClass: 'is-invalid',
});


validation
  .addField('#name', [
    {
      rule: 'required',
      errorMessage: 'Campo obrigatório',
    },    
    {
      rule: 'minLength',
      value: 3,
      errorMessage: 'Nome precisa ter no mínimo 3 caracteres.',
    },
    {
      rule: 'maxLength',
      value: 40,
      errorMessage: 'O limite é de 40 caracteres.'
    },
  ])

  .addField('#email', [
    {
      rule: 'required',
      errorMessage: 'Campo obrigatório.',
    },
    {
      rule: 'email',
      errorMessage: 'Email inválido'
    },
    {
      rule: 'maxLength',
      value: 50,
      errorMessage: 'O limite é de 50 caracteres.'
    },
  ])

  .addField('#cpf', [
    {
      rule: 'required',
      errorMessage: 'Campo obrigatório',
    },
    {
      rule: 'minLength',
      value: 11,
      errorMessage: 'CPF inválido',
    },
    {
      rule: 'maxLength',
      value: 11,
      errorMessage: 'CPF inválido',
    },
  ])

  .addField('#endereco', [
    {
      rule: 'required',
      errorMessage: 'Campo obrigatório',
    },
    {
      rule: 'maxLength',
      value: 200,
      errorMessage: 'O limite é de 200 caracteres.'
    },
  ])

  .addField('#cidade', [
    {
      rule: 'required',
      errorMessage: 'Campo obrigatório',
    },
    {
      rule: 'maxLength',
      value: 28,
      errorMessage: 'O limite é de 28 caracteres.'
    },
  ])

  .addField('#estado', [
    {
      rule: 'required',
      errorMessage: 'Campo obrigatório',
    },
  ])

  .addRequiredGroup(
    '#radio-group',
    'Uma opção precisa ser selecionada'
  )
  
  .addField('#resumocv', [
    {
      rule: 'required',
      errorMessage: 'Campo obrigatório',
    },
    {
      rule: 'maxLength',
      value: 1000,
      errorMessage: 'O limite é de 1000 caracteres.'
    },
  ])

  .addField('#cargo', [
    {
      rule: 'required',
      errorMessage: 'Campo obrigatório',
    },
    {
      rule: 'maxLength',
      value: 40,
      errorMessage: 'O limite é de 40 caracteres.'
    },
  ])

  .addField('#descricaoCargo', [
    {
      rule: 'required',
      errorMessage: 'Campo obrigatório',
    },
    {
      rule: 'maxLength',
      value: 500,
      errorMessage: 'O limite é de 500 caracteres.',
    }
  ])

  .addField('#data', [
    {
      rule: 'required',
      errorMessage: 'Campo obrigatório',
    }
  ])

  .onSuccess((event) => {
    createCv()
  })


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




function limparFormulario() {
  btnLimpar.addEventListener('click', function (event) {
    gerateCv.innerHTML = ''
  })
}

limparFormulario()


