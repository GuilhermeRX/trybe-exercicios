import React from "react";

class InputCidade extends React.Component {
  render() {
    const { handleChange } = this.props
    const { value } = this.props
    return (
      <label htmlFor='input-cidade'> Cidade:
        <input id="input-cidade" type='text' name="cidade" onChange={handleChange} value={value}></input>
      </label>
    )
  }
}

export default InputCidade;