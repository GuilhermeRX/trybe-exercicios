import React from 'react';
import './App.css';
import Curriculo from './Components/Curriculo';
import Form from './Components/Form';

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      data: []
    }
  }

  handleData = (state) => {
    this.setState({
      data: state
    })
  }

  render() {
    
    return (
      <div>
        <Form getData={this.handleData}/>
        <Curriculo data={this.state.data}/>
      </div>
    );
  }
}

export default App;
