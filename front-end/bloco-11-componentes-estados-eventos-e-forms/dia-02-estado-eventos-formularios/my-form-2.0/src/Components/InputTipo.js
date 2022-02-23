import React from "react";

class InputTipo extends React.Component {
  render() {
    const { handleChange } = this.props
    const { state } = this.props

    return (
      <div>
        <label htmlFor='input-tipo'> Casa:
          <input id="input-tipo1" type='radio' name="tipo" value='casa' onChange={handleChange} checked={state.casaState}></input>
        </label>

        <label htmlFor='input-tipo'> Apartamento:
          <input id="input-tipo2" type='radio' name="tipo" value='apartamento' onChange={handleChange} checked={state.apartState}></input>
        </label>
      </div>
    )
  }
}

export default InputTipo;