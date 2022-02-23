import React from "react";

class Cargo extends React.Component {
  render() {
    const { handleChange } = this.props
    const { value } = this.props
    return (
      <label htmlFor='textarea-cargo'> Cargo:
        <textarea id="textarea-cargo" name="cargo" onChange={handleChange} value={value}></textarea>
      </label>
    )
  }
}

export default Cargo;