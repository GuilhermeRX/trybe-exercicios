import React from "react";

class InputEndereco extends React.Component {
  render() {
    const { handleChange } = this.props
    const { value } = this.props
    return (
      <label htmlFor='input-endereco'> Endereço:
        <input id="input-endereco" type='text' name="endereco" onChange={handleChange} value={value} ></input>
      </label>
    )
  }
}

export default InputEndereco;