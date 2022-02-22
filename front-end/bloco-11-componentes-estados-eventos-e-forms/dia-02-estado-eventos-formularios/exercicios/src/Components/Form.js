import React from "react";

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
            <select name="selectState" value={this.state.selectState} onChange={this.handleChange}>
              <option value=''></option>
              <option value='Maluco'>Sou Maluco</option>
              <option value='Doido'>Mais Doido que o trem</option>
              <option value='Surtado'>Surtado</option>
            </select>

            <input type='text' name="nameState" value={this.state.nameState} onChange={this.handleChange}></input>
          </fieldset>


          <fieldset>
            <input type='email' name="emailState" value={this.state.emailState} onChange={this.handleChange}></input>

            <input type='textarea' name="areaState" value={this.state.areaState} onChange={this.handleChange}></input>

            <input type='checkbox' name="checkboxState" value={this.state.checkboxState} onChange={this.handleChange} ></input> Marcado

            <input type="file" />
          </fieldset>
          
        </form>
      </div>

    )
  }
}

export default Form