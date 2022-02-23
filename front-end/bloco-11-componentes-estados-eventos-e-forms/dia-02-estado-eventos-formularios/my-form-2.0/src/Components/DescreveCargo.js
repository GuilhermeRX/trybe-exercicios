import React from "react";

class DescreveCargo extends React.Component {
  render() {
    const { handleChange } = this.props
    const { value } = this.props
    return (
      <label htmlFor='input-desCargo'> Descrição do Cargo:
        <input id="input-desCargo" type='text' name="desCargo" onChange={handleChange} value={value}></input>
      </label>
    )
  }
}

export default DescreveCargo;