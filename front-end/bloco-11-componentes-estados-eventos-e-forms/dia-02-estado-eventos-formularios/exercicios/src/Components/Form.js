import React from "react";
import InputName from "./InputName";
import Select from "./Select";

class Form extends React.Component {
  constructor() {
    super()

    this.state = {
      selectState: '',
      nameState: '',
      emailState: '',
      areaState: '',
      checkboxState: 'false'
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange({ target }) {
    const { name } = target
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    })
  }

  render() {
    return (
      <div>
        <h1>First Forms on React Maluco e #VQV</h1>
        <form>
          <fieldset>
            <label for='select'> Estado Mental:
              <Select id='select' handleChange={this.handleChange} value={this.state.selectState} />
            </label>

            <label for='name'> Nome:
              <InputName id='name' handleChange={this.handleChange} value={this.state.nameState} />
            </label>

            <label for='emailState'> Email:
              <input  id='email' type='email' name="emailState" value={this.state.emailState} onChange={this.handleChange}></input>
            </label>

            <label for='areaState'> Descreva:
              <textarea name="areaState" value={this.state.areaState} onChange={this.handleChange}></textarea>
            </label>

            <label for='check'> Aceita os termos ?
              <input id="check" type='checkbox' name="checkboxState" value={this.state.checkboxState} onChange={this.handleChange} ></input>
            </label>

            <label>
              <input type="file" />
            </label>
          </fieldset>

        </form>
      </div>
    )
  }
}

export default Form