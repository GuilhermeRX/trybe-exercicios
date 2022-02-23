import React from "react";

class InputEmail extends React.Component {
  render() {
    const { handleChange } = this.props
    const { value } = this.props
    return (
      <label htmlFor='input-email'> Email:
        <input id="input-email" type='text' name="email" onChange={handleChange} value={value}></input>
      </label>
    )
  }
}

export default InputEmail;