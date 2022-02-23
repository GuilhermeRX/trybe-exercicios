import React from "react";
import BtnEnviar from "./BtnEnviar";
import BtnLimpar from "./BtnLimpar";
import Cargo from "./Cargo";
import DescreveCargo from "./DescreveCargo";
import InputCidade from "./InputCidade";
import InputCpf from "./InputCpf";
import InputEmail from "./inputEmail";
import InputEndereco from "./InputEndereco";
import InputEstado from "./InputEstado";
import InputName from "./InputName";
import InputTipo from "./InputTipo";
import ResumoCV from "./ResumoCV";

class Form extends React.Component {
  constructor() {
    super()

    this.state = {
      name: '',
      email: '',
      cpf: '',
      endereco: '',
      cidade: '',
      estado: '',
      tipo: '',
      resumocv: '',
      cargo: '',
      desCargo: '',
      casaState: '',
      apartState: '',
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleClear = this.handleClear.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  

  handleChange({target}) {
    const {name, value} = target
    
    if (target.value === 'casa') {
      this.setState({
        casaState: target.checked,
        apartState: ''
      })
    }

    if (target.value === 'apartamento') {
      this.setState({
        apartState: target.checked,
        casaState: ''
      })
    }

    this.setState({
      [name]: value
    })

   
  }

  handleSubmit(event) {
    event.preventDefault()
  
    const { getData } = this.props;
    getData(this.state);
  }

  handleClear () {
    this.setState({
      name: '',
      email: '',
      cpf: '',
      endereco: '',
      cidade: '',
      estado: '',
      tipo: '',
      resumocv: '',
      cargo: '',
      desCargo: '',
      casaState: '',
      apartState: '',
    })

    

  }


  render() {

    return (
      <form onSubmit={this.handleSubmit}>
        <fieldset>
          <legend>Informações Pessoais</legend>
          <InputName handleChange={this.handleChange} value={this.state.name}/>
          <InputEmail handleChange={this.handleChange} value={this.state.email}/>
          <InputCpf handleChange={this.handleChange} value={this.state.cpf}/>
          <InputEndereco handleChange={this.handleChange} value={this.state.endereco}/>
          <InputCidade handleChange={this.handleChange} value={this.state.cidade}/>
          <InputEstado handleChange={this.handleChange} value={this.state.estado}/>
          <InputTipo handleChange={this.handleChange} value={this.state.casa} state={this.state}/>
        </fieldset>

        <fieldset>
          <legend>Dados do Último Emprego</legend>
          <ResumoCV handleChange={this.handleChange} value={this.state.resumocv}/>
          <Cargo handleChange={this.handleChange} value={this.state.cargo}/>
          <DescreveCargo handleChange={this.handleChange} value={this.state.desCargo}/>
        </fieldset>

        <BtnEnviar />
        <BtnLimpar handleClear={this.handleClear} />
      </form>
    )
  }
}

export default Form;