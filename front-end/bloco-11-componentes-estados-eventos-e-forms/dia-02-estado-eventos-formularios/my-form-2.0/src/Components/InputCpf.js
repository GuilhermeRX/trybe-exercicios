import React from "react";

class InputCpf extends React.Component {
  render() {
    const { handleChange } = this.props
    const { value } = this.props
    return (
      <label htmlFor='input-cpf'> CPF:
        <input id="input-cpf" type='text' name="cpf" onChange={handleChange} value={value}></input>
      </label>
    )
  }
}

export default InputCpf;