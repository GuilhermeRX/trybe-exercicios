import React from "react";

class InputEstado extends React.Component {
  render() {
    const { handleChange } = this.props
    const { value } = this.props
    return (
      <label htmlFor='input-estado'> Estado:
        <input id="input-estado" type='text' name="estado" onChange={handleChange} value={value}></input>
      </label>
    )
  }
}

export default InputEstado;