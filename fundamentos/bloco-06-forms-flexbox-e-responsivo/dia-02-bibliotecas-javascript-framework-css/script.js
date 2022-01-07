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

const validation = new JustValidate(
  '#form',
  {
    errorFieldCssClass: 'is-invalid',
    errorFieldStyle: {
      border: '1px solid red',
    },
    errorLabelCssClass: 'is-label-invalid',
    errorLabelStyle: {
      color: 'red',
      textDecoration: 'underlined',
    },
    focusInvalidField: true,
    lockForm: true,
    tooltip: {
      position: 'top',
    },
  },
  [
    {
      key: 'Name is too short',
      dict: {
        ru: 'Имя слишком короткое',
        es: 'El nombre es muy corto',
      },
    },
    {
      key: 'Field is required',
      dict: {
        ru: 'Обязательное поле',
        es: 'Se requiere campo',
      },
    },
  ]
);

  validation
  .addField('#name', [
    {
      rule: 'minLength',
      value: 3,
    },
    {
      rule: 'maxLength',
      value: 30,
    },
  ])

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

preventDefaultForm()



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


