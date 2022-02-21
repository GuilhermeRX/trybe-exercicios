import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      btnClickOne: 0,
    }
    this.handleClick1 = this.handleClick1.bind(this);
  }

  handleClick1 = (e) => {
    /* Passando uma callback à função setState, que recebe de parâmetros
    o estado anterior e as props do componente, você garante que as atualizações
    do estado acontecerão uma depois da outra! */
    this.setState((prevState) => ({
      btnClickOne: prevState.btnClickOne + 1
    }))
    
  }

  getButtonColor(num) {
    // Essa função contém um ternário que realiza a lógica para mudarmos
    // a cor do botão para verde quando for um número par
    return num % 2 === 0 ? 'green' : 'white';
  }

  render() {

    return (<div>
      <button className="teste" onClick={this.handleClick1}
      style={{ backgroundColor: this.getButtonColor(this.state.btnClickOne) }}
      >{this.state.btnClickOne}</button>
    </div>
    )
  }
}

export default App;