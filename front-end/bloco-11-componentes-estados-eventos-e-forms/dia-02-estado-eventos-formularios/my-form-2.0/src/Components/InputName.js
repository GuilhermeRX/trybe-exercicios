import React from "react";

class InputName extends React.Component {
  render() {
    const { handleChange } = this.props
    const { value } = this.props
    return (
      <label htmlFor='input-name'> Nome:
        <input id="input-name" type='text' name="name" onChange={handleChange} value={value}></input>
      </label>
    )
  }
}

export default InputName;